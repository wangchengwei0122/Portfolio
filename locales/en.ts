export const en = {
  header: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    resume: "Resume",
    resumeShort: "CV",
  },
  hero: {
    eyebrow: {
      name: "Chengwei Wang",
      role: "Frontend Systems Engineer",
    },
    headline: {
      gradient: "Building frontend systems",
      normal: "for Web3 applications.",
    },
    description: {
      main: "8+ years shipping production frontends—enterprise platforms, open platforms, and Web3 dApps.",
      sub: "From SSR optimization to on-chain transaction flows, I build interfaces that scale.",
    },
    cta: {
      primary: "View Projects",
      secondary: "About Me",
    },
    scroll: "Scroll",
    cards: {
      systemOverview: "System Overview",
      realTimeMetrics: "Real-time metrics",
      performance: "Performance",
      uptime: "Uptime",
      liveActivity: "Live Activity",
      processNode: "Process Node",
      active: "Active",
      uiModule: "UI Module",
      rendered: "Rendered",
    },
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Projects",
    description: "Web3 dApps and enterprise platforms—from contract integration to production deployment.",
    viewLive: "View Live",
    github: "GitHub",
    items: {
      dex: {
        title: "DEX Frontend",
        subtitle: "Uniswap-style Decentralized Exchange UI",
        description:
          "Built a production-ready DEX interface supporting token swap flows, multi-wallet connection via RainbowKit, and network switching. Implemented full transaction lifecycle: balance reads, allowance checks, approvals, and swap execution with slippage/price impact calculations. Decoupled on-chain logic into typed adapter hooks for maintainability.",
      },
      fundr: {
        title: "Fundr",
        subtitle: "Web3 Crowdfunding dApp",
        description:
          "Full-stack Web3 crowdfunding platform with campaign creation, on-chain contributions, and role-based withdrawals. Architected indexer-first data flow: contract events → PostgreSQL → Fastify REST API → Cloudflare Edge cache → Next.js frontend. Frontend reads exclusively from API layer; wallet operations handled via wagmi/viem.",
      },
      enterprise: {
        title: "Enterprise Open Platform",
        subtitle: "Qichacha — B2B Data Services",
        description:
          "Led frontend architecture for an enterprise open platform serving millions of users. Delivered SSR optimization with Nuxt.js for initial load and SEO. Integrated AI-powered features (intelligent Q&A, content summarization). Drove monorepo adoption and built a modular component library for cross-team standardization.",
      },
    },
  },
  contact: {
    eyebrow: "Open to Opportunities",
    title: "Looking for a frontend engineer with Web3 experience?",
    description: {
      p1: "I specialize in building Web3 frontends—DEX interfaces, wallet integrations, and dApp UX with clean on-chain transaction flows.",
      p2: "8+ years of production experience spanning enterprise platforms and DeFi applications. Comfortable with full-stack dApp architecture from indexer to edge cache to frontend.",
    },
    openTo: {
      item1: "Full-time Web3 / DeFi frontend roles",
      item2: "Contract & consulting engagements",
      item3: "Remote-first positions",
    },
    cta: "Send an Email",
    responseTime: "Typically responds within 24 hours",
  },
}

export type Locale = typeof en
