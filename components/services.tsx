import Image from "next/image";

const services = [
  {
    title: "Tratamentos Faciais",
    description:
      "Limpeza de pele, peeling, microagulhamento e protocolos anti-idade para uma pele radiante e rejuvenescida.",
    image: "/images/service-facial.png",
  },
  {
    title: "Tratamentos Corporais",
    description:
      "Massagens modeladoras, drenagem linfática e procedimentos para redução de medidas e celulite.",
    image: "/images/service-body.png",
  },
  {
    title: "Depilação a Laser",
    description:
      "Tecnologia de ponta para depilação definitiva com conforto e resultados duradouros.",
    image: "/images/service-laser.png",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-widest uppercase text-primary mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Nossos Serviços
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground text-balance">
            Tratamentos <span className="italic font-medium">exclusivos</span>{" "}
            para você
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {service.description}
                </p>
                <button
                  className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase hover:gap-3 transition-all"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Saiba mais
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
