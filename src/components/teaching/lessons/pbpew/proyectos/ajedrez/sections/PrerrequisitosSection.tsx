import Link from "next/link";

const LECCIONES = [
  { slug: "01-intro-js-y-dom", label: "01–02: DOM, script en página" },
  { slug: "03-variables-y-tipos", label: "03–04: variables, tipos, condicionales" },
  { slug: "05-bucles-y-errores", label: "05: bucles anidados, try/catch" },
  { slug: "06-funciones-y-callbacks", label: "06: funciones y callbacks" },
  { slug: "07-arrays-json-objetos", label: "07: arrays 2D, JSON" },
  { slug: "08-this-scope-clases", label: "08 (recomendada): clases opcionales" },
  { slug: "09-estructuras-de-datos", label: "09: pila LIFO — patrón Deshacer" },
  { slug: "10-dom-y-eventos", label: "10: delegación, classList, dataset" },
  { slug: "12-ajax-fetch", label: "12: localStorage para guardar partidas" },
];

const PROYECTOS = [
  { slug: "proyectos/calculadora", label: "calculadora" },
  { slug: "proyectos/todo-list", label: "todo-list" },
  { slug: "proyectos/piedra-papel-tijera", label: "piedra-papel-tijera" },
];

export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Prerrequisitos"}</h2>
      <ul className="my-4 list-disc pl-6">
        {LECCIONES.map((l) => (
          <li key={l.slug}>
            <Link href={`/teaching/pbpew/${l.slug}`} className="text-[var(--color-secondary)] hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          {"Proyectos previos del track ("}
          {PROYECTOS.map((p, i) => (
            <span key={p.slug}>
              {i > 0 && ", "}
              <Link href={`/teaching/pbpew/${p.slug}`} className="text-[var(--color-secondary)] hover:underline">
                {p.label}
              </Link>
            </span>
          ))}
          {") como referencia de complejidad creciente; "}
          <strong>{"ajedrez es el capstone más exigente"}</strong>
          {"."}
        </li>
      </ul>
    </section>
  );
}
