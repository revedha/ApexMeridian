import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
              data-testid="logo-button"
            >
              Apex Meridian
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("ventures")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-ventures"
              >
                Ventures
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && isMobile && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors duration-200 w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors duration-200 w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("ventures")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors duration-200 w-full text-left"
                data-testid="mobile-nav-ventures"
              >
                Ventures
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors duration-200 w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
