import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p
              className="text-sm tracking-widest uppercase text-primary mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Clínica de Estética
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-6 text-balance">
              Beleza que{" "}
              <span className="italic font-medium">transforma</span> e{" "}
              <span className="italic font-medium">inspira</span>
            </h1>
            <p
              className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Tratamentos personalizados que realçam sua beleza natural com
              técnicas avançadas e cuidado excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase rounded-full hover:bg-accent transition-colors text-center"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Agendar Consulta
              </Link>
              <Link
                href="#servicos"
                className="px-8 py-4 border border-foreground text-foreground text-sm font-medium tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background transition-colors text-center"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Nossos Serviços
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Tratamento estético de alta qualidade"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Explore
        </span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
