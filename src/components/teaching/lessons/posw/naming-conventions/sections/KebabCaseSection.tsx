import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const KEBAB_HTTP = `GET /api/v1/tipos-de-usuario HTTP/1.1
Host: api.ejemplo.com
Accept: application/json

GET /productos/laptop-pro-15 HTTP/1.1
Host: tienda.ejemplo.com`;

export function KebabCaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"kebab-case: URLs, CSS y archivos"}
      </h2>
      <p className="my-4">
        {
          "Minúsculas con guión. URLs HTTP, clases CSS, archivos HTML/CSS, paquetes npm y selectores Angular."
        }
      </p>
      <CodeFiddle language="http" title="URLs REST idiomáticas" code={KEBAB_HTTP} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Endpoints verbales: /getOrders, /deleteUser/5."}</li>
        <li>{"Mezclar snake_case en URLs: /api/obtener_usuarios."}</li>
      </ul>
    </section>
  );
}
