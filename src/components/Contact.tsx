import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(45 100% 50%) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Vamos Conversar Sobre{" "}
            <span className="text-gradient-gold">Seu Projeto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entre em contato e transforme seus ambientes com móveis planejados de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <a 
                href="https://wa.me/5524992821268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    (24) 99282-1268
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:contato@orvannoplanejados.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    contato@orvannoplanejados.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    R. Cap. Benedito Lopes Bragança, 179<br />
                    São Geraldo, Volta Redonda - RJ
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="card-luxury p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-primary/10 mx-auto lg:mx-0 flex items-center justify-center mb-6 animate-pulse-glow">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
                Pronto para Transformar seu Espaço?
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Solicite seu orçamento agora pelo WhatsApp e receba um atendimento 
                personalizado de nossos especialistas.
              </p>

              <a
                href="https://wa.me/5524992821268"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-filled inline-flex items-center gap-3 group w-full sm:w-auto justify-center"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
