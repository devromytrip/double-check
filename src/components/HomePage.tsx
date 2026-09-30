import React from 'react';
import { HeroSlider } from './HeroSlider';
import { MovementLines, ChevronTrio, TechCornerMarks, DoubleCheckIcon } from './BrandGraphics';
import { Truck, Fuel, ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="home-page-container">
      {/* 1. Hero Slider Dinâmico */}
      <HeroSlider />

      {/* 2. Resumo Executivo das 2 Frentes de Atuação */}
      <section className="home-services-overview">
        <div className="section-container">
          <div className="section-header-center">
            <div className="brand-badge-tag-wrap center">
              <MovementLines height={20} />
              <span className="section-tag-sorion">CONHEÇA NOSSAS SOLUÇÕES</span>
            </div>
            <h2 className="section-title-sorion">Duas Frentes de Contramedição Independente</h2>
            <p className="section-subtitle-sorion">
              Eliminamos divergências e perdas invisíveis com tecnologias patenteadas para os dois insumos mais críticos da sua operação.
            </p>
          </div>

          <div className="home-cards-grid">
            {/* Card Concreto */}
            <div className="home-service-card" onClick={() => onNavigate('servicos')}>
              <TechCornerMarks />
              <div className="home-card-header">
                <div className="home-icon-wrap blue">
                  <Truck size={28} />
                </div>
                <span className="home-category-pill">CONCRETO USINADO</span>
              </div>

              <h3 className="home-card-title">Medição de Concreto Usinado</h3>
              <p className="home-card-desc">
                Varredura contínua a laser na calha da betoneira. Saiba exatamente o volume descarregado antes de lançar o concreto na obra.
              </p>

              <div className="home-card-meta">
                <div className="meta-point">
                  <DoubleCheckIcon size={16} />
                  <span>Contraprova em tempo real na descarga</span>
                </div>
                <div className="meta-point">
                  <DoubleCheckIcon size={16} />
                  <span>Eliminação de divergências com a NF</span>
                </div>
              </div>

              <div className="home-card-footer">
                <button 
                  type="button" 
                  className="btn-home-learn"
                  onClick={(e) => { e.stopPropagation(); onNavigate('servicos'); }}
                >
                  <span>Conhecer o Serviço</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Card Combustível */}
            <div className="home-service-card" onClick={() => onNavigate('servicos')}>
              <TechCornerMarks />
              <div className="home-card-header">
                <div className="home-icon-wrap green">
                  <Fuel size={28} />
                </div>
                <span className="home-category-pill green">COMBUSTÍVEL</span>
              </div>

              <h3 className="home-card-title">Medição de Combustível</h3>
              <p className="home-card-desc">
                Dispositivo ultrassônico clamp-on acoplado à mangueira. A segunda medição independente de quem está abastecendo seu veículo ou frota.
              </p>

              <div className="home-card-meta">
                <div className="meta-point">
                  <DoubleCheckIcon size={16} />
                  <span>100% não invasivo, sem furar mangueiras</span>
                </div>
                <div className="meta-point">
                  <DoubleCheckIcon size={16} />
                  <span>Preserva desarme automático da bomba</span>
                </div>
              </div>

              <div className="home-card-footer">
                <button 
                  type="button" 
                  className="btn-home-learn"
                  onClick={(e) => { e.stopPropagation(); onNavigate('servicos'); }}
                >
                  <span>Conhecer o Serviço</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Banner Institucional de Posicionamento da Marca */}
      <section className="home-banner-positioning">
        <div className="section-container">
          <div className="home-positioning-box">
            <TechCornerMarks />
            <div className="positioning-left">
              <div className="brand-badge-tag-wrap">
                <MovementLines height={20} />
                <span className="section-tag-sorion">NOSSO PROPÓSITO</span>
              </div>
              <h3 className="home-banner-title">“A segunda medição é de quem está comprando.”</h3>
              <p className="home-banner-desc">
                Não pretendemos substituir a medição do fornecedor. Fornecemos uma contraprova independente, simples e com rigor metrológico para assegurar que relações comerciais sejam sempre justas e transparentes.
              </p>
              <div className="home-banner-actions">
                <button 
                  type="button" 
                  className="btn-banner-primary"
                  onClick={() => onNavigate('sobre')}
                >
                  <span>Conheça Nossa História e Valores</span>
                  <ChevronTrio size={12} />
                </button>
                <button 
                  type="button" 
                  className="btn-banner-secondary"
                  onClick={() => onNavigate('produtos')}
                >
                  <span>Ver Equipamentos</span>
                </button>
              </div>
            </div>

            <div className="positioning-right-badges">
              <div className="pillar-mini-badge">
                <Scale size={24} className="text-blue" />
                <div>
                  <strong>Independência Metrológica</strong>
                  <p>Dados auditáveis e neutros</p>
                </div>
              </div>
              <div className="pillar-mini-badge">
                <ShieldCheck size={24} className="text-green" />
                <div>
                  <strong>Segurança Jurídica</strong>
                  <p>Laudos técnicos certificados</p>
                </div>
              </div>
              <div className="pillar-mini-badge">
                <Award size={24} className="text-blue" />
                <div>
                  <strong>Tecnologia Patenteada</strong>
                  <p>Sensores laser e ultrassom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chamada Rápida para Contato */}
      <section className="home-cta-section">
        <div className="section-container">
          <div className="home-cta-bar">
            <div className="cta-bar-text">
              <MovementLines height={22} />
              <div>
                <h3>Pronto para eliminar perdas invisíveis na sua empresa?</h3>
                <p>Nossa equipe técnica atende em todo o território nacional.</p>
              </div>
            </div>
            <button 
              type="button" 
              className="btn-home-cta"
              onClick={() => onNavigate('contato')}
            >
              <span>Fale com Nossos Especialistas</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
