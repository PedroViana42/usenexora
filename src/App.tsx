import { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  Database,
  FileSpreadsheet,
  FolderClock,
  LayoutDashboard,
  Lock,
  MessageCircle,
  PanelLeft,
  PlugZap,
  Rows3,
  ShieldCheck,
  SquareTerminal,
  TableProperties,
  Truck,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react';
import { MagneticButton } from './components/MagneticButton';

const WHATSAPP_NUMBER = '5562993552673';
const WHATSAPP_MESSAGE = 'Olá, quero entender como transformar um processo manual da minha empresa em sistema.';

const navItems = [
  ['Início', '#inicio'],
  ['Sistemas', '#sistemas'],
  ['Automações', '#automacoes'],
  ['Exemplos', '#exemplos'],
  ['Processo', '#processo'],
  ['Contato', '#contato'],
];

const recentRecords = [
  ['Pedido #1842', 'Aguardando NF', 'pendente'],
  ['Cliente Martins', 'Cadastro validado', 'processado'],
  ['Comprovante enviado', 'Anexado ao pedido', 'concluído'],
  ['Relatório diário', 'Gerado às 08:00', 'concluído'],
];

const examples = [
  { title: 'Controle de entregas e motoristas', detail: 'rotas / status / comprovantes', icon: Truck, size: 'lg:col-span-2' },
  { title: 'Cadastro de clientes e atendimentos', detail: 'histórico por cliente', icon: UsersRound, size: '' },
  { title: 'Painel de solicitações internas', detail: 'fila por etapa', icon: ClipboardList, size: '' },
  { title: 'Sistema para substituir planilhas', detail: 'base única', icon: FileSpreadsheet, size: '' },
  { title: 'Registro de comprovantes e arquivos', detail: 'anexos organizados', icon: FolderClock, size: 'lg:col-span-2' },
  { title: 'Dashboard de operação', detail: 'pendências e gargalos', icon: TableProperties, size: '' },
  { title: 'Integração com Google Sheets', detail: 'entrada automática', icon: PlugZap, size: '' },
  { title: 'Automação de relatórios', detail: 'envio recorrente', icon: Bot, size: '' },
  { title: 'Controle de pedidos ou chamados', detail: 'status por responsável', icon: Workflow, size: '' },
  { title: 'Histórico de ações e alterações', detail: 'auditoria simples', icon: Database, size: '' },
];

const services = [
  ['Sistemas internos', 'Ferramentas para controlar entregas, clientes, equipes, pedidos, chamados, documentos ou qualquer rotina específica da empresa.'],
  ['Painéis administrativos', 'Telas para cadastrar, acompanhar, editar, filtrar e consultar informações sem depender de várias planilhas.'],
  ['Automações', 'Rotinas que pegam dados de planilhas, WhatsApp, arquivos ou APIs e organizam tudo automaticamente.'],
  ['Integrações', 'Conexão com Google Sheets, WhatsApp, Drive, bancos de dados, APIs e ferramentas que a empresa já usa.'],
  ['Relatórios', 'Indicadores simples para saber o que aconteceu, o que está pendente e onde estão os gargalos.'],
];

const processSteps = [
  ['01', 'Você mostra como faz hoje', 'Entendemos o processo atual: planilhas, mensagens, arquivos, responsáveis e problemas.'],
  ['02', 'Desenhamos o sistema', 'Definimos as telas, campos, regras, usuários e integrações necessárias.'],
  ['03', 'Criamos a primeira versão', 'Construímos uma versão funcional para testar com o processo real.'],
  ['04', 'Ajustamos com base no uso', 'Corrigimos detalhes, melhoramos fluxos e deixamos pronto para o dia a dia.'],
  ['05', 'Publicamos', 'Colocamos o sistema no ar e acompanhamos os primeiros usos.'],
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
              '[08:02] pedido recebido via WhatsApp',
              '[08:02] cliente localizado no cadastro',
              '[08:03] comprovante anexado',
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
            ['Google Sheets', FileSpreadsheet],
            ['WhatsApp', MessageCircle],
            ['Relatório gerado', Database],
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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const openWhatsApp = () => window.open(whatsappUrl, '_blank');

  return (
    <div className="min-h-screen bg-base-dark text-text-main font-sans selection:bg-accent-blue selection:text-base-dark">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(120deg,rgba(20,156,255,0.08),transparent_28%),linear-gradient(180deg,#05070D_0%,#08111F_50%,#05070D_100%)]" />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.055] bg-[linear-gradient(to_right,#149CFF_1px,transparent_1px),linear-gradient(to_bottom,#149CFF_1px,transparent_1px)] bg-[size:72px_72px]" />

      <header className="fixed top-0 z-50 w-full border-b border-accent-blue/12 bg-[#05070D]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 text-left">
            <img src="/favicon-32x32.png" alt="" className="h-9 w-9 rounded-[10px] border border-accent-blue/20" />
            <span>
              <span className="block font-display text-xl font-semibold tracking-tight text-white">Usenexora</span>
              <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-text-muted">Automations & Web Systems</span>
            </span>
          </button>

          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-[12px] font-medium text-text-muted transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <MagneticButton onClick={openWhatsApp} variant="solid" className="px-4 py-3 text-[11px] sm:px-5">
            WhatsApp
          </MagneticButton>
        </div>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:min-h-screen lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-accent-orange bg-accent-orange/8 px-4 py-3">
                <Rows3 className="h-4 w-4 text-accent-orange" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">Da planilha ao sistema. Do manual ao automatizado.</span>
              </div>

              <h1 className="font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-[78px]">
                Sistemas web para organizar o que hoje está no improviso
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-text-muted sm:text-xl">
                A Usenexora cria sistemas internos, painéis e automações para empresas que controlam processos em
                planilhas, WhatsApp e conferência manual.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
                Cadastro, histórico, relatórios, integrações e rotinas internas em um lugar só.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton onClick={openWhatsApp} variant="solid" className="px-7 py-4 text-sm">
                  Chamar no WhatsApp
                </MagneticButton>
                <MagneticButton onClick={() => document.getElementById('exemplos')?.scrollIntoView({ behavior: 'smooth' })} className="px-7 py-4 text-sm">
                  Ver exemplos de sistemas
                </MagneticButton>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-accent-blue/12 text-sm sm:grid-cols-4">
                {[
                  ['cadastro', 'base central'],
                  ['status', 'por etapa'],
                  ['logs', 'histórico salvo'],
                  ['API', 'integrações'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-accent-blue/12 px-4 py-4 first:pl-0 last:border-r-0">
                    <p className="font-display text-lg font-semibold text-white">{value}</p>
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
              <p className="section-kicker">Problema</p>
              <h2 className="section-title">Quando o controle fica espalhado, o erro aparece</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-text-muted">
              <p>
                Uma planilha para cada coisa. Mensagens importantes no WhatsApp. Prints enviados no grupo. Alguém
                conferindo tudo manualmente no fim do dia.
              </p>
              <p>
                Isso funciona enquanto a operação é pequena. Depois começa o retrabalho: dado duplicado, informação
                perdida, atraso, cobrança e falta de histórico.
              </p>
              <p className="border-l border-accent-orange/45 pl-5 text-white">
                Quando isso começa a travar a rotina, está na hora de transformar o processo em sistema.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/70 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">Antes e depois</p>
              <h2 className="section-title">Do improviso para o controle</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="compare-card compare-card-before">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-orange">Antes</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">Processo espalhado</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {['várias planilhas', 'mensagens perdidas', 'conferência manual', 'dados duplicados', 'falta de histórico', 'ninguém sabe o status real'].map((item) => (
                    <div key={item} className="rounded-[12px] border border-accent-orange/14 bg-accent-orange/[0.045] px-4 py-3 text-sm text-text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="compare-card">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-blue">Depois</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">Sistema acompanhando a rotina</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {['dados centralizados', 'histórico salvo', 'filtros e relatórios', 'status por etapa', 'menos retrabalho', 'processo em tempo real'].map((item) => (
                    <div key={item} className="rounded-[12px] border border-accent-blue/16 bg-accent-blue/[0.055] px-4 py-3 text-sm text-text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28" id="exemplos">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 flex max-w-5xl flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="section-kicker">Exemplos</p>
                <h2 className="section-title max-w-3xl">Exemplos de sistemas que podemos criar</h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-text-muted">
                Ideias concretas para rotinas que hoje costumam viver em planilhas, grupos e arquivos soltos.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {examples.map(({ title, detail, icon: Icon, size }, index) => (
                <article key={title} className={`example-card ${size}`}>
                  <div className="flex items-start justify-between gap-4">
                    <Icon className={`h-5 w-5 ${index % 4 === 0 ? 'text-accent-orange' : 'text-accent-blue'}`} />
                    <span className="rounded-[10px] border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] uppercase text-text-muted">
                      {detail}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{title}</h3>
                  {index === 0 && (
                    <div className="mt-5 grid grid-cols-[1fr_auto] gap-2 border-t border-accent-blue/10 pt-4 text-xs">
                      <span className="text-text-muted">Motorista</span><StatusChip status="processado" />
                      <span className="text-text-muted">Entrega #882</span><StatusChip status="pendente" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/56 py-20 lg:py-28" id="automacoes">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="section-kicker">Serviços</p>
              <h2 className="section-title">O que a Usenexora desenvolve</h2>
            </div>
            <div className="grid gap-4">
              {services.map(([title, text], index) => (
                <article key={title} className={`service-row ${index === 0 || index === 3 ? 'lg:ml-10' : ''}`}>
                  <span className="font-mono text-[11px] text-accent-orange">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 leading-7 text-text-muted">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr]">
            <div className="technical-panel">
              <p className="section-kicker text-accent-orange">Para quem é</p>
              <h2 className="section-title">Para empresas que já passaram da fase do improviso</h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                Quando o processo já existe, mas depende demais de memória, planilha e mensagens, um sistema interno
                começa a fazer sentido.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'controlam processos em planilhas',
                'recebem informações importantes pelo WhatsApp',
                'perdem tempo conferindo dados manualmente',
                'precisam de histórico e relatórios',
                'querem centralizar informações',
                'precisam de um sistema próprio para uma rotina interna',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-[16px] border border-accent-blue/14 bg-card-alt/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <p className="text-sm leading-6 text-text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/56 py-20 lg:py-28" id="processo">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">Processo</p>
              <h2 className="section-title">Como começamos</h2>
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
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.62fr] lg:items-center">
            <div>
              <p className="section-kicker text-accent-orange">Contato</p>
              <h2 className="section-title">Tem algum processo da sua empresa que virou bagunça?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Se hoje ele depende de planilha, WhatsApp, conferência manual ou arquivo perdido, dá para transformar
                isso em um sistema.
              </p>
            </div>
            <div className="rounded-[20px] border border-accent-orange/24 bg-accent-orange/[0.055] p-6">
              <p className="mb-5 text-sm leading-7 text-text-muted">
                A conversa começa pelo processo: o que entra, quem mexe, onde trava e que informação precisa aparecer.
              </p>
              <MagneticButton onClick={openWhatsApp} variant="solid" className="w-full px-7 py-4 text-sm">
                Chamar no WhatsApp
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-accent-blue/10 bg-[#05070D] py-10">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 text-sm text-text-muted sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-white">Usenexora</p>
            <p className="mt-1">Automations & Web Systems</p>
            <p className="mt-3 max-w-xl">Sistemas web, painéis e automações para organizar processos internos.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white">{label}</a>
            ))}
            <button onClick={openWhatsApp} className="text-accent-orange hover:text-white">WhatsApp</button>
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
            <div className="flex justify-between"><span className="text-text-muted">Contato</span><span className="text-white">WhatsApp</span></div>
            <div className="flex justify-between"><span className="text-text-muted">Projetos</span><span className="text-accent-blue">Sob medida</span></div>
            <div className="flex justify-between"><span className="text-text-muted">Escopo</span><span className="text-white">Sistemas internos</span></div>
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
              <p>A Usenexora trata informações de processos, acessos, arquivos e regras de negócio como dados estratégicos do cliente.</p>
              <p>Projetos de sistemas web, automações e integrações são conduzidos com confidencialidade e foco em segurança operacional.</p>
              <p>Não compartilhamos processos, métricas ou acessos com terceiros sem autorização expressa.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
