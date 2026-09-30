import React, { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { MovementLines, TechCornerMarks } from './BrandGraphics';
import { Fuel3DViewer } from './Fuel3DViewer';

interface Product {
  id: string;
  name: string;
  category: 'concreto' | 'combustivel';
  tag: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: { label: string; value: string }[];
  applications: string[];
}

const products: Product[] = [
  {
    id: 'dc-concrete-laser',
    name: 'Double Check Concreto',
    category: 'concreto',
    tag: 'Medição a Laser em Calha',
    shortDesc: 'Dispositivo móvel portátil adaptável à calha da betoneira. Sensores a laser e captação de imagens em alta velocidade para aferição volumétrica contínua na descarga.',
    fullDesc: 'Sistema desenvolvido para permitir que o comprador de concreto fresco realize uma contraprova independente no momento do descarregamento na obra. O equipamento integra sensores a laser que captam imagens e movimento em alta velocidade com display digital, alimentação por baterias e telemetria integrada para transmissão instantânea de dados.',
    image: '/images/concrete-scanner-laser.jpg',
    specs: [
      { label: 'Princípio de Medição', value: 'Sensores a laser de alta velocidade + varredura de perfil' },
      { label: 'Faixa de Vazão', value: '0,20 a 3,50 m³/min' },
      { label: 'Instalação', value: 'Suporte articulado em aço inox para calha de caminhão betoneira' },
      { label: 'Grau de Proteção', value: 'IP67 estanque contra poeira, lama e água' },
      { label: 'Telemetria & Software', value: 'Transmissão sem fio integrada e sincronização em nuvem' },
      { label: 'Alimentação', value: 'Bateria interna de longa autonomia' }
    ],
    applications: [
      'Contraprova imediata do volume de concreto recebido na presença do operador',
      'Validação quantitativa antes do lançamento em fundações, lajes e pilares',
      'Eliminação de divergências entre a nota fiscal e a cubagem real da obra'
    ]
  },
  {
    id: 'dc-fuel-ultrasonic',
    name: 'Double Check Combustível',
    category: 'combustivel',
    tag: 'Ultrassom Portátil Clamp-On',
    shortDesc: 'Dispositivo móvel portátil clamp-on acoplável externamente à mangueira de abastecimento. Sensores ultrassônicos internos com display digital e telemetria integrada.',
    fullDesc: 'Equipamento portátil desenvolvido para conferência quantitativa de combustíveis líquidos diretamente na mangueira que sai da bomba até o bico. Com estrutura tubular acoplável tipo alicate e material macio isolante, afere o volume por ultrassonografia com exibição imediata no display digital (ex.: 12.45 L) e telemetria interna, preservando o desarme automático da bomba.',
    image: '/images/fuel-clamp-hose.jpg',
    specs: [
      { label: 'Princípio de Medição', value: 'Sensores ultrassônicos de fluxo não invasivos (Clamp-On)' },
      { label: 'Acoplamento', value: 'Corpo tubular ajustável tipo alicate com trava de fechamento' },
      { label: 'Mangueiras Compatíveis', value: 'Padrão NBR 15234 19mm (3/4") de postos de combustível' },
      { label: 'Segurança & Vácuo', value: 'Zero interferência no sistema de vácuo e desarme automático do bico' },
      { label: 'Display & Telemetria', value: 'Display digital LCD integrado em Litros + registrador interno' }
    ],
    applications: [
      'Conferência do volume exato abastecido no veículo pelo próprio consumidor',
      'Auditoria de frotas corporativas, caminhões e maquinário agrícola',
      'Contraprova imediata entre o valor da bomba e o volume real entregue'
    ]
  }
];

export const ProductsShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="produtos" className="products-section">
      <div className="section-container">
        <div className="section-header-center">
          <div className="brand-badge-tag-wrap center">
            <MovementLines height={20} />
            <span className="section-tag-sorion">EQUIPAMENTOS & PRODUTOS</span>
          </div>
          <h2 className="section-title-sorion">Sistemas de Contramedição Independente</h2>
          <p className="section-subtitle-sorion">
            Tecnologia desenvolvida para permitir que o comprador realize uma conferência autônoma no momento da entrega, com telemetria e conectividade integradas ao hardware.
          </p>
        </div>

        {/* Grid com os 2 Únicos Equipamentos (1 Concreto e 1 Combustível) */}
        <div className="products-grid duo">
          {products.map((prod) => (
            <div key={prod.id} className="product-card">
              <TechCornerMarks />
              <div className="product-img-wrap">
                {prod.id === 'dc-fuel-ultrasonic' ? (
                  <Fuel3DViewer height={290} autoRotateSpeed={1.0} />
                ) : (
                  <>
                    <img src={prod.image} alt={prod.name} className="product-img" />
                    <span className="product-tag-overlay">{prod.tag}</span>
                  </>
                )}
              </div>

              <div className="product-body">
                <h3 className="product-title">{prod.name}</h3>
                <p className="product-desc">{prod.shortDesc}</p>

                <div className="product-footer-action">
                  <button 
                    className="btn-product-details"
                    onClick={() => setSelectedProduct(prod)}
                  >
                    <span>Ficha Técnica Completa</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Spec Modal */}
      {selectedProduct && (
        <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <X size={22} />
            </button>

            <div className="modal-content-grid">
              <div className="modal-img-col">
                {selectedProduct.id === 'dc-fuel-ultrasonic' ? (
                  <Fuel3DViewer height={380} autoRotateSpeed={0.8} />
                ) : (
                  <>
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                    <span className="modal-tag-badge">{selectedProduct.tag}</span>
                  </>
                )}
              </div>

              <div className="modal-info-col">
                <h3 className="modal-title">{selectedProduct.name}</h3>
                <p className="modal-lead">{selectedProduct.fullDesc}</p>

                <div className="modal-specs-section">
                  <h4>Especificações Técnicas</h4>
                  <div className="specs-table">
                    {selectedProduct.specs.map((spec, i) => (
                      <div key={i} className="spec-row">
                        <span className="spec-name">{spec.label}:</span>
                        <strong className="spec-val">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-applications-section">
                  <h4>Principais Aplicações</h4>
                  <ul className="modal-app-list">
                    {selectedProduct.applications.map((app, i) => (
                      <li key={i}>
                        <Check size={16} className="text-green" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-cta-row">
                  <a 
                    href="#contato" 
                    className="btn-modal-quote"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <span>Solicitar Proposta para este Equipamento</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
