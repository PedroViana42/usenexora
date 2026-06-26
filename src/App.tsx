import { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  LayoutDashboard,
  Lock,
  MessageCircle,
  PanelLeft,
  PlugZap,
  Rows3,
  ShieldCheck,
  SquareTerminal,
  TableProperties,
  Workflow,
  X,
} from 'lucide-react';
import { MagneticButton } from './components/MagneticButton';
import ContactForm from './components/ContactForm';

const navItems = [
  ['Início', '#inicio'],
  ['Sistemas', '#sistemas'],
  ['Automações', '#automacoes'],
  ['Processo', '#processo'],
  ['Contato', '#contato'],
];

const recentRecords = [
  ['Pedido #1842', 'Aguardando NF', 'pendente'],
  ['Cliente Martins', 'Cadastro validado', 'processado'],
  ['Lead WhatsApp', 'Enviado ao CRM', 'concluído'],
  ['Relatório semanal', 'Gerado às 08:00', 'concluído'],
];

const solutionBlocks = [
  {
    title: 'Sistemas internos para rotina operacional',
    description: 'Telas, permissões, histórico e regras de negócio desenhadas para o jeito que sua equipe realmente trabalha.',
    icon: Workflow,
    className: 'lg:col-span-2',
    detail: 'fila / status / histórico',
  },
  {
    title: 'Painéis administrativos',
    description: 'Controle de cadastros, demandas, usuários, etapas e indicadores sem depender de abas espalhadas.',
    icon: LayoutDashboard,
    className: '',
    detail: 'admin console',
  },
  {
    title: 'Automações integradas',
    description: 'Rotinas que conectam WhatsApp, planilhas, APIs e ferramentas externas com menos conferência manual.',
    icon: Bot,
    className: '',
    detail: 'webhook ativo',
  },
  {
    title: 'Dashboards e relatórios',
    description: 'Visões objetivas para acompanhar volume, gargalos, SLA, produtividade e resultados da operação.',
    icon: TableProperties,
    className: 'lg:col-span-2',
    detail: 'métricas auditáveis',
  },
];

const processSteps = [
  ['01', 'Mapeamento', 'Entendemos onde o processo começa, quem participa, quais dados circulam e onde o improviso trava.'],
  ['02', 'Arquitetura', 'Definimos telas, entidades, integrações, permissões e regras antes de começar a construir.'],
  ['03', 'Construção', 'Desenvolvemos o sistema com foco em uso diário, clareza operacional e manutenção futura.'],
  ['04', 'Validação', 'Testamos fluxos reais, estados de erro, dados e ajustes que aparecem quando a equipe usa.'],
  ['05', 'Operação', 'Publicamos, orientamos o uso e acompanhamos os primeiros ciclos para estabilizar a rotina.'],
];

