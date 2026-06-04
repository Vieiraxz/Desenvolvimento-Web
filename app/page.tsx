import Link from "next/link";

const exercicios = {
  "CSS - Exercícios de Estilização": [
    { nome: "Exercício 1 - Um", arquivo: "CSS/Um.html" },
    { nome: "Exercício 2 - Dois", arquivo: "CSS/Dois.html" },
    { nome: "Exercício 3 - Três", arquivo: "CSS/Tres.html" },
    { nome: "Exercício 4 - Quatro", arquivo: "CSS/Quatro.html" },
    { nome: "Exercício 5 - Cinco", arquivo: "CSS/Cinco.html" },
    { nome: "Exercício 6 - Seis", arquivo: "CSS/Seis.html" },
    { nome: "Exercício 7 - Sete", arquivo: "CSS/Sete.html" },
    { nome: "Exercício 8 - Oito", arquivo: "CSS/Oito.html" },
    { nome: "Exercício 9 - Nove", arquivo: "CSS/nove.html" },
    { nome: "Exercício 10 - Dez", arquivo: "CSS/Dez.html" },
  ],
  "Lista 1 - HTML Básico": [
    { nome: "Menu Principal", arquivo: "DW/lista1/Menu.html" },
    { nome: "Tabela", arquivo: "DW/lista1/tabela.html" },
    { nome: "Tabela Certa", arquivo: "DW/lista1/tabelacerta.html" },
    { nome: "Boletim", arquivo: "DW/lista1/boletim.html" },
    { nome: "Boletim Avançado", arquivo: "DW/lista1/boletim avan.html" },
    { nome: "Imagens", arquivo: "DW/lista1/imagens.html" },
    { nome: "Iframe Menu", arquivo: "DW/lista1/iframemenu.html" },
    { nome: "Diagnóstico", arquivo: "DW/lista1/diagnostico.html" },
    { nome: "Cidade", arquivo: "DW/lista1/cidade.html" },
    { nome: "Matérias", arquivo: "DW/lista1/MAterias.html" },
    { nome: "Nome", arquivo: "DW/lista1/Nome.html" },
    { nome: "Exercício 06", arquivo: "DW/lista1/06.html" },
    { nome: "Exercício 08", arquivo: "DW/lista1/08.html" },
    { nome: "Exercício Dez", arquivo: "DW/lista1/dez.html" },
    { nome: "Todas as Pastas", arquivo: "DW/lista1/todasaspastas.html" },
  ],
  "Lista 4 - HTML Intermediário": [
    { nome: "Index", arquivo: "DW/lista04/index.html" },
    { nome: "Aula", arquivo: "DW/lista04/aula.html" },
    { nome: "Nome", arquivo: "DW/lista04/nome.html" },
    { nome: "Teste", arquivo: "DW/lista04/teste.html" },
    { nome: "Fim", arquivo: "DW/lista04/fim.html" },
  ],
  "Projeto 2 - Hospital": [
    { nome: "Hospital Principal", arquivo: "DW/projeto2_dw/Hospital.html" },
    { nome: "Principal", arquivo: "DW/projeto2_dw/Principal.html" },
    { nome: "Cabeçalho", arquivo: "DW/projeto2_dw/cabecalho.html" },
    { nome: "Menu", arquivo: "DW/projeto2_dw/menu.html" },
    { nome: "Rodapé", arquivo: "DW/projeto2_dw/rodape.html" },
    { nome: "Tabela", arquivo: "DW/projeto2_dw/tabela.html" },
  ],
  "Projeto 3 - Sistema de Cadastro": [
    { nome: "Entrada", arquivo: "DW/projeto3_dw/entrada.html" },
    { nome: "Menu", arquivo: "DW/projeto3_dw/menu.html" },
    { nome: "Cliente - Cadastro", arquivo: "DW/projeto3_dw/cliente/cadastro.html" },
    { nome: "Cliente - Sobre", arquivo: "DW/projeto3_dw/cliente/sobre.html" },
    { nome: "Funcionário - Cadastro", arquivo: "DW/projeto3_dw/funcionario/cadastro.html" },
    { nome: "Funcionário - Info", arquivo: "DW/projeto3_dw/funcionario/info.html" },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
          Desenvolvimento Web
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg">
          Repositório de Exercícios de HTML e CSS
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(exercicios).map(([categoria, items]) => (
          <section
            key={categoria}
            className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
              {categoria}
            </h2>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.arquivo}>
                  <Link
                    href={`/view?file=${encodeURIComponent(item.arquivo)}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>{item.nome}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center text-[var(--muted-foreground)] text-sm">
        <p>Vieiraxz - Desenvolvimento Web</p>
      </footer>
    </main>
  );
}
