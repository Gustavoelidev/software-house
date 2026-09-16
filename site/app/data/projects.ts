export interface Project {
  title: string
  description: string
  year: string
  images: { src: string; alt: string }[]
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
]
