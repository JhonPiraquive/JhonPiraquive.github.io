"use client";

import { useState } from "react";
import { ClayCard } from "@/components/clay/ClayCard";
import { SkillCategoryModal } from "@/components/portfolio/SkillCategoryModal";

type SkillItem = {
  name: string;
  percent: number;
};

type SkillCategoryCardProps = {
  group: string;
  items: SkillItem[];
  locale: string;
};

export function SkillCategoryCard({ group, items, locale }: SkillCategoryCardProps) {
  const [open, setOpen] = useState(false);
  const isEn = locale === "en";
  const countLabel = isEn
    ? `${items.length} skill${items.length === 1 ? "" : "s"}`
    : `${items.length} habilidad${items.length === 1 ? "" : "es"}`;
  const hint = isEn ? "Click to view details" : "Clic para ver detalle";

  return (
    <>
      <ClayCard className="h-full" onClick={() => setOpen(true)}>
        <h3 className="font-semibold text-[var(--color-primary)]">{group}</h3>
        <p className="mt-2 text-sm text-[var(--color-neutral-dark)]/70">{countLabel}</p>
        <p className="mt-4 text-xs font-medium text-[var(--color-secondary)]">{hint} →</p>
      </ClayCard>

      {open && (
        <SkillCategoryModal group={group} items={items} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
