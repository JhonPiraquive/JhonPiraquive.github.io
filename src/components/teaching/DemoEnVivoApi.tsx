"use client";

import { useState } from "react";
import { ClayCard } from "@/components/clay";

export type DemoEnVivoApiProps = {
  buttonLabel: string;
  url: string;
  targetSelector: string;
  loadingMessage: string;
  errorMessage: string;
};

export function DemoEnVivoApi({
  buttonLabel,
  url,
  targetSelector,
  loadingMessage,
  errorMessage,
}: DemoEnVivoApiProps) {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const targetId = targetSelector.replace(/^#/, "");

  async function handleClick() {
    setLoading(true);
    setText(loadingMessage);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = (await res.json()) as { title?: string };
      setText(data.title ?? "Sin título en la respuesta");
    } catch {
      setText(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ClayCard className="my-8 p-6">
      <button
        type="button"
        className="clay-button bg-[var(--color-secondary)] hover:bg-[var(--color-accent)]"
        onClick={handleClick}
        disabled={loading}
      >
        {buttonLabel}
      </button>
      <p id={targetId} className="mt-4 min-h-[1.5rem]">
        {text}
      </p>
    </ClayCard>
  );
}
