import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCw, RefreshCw, Box } from 'lucide-react';

interface Fuel3DViewerProps {
  className?: string;
  height?: string | number;
  autoRotateSpeed?: number;
  showControls?: boolean;
}

export const Fuel3DViewer: React.FC<Fuel3DViewerProps> = ({
  className = '',
  height = '100%',
  autoRotateSpeed = 1.2,
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const controlsRef = useRef<OrbitControls | null>(null);
  const resetCameraRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 300;
    const heightPx = container.clientHeight || 250;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // transparent to blend with dark card / modal

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    const initialCamPos = new THREE.Vector3(3.2, 2.0, 3.8);
    camera.position.copy(initialCamPos);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.replaceChildren(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = autoRotateSpeed;
    controls.minDistance = 1.5;
    controls.maxDistance = 8.0;
    controls.maxPolarAngle = Math.PI / 1.75; // prevent viewing directly from underneath
    controlsRef.current = controls;

    // 5. DRAMATIC LIGHTING SETUP
    // Ambient light - deep tech navy tone
    const ambientLight = new THREE.AmbientLight(0x0c1527, 1.2);
    scene.add(ambientLight);

    // Key Light: intense surgical clean top-front light
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Dramatic Rim / Backlight 1: Electric Cyan/Blue rim light from rear-right
    const rimLightBlue = new THREE.SpotLight(0x00e5ff, 5.0, 15, Math.PI / 3, 0.8, 1);
    rimLightBlue.position.set(-4, 4, -4);
    rimLightBlue.lookAt(0, 0, 0);
    scene.add(rimLightBlue);

    // Dramatic Rim / Accent Light 2: High-contrast warm amber/gold edge light
    const rimLightAmber = new THREE.SpotLight(0xff9100, 3.8, 15, Math.PI / 3, 0.8, 1);
    rimLightAmber.position.set(4, -1, -3);
    rimLightAmber.lookAt(0, 0, 0);
    scene.add(rimLightAmber);

    // Fill Light: Soft azure ground reflection
    const groundFillLight = new THREE.DirectionalLight(0x1e3a8a, 1.5);
    groundFillLight.position.set(0, -4, 2);
    scene.add(groundFillLight);

    // 6. Subtle glowing base pedestal / shadow ring
    const groundGeo = new THREE.RingGeometry(0.8, 2.2, 48);
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -1.2;
    scene.add(groundMesh);

    // Outer faint pulse circle
    const outerRingGeo = new THREE.RingGeometry(2.25, 2.3, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRingMesh.rotation.x = -Math.PI / 2;
    outerRingMesh.position.y = -1.2;
    scene.add(outerRingMesh);

    // 7. Load GLTF Model
    const loader = new GLTFLoader();
    let modelGroup: THREE.Group | null = null;
    const modelUrl = '/models/fuel-clamp.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        modelGroup = gltf.scene;

        // Auto-center and normalize size
        const box = new THREE.Box3().setFromObject(modelGroup);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.4 / (maxDim || 1);

        modelGroup.position.x = -center.x * scale;
        modelGroup.position.y = -center.y * scale;
        modelGroup.position.z = -center.z * scale;
        modelGroup.scale.set(scale, scale, scale);

        // Enhance materials for dramatic reflections
        modelGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (mesh.material) {
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  mat.roughness = Math.max(0.2, mat.roughness * 0.85); // enhance specular highlight
                  mat.metalness = Math.min(1.0, mat.metalness * 1.1);
                  mat.envMapIntensity = 1.4;
                  mat.needsUpdate = true;
                }
              });
            }
          }
        });

        // Add to pivot group for clean rotation
        const pivot = new THREE.Group();
        pivot.add(modelGroup);
        // Tilt slightly towards camera for an iconic hero angle
        pivot.rotation.y = 0.4;
        pivot.rotation.x = 0.1;
        scene.add(pivot);

        // Adjust ground mesh position relative to loaded model
        const scaledBox = new THREE.Box3().setFromObject(pivot);
        groundMesh.position.y = scaledBox.min.y - 0.08;
        outerRingMesh.position.y = scaledBox.min.y - 0.08;

        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const progress = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadProgress(progress);
        }
      },
      (error) => {
        console.error('Erro ao carregar modelo GLB:', error);
        setLoading(false);
      }
    );

    // Reset camera helper
    resetCameraRef.current = () => {
      camera.position.copy(initialCamPos);
      controls.target.set(0, 0, 0);
      controls.update();
    };

    // User interaction detection
    const handleStart = () => {
      setHasInteracted(true);
    };
    controls.addEventListener('start', handleStart);

    // 8. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // 9. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // subtle pulse to ground pedestal ring
      const time = clock.getElapsedTime();
      groundMat.opacity = 0.10 + Math.sin(time * 2.0) * 0.04;
      outerRingMat.opacity = 0.20 + Math.cos(time * 1.5) * 0.08;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      controls.removeEventListener('start', handleStart);
      controls.dispose();

      // Dispose Three.js objects
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material?.dispose();
          }
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [autoRotateSpeed]);

  const handleToggleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (controlsRef.current) {
      const next = !controlsRef.current.autoRotate;
      controlsRef.current.autoRotate = next;
      setIsAutoRotating(next);
    }
  };

  const handleResetCamera = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (resetCameraRef.current) {
      resetCameraRef.current();
    }
  };

  return (
    <div
      className={`fuel-3d-viewer-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(16, 28, 54, 0.7) 0%, rgba(5, 9, 16, 0.95) 75%, #03060a 100%)',
        cursor: 'grab',
      }}
    >
      {/* 3D Canvas Mount */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* Loading Overlay */}
      {loading && (
        <div className="fuel-3d-loading-overlay">
          <div className="fuel-3d-spinner">
            <div className="fuel-3d-pulse-circle"></div>
            <Box size={28} className="fuel-3d-spinner-icon" />
          </div>
          <span className="fuel-3d-loading-text">
            Carregando Modelo 3D {loadProgress > 0 ? `${loadProgress}%` : ''}
          </span>
          <span className="fuel-3d-loading-sub">Clamp Ultrassônico FUEL</span>
        </div>
      )}

      {/* 3D Interactive Badge (Top Left) */}
      <div className="fuel-3d-badge-tag">
        <span className="fuel-3d-badge-dot"></span>
        <span>3D Interativo • 360°</span>
      </div>

      {/* Drag hint overlay (disappears on first interaction) */}
      {!loading && !hasInteracted && (
        <div className="fuel-3d-hint-pill">
          <span>Arraste para girar • Scroll para zoom</span>
        </div>
      )}

      {/* Floating Control Toolbar (Bottom Right) */}
      {showControls && !loading && (
        <div className="fuel-3d-controls-bar">
          <button
            type="button"
            className={`fuel-3d-btn ${isAutoRotating ? 'active' : ''}`}
            onClick={handleToggleRotate}
            title={isAutoRotating ? 'Pausar rotação' : 'Girar automaticamente'}
            aria-label="Alternar rotação"
          >
            <RotateCw size={14} className={isAutoRotating ? 'spin-slow' : ''} />
            <span className="fuel-3d-btn-label">{isAutoRotating ? 'Giro Ativo' : 'Giro Pausado'}</span>
          </button>

          <button
            type="button"
            className="fuel-3d-btn"
            onClick={handleResetCamera}
            title="Resetar posição da câmera"
            aria-label="Resetar câmera"
          >
            <RefreshCw size={14} />
          </button>
        </div>
      )}
    </div>
  );
};
