import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { MovementLines, TechCornerMarks } from './BrandGraphics';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    segmento: 'Medição de Combustível (Consumidor Final)',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          {/* Informações e Canais Diretos */}
          <div className="contact-info-col">
            <div className="brand-badge-tag-wrap">
              <MovementLines height={20} />
              <span className="section-tag-sorion">FALE CONOSCO</span>
            </div>

            <h2 className="contact-heading">Atendimento Comercial & Especializado</h2>
            <p className="contact-text">
              Seja para aquisição individual do medidor de combustível ou para soluções em canteiros de obras e frotas, nossa equipe está à disposição para tirar dúvidas e fornecer propostas comerciais.
            </p>

            <div className="contact-channels-list">
              <div className="channel-item">
                <div className="channel-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="channel-label">Central de Atendimento:</span>
                  <span className="channel-val">(11) 3600-2400</span>
                  <span className="channel-sub">Segunda a Sexta, das 08h às 18h</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="channel-label">E-mail Comercial:</span>
                  <span className="channel-val">comercial@doublecheck.com.br</span>
                  <span className="channel-sub">Resposta em até 2 horas úteis</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="channel-label">Atendimento Nacional:</span>
                  <span className="channel-val">Brasil (Vendas e Suporte)</span>
                  <span className="channel-sub">Envio de equipamentos para todo o país</span>
                </div>
              </div>
            </div>

            <div className="sla-badge-box">
              <CheckCircle2 size={20} className="text-green flex-shrink-0" />
              <span>Atendimento direto tanto para o <strong>Consumidor Final</strong> quanto para <strong>Empresas e Obras</strong>.</span>
            </div>
          </div>

          {/* Formulário de Contato / Proposta */}
          <div className="contact-form-col">
            <div className="form-card">
              <TechCornerMarks />

              <h3 className="form-title">Solicitar Proposta ou Informações</h3>
              <p className="form-sub">Preencha os dados abaixo para receber o contato da nossa equipe.</p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="text-green" />
                  <h4>Solicitação Enviada com Sucesso!</h4>
                  <p>Obrigado pelo contato. Um dos nossos especialistas entrará em contato em breve através do telefone ou e-mail informado.</p>
                  <button 
                    type="button" 
                    className="btn-form-reset"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: '',
                        email: '',
                        telefone: '',
                        empresa: '',
                        segmento: 'Medição de Combustível (Consumidor Final)',
                        mensagem: ''
                      });
                    }}
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="actual-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="nome">Nome Completo</label>
                      <input 
                        type="text" 
                        id="nome" 
                        placeholder="Ex.: Carlos Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">Empresa / Construtora (Opcional)</label>
                      <input 
                        type="text" 
                        id="empresa" 
                        placeholder="Nome da empresa (se houver)"
                        value={formData.empresa}
                        onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefone">Telefone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="segmento">Segmento Principal de Interesse</label>
                    <select 
                      id="segmento"
                      value={formData.segmento}
                      onChange={(e) => setFormData({...formData, segmento: e.target.value})}
                    >
                      <option value="Medição de Combustível (Consumidor Final)">Medição de Combustível (Consumidor Final / Uso Próprio)</option>
                      <option value="Medição de Combustível (Frotas e Empresas)">Medição de Combustível (Frotas, Caminhões e Postos)</option>
                      <option value="Medição de Concreto Usinado">Medição de Concreto Usinado (Obras e Construtoras)</option>
                      <option value="Ambos os Serviços">Ambos os Serviços</option>
                      <option value="Outras Dúvidas">Outras Dúvidas ou Demonstração</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensagem">Mensagem ou Detalhes da Compra</label>
                    <textarea 
                      id="mensagem" 
                      rows={3}
                      placeholder="Conte-nos como deseja utilizar o medidor ou informe suas dúvidas para a equipe..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-form-submit">
                    <span>Enviar Solicitação</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
