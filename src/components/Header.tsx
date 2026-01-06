import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

import DynamicLogo from "./DynamicLogo";
import { useLogoVisibility } from "../contexts/LogoVisibilityContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { heroLogoVisibilityPercentage } = useLogoVisibility();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Diferenciais", href: "#features" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  // Calculate opacity: 
  // > 50% hero visibility -> 0% header opacity (hidden)
  // 50% -> 0% hero visibility -> 0% -> 100% header opacity (fade in)
  const headerLogoOpacity = Math.max(0, (75 - heroLogoVisibilityPercentage) / 75);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#hero"
            className="relative z-10 block transition-all duration-300 ease-out"
            style={{
              opacity: headerLogoOpacity,
              transform: `translateY(${heroLogoVisibilityPercentage > 0 ? (heroLogoVisibilityPercentage / 100) * -16 : 0}px)`, // Optional subtle movement
              pointerEvents: headerLogoOpacity < 0.1 ? 'none' : 'auto'
            }}
          >
            <DynamicLogo
              src="/logos/logo-orvanno-only.svg"
              className="h-8 lg:h-9 text-primary w-auto"
              alt="Orvanno"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5524992821268"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 btn-luxury"
          >
            <Phone className="w-4 h-4" />
            <span>Orçamento</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5524992821268"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 btn-luxury-filled"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
