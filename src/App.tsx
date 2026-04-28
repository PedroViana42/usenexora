import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Target, Database, Zap, Lock, Star, Globe, Smartphone, BarChart3, Fingerprint, ShieldCheck, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Starfield } from './components/Starfield';
import { MagneticButton } from './components/MagneticButton';

const Orbiter = ({ delay, radius, duration }: { delay: number, radius: number, duration: number }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 rounded-full border border-base-border/40 border-dashed pointer-events-none"
    style={{
      width: radius * 2,
      height: radius * 2,
      x: '-50%',
      y: '-50%',
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      className="w-full h-full absolute top-0 left-0"
    >
      <div className="w-1.5 h-1.5 bg-accent-green rounded-full shadow-[0_0_10px_rgba(20,200,113,0.8)] -top-[3px] left-1/2 transform -translate-x-1/2 absolute" />
    </motion.div>
  </motion.div>
);

export default function App() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para um projeto de Presença Digital.";
    const whatsappUrl = `https://wa.me/5562993552673?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const [showStatus, setShowStatus] = useState(false);
  const [activeModal, setActiveModal] = useState<null | 'terms' | 'privacy'>(null);

  return (
    <div className="min-h-screen bg-base-dark text-text-main font-sans selection:bg-accent-green selection:text-base-dark relative overflow-x-hidden">
      
      {/* Interactive Galaxy Background */}
      <Starfield />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-base-border/30 bg-base-dark/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-display font-bold tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-4 h-4 bg-accent-green shadow-[0_0_10px_rgba(20,200,113,0.5)]" />
            UseNexora
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest text-text-muted uppercase font-semibold">
            <a href="#services" className="hover:text-white transition-colors duration-200">O que fazemos</a>
            <a href="#sobre" className="hover:text-white transition-colors duration-200">Quem Somos</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contato</a>
          </div>
          <MagneticButton 
            onClick={handleWhatsApp}
            className="text-[10px] sm:text-xs px-4 sm:px-6 py-4"
          >
            Solicitar Orçamento
          </MagneticButton>
        </div>
      </nav>

      {/* 1. Hero Section - Centered, Grandiose */}
      <section className="relative pt-40 pb-32 min-h-screen flex flex-col items-center justify-center overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-6 relative z-30 flex flex-col items-center text-center">
          
          <Badge variant="outline" className="mb-8 rounded-none border-accent-green/50 text-accent-green font-mono uppercase tracking-widest px-4 py-1.5 glow-green bg-accent-green/5">
            <Globe className="w-3 h-3 mr-2 inline" /> AGÊNCIA DE ALTA PERFORMANCE
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] font-bold text-white mb-6 tracking-tight uppercase max-w-4xl">
            CONSTRUÍMOS SUA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-white">
              PRESENÇA DOMINANTE
            </span> <br/>
            NA INTERNET.
          </h1>
          
          <p className="text-text-muted text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-12">
            Esqueça templates genéricos. Construímos ecossistemas digitais imersivos e infraestruturas de alta performance que posicionam sua marca como líder absoluta no seu nicho.
          </p>
          
          <div className="flex gap-4 mb-20">
            <MagneticButton 
              onClick={handleWhatsApp}
              className="text-sm md:text-base px-8 md:px-12 py-5 md:py-6"
            >
              Solicitar Orçamento
            </MagneticButton>
          </div>
        </div>

        {/* Floating Mockup / Base Map beneath the text */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center mt-10 z-20">
          <div className="absolute inset-0 bg-accent-green/5 blur-3xl rounded-full transform scale-150"></div>
          {mounted && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <Orbiter radius={320} duration={30} delay={0} />
              <Orbiter radius={240} duration={20} delay={-5} />
            </div>
          )}
          
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative z-10 w-full aspect-video rounded-t-3xl overflow-hidden border-t border-x border-accent-green/30 shadow-[0_-20px_50px_rgba(20,200,113,0.15)]"
          >
            <div className="absolute inset-0 bg-base-dark mix-blend-color z-10"></div>
            <img src="/images/base_map.png" alt="Nexora Infrastructure" className="w-full h-full object-cover object-center relative z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-dark via-base-dark/50 to-transparent z-20"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Social Proof - Asymmetrical Layout */}
      <section className="py-24 relative z-20 bg-base-dark/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Testimonial Feature (Larger, more prominent) */}
            <Card className="w-full lg:w-3/5 bg-base-panel/80 backdrop-blur-md border border-base-border/50 p-10 relative overflow-hidden group hover:border-accent-green/40 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="flex gap-1 text-accent-green mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white font-display text-2xl md:text-3xl font-medium italic mb-8 leading-snug">
                "O nível de autoridade e a solidez da nossa nova presença digital transformaram a forma como o mercado nos enxerga. Não é apenas um site, é uma máquina de vendas."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-none overflow-hidden border border-base-border">
                  <img src="/images/doctor.png" alt="CEO" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Roberto Mendes</div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-widest">Diretor Executivo</div>
                </div>
              </div>
            </Card>

            {/* Logos (Smaller column) */}
            <div className="w-full lg:w-2/5 flex flex-col gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <h3 className="font-mono text-sm text-text-muted uppercase tracking-widest border-l-2 border-accent-green pl-4">
                Padrão de Excelência Por
              </h3>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4 text-2xl font-display font-bold text-white">
                  <Fingerprint className="w-8 h-8 text-accent-green" /> TechCorp
                </div>
                <div className="flex items-center gap-4 text-2xl font-display font-bold text-white">
                  <Smartphone className="w-8 h-8 text-blue-400" /> StartApp
                </div>
                <div className="flex items-center gap-4 text-2xl font-display font-bold text-white">
                  <Target className="w-8 h-8 text-purple-400" /> GlobalPartner
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. A Solução (O que fazemos) */}
      <section className="py-32 relative z-20" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center flex flex-col items-center">
            <h2 className="font-display text-5xl font-bold text-white uppercase tracking-tight mb-4">
              Arquitetura de Conversão
            </h2>
            <p className="font-mono text-text-muted uppercase tracking-widest text-sm max-w-2xl">
              Como transformamos visitantes curisosos em clientes compradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Module 1 */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-base-panel/50 backdrop-blur-md border border-base-border/50 p-10 group hover:border-accent-green/50 transition-colors duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(20,200,113,0.1)] rounded-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 blur-3xl group-hover:bg-accent-green/20 transition-all duration-500"></div>
              <div className="font-mono text-[10px] text-accent-green mb-8 uppercase tracking-widest flex items-center justify-between">
                <span>Passo 01</span>
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-wide uppercase">Identidade & Autoridade</h3>
              <p className="text-text-muted font-sans text-base leading-relaxed mb-8 grow">
                Não é apenas sobre estética. Definimos o tom, a voz e o posicionamento visual que fazem sua empresa ser percebida como a escolha premium do mercado.
              </p>
            </motion.div>

            {/* Module 2 */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: -2, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-base-panel/50 backdrop-blur-md border border-base-border/50 p-10 group hover:border-accent-green/50 transition-colors duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(20,200,113,0.1)] rounded-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl group-hover:bg-accent-green/20 transition-all duration-500"></div>
              <div className="font-mono text-[10px] text-white mb-8 uppercase tracking-widest flex items-center justify-between">
                <span>Passo 02</span>
                <Globe className="w-5 h-5 text-accent-green" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-wide uppercase">Ecossistema Digital</h3>
              <p className="text-text-muted font-sans text-base leading-relaxed mb-8 grow">
                Criamos infraestruturas digitais velozes e imersivas que funcionam em qualquer dispositivo, servindo como a vitrine oficial do seu sucesso.
              </p>
            </motion.div>

            {/* Module 3 */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-base-panel/50 backdrop-blur-md border border-base-border/50 p-10 group hover:border-accent-green/50 transition-colors duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(20,200,113,0.1)] rounded-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 blur-3xl group-hover:bg-accent-green/20 transition-all duration-500"></div>
              <div className="font-mono text-[10px] text-accent-green mb-8 uppercase tracking-widest flex items-center justify-between">
                <span>Passo 03</span>
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-wide uppercase">Expansão de Mercado</h3>
              <p className="text-text-muted font-sans text-base leading-relaxed mb-8 grow">
                Otimizamos cada ponto de contato para garantir que sua presença digital não seja apenas vista, mas que gere crescimento real e previsível.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Autoridade/Filosofia (Quem Somos) - Asymmetrical Layout */}
      <section className="py-32 relative z-20" id="sobre">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-green"></div>
            <div className="pl-10">
              <h3 className="font-mono text-sm text-accent-green uppercase tracking-widest mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" /> Nosso Padrão
              </h3>
              <p className="font-display text-4xl md:text-5xl text-white font-bold uppercase leading-snug">
                "Não montamos sites genéricos. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-muted">
                  Construímos sua presença digital dominante."
                </span>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl font-bold text-white uppercase tracking-tight mb-6">Nossa Filosofia</h2>
            <p className="text-text-muted font-sans text-xl leading-relaxed">
              Acreditamos que sua marca não é apenas o que você vende, mas como o mundo a percebe. Onde a maioria vê apenas estética, nós aplicamos engenharia de autoridade para criar um ecossistema digital que trabalha para você 24/7, posicionando sua empresa como a única solução óbvia.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section className="py-40 relative z-20" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white mx-auto flex items-center justify-center mb-8 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Zap className="text-base-dark w-8 h-8" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tight mb-6">
            Vamos construir o seu futuro digital?
          </h2>
          <p className="text-text-muted font-mono uppercase tracking-widest text-sm mb-16">
            Nossa agenda aceita um número limitado de novos projetos por mês para garantir extrema qualidade.
          </p>
          <MagneticButton 
            onClick={handleWhatsApp}
            className="mx-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8"
          >
            Solicitar Orçamento
          </MagneticButton>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-12 bg-base-panel/50 backdrop-blur-md border-t border-base-border/30 text-center relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-text-muted uppercase tracking-widest">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 bg-accent-green" />
            USENEXORA &copy; {new Date().getFullYear()} &bull; PRESENÇA DIGITAL
          </div>
          <div className="flex gap-6">
            <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors">Termos</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors">Privacidade</button>
            <button 
              onClick={() => setShowStatus(!showStatus)} 
              className={`flex items-center gap-2 transition-colors ${showStatus ? 'text-accent-green' : 'hover:text-accent-green'}`}
            >
              <Lock className="w-3 h-3" /> INFRA SEGURA
            </button>
          </div>
        </div>
      </footer>

      {/* Security Status Card (Floating) */}
      <AnimatePresence>
        {showStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-72 bg-base-panel/90 backdrop-blur-xl border border-accent-green/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-accent-green font-mono text-[10px] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> System Status
              </div>
              <button onClick={() => setShowStatus(false)} className="text-text-muted hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-xs font-mono">SERVER UPTIME</span>
                <span className="text-white text-xs font-mono">99.98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-xs font-mono">SSL ENCRYPTION</span>
                <span className="text-accent-green text-xs font-mono">ACTIVE (AES-256)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-xs font-mono">CDN EDGE</span>
                <span className="text-white text-xs font-mono">GLOBAL (VERCEL)</span>
              </div>
              <div className="pt-2 border-t border-base-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-accent-green font-mono uppercase tracking-tighter">Todos os sistemas operacionais</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compliance Modal (Terms / Privacy) */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-base-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-base-panel border border-base-border p-10 shadow-2xl rounded-sm"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-text-muted hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="font-display text-3xl font-bold text-white uppercase tracking-tight mb-6">
                {activeModal === 'terms' ? 'Termos de Serviço' : 'Política de Privacidade'}
              </h2>
              
              <div className="prose prose-invert max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-base-border">
                <p className="text-text-muted leading-relaxed mb-4">
                  A <strong>UseNexora</strong> preza pela transparência e segurança total dos dados de seus clientes e parceiros. 
                </p>
                <p className="text-text-muted leading-relaxed mb-4">
                  Como uma consultoria de presença digital premium, todos os nossos contratos são regidos pelas leis brasileiras de proteção de dados (LGPD) e garantem a propriedade intelectual total dos ativos desenvolvidos para nossos contratantes.
                </p>
                <h4 className="text-white font-bold mt-6 mb-2">Segurança de Dados</h4>
                <p className="text-text-muted leading-relaxed mb-4">
                  Não compartilhamos métricas ou estratégias de nossos clientes com terceiros. Sua vantagem competitiva é protegida por cláusulas rigorosas de confidencialidade.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Para mais detalhes sobre contratos específicos, entre em contato através do nosso canal oficial no WhatsApp.
                </p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-base-border/30 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-8 py-3 bg-white text-base-dark font-bold uppercase tracking-widest text-xs hover:bg-accent-green transition-colors"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
