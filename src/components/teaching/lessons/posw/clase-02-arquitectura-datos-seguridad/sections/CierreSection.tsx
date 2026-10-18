import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"REST ordena la API con restricciones claras; GraphQL y gRPC resuelven necesidades distintas."}</li>
        <li>{"El backend, la base de datos y la caché determinan el rendimiento y la consistencia de los datos."}</li>
        <li>{"HTTPS protege el canal y los tokens identifican al usuario; ninguna de las dos cosas sustituye a la otra."}</li>
      </ol>
      <p className="my-4">{"La clase 3 construye el cliente y cierra con calidad de código, herramientas e IA con verificación."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/posw/clase-03-frontend-calidad-herramientas" className="clay-button">
          {"Continuar a la clase 3: frontend, calidad y herramientas"}
        </Link>
      </p>
    </section>
  );
}
