import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: API de biblioteca"}
      </h2>
      <p className="my-4 font-semibold">{"Evalúa y mejora una API de biblioteca hacia REST verdadero"}</p>
      <p className="my-4 font-semibold">{"API actual:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"POST /api/login → servidor guarda sesión en memoria"}</li>
        <li>{"GET /api/getLibros → lista libros"}</li>
        <li>{'POST /api/reservarLibro con body { "isbn": "..." }'}</li>
        <li>{"Sin headers Cache-Control; URLs hardcodeadas en app móvil"}</li>
      </ul>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Identifica qué constraints REST viola cada endpoint o práctica."}</li>
        <li>{"Propón URIs y métodos HTTP alineados con identificación de recursos (Richardson nivel 1–2)."}</li>
        <li>{"Rediseña la autenticación para cumplir Stateless."}</li>
        <li>
          {
            "Añade _links en la respuesta de un libro disponible (reservar, ver autor, devolver si prestado)."
          }
        </li>
        <li>{"Clasifica la API actual y la propuesta en Richardson (0–3) y justifica."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: stateless con token, URIs con sustantivos, códigos HTTP semánticos, ejemplo HATEOAS completo, headers de cacheabilidad diferenciados."
        }
      </p>
      <CodeFiddle
        language="json"
        title="Libro con _links HATEOAS"
        code={`{
  "isbn": "9780123456789",
  "titulo": "Algoritmos",
  "disponible": true,
  "_links": {
    "self": { "href": "/api/v1/libros/9780123456789", "method": "GET" },
    "autor": { "href": "/api/v1/autores/15", "method": "GET" },
    "reservar": { "href": "/api/v1/reservas", "method": "POST" }
  }
}`}
      />
      <PracticeExercise
        prompt="Rediseña la API de biblioteca: auth stateless, URIs corregidas, _links en libro y headers Cache-Control para catálogo vs /usuario/me."
        hints={[
          "JWT tras POST /api/v1/auth/login",
          "GET /api/v1/libros",
          "Cache-Control public en catálogo",
          "no-store en datos de usuario",
        ]}
        expectedKeywords={["stateless", "JWT", "HATEOAS", "_links", "Cache-Control"]}
        successMessage="Excelente. Has migrado la API hacia REST con constraints claros y Richardson nivel 2–3."
        rows={6}
      />
    </section>
  );
}
