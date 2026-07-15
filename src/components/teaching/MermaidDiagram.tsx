"use client";

import { useEffect, useId, useRef, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
  /** Título visible bajo el diagrama (figcaption). */
  title?: string;
  /** Descripción accesible para lectores de pantalla. */
  description?: string;
};

export function MermaidDiagram({ chart, title, description }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, "");
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setReady(false);

    import("mermaid")
      .then((m) => {
        if (cancelled || !ref.current) return;
        m.default.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
        });
        const id = `mmd-${reactId}-${Math.random().toString(36).slice(2, 8)}`;
        return m.default.render(id, chart).then(({ svg }) => {
          if (cancelled || !ref.current) return;
          ref.current.innerHTML = svg;
          setReady(true);
        });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "No se pudo renderizar el diagrama.";
        setError(message);
        if (ref.current) ref.current.innerHTML = "";
      });

    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  const diagram = (
    <div
      ref={ref}
      className="overflow-x-auto rounded-lg bg-white p-4"
      role="img"
      aria-label={description ?? title ?? "Diagrama Mermaid"}
      aria-busy={!ready && !error}
    />
  );

  const content = (
    <>
      {diagram}
      {error ? (
        <p className="mt-2 text-sm text-red-700" role="alert">
          {"Error al dibujar el diagrama. Revisa la sintaxis Mermaid."}
        </p>
      ) : null}
      {title ? <figcaption className="mt-2 text-center text-sm text-[var(--color-neutral-mid)]">{title}</figcaption> : null}
    </>
  );

  if (title) {
    return <figure className="my-6">{content}</figure>;
  }

  return <div className="my-6">{content}</div>;
}
