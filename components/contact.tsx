"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem para o WhatsApp
    const servicosMap: Record<string, string> = {
      facial: "Tratamentos Faciais",
      corporal: "Tratamentos Corporais",
      laser: "Depilação a Laser",
      outro: "Outro",
    };
    
    const servicoNome = servicosMap[formData.service] || formData.service;
    
    const mensagem = `Olá! Meu nome é ${formData.name}.

E-mail: ${formData.email}
Telefone: ${formData.phone}
Serviço de interesse: ${servicoNome}

Mensagem: ${formData.message || "Gostaria de mais informações."}`;

    // Redireciona para o WhatsApp com o número direto (suporta ?text=)
    window.open(`https://wa.me/556296885806?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p
              className="text-sm tracking-widest uppercase text-primary mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Contato
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Vamos começar sua{" "}
              <span className="italic font-medium">transformação</span>
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Entre em contato para agendar sua avaliação gratuita. Estamos
              prontos para criar um plano de tratamento personalizado para você.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Rua das Flores, 123 - Centro
                    <br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    (11) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Horário</p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Seg - Sex: 9h às 19h
                    <br />
                    Sábado: 9h às 14h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  style={{ fontFamily: "var(--font-sans)" }}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    style={{ fontFamily: "var(--font-sans)" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    style={{ fontFamily: "var(--font-sans)" }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  style={{ fontFamily: "var(--font-sans)" }}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="facial">Tratamentos Faciais</option>
                  <option value="corporal">Tratamentos Corporais</option>
                  <option value="laser">Depilação a Laser</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase rounded-full hover:bg-accent transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
