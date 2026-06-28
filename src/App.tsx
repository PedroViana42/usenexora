import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardList,
  Database,
  FileSpreadsheet,
  LayoutDashboard,
  Lock,
  MapPin,
  MessageCircle,
  PlugZap,
  Rows3,
  ShieldCheck,
  SquareTerminal,
  X,
} from 'lucide-react';
import { MagneticButton } from './components/MagneticButton';

export const SITE_URL = 'https://www.usenexora.online';
const WHATSAPP_NUMBER = '5562993552673';
const WHATSAPP_MESSAGE = 'Olá, quero entender como transformar um processo manual da minha empresa em sistema.';

type FaqItem = {
  question: string;
  answer: string;
};

type FeatureItem = {
  title: string;
  text: string;
};

export type PageContent = {
  path: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  subtitle: string;
  primarySectionTitle: string;
  primarySectionText: string[];
  featureTitle: string;
  features: FeatureItem[];
  proofTitle: string;
  proofItems: string[];
  processTitle: string;
  processItems: string[];
  faq: FaqItem[];
};

export const homePage: PageContent = {
  path: '/',
  keyword: 'sistemas web para empresas',
  title: 'Usenexora | Sistemas Web, Automações e Painéis para Empresas',
  description:
    'A Usenexora cria sistemas web, automações e painéis internos para empresas que querem reduzir retrabalho, organizar processos e integrar ferramentas como WhatsApp, planilhas e bancos de dados.',
  h1: 'Sistemas web para empresas que ainda dependem de planilhas, WhatsApp e retrabalho',
  eyebrow: 'Sistemas internos, automações e dashboards',
  subtitle:
    'A Usenexora cria sistemas internos, automações, dashboards e integrações para organizar processos, reduzir tarefas manuais e dar mais controle à operação da sua empresa.',
  primarySectionTitle: 'O que a Usenexora faz',
  primarySectionText: [
    'Criamos sistemas web sob medida para rotinas que não cabem mais em planilhas soltas, mensagens de grupo e conferência manual.',
    'Também desenvolvemos automações, dashboards e integrações com WhatsApp, Google Sheets, bancos de dados e APIs para conectar o que a empresa já usa.',
  ],
  featureTitle: 'Problemas que resolvemos',
  features: [
    { title: 'Planilhas bagunçadas', text: 'Dados duplicados, fórmulas quebradas e versões diferentes do mesmo controle.' },
    { title: 'Mensagens manuais', text: 'Equipe copiando e colando informações no WhatsApp sem histórico confiável.' },
    { title: 'Dados espalhados', text: 'Informações importantes em planilhas, arquivos, grupos e sistemas que não conversam.' },
    { title: 'Falta de painel', text: 'Dificuldade para saber o status de pedidos, entregas, clientes ou atendimentos.' },
  ],
  proofTitle: 'Tipos de sistemas que podemos criar',
  proofItems: [
    'Sistema de controle de entregas',
    'Painel administrativo',
    'Sistema de pedidos',
    'Portal para clientes',
    'Automação com WhatsApp',
    'Dashboard de indicadores',
    'Integração com Google Sheets',
    'Sistema interno para equipe',
  ],
  processTitle: 'Como funciona o processo',
  processItems: [
    'Entendemos o processo atual',
    'Mapeamos os gargalos',
    'Criamos uma solução sob medida',
    'Testamos com a operação real',
    'Ajustamos e colocamos em produção',
  ],
  faq: [
    {
      question: 'O que é um sistema web sob medida?',
      answer: 'É um sistema criado para o processo específico da empresa, com telas, regras e relatórios pensados para a rotina real.',
    },
    {
      question: 'Minha empresa ainda usa planilhas. Vale a pena criar um sistema?',
      answer: 'Vale quando a planilha começa a gerar retrabalho, erro, perda de histórico ou dificuldade para acompanhar o status das tarefas.',
    },
    {
      question: 'É possível integrar o sistema com WhatsApp?',
      answer: 'Sim. Podemos usar o WhatsApp para avisos, confirmações, notificações e etapas automatizadas, respeitando as regras da plataforma.',
    },
    {
      question: 'Qual a diferença entre site, landing page e sistema web?',
      answer: 'Site apresenta a empresa. Landing page vende uma oferta. Sistema web executa processos internos, guarda dados e ajuda a operação.',
    },
  ],
};

