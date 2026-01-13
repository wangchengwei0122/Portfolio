import type { Locale } from "./en"

export const zh: Locale = {
  header: {
    nav: {
      home: "首页",
      projects: "项目",
      skills: "技能",
      experience: "经历",
      contact: "联系",
    },
    resume: "简历",
    resumeShort: "简历",
  },
  hero: {
    eyebrow: {
      name: "王成威",
      role: "前端系统工程师",
    },
    headline: {
      gradient: "构建前端系统",
      normal: "服务于 Web3 应用。",
    },
    description: {
      main: "8年以上生产级前端开发经验——涵盖企业平台、开放平台及 Web3 dApp。",
      sub: "从 SSR 优化到链上交易流程，我构建可扩展的界面。",
    },
    cta: {
      primary: "查看项目",
      secondary: "关于我",
    },
    scroll: "滚动",
    cards: {
      systemOverview: "系统概览",
      realTimeMetrics: "实时指标",
      performance: "性能",
      uptime: "运行时间",
      liveActivity: "实时活动",
      processNode: "进程节点",
      active: "运行中",
      uiModule: "UI 模块",
      rendered: "已渲染",
    },
  },
  projects: {
    eyebrow: "精选作品",
    title: "项目",
    description: "Web3 dApp 与企业平台——从合约集成到生产部署。",
    viewLive: "在线预览",
    github: "GitHub",
    items: {
      dex: {
        title: "DEX 前端",
        subtitle: "Uniswap 风格去中心化交易所界面",
        description:
          "构建生产级 DEX 界面，支持代币兑换流程、通过 RainbowKit 实现多钱包连接及网络切换。实现完整交易生命周期：余额读取、授权检查、批准及滑点/价格影响计算的兑换执行。将链上逻辑解耦为类型化适配器 hooks 以提高可维护性。",
      },
      fundr: {
        title: "Fundr",
        subtitle: "Web3 众筹 dApp",
        description:
          "全栈 Web3 众筹平台，支持活动创建、链上捐款及基于角色的提款。架构采用索引器优先的数据流：合约事件 → PostgreSQL → Fastify REST API → Cloudflare Edge 缓存 → Next.js 前端。前端专门从 API 层读取数据；钱包操作通过 wagmi/viem 处理。",
      },
      enterprise: {
        title: "企业开放平台",
        subtitle: "企查查 — B2B 数据服务",
        description:
          "主导服务数百万用户的企业开放平台前端架构。使用 Nuxt.js 实现 SSR 优化以改善首屏加载和 SEO。集成 AI 驱动功能（智能问答、内容摘要）。推动 monorepo 采用并构建模块化组件库以实现跨团队标准化。",
      },
    },
  },
  contact: {
    eyebrow: "开放机会",
    title: "正在寻找具有 Web3 经验的前端工程师？",
    description: {
      p1: "我专注于构建 Web3 前端——DEX 界面、钱包集成以及具有清晰链上交易流程的 dApp 用户体验。",
      p2: "8年以上生产经验，涵盖企业平台和 DeFi 应用。熟悉从索引器到边缘缓存再到前端的全栈 dApp 架构。",
    },
    openTo: {
      item1: "全职 Web3 / DeFi 前端职位",
      item2: "合同与咨询项目",
      item3: "远程优先职位",
    },
    cta: "发送邮件",
    responseTime: "通常在24小时内回复",
  },
}
