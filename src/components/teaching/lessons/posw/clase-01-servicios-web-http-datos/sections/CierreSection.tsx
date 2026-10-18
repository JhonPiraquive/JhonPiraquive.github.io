import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El modelo cliente-servidor describe quién pide y quién responde; los servicios web y las APIs son el contrato entre ambos."}</li>
        <li>{"HTTP expresa la intención con métodos, el resultado con códigos de estado y el contexto con cabeceras."}</li>
        <li>{"JSON y XML representan los datos que viajan; la elección depende del contrato y de los consumidores."}</li>
      </ol>
      <p className="my-4">{"La clase 2 diseña la arquitectura de una API y la apoya en backend, base de datos, caché y seguridad."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/posw/clase-02-arquitectura-datos-seguridad" className="clay-button">
          {"Continuar a la clase 2: arquitectura, datos y seguridad"}
        </Link>
      </p>
    </section>
  );
}
