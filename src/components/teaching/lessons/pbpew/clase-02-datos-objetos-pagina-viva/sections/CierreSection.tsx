import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Los arrays y los objetos organizan los datos; map, filter y forEach los recorren y transforman."}</li>
        <li>{"El valor de this depende de cómo se invoca la función; las clases ordenan los objetos con comportamiento."}</li>
        <li>{"Map, Set, pila y cola resuelven problemas concretos mejor que un array o un objeto genérico."}</li>
        <li>{"El DOM se selecciona, se modifica y reacciona a eventos; el estado vive en los datos y la vista se dibuja desde ellos."}</li>
      </ol>
      <p className="my-4">{"La clase 3 incorpora el tiempo y la red con asincronía y fetch, y los aplica en tres proyectos."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/pbpew/clase-03-asincronia-datos-remotos-proyectos" className="clay-button">
          {"Continuar a la clase 3: asincronía, datos remotos y proyectos"}
        </Link>
      </p>
    </section>
  );
}
