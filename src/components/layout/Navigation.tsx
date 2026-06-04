"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
const logoImg = "/imports/Jovana_-_Avatar_logo-05.jpg";

interface NavigationProps {
  onBookNow?: () => void;
}

export function Navigation({ onBookNow }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/65 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Dr Jovana Marković" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-sans text-xl text-foreground">dr Jovana Marković</span>
              <span className="text-xs text-muted-foreground tracking-widest">SKIN & SMILE</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              O meni
            </button>
            <button onClick={() => scrollToSection("treatments")} className="text-foreground hover:text-primary transition-colors">
              Tretmani
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition-colors">
              Galerija
            </button>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Cenovnik
            </Link>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </button>
            {onBookNow && (
              <button
                onClick={onBookNow}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-all hover:scale-105"
              >
                Zakaži tretman
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-foreground hover:text-primary">
              O meni
            </button>
            <button onClick={() => scrollToSection("treatments")} className="block w-full text-left py-2 text-foreground hover:text-primary">
              Tretmani
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left py-2 text-foreground hover:text-primary">
              Galerija
            </button>
            <Link href="/pricing" className="block w-full text-left py-2 text-foreground hover:text-primary">
              Cenovnik
            </Link>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-foreground hover:text-primary">
              Kontakt
            </button>
            {onBookNow && (
              <button
                onClick={() => {
                  onBookNow();
                  setIsOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-all hover:scale-105"
              >
                Zakaži tretman
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
