import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-workshop.jpg";

const highlights = [
  "Mais de 500 projetos entregues",
  "Equipe especializada em design",
  "Atendimento personalizado",
  "Materiais de primeira linha",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Oficina Orvanno"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 bg-card border border-border p-6 lg:p-8 glow-gold">
              <div className="text-5xl lg:text-6xl font-display font-bold text-gradient-gold mb-2">
                5+
              </div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">
                Anos de Experiência
              </div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30 -translate-x-4 -translate-y-4" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Transformando Sonhos em{" "}
              <span className="text-gradient-gold">Realidade</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos uma empresa especializada em móveis planejados sob medida, 
              atendendo projetos residenciais e comerciais com excelência. 
              Nossa missão é criar ambientes que reflitam a personalidade e 
              o estilo de vida de cada cliente.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Com sede em Volta Redonda - RJ, contamos com uma equipe de 
              profissionais altamente qualificados e uma fábrica equipada 
              com tecnologia de ponta para garantir acabamento impecável 
              em cada projeto.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5524992821268"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center gap-3 group"
            >
              <span>Conhecer Mais</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
