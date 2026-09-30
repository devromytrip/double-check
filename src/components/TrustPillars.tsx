import { 
  Target, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Eye, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Precisão',
    desc: 'Margens milimétricas e aferição calibrada para eliminar qualquer dúvida na conferência.'
  },
  {
    icon: ShieldCheck,
    title: 'Confiança',
    desc: 'Dados imparciais e certificados que garantem relações comerciais transparentes.'
  },
  {
    icon: Cpu,
    title: 'Tecnologia',
    desc: 'Sensores de ponta e processamento em borda para leitura instantânea sem fricção.'
  },
  {
    icon: Users,
    title: 'Independência',
    desc: 'Medição autônoma, sem viés de fornecedor ou transportador.'
  },
  {
    icon: Eye,
    title: 'Transparência',
    desc: 'Visibilidade completa em tempo real para compradores, engenheiros e auditores.'
  },
  {
    icon: Zap,
    title: 'Praticidade',
    desc: 'Operação simples em campo com resultados claros em segundos no smartphone ou tablet.'
  },
  {
    icon: TrendingUp,
    title: 'Resultados',
    desc: 'Retorno sobre investimento comprovado logo nas primeiras descargas monitoradas.'
  }
];

export const TrustPillars: React.FC = () => {
  return (
    <section id="pilares" className="pillars-section">
      <div className="section-header">
        <span className="section-tag">VALORES & DIFERENCIAIS</span>
        <h2 className="section-title">Pilares que Sustentam Cada Medição</h2>
        <p className="section-desc">
          Mais do que uma ferramenta, um compromisso com a integridade do seu suprimento.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-box">
                <Icon size={24} />
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