export const pages: PageContent[] = [
  homePage,
  {
    path: '/sistemas-web',
    keyword: 'sistemas web sob medida',
    title: 'Sistemas Web Sob Medida para Empresas | Usenexora',
    description:
      'Criamos sistemas web sob medida para empresas que precisam organizar processos, reduzir planilhas e centralizar informações em uma solução própria.',
    h1: 'Sistemas web sob medida para organizar a operação da sua empresa',
    eyebrow: 'Desenvolvimento de sistemas web',
    subtitle:
      'Quando a operação já não cabe em planilhas, um sistema web próprio centraliza dados, padroniza etapas e deixa o trabalho mais fácil de acompanhar.',
    primarySectionTitle: 'Quando vale a pena criar um sistema web',
    primarySectionText: [
      'Um sistema web sob medida faz sentido quando a empresa tem um processo claro, mas perde tempo porque tudo depende de planilhas, arquivos e mensagens manuais.',
      'A solução pode reunir cadastros, permissões, histórico, filtros, relatórios e integrações em uma ferramenta acessível pelo navegador.',
    ],
    featureTitle: 'O que pode entrar no sistema',
    features: [
      { title: 'Cadastros e permissões', text: 'Clientes, pedidos, equipes, usuários e níveis de acesso organizados em uma base única.' },
      { title: 'Fluxos por status', text: 'Etapas claras para acompanhar solicitações, entregas, atendimentos ou processos internos.' },
      { title: 'Relatórios e filtros', text: 'Consultas rápidas para entender o que aconteceu, o que está pendente e onde está o gargalo.' },
      { title: 'Integrações', text: 'Conexão com planilhas, WhatsApp, APIs, bancos de dados e ferramentas que a empresa já usa.' },
    ],
    proofTitle: 'Sistema web ou planilha?',
    proofItems: [
      'Planilhas funcionam bem para controles simples',
      'Sistemas ajudam quando há várias pessoas usando o mesmo processo',
      'Um sistema registra histórico e reduz alterações sem controle',
      'Relatórios ficam mais confiáveis quando os dados vêm de uma base única',
      'Permissões evitam que qualquer pessoa altere qualquer informação',
      'A operação ganha visibilidade sem depender de conferência manual',
    ],
    processTitle: 'Etapas de um projeto sob medida',
    processItems: [
      'Mapeamento do processo atual',
      'Definição das telas e regras',
      'Criação da primeira versão funcional',
      'Teste com usuários reais',
      'Ajustes e publicação',
    ],
    faq: [
      {
        question: 'O que é um sistema web sob medida?',
        answer: 'É uma ferramenta criada para a rotina da empresa, em vez de obrigar o processo a se adaptar a um software pronto.',
      },
      {
        question: 'Quando minha empresa deve trocar planilhas por um sistema?',
        answer: 'Quando há retrabalho, erro recorrente, dificuldade de histórico ou várias pessoas mexendo no mesmo controle.',
      },
      {
        question: 'O sistema pode ter login e níveis de acesso?',
        answer: 'Sim. Podemos criar perfis diferentes para administradores, equipe, clientes ou outros tipos de usuário.',
      },
    ],
  },
  {
    path: '/automacoes',
    keyword: 'automação para empresas',
    title: 'Automação para Empresas: Reduza Tarefas Manuais | Usenexora',
    description:
      'A Usenexora cria automações para empresas que querem reduzir retrabalho, integrar ferramentas e ganhar tempo na operação.',
    h1: 'Automação para empresas que querem reduzir tarefas manuais',
    eyebrow: 'Automação de processos',
    subtitle:
      'Automatizamos rotinas repetitivas para que dados, mensagens, alertas e relatórios circulem sem depender de alguém copiando informação o dia inteiro.',
    primarySectionTitle: 'O que pode ser automatizado',
    primarySectionText: [
      'Automação para empresas é indicada quando uma tarefa se repete muitas vezes, segue regras claras e consome tempo da equipe sem exigir decisão complexa.',
      'Podemos conectar planilhas, sistemas, WhatsApp, bancos de dados e APIs para diminuir digitação manual, atrasos e falhas de comunicação.',
    ],
    featureTitle: 'Exemplos práticos de automação',
    features: [
      { title: 'Mensagens automáticas', text: 'Envio de avisos, confirmações e atualizações quando um pedido muda de etapa.' },
      { title: 'Planilhas atualizadas', text: 'Dados chegando automaticamente em Google Sheets ou saindo da planilha para outro sistema.' },
      { title: 'Alertas internos', text: 'Notificações quando existe atraso, pendência, documento ausente ou dado fora do padrão.' },
      { title: 'Relatórios recorrentes', text: 'Resumo diário ou semanal enviado para a equipe sem alguém montar tudo manualmente.' },
    ],
    proofTitle: 'Antes e depois da automação',
    proofItems: [
      'Antes: copiar dados de uma planilha para outra',
      'Depois: dados sincronizados por regra',
      'Antes: lembrar de avisar cliente ou equipe',
      'Depois: aviso disparado por status',
      'Antes: relatório montado no fim do dia',
      'Depois: relatório gerado com dados já registrados',
    ],
    processTitle: 'Como identificamos boas automações',
    processItems: [
      'Listamos tarefas repetitivas',
      'Entendemos origem e destino dos dados',
      'Definimos regras e exceções',
      'Criamos uma automação testável',
      'Monitoramos os primeiros usos',
    ],
    faq: [
      {
        question: 'Que tipos de tarefas podem ser automatizadas?',
        answer: 'Tarefas repetitivas como envio de mensagens, atualização de planilhas, geração de relatórios e organização de dados.',
      },
      {
        question: 'Automação substitui o sistema interno?',
        answer: 'Nem sempre. Às vezes a automação resolve uma etapa; em outros casos, o melhor caminho é criar um sistema para centralizar tudo.',
      },
      {
        question: 'Dá para automatizar usando ferramentas que a empresa já usa?',
        answer: 'Sim. O ideal costuma ser começar conectando planilhas, WhatsApp, APIs e bancos de dados já presentes na rotina.',
      },
    ],
  },
  {
    path: '/integracao-whatsapp',
    keyword: 'integração com WhatsApp',
    title: 'Integração com WhatsApp para Empresas | Usenexora',
    description:
      'Integramos sistemas, planilhas e processos ao WhatsApp para automatizar mensagens, atendimentos, avisos e rotinas comerciais.',
    h1: 'Integração com WhatsApp para automatizar mensagens e processos',
    eyebrow: 'WhatsApp conectado à operação',
    subtitle:
      'Conectamos WhatsApp a sistemas, planilhas e fluxos internos para reduzir mensagens manuais e melhorar o acompanhamento de clientes, pedidos e equipes.',
    primarySectionTitle: 'Como o WhatsApp pode entrar no processo',
    primarySectionText: [
      'O WhatsApp pode ser usado para confirmar pedidos, avisar mudanças de status, enviar lembretes, registrar solicitações e apoiar atendimentos.',
      'A integração precisa ser pensada com cuidado: mensagem demais atrapalha, mensagem certa no momento certo ajuda a operação e melhora a experiência do cliente.',
    ],
    featureTitle: 'Usos comuns da integração com WhatsApp',
    features: [
      { title: 'Confirmação de pedidos', text: 'Cliente ou equipe recebe confirmação quando uma solicitação é registrada no sistema.' },
      { title: 'Status de entrega', text: 'Avisos automáticos sobre separação, saída, entrega ou pendência de documentação.' },
      { title: 'Google Sheets + WhatsApp', text: 'Linhas de planilha podem disparar avisos ou receber atualizações de processos.' },
      { title: 'Atendimento organizado', text: 'Informações importantes podem sair da conversa e alimentar um controle interno.' },
    ],
    proofTitle: 'Cuidados para usar corretamente',
    proofItems: [
      'Definir quais mensagens realmente precisam ser enviadas',
      'Evitar automações que pareçam spam',
      'Respeitar consentimento e regras da plataforma',
      'Registrar histórico importante fora da conversa',
      'Integrar mensagens com status internos',
      'Criar fallback quando alguma etapa exigir ação humana',
    ],
    processTitle: 'Como planejamos a integração',
    processItems: [
      'Mapeamos as mensagens atuais',
      'Definimos eventos que disparam avisos',
      'Escolhemos origem e destino dos dados',
      'Testamos modelos de mensagem',
      'Acompanhamos erros e ajustes',
    ],
    faq: [
      {
        question: 'É possível integrar o sistema com WhatsApp?',
        answer: 'Sim. Podemos conectar o WhatsApp a sistemas, planilhas e APIs para avisos, confirmações e etapas automatizadas.',
      },
      {
        question: 'Posso enviar mensagens automáticas para clientes?',
        answer: 'Pode, desde que a comunicação respeite regras da plataforma, consentimento e uma frequência adequada.',
      },
      {
        question: 'A integração funciona com Google Sheets?',
        answer: 'Sim. A planilha pode alimentar mensagens ou receber dados vindos de outros sistemas e processos.',
      },
    ],
  },
  {
    path: '/dashboards',
    keyword: 'dashboards para empresas',
    title: 'Dashboards e Painéis Administrativos para Empresas | Usenexora',
    description:
      'Criamos dashboards e painéis administrativos para empresas acompanharem indicadores, pedidos, atendimentos e resultados em tempo real.',
    h1: 'Dashboards para empresas acompanharem dados sem depender de planilhas bagunçadas',
    eyebrow: 'Painéis e indicadores',
    subtitle:
      'Criamos dashboards para transformar dados espalhados em uma visão clara de operação, vendas, financeiro, atendimento, entregas e produtividade.',
    primarySectionTitle: 'O que um dashboard resolve',
    primarySectionText: [
      'Um dashboard ajuda quando a empresa até tem dados, mas precisa abrir várias planilhas ou pedir relatórios para entender o que está acontecendo.',
      'Com um painel bem feito, indicadores, pendências, filtros e comparações ficam visíveis para a equipe tomar decisões com menos achismo.',
    ],
    featureTitle: 'Áreas que podem ter painéis',
    features: [
      { title: 'Financeiro', text: 'Entradas, saídas, inadimplência, previsões e indicadores importantes para a gestão.' },
      { title: 'Vendas', text: 'Pedidos, propostas, clientes, conversões, metas e desempenho por período.' },
      { title: 'Operação e entregas', text: 'Status, prazos, gargalos, responsáveis, atrasos e volume por etapa.' },
      { title: 'Atendimento', text: 'Solicitações, tempo de resposta, motivos de contato e pendências por cliente.' },
    ],
    proofTitle: 'Dashboard ou planilha?',
    proofItems: [
      'Planilha é boa para registrar e calcular',
      'Dashboard é melhor para acompanhar e decidir',
      'Painéis reduzem a dependência de relatórios manuais',
      'Filtros ajudam a encontrar gargalos por período ou responsável',
      'Indicadores ficam mais claros para quem não mexe nos dados brutos',
      'A visualização pode ser conectada ao sistema interno',
    ],
    processTitle: 'Como criamos um painel útil',
    processItems: [
      'Escolhemos os indicadores certos',
      'Identificamos fontes de dados',
      'Criamos filtros e visualizações',
      'Validamos com quem usa no dia a dia',
      'Ajustamos leitura e atualização',
    ],
    faq: [
      {
        question: 'Um dashboard substitui uma planilha?',
        answer: 'Nem sempre. A planilha pode continuar como fonte de dados, mas o dashboard melhora leitura, acompanhamento e decisão.',
      },
      {
        question: 'Que dados podem aparecer em um dashboard?',
        answer: 'Pedidos, vendas, financeiro, entregas, atendimentos, produtividade, pendências e qualquer dado relevante da operação.',
      },
      {
        question: 'O painel pode atualizar automaticamente?',
        answer: 'Sim. Dependendo da fonte dos dados, o dashboard pode ser atualizado por integração, sistema interno ou rotina automatizada.',
      },
    ],
  },
  {
    path: '/sistemas-web-goiania',
    keyword: 'sistemas web em Goiânia',
    title: 'Sistemas Web em Goiânia para Empresas | Usenexora',
    description:
      'A Usenexora desenvolve sistemas web, automações e painéis internos para empresas em Goiânia e atendimento remoto.',
    h1: 'Sistemas web em Goiânia para empresas que precisam organizar processos',
    eyebrow: 'Atendimento em Goiânia, Goiás e remoto',
    subtitle:
      'A Usenexora desenvolve sistemas web, automações e dashboards para empresas de Goiânia que querem organizar a operação sem depender de controles improvisados.',
    primarySectionTitle: 'Desenvolvimento de sistemas web em Goiânia',
    primarySectionText: [
      'Atendemos empresas de Goiânia, Goiás e também projetos remotos para negócios que precisam transformar processos internos em ferramentas digitais úteis.',
      'O foco não é criar uma página bonita e abandonar o problema. O foco é entender a rotina da empresa e construir um sistema que ajude a operação de verdade.',
    ],
    featureTitle: 'Projetos comuns para empresas locais',
    features: [
      { title: 'Sistemas internos', text: 'Controle de pedidos, clientes, entregas, equipe, documentos e solicitações.' },
      { title: 'Automações', text: 'Rotinas para diminuir digitação, conferência manual e avisos repetitivos.' },
      { title: 'Dashboards', text: 'Painéis para acompanhar resultados, pendências e indicadores da operação.' },
      { title: 'Integrações', text: 'Conexão com WhatsApp, planilhas, bancos de dados, APIs e ferramentas já usadas.' },
    ],
    proofTitle: 'Para empresas de Goiânia e Goiás',
    proofItems: [
      'Atendimento próximo quando o projeto pede mais conversa',
      'Reuniões remotas para acelerar alinhamentos',
      'Linguagem direta para mapear processos sem complicar',
      'Soluções sob medida para rotinas reais',
      'Integração com ferramentas já presentes na empresa',
      'Foco em reduzir retrabalho operacional',
    ],
    processTitle: 'Como começamos um projeto local',
    processItems: [
      'Conversamos pelo WhatsApp',
      'Entendemos a rotina atual',
      'Organizamos prioridades',
      'Criamos uma primeira versão',
      'Ajustamos com a equipe usando',
    ],
    faq: [
      {
        question: 'A Usenexora atende empresas de Goiânia?',
        answer: 'Sim. Atendemos empresas em Goiânia, Goiás e também projetos remotos em outras regiões.',
      },
      {
        question: 'Preciso estar em Goiânia para contratar?',
        answer: 'Não. O atendimento pode ser remoto, mas a página local ajuda empresas de Goiânia que procuram um parceiro mais próximo.',
      },
      {
        question: 'Vocês fazem apenas sites?',
        answer: 'Não. O foco da Usenexora é criar sistemas web, automações, dashboards e integrações para processos internos.',
      },
    ],
  },
];

