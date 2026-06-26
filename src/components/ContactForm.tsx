import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2}).*/, '($1');
    }

    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${name}. Meu WhatsApp é ${phone}. Gostaria de solicitar um diagnóstico para: ${message}`;
    window.open(`https://wa.me/5562993552673?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="space-y-2 text-left">
        <label htmlFor="name" className="ml-1 text-[11px] font-mono text-text-muted uppercase tracking-[0.18em]">
          Nome completo
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Ricardo Mendes"
          className="w-full rounded-[12px] border border-accent-blue/16 bg-[#05070D]/72 px-5 py-4 text-white placeholder:text-text-muted/42 transition-all duration-200 focus:border-accent-blue/55 focus:outline-none focus:shadow-[0_0_0_3px_rgba(20,156,255,0.08)]"
        />
      </div>

      <div className="space-y-2 text-left">
        <label htmlFor="whatsapp" className="ml-1 text-[11px] font-mono text-text-muted uppercase tracking-[0.18em]">
          WhatsApp
        </label>
        <input
          type="text"
          id="whatsapp"
          required
          value={phone}
          onChange={handlePhoneChange}
          placeholder="(62) 99999-9999"
          className="w-full rounded-[12px] border border-accent-blue/16 bg-[#05070D]/72 px-5 py-4 text-white placeholder:text-text-muted/42 transition-all duration-200 focus:border-accent-blue/55 focus:outline-none focus:shadow-[0_0_0_3px_rgba(20,156,255,0.08)]"
        />
      </div>

      <div className="space-y-2 text-left">
        <label htmlFor="project" className="ml-1 text-[11px] font-mono text-text-muted uppercase tracking-[0.18em]">
          Qual processo você quer organizar?
        </label>
        <textarea
          id="project"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ex: controlar pedidos, automatizar atendimento, criar painel interno..."
          className="w-full resize-none rounded-[12px] border border-accent-blue/16 bg-[#05070D]/72 px-5 py-4 text-white placeholder:text-text-muted/42 transition-all duration-200 focus:border-accent-blue/55 focus:outline-none focus:shadow-[0_0_0_3px_rgba(20,156,255,0.08)]"
        />
      </div>

      <div className="pt-2">
        <MagneticButton type="submit" variant="solid" className="w-full px-6 py-4 text-sm">
          <span className="flex items-center justify-center gap-3">
            Solicitar diagnóstico
            <Send className="w-4 h-4" />
          </span>
        </MagneticButton>
      </div>
    </form>
  );
};

export default ContactForm;
