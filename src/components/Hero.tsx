import { Shield, ArrowRight, Activity } from 'lucide-react';

interface HeroProps {
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDemo }) => {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span className="badge-icon"><Shield size={14} /></span>
        <span className="badge-text">A SEGUNDA MEDIÇÃO É SUA</span>
      </div>

      <h1 className="hero-title">
        Tecnologia que gera <span className="text-gradient-blue">confiança</span> no <span className="text-gradient-green">mundo real</span>.
      </h1>

      <p className="hero-subtitle">
        <strong>Medir. Conferir. Confirmar.</strong> Soluções de medição independentes e de alta precisão para garantir transparência absoluta no que você compra e recebe.
      </p>

      <div className="hero-cta-group">
        <button className="btn-hero-primary" onClick={onScrollToDemo}>
          <Activity size={18} />
          <span>Testar Painel de Medição</span>
          <ArrowRight size={18} />
        </button>

        <a href="#mercados" className="btn-hero-secondary">
          <span>Explorar Segmentos</span>
        </a>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">99.8%</div>
          <div className="stat-label">Precisão Aferida</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">0s</div>
          <div className="stat-label">Margem de Dúvida</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Independente e Auditável</div>
        </div>
      </div>
    </section>
  );
};
