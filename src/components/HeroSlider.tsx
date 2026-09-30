import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Award, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    tag: 'TECNOLOGIA EM CONCRETO',
    title: 'Mais tecnologia. Mais controle para a sua obra.',
    subtitle: 'Medição a laser em tempo real na calha de descarga da betoneira. Saiba o volume exato descarregado antes de lançar o concreto.',
    image: '/images/banner-concreto-laser.png',
    badge: 'Varredura Laser 3D',
    ctaText: 'Ver Linha Concreto',
    ctaLink: '#produtos'
  },
  {
    id: 2,
    tag: 'CONTROLE DE COMBUSTÍVEL',
    title: 'Confira o que realmente entra no seu tanque.',
    subtitle: 'Dispositivo ultrassônico portátil clamp-on acoplado diretamente na mangueira da bomba. A segunda medição independente de quem está abastecendo.',
    image: '/images/banner-combustivel-clamp.png',
    badge: 'Medição Ultrassônica Portátil',
    ctaText: 'Ver Linha Combustível',
    ctaLink: '#produtos'
  }
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="inicio" className="hero-slider-section">
      <div className="slider-wrapper">
        {slides.map((slide, idx) => (
          <div 
            key={slide.id} 
            className={`slide-item ${idx === current ? 'active' : ''}`}
          >
            <div className="slide-bg-overlay"></div>
            <img src={slide.image} alt={slide.title} className="slide-bg-img" />

            <div className="slide-content-container">
              <div className="slide-text-box">
                <div className="slide-pill">
                  <Shield size={16} />
                  <span>{slide.tag}</span>
                </div>

                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>

                <div className="slide-actions">
                  <a href={slide.ctaLink} className="btn-slide-primary">
                    <span>{slide.ctaText}</span>
                    <ArrowRight size={18} />
                  </a>
                  <a href="#contato" className="btn-slide-secondary">
                    <span>Falar com Consultor</span>
                  </a>
                </div>

                <div className="slide-highlights">
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <span>Não Invasivo</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <span>Contraprova em Tempo Real</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <span>Telemetria Nativa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Slide anterior">
          <ChevronLeft size={24} />
        </button>
        <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Próximo slide">
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="slider-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Industrial Trust Bar under Hero */}
      <div className="trust-credential-bar">
        <div className="trust-bar-container">
          <div className="trust-item">
            <Award className="trust-icon" size={24} />
            <div>
              <strong>Equipamentos Calibrados</strong>
              <p>Rastreabilidade metrológica e laudo técnico</p>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <Shield className="trust-icon" size={24} />
            <div>
              <strong>Equipamentos de Contramedição</strong>
              <p>Segunda camada de conferência independente</p>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <CheckCircle2 className="trust-icon" size={24} />
            <div>
              <strong>Sem Modificações no Fornecedor</strong>
              <p>Opera sem furar mangueiras e sem alterar bicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