const futurePages = [
  '/automacao-para-empresas',
  '/sistemas-internos',
  '/integracao-google-sheets',
  '/painel-administrativo',
  '/desenvolvimento-de-software-goiania',
  '/sistema-de-pedidos',
  '/sistema-de-entregas',
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Usenexora',
  url: SITE_URL,
  description: 'Desenvolvimento de sistemas web, automações, dashboards e integrações para empresas.',
  telephone: '+5562993552673',
  areaServed: ['Goiânia', 'Goiás', 'Atendimento remoto'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Goiânia',
    addressRegion: 'GO',
    addressCountry: 'BR',
  },
  serviceType: [
    'Sistemas web',
    'Automações',
    'Dashboards',
    'Integração com WhatsApp',
    'Integração com Google Sheets',
    'Integração com APIs',
  ],
};

export const getCanonical = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

export const getFaqSchema = (page: PageContent) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: page.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

const upsertMeta = (selector: string, create: () => HTMLMetaElement | HTMLLinkElement, valueKey: string, value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute(valueKey, value);
};

const setJsonLd = (id: string, data: unknown) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export const getPageByPath = (path: string) => {
  const normalizedPath = path.replace(/\/$/, '') || '/';
  return pages.find((page) => page.path === normalizedPath) ?? homePage;
};

