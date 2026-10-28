"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, usePathname } from "@/i18n/navigation";
import { ClayButton } from "@/components/clay/ClayButton";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { SocialLinks } from "@/components/layout/SocialLinks";
import type { PortfolioContent } from "@/lib/portfolio";

type BrandSidebarProps = {
  content: PortfolioContent;
  locale: string;
};

export function BrandSidebar({ content, locale }: BrandSidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const teachingLabel = content.nav.find((n) => n.id === "teaching")?.label ?? "Teaching";
  const close = () => setOpen(false);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape para cerrar y bloqueo del scroll del fondo mientras está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Barra superior: solo en pantallas pequeñas */}
      <header className="brand-sidebar fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between px-4 text-white shadow-md lg:hidden">
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <Image src="/assets/img/logo.png" alt={content.brand.name} width={32} height={32} />
          <span className="text-sm font-semibold">{content.brand.name}</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-2xl transition hover:bg-white/10"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="brand-sidebar"
        >
          {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
        </button>
      </header>

      {/* Fondo oscuro detrás del menú en móvil */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden
      />

      <aside
        id="brand-sidebar"
        className={`brand-sidebar fixed left-0 top-0 z-50 flex h-full w-64 max-w-[85vw] flex-col overflow-y-auto p-4 text-white transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="clay-sidebar-panel flex flex-1 flex-col rounded-2xl p-4">
          <div className="mb-4 flex items-start justify-center">
            <Link href="/" className="inline-block" onClick={close}>
              <Image
                src="/assets/img/logo.png"
                alt={content.brand.name}
                width={56}
                height={56}
                className="mx-auto"
                priority
              />
            </Link>
          </div>

          <SocialLinks content={content} />

          <nav className="mt-6 flex flex-1 flex-col gap-1">
            {content.nav.filter((item) => item.id !== "teaching").map((item) => {
              const href = item.href ? item.href : `#${item.id}`;
              const isHash = href.startsWith("#");
              if (isHash && pathname !== "/") return null;
              return isHash ? (
                <a key={item.id} href={href} className="clay-nav-link text-white/90" onClick={close}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.id} href={href} className="clay-nav-link text-white/90" onClick={close}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
            <ClayButton href={`/${locale}/teaching/`} className="w-full justify-center text-sm">
              {teachingLabel} →
            </ClayButton>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </aside>
    </>
  );
}
