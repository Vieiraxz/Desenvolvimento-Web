import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

interface ViewPageProps {
  searchParams: Promise<{ file?: string }>;
}

export default async function ViewPage({ searchParams }: ViewPageProps) {
  const params = await searchParams;
  const file = params.file;

  if (!file) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--muted-foreground)]">Nenhum arquivo selecionado</p>
      </div>
    );
  }

  // Sanitizar o caminho do arquivo para evitar path traversal
  const sanitizedFile = file.replace(/\.\./g, "");
  const filePath = path.join(process.cwd(), sanitizedFile);

  let content = "";
  let error = false;

  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch {
    error = true;
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-red-500">Arquivo não encontrado: {file}</p>
        <Link
          href="/"
          className="text-[var(--primary)] hover:underline"
        >
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[var(--card)] border-b border-[var(--border)] px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Voltar</span>
        </Link>
        <span className="text-[var(--foreground)] font-medium truncate max-w-md">
          {file}
        </span>
        <div className="w-20" />
      </header>

      <main className="flex-1">
        <iframe
          srcDoc={content}
          className="w-full h-[calc(100vh-57px)] border-0"
          title={file}
          sandbox="allow-same-origin"
        />
      </main>
    </div>
  );
}
