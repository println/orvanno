import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

import DynamicLogo from "./DynamicLogo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <DynamicLogo
              src="/logos/logo-orvanno-only.svg"
              className="h-6 text-primary mb-6"
              alt="Orvanno"
            />
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Móveis planejados sob medida de alto padrão. Transformamos seus
              ambientes com design, qualidade e sofisticação.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Início", "Projetos", "Diferenciais", "Sobre", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5524992821268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(24) 99282-1268</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@orvannoplanejados.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@orvannoplanejados.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Volta Redonda - RJ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orvanno Planejados. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Móveis sob medida de alta qualidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
