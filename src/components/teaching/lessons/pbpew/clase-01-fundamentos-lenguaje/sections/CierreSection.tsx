import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"JavaScript añade comportamiento a una página y el DOM es la representación viva sobre la que opera."}</li>
        <li>{"const por defecto y let cuando hay reasignación; los tipos y la comparación estricta evitan errores de coerción."}</li>
        <li>{"Las decisiones y los bucles controlan el flujo; try/catch evita que un fallo detenga todo el programa."}</li>
        <li>{"Las funciones agrupan lógica reutilizable y los callbacks permiten pasar comportamiento como dato."}</li>
      </ol>
      <p className="my-4">{"La clase 2 modela información con arrays, objetos y estructuras de datos, y la muestra en la página con el DOM y los eventos."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/pbpew/clase-02-datos-objetos-pagina-viva" className="clay-button">
          {"Continuar a la clase 2: datos, objetos y la página viva"}
        </Link>
      </p>
    </section>
  );
}
