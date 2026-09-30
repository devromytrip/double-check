import React from 'react';

/**
 * Linhas de Movimento (//): Progressão, tecnologia e precisão
 * Faixas paralelas inclinadas nas cores oficiais: Azul (#0B4EA2) e Verde (#39B54A)
 */
export const MovementLines: React.FC<{ height?: number; className?: string }> = ({ 
  height = 36, 
  className = '' 
}) => {
  return (
    <svg 
      width={height * 1.2} 
      height={height} 
      viewBox="0 0 48 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`movement-lines-svg ${className}`}
      aria-hidden="true"
    >
      <path 
        d="M18 4L6 32H14L26 4H18Z" 
        fill="#0B4EA2" 
      />
      <path 
        d="M34 4L22 32H30L42 4H34Z" 
        fill="#39B54A" 
      />
    </svg>
  );
};

/**
 * Chevron Triplo (>>>): Grafismo de avanço e processo de medição
 */
export const ChevronTrio: React.FC<{ size?: number; className?: string }> = ({ 
  size = 20, 
  className = '' 
}) => {
  return (
    <svg 
      width={size * 2.4} 
      height={size} 
      viewBox="0 0 48 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`chevron-trio-svg ${className}`}
      aria-hidden="true"
    >
      <path d="M4 2L12 10L4 18" stroke="#072b5c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 2L26 10L18 18" stroke="#0B4EA2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 2L40 10L32 18" stroke="#39B54A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/**
 * Símbolo do Duplo Check (Dois checks sobrepostos: Azul e Verde)
 */
export const DoubleCheckIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 28, 
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`double-check-svg ${className}`}
      aria-label="Double Check"
    >
      {/* Check Azul Superior */}
      <path 
        d="M4 14L10 20L22 8" 
        stroke="#0B4EA2" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Check Verde Inferior */}
      <path 
        d="M10 20L16 26L28 14" 
        stroke="#39B54A" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

/**
 * Matriz de Pontos Tecnológicos (Dot Matrix do manual)
 */
export const TechDotGrid: React.FC<{ rows?: number; cols?: number; className?: string }> = ({ 
  rows = 5, 
  cols = 5, 
  className = '' 
}) => {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ r, c });
    }
  }

  return (
    <div 
      className={`tech-dot-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 4px)`,
        gridTemplateRows: `repeat(${rows}, 4px)`,
        gap: '9px'
      }}
      aria-hidden="true"
    >
      {dots.map((dot, idx) => (
        <span 
          key={idx} 
          style={{
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            backgroundColor: (dot.r + dot.c) % 2 === 0 ? 'rgba(57, 181, 74, 0.45)' : 'rgba(11, 78, 162, 0.55)',
            display: 'inline-block'
          }}
        />
      ))}
    </div>
  );
};

/**
 * Cantoneiras Técnicas (┌ e ┘ para dar acabamento industrial a cartões e caixas)
 */
export const TechCornerMarks: React.FC = () => {
  return (
    <>
      <span className="tech-corner tech-corner-tl" aria-hidden="true" />
      <span className="tech-corner tech-corner-br" aria-hidden="true" />
    </>
  );
};

/**
 * Linhas Duplas Decorativas (Verde e Azul horizontais)
 */
export const DualLineAccent: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`dual-line-accent ${className}`} aria-hidden="true">
      <span className="line-blue" />
      <span className="line-green" />
    </div>
  );
};

/**
 * Widget Oficial de Telemetria do Manual de Identidade Visual
 * (Volume Medido: 7,84 m³ / Variação -2,0% / Botões MEDIR, CONFIRMAR, RELATÓRIO)
 */
export const TelemetryWidget: React.FC<{
  title?: string;
  volume?: string;
  variation?: string;
  statusText?: string;
  unit?: string;
}> = ({
  title = "VOLUME MEDIDO",
  volume = "7,84",
  unit = "m³",
  variation = "-2,0%",
  statusText = "Em relação ao informado"
}) => {
  return (
    <div className="telemetry-widget-card">
      <TechCornerMarks />
      <div className="telemetry-header-bar">
        <span className="telemetry-label">{title}</span>
        <span className="telemetry-live-dot">
          <span className="pulse-ping"></span>
          AO VIVO
        </span>
      </div>

      <div className="telemetry-value-row">
        <span className="telemetry-main-number">{volume}</span>
        <span className="telemetry-unit">{unit}</span>
      </div>

      <div className="telemetry-variation-badge">
        <span className="variation-arrow">↑</span>
        <strong className="variation-val">{variation}</strong>
        <span className="variation-legend">{statusText}</span>
      </div>

      <div className="telemetry-action-buttons">
        <button type="button" className="btn-brand-medir">
          MEDIR
        </button>
        <button type="button" className="btn-brand-confirmar">
          CONFIRMAR
        </button>
        <button type="button" className="btn-brand-relatorio">
          RELATÓRIO
        </button>
      </div>
    </div>
  );
};

/**
 * Status Badges Oficiais da Marca:
 * - Medição concluída (Verde)
 * - Em andamento (Azul)
 * - Aguardando (Cinza)
 * - Atenção (Vermelho)
 */
export const StatusBadgeGroup: React.FC = () => {
  return (
    <div className="status-badges-group">
      <div className="status-badge-item completed">
        <span className="status-circle green">✓</span>
        <span>Medição concluída</span>
      </div>
      <div className="status-badge-item progress">
        <span className="status-circle blue">🕒</span>
        <span>Em andamento</span>
      </div>
      <div className="status-badge-item waiting">
        <span className="status-circle gray">○</span>
        <span>Aguardando</span>
      </div>
      <div className="status-badge-item warning">
        <span className="status-circle red">!</span>
        <span>Atenção</span>
      </div>
    </div>
  );
};
