import React, { useState } from 'react';
import { PhoneCall, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-topbar">
        <div className="navbar-topbar-content">
          <span>Tecnologia que gera confiança no mundo real | Medir. Conferir. Confirmar.</span>
          <div className="topbar-links">
            <span>Atendimento Comercial: (11) 3600-2400</span>
            <span className="divider">|</span>
            <span>contato@doublecheck.com.br</span>
          </div>
        </div>
      </div>

      <div className="navbar-container">
        <a 
          href="#/inicio" 
          className="brand-logo"
          onClick={(e) => handleNavClick('inicio', e)}
        >
          <img 
            src="/images/double-check-logo-cropped.png" 
            alt="Double Check Logo" 
            className="logo-img-large"
          />
        </a>

        <nav className={`nav-links ${mobileOpen ? 'mobile-active' : ''}`}>
          <a 
            href="#/inicio" 
            className={`nav-link ${activePage === 'inicio' ? 'active-page' : ''}`} 
            onClick={(e) => handleNavClick('inicio', e)}
          >
            Início
          </a>
          <a 
            href="#/sobre" 
            className={`nav-link ${activePage === 'sobre' ? 'active-page' : ''}`} 
            onClick={(e) => handleNavClick('sobre', e)}
          >
            Sobre Nós
          </a>
          <a 
            href="#/servicos" 
            className={`nav-link ${activePage === 'servicos' ? 'active-page' : ''}`} 
            onClick={(e) => handleNavClick('servicos', e)}
          >
            Serviços
          </a>
          <a 
            href="#/produtos" 
            className={`nav-link ${activePage === 'produtos' ? 'active-page' : ''}`} 
            onClick={(e) => handleNavClick('produtos', e)}
          >
            Equipamentos
          </a>
          <a 
            href="#/aplicacoes" 
            className={`nav-link ${activePage === 'aplicacoes' ? 'active-page' : ''}`} 
            onClick={(e) => handleNavClick('aplicacoes', e)}
          >
            Em Campo
          </a>
          <a 
            href="#/contato" 
            className={`nav-link ${activePage === 'contato' ? 'active-page' : ''}`} 
            onClick={(e) => handleNavClick('contato', e)}
          >
            Contato
          </a>
        </nav>

        <div className="nav-actions">
          <button 
            type="button" 
            className="btn-contact-top"
            onClick={(e) => handleNavClick('contato', e)}
          >
            <PhoneCall size={18} />
            <span>Fale Conosco</span>
            <ArrowRight size={16} />
          </button>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
};
