"use client";

import { useEffect, useRef } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    import("mermaid").then((m) => {
      if (cancelled || !ref.current) return;
      m.default.initialize({ startOnLoad: false, theme: "neutral" });
      m.default.render(`mmd-${Math.random().toString(36).slice(2)}`, chart).then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      });
    });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return <div ref={ref} className="my-6 overflow-x-auto rounded-lg bg-white p-4" />;
}
