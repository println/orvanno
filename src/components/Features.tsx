import { Shield, Ruler, Truck, Award, Factory } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "5 Anos de Garantia",
    description: "Segurança e tranquilidade com nossa garantia estendida em todos os projetos.",
  },
  {
    icon: Ruler,
    title: "Projeto 3D",
    description: "Visualize seu projeto antes da execução com renderizações realistas em 3D.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Agilidade na produção e entrega sem comprometer a qualidade.",
  },
  {
    icon: Award,
    title: "Melhor Custo-Benefício",
    description: "Qualidade premium com preços justos. O melhor da região.",
  },
  {
    icon: Factory,
    title: "Material de Alto Padrão",
    description: "Produzido em fábrica própria com os melhores materiais do mercado.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              hsl(45 100% 50%) 2px,
              hsl(45 100% 50%) 4px
            )`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="text-gradient-gold font-brand">Orvanno</span>?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-luxury p-8 lg:p-10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:bg-primary/20" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <a
            href="https://wa.me/5524992821268"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-flex items-center"
          >
            <span>Fale com um Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
