import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { MovementLines, DoubleCheckIcon } from './BrandGraphics';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer className="footer-industrial">
      {/* Faixa Institucional de Assinatura Visual do Anexo */}
      <div className="footer-brand-banner-strip">
        <div className="footer-container banner-flex">
          <div className="strip-left">
            <MovementLines height={22} />
            <span className="strip-motto">Double Check | CONCRETO | COMBUSTÍVEL | UM FUTURO MAIS TRANSPARENTE.</span>
          </div>
          <div className="strip-right">
            <span>TECNOLOGIA QUE GERA CONFIANÇA NO MUNDO REAL.</span>
          </div>
        </div>
      </div>

      <div className="footer-top-row">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Col 1: Marca e Posicionamento */}
            <div className="footer-brand-col">
              <a 
                href="#/inicio" 
                className="footer-logo-link"
                onClick={(e) => handleLink('inicio', e)}
              >
                <img 
                  src="/images/double-check-logo-cropped.png" 
                  alt="Double Check Logo" 
                  className="footer-logo-large"
                />
              </a>
              <p className="footer-mission-text">
                Soluções e serviços especializados de contramedição independente para recebimento de concreto usinado e abastecimento de combustíveis.
              </p>
              <div className="footer-motto-box">
                <DoubleCheckIcon size={20} />
                <span>A SEGUNDA MEDIÇÃO É SUA.</span>
              </div>
            </div>

            {/* Col 2: Nossos 2 Serviços Oficiais */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Nossos Serviços</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="#/servicos" onClick={(e) => handleLink('servicos', e)}>
                    <span className="footer-bullet-chevron">›</span>
                    Medição de Concreto Usinado
                  </a>
                </li>
                <li>
                  <a href="#/servicos" onClick={(e) => handleLink('servicos', e)}>
                    <span className="footer-bullet-chevron">›</span>
                    Medição de Combustível
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Institucional */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Institucional</h4>
              <ul className="footer-nav-list">
                <li><a href="#/sobre" onClick={(e) => handleLink('sobre', e)}>Sobre a Double Check</a></li>
                <li><a href="#/sobre" onClick={(e) => handleLink('sobre', e)}>Missão e Visão</a></li>
                <li><a href="#/sobre" onClick={(e) => handleLink('sobre', e)}>Valores Fundamentais</a></li>
                <li><a href="#/sobre" onClick={(e) => handleLink('sobre', e)}>Nosso Propósito</a></li>
                <li><a href="#/aplicacoes" onClick={(e) => handleLink('aplicacoes', e)}>Operações em Campo</a></li>
              </ul>
            </div>

            {/* Col 4: Contato & Atendimento */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Atendimento Especializado</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-line">
                  <Phone size={16} className="text-blue" />
                  <span>(11) 3600-2400</span>
                </div>
                <div className="footer-contact-line">
                  <Mail size={16} className="text-blue" />
                  <span>comercial@doublecheck.com.br</span>
                </div>
                <div className="footer-contact-line">
                  <MapPin size={16} className="text-blue" />
                  <span>Atendimento em todo o território nacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div className="footer-container bottom-flex">
          <p>© {new Date().getFullYear()} Double Check Tecnologia Ltda. Todos os direitos reservados.</p>
          <div className="footer-legal-links">
            <a href="#">Termos de Uso</a>
            <span>•</span>
            <a href="#">Privacidade</a>
            <span>•</span>
            <a href="#">Conformidade Metrológica</a>
          </div>
          <button className="btn-scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
