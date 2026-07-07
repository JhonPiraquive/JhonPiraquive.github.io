"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/common";
import { FiCheck, FiCopy } from "react-icons/fi";

export type CodeFiddleProps = {
  code: string;
  language: string;
  title?: string;
  filename?: string;
};

function normalizeLanguage(language: string): string {
  const lang = language.replace(/^language-/, "").toLowerCase();
  if (lang === "js") return "javascript";
  if (lang === "ts") return "typescript";
  if (lang === "cs" || lang === "c#") return "csharp";
  if (lang === "sh" || lang === "shell") return "bash";
  if (lang === "yml") return "yaml";
  return lang;
}

export function CodeFiddle({ code, language, title, filename }: CodeFiddleProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const lang = normalizeLanguage(language);
  const label = filename ?? title ?? lang;

  useEffect(() => {
    const node = codeRef.current;
    if (!node) return;
    node.textContent = code;
    node.className = `hljs language-${lang}`;
    if (hljs.getLanguage(lang)) {
      node.innerHTML = hljs.highlight(code, { language: lang }).value;
    } else {
      node.textContent = code;
    }
  }, [code, lang]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-white/10 bg-[var(--color-neutral-dark)] shadow-lg">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2 text-sm">
        <span className="truncate font-medium text-white/80">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
          aria-label={copied ? "Código copiado" : "Copiar código"}
        >
          {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code ref={codeRef} className={`hljs language-${lang}`} />
      </pre>
    </div>
  );
}
