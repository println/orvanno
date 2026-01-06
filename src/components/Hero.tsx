import { useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

import DynamicLogo from "./DynamicLogo";
import { useLogoVisibility } from "../contexts/LogoVisibilityContext";

const Hero = () => {
  const { setHeroLogoVisibilityPercentage } = useLogoVisibility();
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkVisibility = () => {
      const logo = document.querySelector('#hero-logo svg > path');
      if (!logo) return;
      const logoRect = logo.getBoundingClientRect();
      const header = document.querySelector('header');

      const headerBottom = header ? header.getBoundingClientRect().bottom : 0;

      // Calculate intersection: visible height of the logo below the header
      const visibleHeight = Math.max(0, logoRect.bottom - headerBottom);
      const totalHeight = logoRect.height;

      let percentage = 0;
      if (visibleHeight > 0) {
        // Clamp 0-100
        const rawPercentage = (visibleHeight / totalHeight) * 100;
        percentage = Math.max(0, Math.min(100, rawPercentage));
      }

      setHeroLogoVisibilityPercentage(percentage);
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    const resizeObserver = new ResizeObserver(checkVisibility);
    if (logoRef.current) {
      resizeObserver.observe(logoRef.current);
    }

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      resizeObserver.disconnect();
    };
  }, [setHeroLogoVisibilityPercentage]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambiente de luxo com móveis planejados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />

      {/* Content Container */}
      <div
        className="relative z-10 w-full flex flex-col items-center gap-10 mt-16"
      >
        {/* Logo & Tagline */}
        <div
          ref={logoRef}
          className="md:mt-10 mx-auto px-6 lg:px-12 text-center animate-fade-in-up stagger-1 flex flex-col items-center md:gap-4"
        >
          <DynamicLogo
            src={`${import.meta.env.BASE_URL}logos/logo-orvanno-only.svg`}
            className="[@media(max-height:500px)]:h-14 h-24 md:h-32 text-primary mx-4 md:mx-2 max-w-max"
            alt="Orvanno"
            id="hero-logo"
          />
          <span className="[@media(max-height:500px)]:hidden inline-block px-4 py-2 text-xs md:text-lg lg:text-xl uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/5">
            Móveis Planejados de Alto Padrão
          </span>
        </div>

        {/* Subtitle & Buttons */}
        <div className="[@media(max-height:500px)]:mt-0 [@media(max-height:900px)]:mt-1 mt-[2vh] md:mt-10 mx-auto px-6 lg:px-12 text-center mb-32">
          <div className="max-w-4xl mx-auto">
            {/* Subtitle */}
            <p className="[@media(max-height:600px)]:hidden animate-fade-in-up stagger-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Criamos móveis sob medida que unem sofisticação, funcionalidade e
              personalidade. <span className="[@media(max-height:800px)]:hidden">Cada projeto é uma obra de arte exclusiva.</span>
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/5524992821268"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-filled flex items-center gap-3 group"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="btn-luxury"
              >
                <span>Ver Projetos</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-11 left-0 w-full flex justify-center scroll-indicator">
        <a href="#portfolio" className="z-auto p-6 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Corner Accents */}
      <div className="absolute [@media(max-height:600px)]:top-4 top-[10vh] md:top-24 left-6 lg:left-12 md:w-20 md:h-20 w-[7vh] h-[7vh]">
        <div className="absolute top-0 left-0 w-full h-px bg-primary/30" />
        <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
      </div>
      <div className="absolute [@media(max-height:600px)]:top-4 top-[10vh] md:top-24 right-6 lg:right-12 md:w-20 md:h-20 w-[7vh] h-[7vh]">
        <div className="absolute top-0 right-0 w-full h-px bg-primary/30" />
        <div className="absolute top-0 right-0 w-px h-full bg-primary/30" />
      </div>
    </section>
  );
};

export default Hero;
