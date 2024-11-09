import Link from "next/link";
import { Suspense } from "react";
import { Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import FeatureCard from "@/components/FeatureCard";
import TechStack from "@/components/TechStack";
import { LiveClock } from "@/components/LiveClock";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="max-w-3xl w-full flex flex-col items-center space-y-8 text-center">
        <div className="relative">
          <h1 className="animate-text-shimmer bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl">
            GeekMode
          </h1>
          <div className="absolute -right-4 -top-4 rounded-full bg-gradient-to-br from-primary to-primary-foreground p-1 text-background">
            <Zap size={24} />
          </div>
        </div>
        <p className="max-w-[42rem] text-muted-foreground text-xl">
          Sexy UI, High Class Design & Lightning-Fast Development
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="min-w-[150px]" asChild>
            <Link href={siteConfig.links.docs}>Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[150px]" asChild>
            <Link
              href={siteConfig.links.github}
              className="group flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5 transition-transform group-hover:rotate-[360deg]" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="mt-16 w-full flex justify-center">
        <Suspense
          fallback={<div className="h-[100px] w-full animate-pulse bg-muted" />}
        >
          <TechStack technologies={siteConfig.techStack} />
        </Suspense>
      </div>

      <footer className="mt-16 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
        <Suspense
          fallback={<div className="h-5 w-20 animate-pulse bg-muted" />}
        >
          <LiveClock />
        </Suspense>
        <p>
          {siteConfig.footerText} |{" "}
          <Link href="/license" className="underline underline-offset-4">
            MIT License
          </Link>
        </p>
      </footer>
    </div>
  );
}