const StatusChip = ({ status }: { status: string }) => {
  const styles = {
    pendente: 'border-accent-orange/35 bg-accent-orange/10 text-accent-orange',
    processado: 'border-accent-blue/35 bg-accent-blue/10 text-accent-blue',
    concluído: 'border-[#44D7B6]/35 bg-[#44D7B6]/10 text-[#44D7B6]',
  } as const;

  return (
    <span className={`rounded-[10px] border px-2.5 py-1 text-[10px] font-mono uppercase ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  );
};

const InterfaceMockup = () => (
  <div className="system-shell">
    <div className="system-topbar">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">usenexora.ops</div>
    </div>

    <div className="grid min-h-[520px] lg:grid-cols-[190px_1fr]">
      <aside className="hidden border-r border-accent-blue/14 bg-[#07101d]/75 p-4 lg:block">
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-white">
          <PanelLeft className="h-4 w-4 text-accent-blue" />
          Operação
        </div>
        {['Entrada', 'Processos', 'Clientes', 'Relatórios'].map((item, index) => (
          <div
            key={item}
            className={`mb-2 flex items-center justify-between rounded-[10px] px-3 py-2.5 text-xs ${
              index === 1 ? 'bg-accent-blue/10 text-white' : 'text-text-muted'
            }`}
          >
            <span>{item}</span>
            {index === 1 && <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />}
          </div>
        ))}
      </aside>

      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-col gap-3 border-b border-accent-blue/12 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-blue">Painel operacional</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-white">Fluxo de solicitações</h3>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-[12px] border border-accent-orange/30 bg-accent-orange/10 px-3 py-2 text-xs font-semibold text-accent-orange">
            <MessageCircle className="h-4 w-4" />
            WhatsApp → Sistema → Relatório
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['Registros hoje', '37', '+12%'],
            ['Pendências', '08', '2 críticas'],
            ['Tempo manual salvo', '41h', 'mês atual'],
          ].map(([label, value, note]) => (
            <div key={label} className="rounded-[14px] border border-accent-blue/16 bg-white/[0.035] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-text-muted">{label}</p>
                <Activity className="h-4 w-4 text-accent-blue" />
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-3xl font-semibold text-white">{value}</span>
                <span className="pb-1 text-[11px] text-text-muted">{note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[14px] border border-accent-blue/16 bg-[#0B1628]/72">
            <div className="grid grid-cols-[1fr_1fr_auto] border-b border-accent-blue/12 px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-text-muted">
              <span>Registro</span>
              <span>Status interno</span>
              <span>Fila</span>
            </div>
            {recentRecords.map(([name, description, status]) => (
              <div key={name} className="grid grid-cols-[1fr_1fr_auto] items-center gap-3 border-b border-white/[0.04] px-4 py-3 last:border-b-0">
                <span className="text-sm font-semibold text-white">{name}</span>
                <span className="text-sm text-text-muted">{description}</span>
                <StatusChip status={status} />
              </div>
            ))}
          </div>

          <div className="rounded-[14px] border border-accent-blue/16 bg-[#07101d]/80 p-4">
            <div className="mb-4 flex items-center gap-2">
              <SquareTerminal className="h-4 w-4 text-accent-blue" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">Logs de automação</span>
            </div>
            {[
              '[08:02] lead recebido via WhatsApp',
              '[08:02] CPF consultado no cadastro',
              '[08:03] tarefa criada para financeiro',
              '[08:04] relatório atualizado',
            ].map((line, index) => (
              <p key={line} className={`font-mono text-xs leading-7 ${index === 2 ? 'text-accent-orange' : 'text-text-muted'}`}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ['Entrada', FileSpreadsheet],
            ['Integração', PlugZap],
            ['Base única', Database],
          ].map(([label, Icon], index) => (
            <div key={label as string} className="relative overflow-hidden rounded-[14px] border border-accent-blue/14 bg-base-dark/62 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{label as string}</span>
                <Icon className={`h-5 w-5 ${index === 1 ? 'text-accent-orange' : 'text-accent-blue'}`} />
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-white/8">
                <div className={`h-full rounded-full ${index === 1 ? 'w-[64%] bg-accent-orange' : 'w-[82%] bg-accent-blue'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [showStatus, setShowStatus] = useState(false);
  const [activeModal, setActiveModal] = useState<null | 'terms' | 'privacy'>(null);

  const handleWhatsApp = () => {
    const message = 'Olá! Gostaria de solicitar um diagnóstico para um sistema web ou automação operacional.';
    window.open(`https://wa.me/5562993552673?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-base-dark text-text-main font-sans selection:bg-accent-blue selection:text-base-dark">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(120deg,rgba(20,156,255,0.09),transparent_30%),linear-gradient(180deg,#05070D_0%,#08111F_48%,#05070D_100%)]" />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,#149CFF_1px,transparent_1px),linear-gradient(to_bottom,#149CFF_1px,transparent_1px)] bg-[size:72px_72px]" />

      <header className="fixed top-0 z-50 w-full border-b border-accent-blue/12 bg-[#05070D]/86 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 text-left">
            <img src="/favicon-32x32.png" alt="" className="h-9 w-9 rounded-[10px] border border-accent-blue/20" />
            <span>
              <span className="block font-display text-xl font-semibold tracking-tight text-white">Usenexora</span>
              <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-text-muted">Automations & Web Systems</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-[12px] font-medium text-text-muted transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <MagneticButton onClick={handleWhatsApp} variant="solid" className="px-4 py-3 text-[11px] sm:px-5">
            Contato
          </MagneticButton>
        </div>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:min-h-screen lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-accent-orange bg-accent-orange/8 px-4 py-3">
                <Rows3 className="h-4 w-4 text-accent-orange" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">Sistemas internos, painéis e automações</span>
              </div>

              <h1 className="font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-[78px]">
                Sistemas web para organizar o que hoje está no improviso
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-text-muted sm:text-xl">
                A Usenexora cria sistemas internos, painéis e automações para empresas que controlam processos em
                planilhas, WhatsApp e conferência manual.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton onClick={handleWhatsApp} variant="solid" className="px-7 py-4 text-sm">
                  Solicitar diagnóstico
                </MagneticButton>
                <MagneticButton onClick={() => document.getElementById('sistemas')?.scrollIntoView({ behavior: 'smooth' })} className="px-7 py-4 text-sm">
                  Ver sistemas
                </MagneticButton>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-accent-blue/12 text-sm sm:grid-cols-4">
                {[
                  ['4', 'frentes técnicas'],
                  ['30d', 'primeiro ciclo'],
                  ['API', 'integrações'],
                  ['LGPD', 'base segura'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-accent-blue/12 px-4 py-4 first:pl-0 last:border-r-0">
                    <p className="font-display text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs text-text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <InterfaceMockup />
          </div>
        </section>

        <section className="relative py-20 lg:py-28" id="sistemas">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="section-kicker">O problema operacional</p>
              <h2 className="section-title">Quando a empresa cresce, o controle manual vira risco.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Planilhas paralelas', 'Dados duplicados, versões conflitantes e pouca confiança na informação.'],
                ['WhatsApp como sistema', 'Pedidos, aprovações e histórico ficam presos em conversas difíceis de auditar.'],
                ['Conferência manual', 'Tempo do time consumido por checagem, cópia e atualização repetitiva.'],
                ['Falta de visão', 'Sem painel, a liderança descobre gargalos tarde demais.'],
              ].map(([title, text], index) => (
                <div key={title} className={`problem-card ${index === 1 ? 'sm:translate-y-7' : ''}`}>
                  <span className="font-mono text-[11px] text-accent-blue">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/70 py-20 lg:py-28" id="automacoes">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 flex max-w-5xl flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="section-kicker">Construímos ferramentas</p>
                <h2 className="section-title max-w-3xl">O que desenvolvemos sem empacotar sua operação em um template.</h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-text-muted">
                Cada bloco abaixo representa uma parte de sistema: dados, fluxo, permissões, integração e leitura gerencial.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {solutionBlocks.map(({ title, description, icon: Icon, className, detail }) => (
                <article key={title} className={`solution-card ${className}`}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-[10px] border border-accent-blue/18 bg-accent-blue/8 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-blue">
                        <Icon className="h-3.5 w-3.5" />
                        {detail}
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-white">{title}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-accent-orange" />
                  </div>
                  <p className="mt-4 max-w-2xl leading-7 text-text-muted">{description}</p>

                  <div className="mt-8 grid gap-2 border-t border-accent-blue/10 pt-5 sm:grid-cols-3">
                    {['entrada', 'regra', 'saída'].map((item, index) => (
                      <div key={item} className="rounded-[10px] border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-xs text-text-muted">
                        <span className={index === 1 ? 'text-accent-orange' : 'text-accent-blue'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="technical-panel">
              <p className="section-kicker text-accent-orange">Não é só uma página bonita</p>
              <h2 className="section-title">Um sistema precisa sobreviver ao uso real da equipe.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                A interface é desenhada para registrar decisões, reduzir retrabalho, manter histórico e transformar
                rotina operacional em dados confiáveis.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ['Permissões', 'cada perfil vê e altera apenas o que precisa'],
                ['Histórico', 'ações importantes ficam registradas para consulta'],
                ['Integrações', 'dados entram e saem sem copiar e colar'],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4 rounded-[16px] border border-accent-blue/14 bg-card-alt/70 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent-blue" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/56 py-20 lg:py-28" id="processo">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">Processo de desenvolvimento</p>
              <h2 className="section-title">Do fluxo manual ao sistema em produção.</h2>
            </div>

            <div className="process-rail">
              {processSteps.map(([number, title, description]) => (
                <div key={number} className="process-step">
                  <span className="font-mono text-xs text-accent-orange">{number}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28" id="contato">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:items-start">
            <div>
              <p className="section-kicker text-accent-orange">Diagnóstico</p>
              <h2 className="section-title">Pronto para transformar processos manuais em sistemas?</h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                Se sua empresa ainda depende de planilhas, mensagens soltas e retrabalho, a Usenexora pode criar uma
                solução sob medida para organizar sua operação.
              </p>
              <div className="mt-8 flex items-center gap-3 border-l border-accent-blue/30 pl-4 text-sm text-text-muted">
                <ShieldCheck className="h-5 w-5 text-accent-blue" />
                Conversa inicial focada no processo, não em pacote pronto.
              </div>
            </div>

            <div className="rounded-[18px] border border-accent-blue/16 bg-[#0B1628]/72 p-5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-accent-blue/10 bg-[#05070D] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">Usenexora</p>
            <p className="mt-1">Sistemas web e automações operacionais para empresas em crescimento.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <button onClick={() => setActiveModal('terms')} className="hover:text-white">Termos</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white">Privacidade</button>
            <button onClick={() => setShowStatus(!showStatus)} className="inline-flex items-center gap-2 hover:text-white">
              <Lock className="h-4 w-4" />
              Infra segura
            </button>
          </div>
        </div>
      </footer>

      {showStatus && (
        <div className="fixed bottom-6 right-5 z-50 w-[calc(100vw-40px)] max-w-sm rounded-[16px] border border-accent-blue/22 bg-[#08111F]/95 p-5 shadow-2xl backdrop-blur-xl sm:right-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-blue">
              <ShieldCheck className="h-4 w-4" />
              Status técnico
            </div>
            <button onClick={() => setShowStatus(false)} className="text-text-muted hover:text-white" aria-label="Fechar status">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-text-muted">Ambiente</span><span className="text-white">Monitorado</span></div>
            <div className="flex justify-between"><span className="text-text-muted">SSL</span><span className="text-accent-blue">Ativo</span></div>
            <div className="flex justify-between"><span className="text-text-muted">Contato</span><span className="text-white">WhatsApp</span></div>
          </div>
        </div>
      )}

      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          <button className="absolute inset-0 bg-base-dark/84 backdrop-blur-sm" onClick={() => setActiveModal(null)} aria-label="Fechar" />
          <div className="relative w-full max-w-2xl rounded-[18px] border border-accent-blue/16 bg-[#0B1628] p-7 shadow-2xl sm:p-9">
            <button onClick={() => setActiveModal(null)} className="absolute right-6 top-6 text-text-muted hover:text-white" aria-label="Fechar modal">
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-3xl font-semibold text-white">
              {activeModal === 'terms' ? 'Termos de Serviço' : 'Política de Privacidade'}
            </h3>
            <div className="mt-6 space-y-4 leading-7 text-text-muted">
              <p>A Usenexora trata informações de diagnóstico, processos, acessos e regras de negócio como dados estratégicos do cliente.</p>
              <p>Projetos de sistemas web, automações e integrações são conduzidos com confidencialidade e foco em segurança operacional.</p>
              <p>Não compartilhamos processos, métricas ou acessos com terceiros sem autorização expressa.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
