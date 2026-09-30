import { Truck, Fuel, BarChart3, CheckCircle } from 'lucide-react';

export const MarketSegments: React.FC = () => {
  return (
    <section id="mercados" className="markets-section">
      <div className="section-header">
        <span className="section-tag">SEGMENTOS ATENDIDOS</span>
        <h2 className="section-title">Diferentes Mercados. O Mesmo Objetivo.</h2>
        <p className="section-desc">
          Mais controle, previsibilidade e economia para quem compra e audita matérias-primas críticas.
        </p>
      </div>

      <div className="markets-grid">
        {/* Concrete Market Card */}
        <div className="market-card">
          <div className="market-card-top">
            <div className="market-icon blue">
              <Truck size={28} />
            </div>
            <span className="market-pill">Construção Civil</span>
          </div>

          <h3 className="market-title">Concreto Usinado</h3>
          <p className="market-lead">Controle real para a sua obra.</p>
          <p className="market-text">
            Elimine a dúvida sobre o volume efetivamente entregue pelo caminhão betoneira. Nossa medição em tempo de descarregamento confere cada metro cúbico antes da aplicação estrutural.
          </p>

          <ul className="market-features">
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Verificação instantânea de volume e assentamento</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Laudo automático anexado à nota de entrega</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Prevenção contra interrupções por falta de material</span>
            </li>
          </ul>
        </div>

        {/* Fuel Market Card */}
        <div className="market-card">
          <div className="market-card-top">
            <div className="market-icon green">
              <Fuel size={28} />
            </div>
            <span className="market-pill">Frotas & Postos</span>
          </div>

          <h3 className="market-title">Combustível a Granel</h3>
          <p className="market-lead">Confira o que realmente entra no seu tanque.</p>
          <p className="market-text">
            Variações de temperatura e descargas incompletas podem mascarar perdas volumétricas severas. A Double Check audita o fluxo direto na admissão do reservatório.
          </p>

          <ul className="market-features">
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Compensação térmica automática em tempo real</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Auditoria anti-desvio e lacre eletrônico</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Controle rigoroso de frotas pesadas e TRRs</span>
            </li>
          </ul>
        </div>

        {/* Data & Intelligence Market Card */}
        <div className="market-card">
          <div className="market-card-top">
            <div className="market-icon blue">
              <BarChart3 size={28} />
            </div>
            <span className="market-pill">Inteligência Operacional</span>
          </div>

          <h3 className="market-title">Auditoria & Gestão</h3>
          <p className="market-lead">Dados que geram decisões mais seguras.</p>
          <p className="market-text">
            Centralize todos os pontos de entrega da sua empresa em um dashboard unificado com indicadores de conformidade por fornecedor e histórico com garantia jurídica.
          </p>

          <ul className="market-features">
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Score de precisão e confiabilidade por fornecedor</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Integração via API com SAP, Protheus e ERPs líderes</span>
            </li>
            <li>
              <CheckCircle size={16} className="text-green" />
              <span>Exportação de laudos periciais e relatórios em PDF/XLS</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
