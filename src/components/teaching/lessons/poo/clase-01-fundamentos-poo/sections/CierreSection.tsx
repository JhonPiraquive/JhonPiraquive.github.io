import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">
        {
          "Puente 1→2: ya tienes Producto encapsulado y su caja UML. En Clase 2 especializas (Libro/Gadget) y relacionas Pedido→Línea sin romper encapsulamiento."
        }
      </p>
      <Callout title="Recuerda" variant="callout-tip">
        <p className="mb-0">
          {
            "POO no es solo sintaxis: es decidir qué sabe cada objeto y cómo colaboran sin romper encapsulamiento."
          }
        </p>
      </Callout>
      <p className="mt-4">
        <Link
          href="/teaching/poo/clase-02-relaciones-reutilizacion/objetivos"
          className="text-[var(--color-secondary)] hover:underline"
        >
          {"Ir a Clase 2 — Objetivos"}
        </Link>
        {" · "}
        <Link href="/teaching/poo/index" className="text-[var(--color-secondary)] hover:underline">
          {"Hub POO"}
        </Link>
      </p>
    </section>
  );
}
