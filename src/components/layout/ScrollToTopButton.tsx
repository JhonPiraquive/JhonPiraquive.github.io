"use client";

import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      className="clay-scroll-top fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-xl text-[var(--color-primary)] shadow-lg transition hover:scale-105"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <IoChevronUp />
    </button>
  );
}
