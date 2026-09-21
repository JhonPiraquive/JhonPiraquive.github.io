import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"La historia motiva el problema; el SGBD es la solución operativa."}</li>
        <li>{"Motor ≠ GUI ≠ CLI — el motor persiste; los clientes consultan."}</li>
        <li>{"Tabla → campo → registro → valor es el abecedario del diseño."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Siguiente:"}</strong>{" "}
        {"Clase 2 — diseño conceptual/lógico/físico y ER listo para implementar en SQL."}
      </p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link
          href="/teaching/bases-de-datos/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico"
          className="clay-button"
        >
          {"Continuar a la Clase 2 — Diseño ER"}
        </Link>
        <Link href="/teaching/bases-de-datos" className="text-[var(--color-secondary)] hover:underline">
          {"Volver al mapa del módulo"}
        </Link>
      </p>
    </section>
  );
}
