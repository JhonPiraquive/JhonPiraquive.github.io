import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">{"Cierre del módulo POO. Revisa el hub del track y compara tu diseño final con SOLID y acoplamiento bajo."}</p>
      <Callout title="Recuerda" variant="callout-tip">
        <p className="mb-0">
          {
            "POO no es solo sintaxis: es decidir qué sabe cada objeto y cómo colaboran sin romper encapsulamiento."
          }
        </p>
      </Callout>
      <p className="mt-4">
        <Link href="/teaching/poo/index" className="text-[var(--color-secondary)] hover:underline">
          {"Volver al hub del módulo POO"}
        </Link>
      </p>
    </section>
  );
}
