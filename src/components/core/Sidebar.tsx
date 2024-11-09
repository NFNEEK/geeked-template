"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, LineChart, BadgeDollarSign, Wallet, FileText } from "lucide-react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: "HOME", href: "/", icon: Home },
    { name: "CHART", href: "/chart", icon: LineChart },
    { name: "SOL", href: "/solana", icon: BadgeDollarSign },
    { name: "FOLIO", href: "/folio", icon: Wallet },
    { name: "LICENSE", href: "/license", icon: FileText },
  ];

  return (
    <aside className={cn(
      "sticky top-16 h-[calc(100vh-4rem)] bg-background/95 border-r backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 overflow-y-auto",
      collapsed ? "w-16" : "w-[240px]"
    )}>
      <div className="flex flex-col h-full py-4">
        <nav className="flex-1">
          <div className="space-y-1 px-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 transition-colors",
                    "hover:bg-background/80 hover:text-foreground",
                    "active:bg-background/70",
                    pathname === item.href ? "bg-background/70 text-foreground" : "text-muted-foreground",
                    collapsed ? "h-10 justify-center px-2" : "h-12 px-4"
                  )}
                >
                  <item.icon className={cn(
                    "shrink-0",
                    collapsed ? "h-5 w-5" : "h-5 w-5"
                  )} />
                  {!collapsed && (
                    <span className="tracking-wide">{item.name}</span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}