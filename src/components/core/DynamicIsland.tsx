"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Zap, Home, FileText, LineChart, Wallet, Coins, ChevronDown, BadgeDollarSign } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { LiveClock } from "@/components/LiveClock";

export default function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("home");
  const [mounted, setMounted] = useState(false);

  const pages = [
    { name: "HOME", icon: Home, href: "/" },
    { name: "MIT", icon: FileText, href: "/license" },
    { name: "CHART", icon: LineChart, href: "/chart" },
    { name: "FOLIO", icon: Wallet, href: "/folio" },
    { name: "SOL", icon: BadgeDollarSign, href: "/solana" },
  ];

  useEffect(() => {
    const page = pages.find(p => p.href === pathname);
    if (page) {
      setCurrentPage(page.name);
    }
    setMounted(true);
  }, [pathname]);

  const getCurrentPageIcon = () => {
    const page = pages.find(p => p.name === currentPage);
    return page ? page.icon : Home;
  };

  const getCurrentThemeIcon = () => {
    if (!mounted) return Zap;
    switch (theme) {
      case "dark": return Moon;
      case "light": return Sun;
      default: return Zap;
    }
  };

  const ThemeIcon = getCurrentThemeIcon();
  const PageIcon = getCurrentPageIcon();

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="fixed left-1/2 top-2 z-50 -translate-x-1/2">
      <motion.div
        className={`flex items-center justify-center rounded-lg bg-background shadow-lg ${
          theme === "dark" ? "shadow-[0_0_1px_2px_silver]" : "shadow-[0_0_1px_2px_silver]"
        }`}
        initial={{ width: "200px", height: "44px" }}
        animate={{
          width: isExpanded ? "280px" : "200px",
          height: isExpanded ? "220px" : "44px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex w-full flex-col items-center justify-around p-2"
            >
              <div className="flex w-full justify-between items-center mb-2">
                <ThemeIcon className="h-5 w-5" />
                <LiveClock />
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex justify-end"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex w-full justify-around border-t border-gray-200 dark:border-gray-700" >
                <div className="flex justify-around items-center w-full h-auto mt-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTheme("light");
                  }}
                >
                  <Sun className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTheme("dark");
                  }}
                >
                  <Moon className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTheme("system");
                  }}
                >
                  <Zap className="h-5 w-5" />
                </Button>
                </div>
              </div>
              <div/>
              <div className="w-full border-t border-gray-200 dark:border-gray-700 my-2 pb-2">
              </div>
              <div className="grid grid-cols-3 gap-4 w-full">
                {pages.map((page) => (
                  <Link key={page.name} href={page.href}>
                    <Button
                      size="sm"
                      variant={currentPage === page.name ? "secondary" : "ghost"}
                      className="flex flex-col items-center p-2 w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <page.icon className="h-4 w-4 mb-1" />
                   
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between w-full px-5"
            >
              <ThemeIcon className="h-7 w-5" />
              <LiveClock />
              <PageIcon className="h-7 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}