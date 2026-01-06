import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Lilian Scramin",
    text: "Ótimos profissionais, o atendimento é maravilhoso. Iris me tirou todas as dúvidas, o preço em comparação com outros lugares de nome não deixa a desejar. Indico sem medo.",
    rating: 5,
  },
  {
    name: "Rosalina Scramin",
    text: "Atendimento de excelência, preços maravilhosos e serviço de qualidade!! Super recomendo.",
    rating: 5,
  },
  {
    name: "Rosi Marques",
    text: "A Orvanno é uma empresa que leva a sério os seus clientes. Todos os projetos são feitos com muita dedicação e empenho. Com certeza vale a pena contratar. Indico de olhos fechados!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            O que{" "}
            <span className="text-gradient-gold">Dizem</span> Sobre Nós
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-luxury p-8 lg:p-10 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-8 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-muted-foreground">Cliente <span className="font-brand">Orvanno</span></span>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
