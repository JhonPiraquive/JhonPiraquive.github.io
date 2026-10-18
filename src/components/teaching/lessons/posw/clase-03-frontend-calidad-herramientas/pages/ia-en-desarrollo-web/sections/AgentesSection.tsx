import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function AgentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Sub-agentes: code-reviewer y roles"}
      </h2>
      <CodeFiddle
        language="markdown"
        title="Agente code-reviewer"
        code={`---
name: code-reviewer
description: Revisa PRs por bugs, seguridad y convenciones.
---

1. Sin secrets hardcodeados
2. Tests para código nuevo
3. Vulnerabilidades: inyección, XSS
4. Cumple CLAUDE.md`}
      />
    </section>
  );
}
