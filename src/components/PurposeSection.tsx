import React from 'react';
import { 
  GraduationCap, 
  Wrench, 
  Headphones, 
  Sliders, 
  Target, 
  Cpu 
} from 'lucide-react';

const purposeCards = [
  {
    icon: GraduationCap,
    title: 'Capacitação',
    desc: 'Treinamento completo para operadores, engenheiros de obra e fiscais para conferência ágil e sem atrito.'
  },
  {
    icon: Wrench,
    title: 'Especialização',
    desc: 'Engenharia dedicada a instrumentação pesada, óptica de precisão e medição sob condições extremas.'
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    desc: 'Atendimento contínuo e assistência técnica especializada para garantir operações sem interrupções.'
  },
  {
    icon: Sliders,
    title: 'Manutenção',
    desc: 'Revisões preventivas e manutenção especializada em campo mantendo a integridade dos sensores.'
  },
  {
    icon: Target,
    title: 'Calibração',
    desc: 'Aferição periódica com padrões rastreáveis que conferem peso probatório e segurança jurídica aos laudos.'
  },
  {
    icon: Cpu,
    title: 'Soluções Integradas',
    desc: 'Sistemas embarcados modulares projetados sob medida para betoneiras, caminhões-tanque e silos.'
  }
];

export const PurposeSection: React.FC = () => {
  return (
    <section id="proposito" className="purpose-section">
      <div className="section-container">
        <div className="section-header-left">
          <span className="section-tag-sorion">NOSSO PROPÓSITO</span>
          <h2 className="section-title-sorion">
            Tecnologia e serviços especializados para garantir o controle real de tudo o que sua empresa compra.
          </h2>
          <p className="section-subtitle-sorion">
            A Double Check desenvolve e opera soluções industriais de medição independente, eliminando perdas invisíveis no recebimento de concreto usinado e combustíveis a granel.
          </p>
        </div>

        <div className="purpose-grid">
          {purposeCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="purpose-card">
                <div className="purpose-card-icon">
                  <Icon size={26} />
                </div>
                <h3 className="purpose-card-title">{card.title}</h3>
                <p className="purpose-card-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
