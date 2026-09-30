import React, { useState } from 'react';
import { 
  Fuel, 
  Truck, 
  CheckCircle2, 
  Activity,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { 
  MovementLines, 
  ChevronTrio, 
  TechCornerMarks, 
  TechDotGrid, 
  DoubleCheckIcon 
} from './BrandGraphics';

interface ServiceDetail {
  id: 'concreto' | 'combustivel';
  title: string;
  badge: string;
  slogan: string;
  desc: string;
  image: string;
  features: string[];
  specs: { label: string; val: string }[];
  deliverables: string[];
}

const servicesData: ServiceDetail[] = [
  {
    id: 'concreto',
    title: 'Medição de Concreto Usinado',
    badge: 'CONCRETO USINADO',
    slogan: 'Controle real para a sua obra. Medição confiável na calha da betoneira.',
    desc: 'Serviço de contramedição volumétrica independente realizado durante a descarga do concreto fresco no canteiro de obras. Através de sensores ópticos e varredura laser contínua instalados na calha, afere em tempo real o volume descarregado antes do lançamento, eliminando perdas ocultas por falta de cubagem e gerando contraprova autônoma com validade técnica.',
    image: '/images/concrete-scanner-laser.jpg',
    features: [
      'Contraprova volumétrica instantânea no momento exato do descarregamento',
      'Varredura a laser contínua sem interrupção do fluxo de concretagem',
      'Relatório de cubagem digital com carimbo de data, hora, geolocalização e fotos',
      'Eliminação imediata de conflitos comerciais entre construtora e concreteira'
    ],
    specs: [
      { label: 'Metodologia', val: 'Varredura Laser Contínua + Perfil 3D' },
      { label: 'Vazão Operacional', val: '0,20 a 3,50 m³/minuto' },
      { label: 'Instalação', val: 'Suporte articulado na calha da betoneira' },
      { label: 'Emissão de Laudo', val: 'Digital instantâneo com registro em nuvem' }
    ],
    deliverables: [
      'Contraprova volumétrica instantânea',
      'Certificado de auditoria de recebimento',
      'Rastreabilidade total por caminhão',
      'Laudo com validade técnica jurídica'
    ]
  },
  {
    id: 'combustivel',
    title: 'Medição de Combustível',
    badge: 'COMBUSTÍVEL',
    slogan: 'Confira o que realmente entra no seu tanque. Mais transparência para o seu dia a dia.',
    desc: 'Serviço de aferição quantitativa autônoma para operações de abastecimento de frotas, caminhões, maquinário pesado e postos. Através de dispositivo ultrassônico clamp-on de alta sensibilidade acoplado externamente à mangueira, mede o volume líquido exato que flui da bomba até o bocal, sem furar mangueiras e sem interferir no desarme automático da bomba.',
    image: '/images/fuel-clamp-hose.jpg',
    features: [
      'Verificação independente na mão de quem compra e abastece',
      'Tecnologia ultrassônica clamp-on não invasiva de fácil acoplamento',
      'Preserva 100% dos sistemas de alívio e desarme automático de fábrica',
      'Auditoria de abastecimento em tempo real para frotas e canteiros'
    ],
    specs: [
      { label: 'Metodologia', val: 'Ultrassom não invasivo (Clamp-on)' },
      { label: 'Compatibilidade', val: 'Mangueiras industriais padrão NBR 15234 (3/4")' },
      { label: 'Operação', val: 'Não invasiva / Sem contato com o fluido' },
      { label: 'Emissão de Laudo', val: 'Sincronização imediata com telemetria' }
    ],
    deliverables: [
      'Conferência exata de litragem por abastecimento',
      'Detecção de divergências entre bomba e tanque',
      'Sem perfuração e sem perda de garantia do posto',
      'Rastreabilidade para gestão de frotas e máquinas'
    ]
  }
];

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concreto' | 'combustivel'>('concreto');

  const currentService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <section id="servicos" className="services-section bg-honeycomb-pattern">
      <div className="section-container">
        
        {/* Header Oficial com Linhas de Movimento e Assinatura */}
        <div className="section-header-top-brand">
          <div className="brand-badge-tag-wrap">
            <MovementLines height={24} />
            <span className="section-tag-sorion">EXCLUSIVIDADE OPERACIONAL</span>
          </div>

          <h2 className="section-title-sorion">
            Nossos Serviços Especializados de Contramedição
          </h2>

          <p className="section-subtitle-sorion">
            Oferecemos exclusivamente duas frentes de auditoria metrológica independente para garantir que o que a sua empresa paga seja exatamente o que entra na sua obra ou no seu tanque.
          </p>

          <div className="brand-slogan-strip">
            <span className="strip-item">MEDIR</span>
            <ChevronTrio size={14} />
            <span className="strip-item">CONFERIR</span>
            <ChevronTrio size={14} />
            <span className="strip-item active">CONFIRMAR</span>
          </div>
        </div>

        {/* Seletor dos 2 Serviços */}
        <div className="services-switch-container">
          <button 
            type="button"
            className={`service-switch-btn ${activeTab === 'concreto' ? 'active' : ''}`}
            onClick={() => setActiveTab('concreto')}
          >
            <div className="switch-icon-box">
              <Truck size={24} />
            </div>
            <div className="switch-text-box">
              <span className="switch-sub">SERVIÇO 01</span>
              <strong className="switch-title">Medição de Concreto Usinado</strong>
            </div>
            <span className="switch-indicator" />
          </button>

          <button 
            type="button"
            className={`service-switch-btn ${activeTab === 'combustivel' ? 'active' : ''}`}
            onClick={() => setActiveTab('combustivel')}
          >
            <div className="switch-icon-box">
              <Fuel size={24} />
            </div>
            <div className="switch-text-box">
              <span className="switch-sub">SERVIÇO 02</span>
              <strong className="switch-title">Medição de Combustível</strong>
            </div>
            <span className="switch-indicator" />
          </button>
        </div>

        {/* Detalhe do Serviço Selecionado com Grafismos Oficiais */}
        <div className="service-spotlight-card">
          <TechCornerMarks />
          <TechDotGrid rows={4} cols={5} className="service-dot-grid-decor" />

          <div className="service-spotlight-grid">
            
            {/* Coluna de Texto & Benefícios */}
            <div className="service-spotlight-info">
              <div className="service-spotlight-pill">
                <DoubleCheckIcon size={20} />
                <span>{currentService.badge}</span>
              </div>

              <h3 className="service-spotlight-title">{currentService.title}</h3>
              <p className="service-spotlight-slogan">“{currentService.slogan}”</p>
              <p className="service-spotlight-desc">{currentService.desc}</p>

              <div className="service-features-list">
                <h4 className="features-headline">Principais Benefícios do Serviço:</h4>
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="feature-item-row">
                    <CheckCircle2 size={18} className="text-green flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tabela de Especificações Rápidas */}
              <div className="service-specs-mini-table">
                {currentService.specs.map((sp, idx) => (
                  <div key={idx} className="spec-mini-item">
                    <span className="spec-mini-label">{sp.label}:</span>
                    <strong className="spec-mini-val">{sp.val}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna Visual: Imagem de Campo Real + Entregáveis do Serviço */}
            <div className="service-spotlight-visual">
              
              {/* Foto Real do Serviço em Campo */}
              <div className="service-photo-wrap-clean">
                <TechCornerMarks />
                <img 
                  src={currentService.image} 
                  alt={currentService.title} 
                  className="service-photo-img-clean" 
                />
                <div className="service-photo-tag">
                  <Activity size={14} className="text-green animate-pulse" />
                  <span>Operação em Campo</span>
                </div>
              </div>

              {/* Card de Entregas & Garantias do Serviço */}
              <div className="service-deliverables-card">
                <TechCornerMarks />
                <div className="deliverables-header">
                  <ShieldCheck size={20} className="text-green" />
                  <h4>O Que Este Serviço Garante à Sua Operação:</h4>
                </div>
                <ul className="deliverables-list">
                  {currentService.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <Check size={16} className="text-green flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Banner de Encerramento do Serviço */}
          <div className="service-footer-cta-strip">
            <div className="cta-strip-text">
              <MovementLines height={20} />
              <span>Deseja implantar o serviço de <strong>{currentService.title}</strong> na sua empresa?</span>
            </div>
            <a href="#contato" className="btn-service-request">
              <span>Solicitar Orçamento do Serviço</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
