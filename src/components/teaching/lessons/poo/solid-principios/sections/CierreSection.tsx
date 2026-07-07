import Link from "next/link";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de los principios SOLID en C#. Son la brújula para convertir POO y polimorfismo en diseño mantenible."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"SRP"}</strong>
          {" — un motivo de cambio; no una clase \"Dios\"."}
        </li>
        <li>
          <strong>{"OCP"}</strong>
          {" — nuevas clases, cliente estable; aliado del polimorfismo."}
        </li>
        <li>
          <strong>{"LSP"}</strong>
          {" — sustituibilidad sin sorpresas en herencia."}
        </li>
        <li>
          <strong>{"ISP"}</strong>
          {" — contratos pequeños por rol."}
        </li>
        <li>
          <strong>{"DIP"}</strong>
          {" — abstracciones en el centro; concretos en el borde."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <Link
          href="/teaching/poo/modularidad-cohesion-acoplamiento"
          className="text-[var(--color-secondary)] hover:underline"
        >
          {"modularidad-cohesion-acoplamiento"}
        </Link>
        {" — integrar SOLID en módulos con alta cohesión y bajo acoplamiento."}
      </p>
    </section>
  );
}
