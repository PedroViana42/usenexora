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
    
    // Mask: (99) 99999-9999
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
    // For now, redirect to WhatsApp with the data or just log it
    const text = `Olá, meu nome é ${name}. %0A%0AProjeto: ${message}`;
    window.open(`https://wa.me/5562991000000?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6">
      <div className="space-y-2 text-left">
        <label htmlFor="name" className="text-xs font-mono text-text-muted uppercase tracking-widest ml-1">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Dr. Ricardo Mendes"
          className="w-full bg-base-panel/50 border border-base-border/50 rounded-sm px-6 py-4 text-white placeholder:text-text-muted/50 focus:border-[#00C46A]/50 focus:outline-none transition-all duration-300"
        />
      </div>

      <div className="space-y-2 text-left">
        <label htmlFor="whatsapp" className="text-xs font-mono text-text-muted uppercase tracking-widest ml-1">
          WhatsApp
        </label>
        <input
          type="text"
          id="whatsapp"
          required
          value={phone}
          onChange={handlePhoneChange}
          placeholder="(62) 99999-9999"
          className="w-full bg-base-panel/50 border border-base-border/50 rounded-sm px-6 py-4 text-white placeholder:text-text-muted/50 focus:border-[#00C46A]/50 focus:outline-none transition-all duration-300"
        />
      </div>

      <div className="space-y-2 text-left">
        <label htmlFor="project" className="text-xs font-mono text-text-muted uppercase tracking-widest ml-1">
          Me conta o seu projeto
        </label>
        <textarea
          id="project"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Descreva brevemente o que sua clínica precisa..."
          className="w-full bg-base-panel/50 border border-base-border/50 rounded-sm px-6 py-4 text-white placeholder:text-text-muted/50 focus:border-[#00C46A]/50 focus:outline-none transition-all duration-300 resize-none"
        />
      </div>

      <div className="pt-4">
        <MagneticButton 
          type="submit"
          variant="solid"
          className="w-full py-6 text-base"
        >
          <span className="flex items-center justify-center gap-3">
            Enviar e falar com especialista
            <Send className="w-4 h-4" />
          </span>
        </MagneticButton>
      </div>
    </form>
  );
};

export default ContactForm;
