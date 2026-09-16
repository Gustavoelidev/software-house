export interface Project {
  title: string
  description: string
  year: string
  images: { src: string; alt: string }[]
  aspectRatio?: 'landscape' | 'mobile'
}

export const projects: Project[] = [
  {
    title: 'FlashChopp',
    description:
      'Vertical adaptada para o comércio de bebidas. Gerencia faturamento, logística de entregas e o ciclo completo de locação de barris de chopp com os clientes.',
    year: '2026',
    images: [
      { src: '/flashchopp.png', alt: 'FlashChopp — visão geral' },
      { src: '/flashchopp_CRM.png', alt: 'FlashChopp — CRM' },
    ],
  },
  {
    title: 'FlashGas',
    description:
      'Plataforma para distribuidoras de gás. Painel centralizado para entrada de pedidos, despachos e logística diária de entregas — substituindo processos manuais por um fluxo digital ágil.',
    year: '2025',
    images: [
      { src: '/flashgas.png', alt: 'FlashGas — visão geral' },
      { src: '/flashgas_CRM.png', alt: 'FlashGas — CRM' },
    ],
  },
  {
    title: 'JiuManager',
    description:
      'Plataforma SaaS para gestão completa e inteligente de academias de Jiu-Jitsu e centros de artes marciais.',
    year: '2026',
    images: [
      { src: '/jiujitsu.png', alt: 'JiuManager — visão geral' },
      { src: '/jiujitsu_CRM.png', alt: 'JiuManager — CRM' },
      { src: '/jiumanager-checkin.png', alt: 'JiuManager — check-in' },
    ],
  },
  {
    title: 'Sneaker Drops',
    description:
      'Hub de monitoramento de sneakers e lançamentos exclusivos em tempo real. Automação inteligente de drops, catalogação de modelos com filtros avançados e rastreio de promoções das principais marcas.',
    year: '2026',
    images: [
      { src: '/sneakerdrops.png', alt: 'Sneaker Drops — visão geral' },
      { src: '/sneakerdrops_catalog.png', alt: 'Sneaker Drops — catálogo e filtros' },
      { src: '/sneakerdrops_novidades.png', alt: 'Sneaker Drops — lançamentos e novidades' },
    ],
  },
  {
    title: 'João Piscinas',
    description:
      'Plataforma de serviços e manutenção de piscinas em Florianópolis. Sistema interativo de diagnóstico rápido de problemas, solicitação de orçamentos por tipo de imóvel e contratação de serviços avulsos ou recorrentes.',
    year: '2026',
    images: [
      { src: '/joaopiscinas.png', alt: 'João Piscinas — visão geral' },
      { src: '/joaopiscinas_diagnostico.png', alt: 'João Piscinas — diagnóstico rápido' },
      { src: '/joaopiscinas_orcamento.png', alt: 'João Piscinas — solicitação de orçamento' },
    ],
  },
  {
    title: 'APP Mobile NF',
    description:
      'Aplicativo mobile de controle financeiro e inteligência de mercado por leitura de notas fiscais (NFC-e). Processamento automático via OCR, acompanhamento de variação de preços por produto e relatórios detalhados de gastos por categoria.',
    year: '2026',
    aspectRatio: 'mobile',
    images: [
      { src: '/app_nf_dashboard.png', alt: 'APP Mobile NF — dashboard de compras' },
      { src: '/app_nf_scan.png', alt: 'APP Mobile NF — leitor de nota fiscal' },
      { src: '/app_nf_historico.png', alt: 'APP Mobile NF — histórico de preços' },
    ],
  },
]
