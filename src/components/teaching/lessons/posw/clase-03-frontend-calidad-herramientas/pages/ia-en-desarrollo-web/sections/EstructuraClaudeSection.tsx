import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EstructuraClaudeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Contexto para agentes: CLAUDE.md"}
      </h2>
      <MermaidDiagram
        chart={`flowchart TD
  ROOT[mi-proyecto/]
  ROOT --> CL[CLAUDE.md]
  ROOT --> DOT[.claude/]
  DOT --> AG[agents/]
  DOT --> RU[rules/]
  DOT --> KB[kb/]
  AG --> FE[frontend-developer.md]
  RU --> SEC[security.md]
  KB --> ARC[arquitectura.md]`}
      />
      <CodeFiddle
        language="markdown"
        title="CLAUDE.md mínimo"
        code={`# Mi Proyecto

## Stack
- Frontend: React + TypeScript + Vite
- Backend: NestJS + PostgreSQL

## Convenciones
- camelCase variables; PascalCase clases/componentes
- Archivos kebab-case (tarjeta-producto.tsx)
- Commits: Conventional Commits

## Comandos
- npm run dev | test | build

## NO hacer
- No hardcodear secrets
- No push directo a main`}
      />
    </section>
  );
}
