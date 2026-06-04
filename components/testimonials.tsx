"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Mariana Silva",
    text: "Simplesmente maravilhoso! A Naiany é extremamente profissional e atenciosa. Os resultados dos tratamentos superaram minhas expectativas. Recomendo de olhos fechados!",
    service: "Tratamento Facial",
  },
  {
    name: "Carla Oliveira",
    text: "Encontrei na clínica da Naiany o cuidado que eu precisava. Ambiente acolhedor, produtos de qualidade e um atendimento impecável. Minha pele nunca esteve tão bonita!",
    service: "Peeling e Limpeza de Pele",
  },
  {
    name: "Fernanda Costa",
    text: "Faço depilação a laser há 6 meses e os resultados são incríveis. A Naiany explica todo o procedimento e se preocupa genuinamente com o conforto da cliente.",
    service: "Depilação a Laser",
  },
  {
    name: "Juliana Mendes",
    text: "As massagens modeladoras mudaram meu corpo e minha autoestima. Profissionalismo e carinho em cada sessão. Já indiquei para todas as minhas amigas!",
    service: "Tratamento Corporal",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="depoimentos" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-widest uppercase text-primary mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground text-balance">
            O que nossas{" "}
            <span className="italic font-medium">clientes</span> dizem
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Quote Icon */}
            <svg
              className="w-12 h-12 text-primary/30 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p
              className="text-xl md:text-2xl text-foreground leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {testimonials[activeIndex].text}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {testimonials[activeIndex].service}
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-primary"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="p-3 rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Depoimento anterior"
            >
              <svg
                className="w-5 h-5 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="p-3 rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Próximo depoimento"
            >
              <svg
                className="w-5 h-5 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
