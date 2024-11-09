import { Cpu, LineChart, Sparkles, Wallet, Zap } from "lucide-react";

export const siteConfig = {
  name: "GeekMode",
  description: "Sexy UI, High Class Design & Lightning-Fast Development",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "SOL", href: "/solana" },
    { title: "CHART", href: "/chart" },
    { title: "FOLIO", href: "/folio" },
    { title: "About", href: "/about" },    
    { title: "License", href: "/license" },    
  ],
  links: {
    github: "https://github.com/nfneek/next-geeked",
    docs: "https://your-docs-url.com",
    goalpost: "https://goalpost.gg",
    druids: "https://druids.vip",
  },
  features: [
    {
      title: "Next.js 15 Turbo",
      description:
        "Harness the power of the latest Next.js with App Router and Server Components for warp-speed development.",
      icon: Cpu,
    },
    {
      title: "TypeScript Mastery",
      description:
        "Write bulletproof code with advanced TypeScript features and enjoy enhanced developer experience.",
      icon: Sparkles,
    },
    {
      title: "Berry-Powerful",
      description:
        "Lightning-fast package management with Yarn Berry, optimized for maximum efficiency and minimal downtime.",
      icon: Zap,
    },
    {
      title: "Solana Integration",
      description: "Seamlessly integrate Solana wallet functionality for decentralized applications.",
      icon: Wallet,
    },
    {
      title: "Trading Features",
      description: "Implement advanced trading features and real-time market data visualization.",
      icon: LineChart,
    },
  ],
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "ESLint",
    "Prettier",
    "Yarn",
    "Vercel",
    "GitHub Actions",
    "Solana Web3.js",
    "TradingView Charts",
  ],
  footerText: "Crafted with precision by NFNEEK",
};
