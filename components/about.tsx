import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.png"
                alt="Naiany Ferreira - Especialista em Estética"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <p className="text-4xl font-light">10+</p>
              <p
                className="text-sm tracking-wider uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Anos de<br />Experiência
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="text-sm tracking-widest uppercase text-primary mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Sobre Mim
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Dedicação à sua{" "}
              <span className="italic font-medium">beleza</span> e{" "}
              <span className="italic font-medium">bem-estar</span>
            </h2>
            <div
              className="space-y-4 text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <p>
                Sou Naiany Ferreira, esteticista formada e apaixonada por
                transformar a autoestima das minhas clientes através de
                tratamentos personalizados e de alta qualidade.
              </p>
              <p>
                Com mais de 10 anos de experiência na área, busco constantemente
                me atualizar com as mais modernas técnicas e tecnologias do
                mercado para oferecer sempre o melhor resultado.
              </p>
              <p>
                Minha missão é proporcionar uma experiência única de cuidado,
                onde cada cliente se sinta especial e saia renovada.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl font-light text-foreground">2.500+</p>
                <p
                  className="text-sm text-muted-foreground tracking-wider uppercase mt-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Clientes
                </p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">15+</p>
                <p
                  className="text-sm text-muted-foreground tracking-wider uppercase mt-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Tratamentos
                </p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">98%</p>
                <p
                  className="text-sm text-muted-foreground tracking-wider uppercase mt-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Satisfação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
