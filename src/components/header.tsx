import { CodeXml } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="w-full px-4 py-8 flex justify-between items-center h-12 shrink-0 border-b transition-[width,height] ease-linear sticky top-0 bg-background z-50">
      <div className="flex items-center">
        <CodeXml />
        <h1 className="text-lg font-semibold ml-2">SMBR</h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
