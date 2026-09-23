import Link from "next/link";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "SOLID no reemplaza el criterio: te ayuda a discutir Tienda Andes en equipo. Si puedes señalar una violación LSP en Gadget y defender por qué IRepositorioPedidos vive en el dominio, vas listo para modularizar."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" "}
        <Link
          href="/teaching/poo/clase-03-experto-poo/modularidad-cohesion-acoplamiento"
          className="text-[var(--color-secondary)] hover:underline"
        >
          {"modularidad-cohesion-acoplamiento"}
        </Link>
        {" — cohesión dentro del módulo, acoplamiento bajo entre módulos."}
      </p>
    </section>
  );
}
