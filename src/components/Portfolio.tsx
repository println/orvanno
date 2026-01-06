import { ArrowUpRight } from "lucide-react";
import bedroom1 from "@/assets/portfolio-bedroom.jpg";
import bathroom1 from "@/assets/portfolio-bathroom.jpg";
import living1 from "@/assets/portfolio-living.jpg";
import hall1 from "@/assets/portfolio-hall.jpg";

const projects = [
  {
    id: 1,
    title: "Quarto Casal",
    category: "Residencial",
    image: bedroom1,
    size: "large",
  },
  {
    id: 2,
    title: "Banheiro",
    category: "Residencial",
    image: bathroom1,
    size: "small",
  },
  {
    id: 3,
    title: "Sala de Estar",
    category: "Residencial",
    image: living1,
    size: "small",
  },
  {
    id: 4,
    title: "Hall de Entrada",
    category: "Residencial",
    image: hall1,
    size: "large",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background relative">


      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />

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

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Portfólio
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
              Projetos que{" "}
              <span className="text-gradient-gold">Inspiram</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
            Cada projeto carrega nossa dedicação aos detalhes, design personalizado e qualidade impecável.
          </p>
        </div>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden img-zoom ${project.size === "large" ? "md:row-span-2" : ""
                }`}
            >
              {/* Image */}
              <div className={`relative ${project.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-widest text-primary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Ver detalhes</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <a
            href="https://wa.me/5524992821268"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-filled inline-flex items-center gap-3"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
