import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ChartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-4">Chart Analysis</h1>
      {/* Add chart content here */}
      <p>Chart analysis content goes here.</p>
    </div>
  );
}