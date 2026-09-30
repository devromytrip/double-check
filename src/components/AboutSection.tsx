import React from 'react';
import { Target, Compass, Scale, Shield, Sparkles, CheckCircle } from 'lucide-react';
import { 
  MovementLines, 
  ChevronTrio, 
  TechCornerMarks, 
  TechDotGrid, 
  DoubleCheckIcon 
} from './BrandGraphics';

const valores = [
  { 
    number: '01',
    title: 'Confiabilidade', 
    desc: 'A confiança está no centro da Double Check. Nossas soluções geram informações precisas capazes de sustentar decisões estratégicas.' 
  },
  { 
    number: '02',
    title: 'Precisão', 
    desc: 'Buscamos reduzir incertezas, erros e divergências por meio de medições, dados e processos cada vez mais exatos e controlados.' 
  },
  { 
    number: '03',
    title: 'Transparência', 
    desc: 'Operações bem controladas dependem de dados claros, auditáveis, rastreáveis e acessíveis a todas as partes envolvidas.' 
  },
  { 
    number: '04',
    title: 'Inovação com Propósito', 
    desc: 'Tecnologia desenvolvida para resolver dores reais de campo, gerando ganho prático, economia e segurança tangível.' 
  },
  { 
    number: '05',
    title: 'Independência na Conferência', 
    desc: 'Verificação imparcial e autônoma, garantindo ao comprador uma camada segura de contraprova no recebimento.' 
  },
  { 
    number: '06',
    title: 'Eficiência', 
    desc: 'Simplificação de processos, eliminação de desperdícios e otimização do resultado operacional de ponta a ponta.' 
  },
  { 
    number: '07',
    title: 'Responsabilidade', 
    desc: 'Tratamento de medições e dados com rigor ético, seriedade e compromisso metrológico inegociável.' 
  },
  { 
    number: '08',
    title: 'Foco no Cliente', 
    desc: 'Soluções desenhadas a partir dos desafios diários das obras e do abastecimento, entregando benefícios mensuráveis.' 
  },
  { 
    number: '09',
    title: 'Evolução Contínua', 
    desc: 'Aprendizado constante com nossos clientes e mercado para aprimorar algoritmos, produtos e tecnologias de precisão.' 
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="section-container">
        
        {/* Header Institucional com Elementos Gráficos */}
        <div className="about-header-box">
          <div className="brand-badge-tag-wrap">
            <MovementLines height={22} />
            <span className="section-tag-sorion">SOBRE A DOUBLE CHECK</span>
          </div>

          <h2 className="about-main-title">
            Tecnologia e independência para quem precisa ter certeza do que está comprando.
          </h2>

          <div className="about-intro-grid">
            <div className="about-lead-col">
              <p className="about-lead-text">
                A <strong>Double Check</strong> nasceu para solucionar uma dor crítica e histórica em operações de recebimento e controle de materiais de alto valor: 
                a ausência de uma contraprova independente, automatizada e confiável sobre aquilo que foi efetivamente medido, faturado e entregue.
              </p>
            </div>
            <div className="about-secondary-col">
              <p className="about-secondary-text">
                Em muitos setores, empresas e consumidores ainda dependem exclusivamente de informações fornecidas por terceiros ou conferências manuais imprecisas. 
                Nossa tecnologia transforma esse cenário, colocando na mão de quem compra uma segunda medição autônoma, não invasiva e com precisão em tempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Posicionamento Central com Grafismos Técnicos */}
        <div className="positioning-banner">
          <TechCornerMarks />
          <div className="positioning-icon">
            <Scale size={32} />
          </div>
          <div className="positioning-content">
            <div className="positioning-header-line">
              <span className="positioning-tag">POSICIONAMENTO CENTRAL DA MARCA</span>
              <ChevronTrio size={12} />
            </div>
            <h3 className="positioning-title">“A segunda medição é de quem está comprando.”</h3>
            <p className="positioning-desc">
              Não pretendemos substituir a medição realizada pelo fornecedor ou pela bomba. Nosso papel é fornecer uma 
              <strong> contraprova independente, simples e confiável</strong>, permitindo comparar os dados informados com o que realmente entrou na obra ou no tanque.
            </p>
          </div>
        </div>

        {/* 1. MISSÃO E VISÃO (Lado a Lado com Cantoneiras) */}
        <div className="mv-section-block">
          <div className="mv-grid-duo">
            
            {/* Card Missão */}
            <div className="mv-card-box mission">
              <TechCornerMarks />
              <div className="mv-icon-wrap blue">
                <Target size={30} />
              </div>
              <div className="mv-title-row">
                <span className="mv-small-badge">DIRETRIZ</span>
                <h3 className="mv-title">Nossa Missão</h3>
              </div>
              <p className="mv-text">
                Desenvolver e oferecer soluções tecnológicas que tornem processos de medição, conferência e controle mais precisos, confiáveis e transparentes, ajudando empresas e consumidores a reduzir perdas, evitar divergências e tomar decisões com base em dados seguros.
              </p>
              <div className="mv-bottom-accent">
                <span className="line-blue" />
              </div>
            </div>

            {/* Card Visão */}
            <div className="mv-card-box vision">
              <TechCornerMarks />
              <div className="mv-icon-wrap green">
                <Compass size={30} />
              </div>
              <div className="mv-title-row">
                <span className="mv-small-badge green">FUTURO</span>
                <h3 className="mv-title">Nossa Visão</h3>
              </div>
              <p className="mv-text">
                Ser reconhecida como a grande referência em tecnologia para medição, conferência e controle independente de operações, criando um novo padrão de confiabilidade, rastreabilidade e transparência para o mercado brasileiro e internacional.
              </p>
              <div className="mv-bottom-accent">
                <span className="line-green" />
              </div>
            </div>

          </div>
        </div>

        {/* 2. VALORES (Os 9 Valores Fundamentais da Marca) */}
        <div className="values-container">
          <div className="values-header">
            <div className="brand-badge-tag-wrap center">
              <MovementLines height={18} />
              <span className="section-tag-sorion">CULTURA & PRINCÍPIOS</span>
            </div>
            <h3 className="values-main-title">Nossos Valores Fundamentais</h3>
            <p className="values-subtitle">Os 9 princípios que orientam cada linha de código, sensor e atendimento da Double Check.</p>
          </div>

          <div className="values-grid">
            {valores.map((val, idx) => (
              <div key={idx} className="value-item-card">
                <TechCornerMarks />
                <div className="value-card-top">
                  <span className="value-number">{val.number}</span>
                  <DoubleCheckIcon size={16} className="value-mini-icon" />
                </div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PROPÓSITO EM BAIXO (Como requisitado: Missão, Visão, Valores e o Propósito em baixo) */}
        <div id="proposito" className="purpose-bottom-block">
          <TechCornerMarks />
          <TechDotGrid rows={4} cols={6} className="purpose-dot-grid" />

          <div className="purpose-bottom-content">
            <div className="purpose-tag-row">
              <div className="brand-badge-tag-wrap">
                <MovementLines height={20} />
                <span className="section-tag-sorion">A RAZÃO DE EXISTIRMOS</span>
              </div>
              <span className="purpose-highlight-badge">
                <Sparkles size={14} className="text-green" />
                Compromisso Ético & Metrológico
              </span>
            </div>

            <h3 className="purpose-bottom-title">
              Nosso Propósito
            </h3>

            <p className="purpose-bottom-lead">
              Tornar medições, conferências e controles mais confiáveis, reduzindo desperdícios e perdas financeiras invisíveis. Transformamos processos que antes dependiam de baixa rastreabilidade em dados concretos para relações comerciais mais justas e seguras.
            </p>

            <div className="purpose-pillars-row">
              <div className="purpose-pillar-item">
                <div className="pillar-icon-box">
                  <Shield size={22} className="text-blue" />
                </div>
                <div>
                  <strong>Combate a Perdas Invisíveis</strong>
                  <p>Eliminação de divergências volumétricas que corroem margens sem serem percebidas.</p>
                </div>
              </div>

              <div className="purpose-pillar-item">
                <div className="pillar-icon-box">
                  <DoubleCheckIcon size={22} />
                </div>
                <div>
                  <strong>Relações Comerciais Justas</strong>
                  <p>Dados técnicos auditáveis que constroem confiança mútua entre quem vende e quem compra.</p>
                </div>
              </div>

              <div className="purpose-pillar-item">
                <div className="pillar-icon-box">
                  <CheckCircle size={22} className="text-green" />
                </div>
                <div>
                  <strong>Autonomia Operacional</strong>
                  <p>Equipamentos e tecnologia sob medida para conferência ágil e independente no canteiro e na pista.</p>
                </div>
              </div>
            </div>

            <div className="purpose-footer-quote">
              <p className="quote-text">
                “Mais que uma marca, uma garantia para o que importa. Tecnologia que gera confiança no mundo real.”
              </p>
              <span className="quote-author">— Identidade e Propósito Double Check</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
