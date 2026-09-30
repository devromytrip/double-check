import { useState } from 'react';
import { 
  Gauge, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Fuel, 
  Truck, 
  ShieldCheck
} from 'lucide-react';

type Mode = 'concreto' | 'combustivel';

export const InteractiveMeasurement: React.FC = () => {
  const [mode, setMode] = useState<Mode>('concreto');
  const [measuring, setMeasuring] = useState(false);
  const [status, setStatus] = useState<'idle' | 'measuring' | 'completed' | 'confirmed'>('completed');
  const [volume, setVolume] = useState(mode === 'concreto' ? 7.84 : 14250);
  const [discrepancy, setDiscrepancy] = useState(-2.0);
  const [showReport, setShowReport] = useState(false);

  const handleSwitchMode = (newMode: Mode) => {
    setMode(newMode);
    setShowReport(false);
    setStatus('completed');
    if (newMode === 'concreto') {
      setVolume(7.84);
      setDiscrepancy(-2.0);
    } else {
      setVolume(14250);
      setDiscrepancy(-1.4);
    }
  };

  const handleStartMeasure = () => {
    setMeasuring(true);
    setStatus('measuring');
    setShowReport(false);

    setTimeout(() => {
      setMeasuring(false);
      setStatus('completed');
      if (mode === 'concreto') {
        const randomVariation = +(7.7 + Math.random() * 0.3).toFixed(2);
        const diff = +(((randomVariation - 8.0) / 8.0) * 100).toFixed(1);
        setVolume(randomVariation);
        setDiscrepancy(diff);
      } else {
        const randomVariation = Math.round(14000 + Math.random() * 400);
        const diff = +(((randomVariation - 14500) / 14500) * 100).toFixed(1);
        setVolume(randomVariation);
        setDiscrepancy(diff);
      }
    }, 1200);
  };

  const handleConfirm = () => {
    setStatus('confirmed');
  };

  return (
    <section id="demo" className="measurement-section">
      <div className="section-header">
        <span className="section-tag">SIMULAÇÃO DE DISPOSITIVO</span>
        <h2 className="section-title">Painel de Medição & Validação</h2>
        <p className="section-desc">
          Experimente a interface real de validação da Double Check. Veja como os dados aferidos são comparados instantaneamente com a nota fiscal.
        </p>
      </div>

      {/* Mode Selector */}
      <div className="mode-toggle-wrapper">
        <button 
          className={`mode-toggle-btn ${mode === 'concreto' ? 'active-concrete' : ''}`}
          onClick={() => handleSwitchMode('concreto')}
        >
          <Truck size={20} />
          <span>Concreto Usinado</span>
        </button>
        <button 
          className={`mode-toggle-btn ${mode === 'combustivel' ? 'active-fuel' : ''}`}
          onClick={() => handleSwitchMode('combustivel')}
        >
          <Fuel size={20} />
          <span>Combustível Granel</span>
        </button>
      </div>

      <div className="measurement-console-grid">
        {/* Left: Interactive Measurement Display */}
        <div className="console-card">
          <div className="console-card-top">
            <div className="sensor-indicator">
              <span className={`status-orb ${measuring ? 'pulse-fast' : 'active'}`}></span>
              <span>{measuring ? 'Aferindo sensores ultrassônicos/vazão...' : 'Sensor calibrado & pronto'}</span>
            </div>
            <span className="unit-badge">ID: DC-8849-BR</span>
          </div>

          <div className="display-screen">
            <span className="display-label">VOLUME MEDIDO</span>
            <div className="display-number">
              {measuring ? (
                <span className="scanning-text">Lendo sensores...</span>
              ) : (
                <>
                  {mode === 'concreto' ? volume.toFixed(2) : volume.toLocaleString('pt-BR')} 
                  <span className="display-unit">{mode === 'concreto' ? 'm³' : 'L'}</span>
                </>
              )}
            </div>

            <div className="delta-container">
              <div className={`delta-tag ${discrepancy < 0 ? 'warning' : 'positive'}`}>
                <span>{discrepancy > 0 ? `+${discrepancy}%` : `${discrepancy}%`}</span>
                <span className="delta-sub">Em relação ao informado na NF</span>
              </div>
            </div>
          </div>

          {/* Action Buttons styled according to Elementos Graficos.png */}
          <div className="action-buttons-group">
            <button 
              className={`btn-action-measure ${measuring ? 'loading' : ''}`}
              onClick={handleStartMeasure}
              disabled={measuring}
            >
              <Gauge size={18} />
              <span>{measuring ? 'MEDINDO...' : 'MEDIR'}</span>
            </button>

            <button 
              className={`btn-action-confirm ${status === 'confirmed' ? 'confirmed' : ''}`}
              onClick={handleConfirm}
              disabled={measuring}
            >
              <CheckCircle2 size={18} />
              <span>{status === 'confirmed' ? 'CONFIRMADO' : 'CONFIRMAR'}</span>
            </button>

            <button 
              className={`btn-action-report ${showReport ? 'active' : ''}`}
              onClick={() => setShowReport(!showReport)}
            >
              <FileText size={18} />
              <span>{showReport ? 'FECHAR RELATÓRIO' : 'RELATÓRIO'}</span>
            </button>
          </div>
        </div>

        {/* Right: Real-time Statuses and Diagnostics */}
        <div className="diagnostics-card">
          <h3 className="card-title">Status da Operação</h3>
          
          <div className="status-flow-list">
            <div className={`status-row ${status === 'completed' || status === 'confirmed' ? 'active' : ''}`}>
              <div className="status-icon green">
                <CheckCircle2 size={20} />
              </div>
              <div className="status-info">
                <div className="status-text">Medição concluída</div>
                <div className="status-sub">Sinal de retorno 100% estabilizado</div>
              </div>
            </div>

            <div className={`status-row ${measuring ? 'active' : ''}`}>
              <div className="status-icon blue">
                <Clock size={20} />
              </div>
              <div className="status-info">
                <div className="status-text">Em andamento</div>
                <div className="status-sub">Captura contínua de telemetria</div>
              </div>
            </div>

            <div className={`status-row ${discrepancy < -3 ? 'active' : ''}`}>
              <div className="status-icon red">
                <AlertTriangle size={20} />
              </div>
              <div className="status-info">
                <div className="status-text">Atenção à divergência</div>
                <div className="status-sub">Diferença fora da tolerância padrão</div>
              </div>
            </div>
          </div>

          <div className="audit-shield-box">
            <ShieldCheck className="shield-icon" size={32} />
            <div>
              <div className="audit-title">Certificado Imutável Double Check</div>
              <div className="audit-desc">Hash SHA-256 gerado no momento do descarregamento para garantia jurídica e comercial.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Report Modal/Drawer */}
      {showReport && (
        <div className="report-container">
          <div className="report-header">
            <h4>Relatório Técnico de Conferência</h4>
            <span className="report-date">Aferição realizada agora</span>
          </div>
          <div className="report-table">
            <div className="report-row">
              <span>Tipo de Carga:</span>
              <strong>{mode === 'concreto' ? 'Concreto Usinado FCK 30 MPa' : 'Óleo Diesel S-10'}</strong>
            </div>
            <div className="report-row">
              <span>Volume Declarado (NF):</span>
              <strong>{mode === 'concreto' ? '8,00 m³' : '14.500 L'}</strong>
            </div>
            <div className="report-row">
              <span>Volume Aferido (Double Check):</span>
              <strong>{mode === 'concreto' ? `${volume.toFixed(2)} m³` : `${volume.toLocaleString('pt-BR')} L`}</strong>
            </div>
            <div className="report-row">
              <span>Variação Líquida:</span>
              <span className={discrepancy < 0 ? 'text-warn' : 'text-good'}>{discrepancy}%</span>
            </div>
            <div className="report-row">
              <span>Assinatura Digital do Dispositivo:</span>
              <code>DC-SEC-99a38f71b2e6...</code>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
