import { LiveClock } from "@/components/LiveClock";
import DynamicIsland from "@/components/core/DynamicIsland";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
      <div className="flex items-center">
        LOGO
          </div>
        
        <div className="flex items-center">
          <DynamicIsland />
        </div>
        <div className="flex items-center">
          <LiveClock />
        </div>
      </div>
    </nav>
  );
}