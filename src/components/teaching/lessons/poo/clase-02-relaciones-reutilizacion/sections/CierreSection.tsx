import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de Clase 2"}</h2>
      <p className="my-4">
        {
          "Tienda Andes ya tiene catálogo especializado, pedidos con líneas propias y un diagrama que cualquier compañero puede leer. En Clase 3 sumas contratos abstractos, polimorfismo más profundo y SOLID — sin cambiar de dominio."
        }
      </p>
      <Callout title="Recuerda" variant="callout-tip">
        <p className="mb-0">
          {
            "POO es decidir qué objeto conoce a cuál, con qué fuerza, y qué no debe saber del interior del otro."
          }
        </p>
      </Callout>
      <p className="mt-4">
        <Link
          href="/teaching/poo/clase-03-experto-poo/objetivos"
          className="text-[var(--color-secondary)] hover:underline"
        >
          {"Ir a Clase 3 — Objetivos"}
        </Link>
        {" · "}
        <Link href="/teaching/poo/index" className="text-[var(--color-secondary)] hover:underline">
          {"Hub POO"}
        </Link>
      </p>
    </section>
  );
}
