"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-wide text-foreground">
            Naiany Ferreira
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#servicos"
              className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Serviços
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Sobre
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Contato
            </Link>
            <Link
              href="#contato"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-full hover:bg-accent transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#servicos"
                className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#depoimentos"
                className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="#contato"
                className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-full hover:bg-accent transition-colors text-center"
                style={{ fontFamily: "var(--font-sans)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
