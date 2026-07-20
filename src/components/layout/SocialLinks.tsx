"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaPrint, FaWhatsapp } from "react-icons/fa";
import type { PortfolioContent } from "@/lib/portfolio";

type SocialLinksProps = {
  content: PortfolioContent;
};

export function SocialLinks({ content }: SocialLinksProps) {
  const [busy, setBusy] = useState(false);
  const { github, linkedin, whatsapp } = content.social;

  const links = [
    { href: github, label: "GitHub", Icon: FaGithub },
    { href: linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: whatsapp, label: "WhatsApp", Icon: FaWhatsapp },
  ];

  async function handlePrint() {
    if (busy) return;
    setBusy(true);
    try {
      const { downloadResumePdf } = await import("@/lib/download-resume-pdf");
      await downloadResumePdf(content);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex justify-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="clay-social-link flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white/80 transition hover:text-[var(--color-secondary)]"
        >
          <Icon />
        </a>
      ))}
      <button
        type="button"
        onClick={handlePrint}
        disabled={busy}
        aria-label={content.resumePdf.printLabel}
        title={content.resumePdf.printLabel}
        className="clay-social-link flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white/80 transition hover:text-[var(--color-secondary)] disabled:opacity-50"
      >
        <FaPrint />
      </button>
    </div>
  );
}
