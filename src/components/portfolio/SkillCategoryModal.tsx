"use client";

import { ModalOverlay } from "@/components/ui/ModalOverlay";
import { SkillProgressBar } from "@/components/portfolio/SkillProgressBar";

type SkillItem = {
  name: string;
  percent: number;
};

type SkillCategoryModalProps = {
  group: string;
  items: SkillItem[];
  onClose: () => void;
};

export function SkillCategoryModal({ group, items, onClose }: SkillCategoryModalProps) {
  return (
    <ModalOverlay
      ariaLabel={group}
      onClose={onClose}
      panelClassName="clay-panel max-h-[85vh] w-full max-w-lg overflow-y-auto"
    >
      <h3 className="mb-6 text-xl font-semibold text-[var(--color-primary)]">{group}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <SkillProgressBar key={item.name} name={item.name} percent={item.percent} />
        ))}
      </div>
    </ModalOverlay>
  );
}
