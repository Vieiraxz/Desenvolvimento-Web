import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desenvolvimento Web - Exercícios",
  description: "Repositório de exercícios de HTML e CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[var(--background)]">
      <body className="antialiased">{children}</body>
    </html>
  );
}
