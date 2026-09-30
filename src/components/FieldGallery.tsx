import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { MovementLines, TechCornerMarks, DoubleCheckIcon } from './BrandGraphics';

interface GalleryTopic {
  id: string;
  category: string;
  badge: string;
  title: string;
  desc: string;
  photos: {
    url: string;
    caption: string;
  }[];
}

const topicsData: GalleryTopic[] = [
  {
    id: 'concreto',
    category: 'Linha Concreto',
    badge: 'Medição de Concreto Usinado',
    title: 'Varredura Laser na Calha',
    desc: 'Sistema de varredura contínua a laser instalado sobre a calha da betoneira. Monitora em alta velocidade o perfil e o fluxo volumétrico do concreto fresco descarregado na obra, permitindo conferência independente em tempo real sem interrupções e sem modificações mecânicas no caminhão.',
    photos: [
      {
        url: '/images/concrete-scanner-laser.jpg',
        caption: 'Varredura a laser e captação óptica contínua na calha de descarga da betoneira.'
      },
      {
        url: '/images/concrete-truck-overview.jpg',
        caption: 'Integração por suporte articulado no caminhão betoneira preservando a estrutura original.'
      }
    ]
  },
  {
    id: 'combustivel',
    category: 'Linha Combustível',
    badge: 'Medição de Combustível',
    title: 'Dispositivo Clamp Ultrassônico na Mangueira & Conferência no Posto',
    desc: 'Dispositivo portátil clamp-on acoplado externamente à mangueira de abastecimento que trabalha em conjunto com a conferência em tempo real no posto de combustível. Permite ao comprador auditar a litragem exata que entra no tanque diretamente no visor do equipamento, sem furos e sem interferir no desarme automático da bomba.',
    photos: [
      {
        url: '/images/fuel-clamp-hose.jpg',
        caption: 'Dispositivo clamp ultrassônico acoplado à mangueira padrão NBR 15234 exibindo o volume medido em Litros.'
      },
      {
        url: '/images/fuel-station-attendant.jpg',
        caption: 'Conferência independente em tempo real realizada no posto durante o abastecimento do veículo.'
      },
      {
        url: '/images/fuel-clamp-closeup.jpg',
        caption: 'Detalhe construtivo dos sensores ultrassônicos de alta precisão com manopla ergonômica de engate rápido.'
      }
    ]
  }
];

export const FieldGallery: React.FC = () => {
  // Índices de fotos selecionadas para cada card (estado independente)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<{ [key: string]: number }>({
    concreto: 0,
    combustivel: 0
  });

  // Estado do lightbox: tópico ativo e índice da foto
  const [lightboxState, setLightboxState] = useState<{ topicId: string; photoIdx: number } | null>(null);

  const handleSelectPhoto = (topicId: string, photoIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => ({ ...prev, [topicId]: photoIdx }));
  };

  const handleOpenLightbox = (topicId: string, photoIdx: number) => {
    setLightboxState({ topicId, photoIdx });
  };

  const activeLightboxTopic = lightboxState 
    ? topicsData.find((t) => t.id === lightboxState.topicId) 
    : null;

  const currentLightboxPhoto = activeLightboxTopic 
    ? activeLightboxTopic.photos[lightboxState!.photoIdx] 
    : null;

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightboxTopic || !lightboxState) return;
    const nextIdx = (lightboxState.photoIdx + 1) % activeLightboxTopic.photos.length;
    setLightboxState({ topicId: lightboxState.topicId, photoIdx: nextIdx });
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightboxTopic || !lightboxState) return;
    const prevIdx = (lightboxState.photoIdx - 1 + activeLightboxTopic.photos.length) % activeLightboxTopic.photos.length;
    setLightboxState({ topicId: lightboxState.topicId, photoIdx: prevIdx });
  };

  return (
    <section id="aplicacoes" className="gallery-section">
      <div className="section-container">
        
        {/* Header com Elementos Gráficos */}
        <div className="section-header-center">
          <div className="brand-badge-tag-wrap center">
            <MovementLines height={20} />
            <span className="section-tag-sorion">EQUIPAMENTOS EM CAMPO</span>
          </div>
          <h2 className="section-title-sorion">Aplicações em Operação Real</h2>
          <p className="section-subtitle-sorion">
            Confira em detalhes a atuação prática das nossas duas tecnologias de contramedição independente no canteiro de obras e no posto de abastecimento.
          </p>
        </div>

        {/* Grid com os 2 Tópicos Solicitados */}
        <div className="gallery-duo-grid">
          {topicsData.map((topic) => {
            const currentIdx = selectedPhotoIndex[topic.id] || 0;
            const currentPhoto = topic.photos[currentIdx];

            return (
              <div 
                key={topic.id} 
                className="gallery-topic-card"
                onClick={() => handleOpenLightbox(topic.id, currentIdx)}
              >
                <TechCornerMarks />

                {/* Moldura da Foto Principal */}
                <div className="gallery-photo-main-frame">
                  <img 
                    src={currentPhoto.url} 
                    alt={topic.title} 
                    className="gallery-photo-img" 
                  />

                  {/* Badges sobre a foto */}
                  <div className="gallery-badges-overlay">
                    <span className="gallery-cat-badge">
                      <DoubleCheckIcon size={14} />
                      {topic.badge}
                    </span>

                    <span className="gallery-count-badge">
                      <Images size={14} />
                      <span>{currentIdx + 1} de {topic.photos.length} fotos</span>
                    </span>
                  </div>

                  <div className="gallery-zoom-badge">
                    <Eye size={15} />
                    <span>Ver em Tela Cheia</span>
                  </div>
                </div>

                {/* Faixa de Miniaturas para alternar fotos */}
                <div className="gallery-thumbnails-strip" onClick={(e) => e.stopPropagation()}>
                  {topic.photos.map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      className={`thumb-btn ${pIdx === currentIdx ? 'active' : ''}`}
                      onClick={(e) => handleSelectPhoto(topic.id, pIdx, e)}
                      aria-label={`Ver foto ${pIdx + 1} de ${topic.title}`}
                    >
                      <img src={photo.url} alt={`Miniatura ${pIdx + 1}`} />
                    </button>
                  ))}
                  <span className="thumb-legend">
                    {currentPhoto.caption}
                  </span>
                </div>

                {/* Conteúdo Textual do Tópico */}
                <div className="gallery-card-info">
                  <span className="gallery-tag-sub">{topic.category}</span>
                  <h3 className="gallery-topic-title">{topic.title}</h3>
                  <p className="gallery-topic-desc">{topic.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal com navegação entre fotos do tópico */}
      {lightboxState !== null && activeLightboxTopic && currentLightboxPhoto && (
        <div className="lightbox-backdrop" onClick={() => setLightboxState(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setLightboxState(null)}
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="lightbox-img-box">
              <img 
                src={currentLightboxPhoto.url} 
                alt={activeLightboxTopic.title} 
                className="lightbox-img" 
              />

              {activeLightboxTopic.photos.length > 1 && (
                <>
                  <button 
                    className="lightbox-nav-btn prev" 
                    onClick={handleLightboxPrev}
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="lightbox-nav-btn next" 
                    onClick={handleLightboxNext}
                    aria-label="Próxima foto"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="lightbox-caption">
              <div className="lightbox-meta">
                <span className="lightbox-tag">{activeLightboxTopic.badge}</span>
                <span className="lightbox-counter">
                  Foto {lightboxState.photoIdx + 1} de {activeLightboxTopic.photos.length}
                </span>
              </div>
              <h3>{activeLightboxTopic.title}</h3>
              <p>{currentLightboxPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