const NavLink = ({ href, children }: { href: string; children: string }) => (
  <a className="text-[12px] font-medium text-text-muted transition-colors hover:text-white" href={href}>
    {children}
  </a>
);

const MiniDashboard = () => (
  <div className="system-shell">
    <div className="system-topbar">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">usenexora.ops</div>
    </div>

    <div className="relative z-10 grid gap-4 p-4 sm:p-5">
      <img
        src="/images/interface.png"
        alt="Interface de sistema web com painel administrativo e indicadores operacionais"
        className="h-auto w-full rounded-[16px] border border-accent-blue/14 object-cover"
      />
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ['Registros hoje', '37', BarChart3],
          ['Pendências', '08', ClipboardList],
          ['Integrações', '04', PlugZap],
        ].map(([label, value, Icon]) => (
          <div key={label as string} className="rounded-[14px] border border-accent-blue/16 bg-white/[0.035] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-muted">{label as string}</p>
              <Icon className="h-4 w-4 text-accent-blue" />
            </div>
            <p className="mt-3 font-display text-3xl font-semibold text-white">{value as string}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

type AppProps = {
  initialPath?: string;
};

export default function App({ initialPath }: AppProps = {}) {
  const [showStatus, setShowStatus] = useState(false);
  const [activeModal, setActiveModal] = useState<null | 'terms' | 'privacy'>(null);
  const page = useMemo(
    () => getPageByPath(initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname)),
    [initialPath],
  );
  const canonical = getCanonical(page.path);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const openWhatsApp = () => window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = page.title;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    }, 'content', page.description);

    upsertMeta('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    }, 'href', canonical);

    const metas = [
      ['property', 'og:type', 'content', 'website'],
      ['property', 'og:locale', 'content', 'pt_BR'],
      ['property', 'og:site_name', 'content', 'Usenexora'],
      ['property', 'og:title', 'content', page.title],
      ['property', 'og:description', 'content', page.description],
      ['property', 'og:url', 'content', canonical],
      ['property', 'og:image', 'content', `${SITE_URL}/images/interface.png`],
      ['name', 'twitter:card', 'content', 'summary_large_image'],
      ['name', 'twitter:title', 'content', page.title],
      ['name', 'twitter:description', 'content', page.description],
      ['name', 'twitter:image', 'content', `${SITE_URL}/images/interface.png`],
    ];

    metas.forEach(([attrName, attrValue, valueKey, value]) => {
      upsertMeta(`meta[${attrName}="${attrValue}"]`, () => {
        const meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        return meta;
      }, valueKey, value);
    });

    setJsonLd('usenexora-organization-schema', organizationSchema);
    setJsonLd('usenexora-faq-schema', getFaqSchema(page));
  }, [canonical, page]);

  return (
    <div className="min-h-screen bg-base-dark font-sans text-text-main selection:bg-accent-blue selection:text-base-dark">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(120deg,rgba(20,156,255,0.08),transparent_28%),linear-gradient(180deg,#05070D_0%,#08111F_50%,#05070D_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#149CFF_1px,transparent_1px),linear-gradient(to_bottom,#149CFF_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.055]" />

      <header className="fixed top-0 z-50 w-full border-b border-accent-blue/12 bg-[#05070D]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="/" className="flex items-center gap-3 text-left">
            <img src="/favicon-32x32.png" alt="Logo da Usenexora" className="h-9 w-9 rounded-[10px] border border-accent-blue/20" />
            <span>
              <span className="block font-display text-xl font-semibold tracking-tight text-white">Usenexora</span>
              <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-text-muted">Sistemas e automações</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Páginas principais">
            <NavLink href="/sistemas-web">Sistemas web</NavLink>
            <NavLink href="/automacoes">Automações</NavLink>
            <NavLink href="/integracao-whatsapp">WhatsApp</NavLink>
            <NavLink href="/dashboards">Dashboards</NavLink>
            <NavLink href="/sistemas-web-goiania">Goiânia</NavLink>
          </nav>

          <MagneticButton onClick={openWhatsApp} variant="solid" className="px-4 py-3 text-[11px] sm:px-5">
            Conversar no WhatsApp
          </MagneticButton>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-accent-orange bg-accent-orange/8 px-4 py-3">
                <Rows3 className="h-4 w-4 text-accent-orange" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">{page.eyebrow}</span>
              </div>

              <h1 className="font-display text-[40px] font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[74px]">
                {page.h1}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-text-muted sm:text-xl">{page.subtitle}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton onClick={openWhatsApp} variant="solid" className="px-7 py-4 text-sm">
                  Conversar no WhatsApp
                </MagneticButton>
                <a
                  href="#conteudo"
                  className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-accent-blue/32 bg-[#0B1628]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-accent-blue/70"
                >
                  Entender como funciona
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 border-y border-accent-blue/12 text-sm sm:grid-cols-4">
                {[
                  ['keyword', page.keyword],
                  ['escopo', 'sob medida'],
                  ['contato', 'WhatsApp'],
                  ['base', 'processo real'],
                ].map(([value, label]) => (
                  <div key={value} className="border-r border-accent-blue/12 px-4 py-4 first:pl-0 last:border-r-0">
                    <p className="font-display text-lg font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs text-text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <MiniDashboard />
          </div>
        </section>

        <section className="relative py-20 lg:py-28" id="conteudo">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="section-kicker">Contexto</p>
              <h2 className="section-title">{page.primarySectionTitle}</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-text-muted">
              {page.primarySectionText.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <p className="border-l border-accent-orange/45 pl-5 text-white">
                A conversa começa pelo processo: o que entra, quem mexe, onde trava e que informação precisa aparecer.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/70 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">Aplicação prática</p>
              <h2 className="section-title">{page.featureTitle}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.features.map((feature, index) => {
                const icons = [FileSpreadsheet, MessageCircle, Database, LayoutDashboard];
                const Icon = icons[index % icons.length];
                return (
                  <article key={feature.title} className="example-card">
                    <Icon className={`h-5 w-5 ${index === 1 ? 'text-accent-orange' : 'text-accent-blue'}`} />
                    <h3 className="mt-6 font-display text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-muted">{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="technical-panel">
              <p className="section-kicker text-accent-orange">O que considerar</p>
              <h2 className="section-title">{page.proofTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                A melhor solução não nasce de uma lista pronta de recursos. Ela nasce do processo real, das exceções e do que a equipe precisa enxergar no dia a dia.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {page.proofItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-[16px] border border-accent-blue/14 bg-card-alt/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <p className="text-sm leading-6 text-text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-accent-blue/10 bg-[#07101D]/56 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">Processo</p>
              <h2 className="section-title">{page.processTitle}</h2>
            </div>

            <div className="process-rail">
              {page.processItems.map((item, index) => (
                <div key={item} className="process-step">
                  <span className="font-mono text-xs text-accent-orange">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">Validamos essa etapa com foco em clareza, uso real e redução de retrabalho.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Perguntas frequentes</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {page.faq.map((item) => (
                <article key={item.question} className="service-row block">
                  <h3 className="font-display text-xl font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-accent-blue/10 bg-[#07101D]/56 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.62fr] lg:items-center">
            <div>
              <p className="section-kicker text-accent-orange">Contato</p>
              <h2 className="section-title">Tem um processo que precisa sair do improviso?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Chame no WhatsApp e explique como esse processo funciona hoje. A partir disso, avaliamos o melhor caminho: sistema, automação, dashboard ou integração.
              </p>
            </div>
            <div className="rounded-[20px] border border-accent-orange/24 bg-accent-orange/[0.055] p-6">
              <p className="mb-5 text-sm leading-7 text-text-muted">
                Sem formulário. A conversa vai direto para o WhatsApp para entender o contexto com mais rapidez.
              </p>
              <MagneticButton onClick={openWhatsApp} variant="solid" className="w-full px-7 py-4 text-sm">
                Conversar no WhatsApp
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-accent-blue/10 bg-[#05070D] py-10">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 text-sm text-text-muted sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-white">Usenexora</p>
            <p className="mt-1">Sistemas web, automações, dashboards e integrações.</p>
            <p className="mt-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-blue" />
              Goiânia, Goiás e atendimento remoto
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {pages.map((item) => (
              <a key={item.path} href={item.path} className="hover:text-white">
                {item.path === '/' ? 'Home' : item.path.replace('/', '')}
              </a>
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
              {activeModal === 'privacy' && (
                <p>O contato principal do site acontece pelo WhatsApp, sem formulário próprio coletando dados adicionais na página.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        {futurePages.join(', ')}
      </div>
    </div>
  );
}
