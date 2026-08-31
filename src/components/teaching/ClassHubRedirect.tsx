"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

type Props = {
  href: string;
};

/** Soft redirect for removed class hub indices (static export safe). */
export function ClassHubRedirect({ href }: Props) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [router, href]);

  return (
    <p className="px-6 py-16 text-center text-[var(--color-neutral-dark)]/80">
      {"Redirigiendo a la primera página de la clase…"}
    </p>
  );
}
