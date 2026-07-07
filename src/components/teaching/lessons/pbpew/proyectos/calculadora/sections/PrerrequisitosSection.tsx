import { Link } from "@/i18n/navigation";

const LESSONS = [
  "01-intro-js-y-dom",
  "02-js-en-html",
  "03-variables-y-tipos",
  "04-operadores-y-decisiones",
  "05-bucles-y-errores",
  "06-funciones-y-callbacks",
  "07-arrays-json-objetos",
  "08-this-scope-clases",
  "09-estructuras-de-datos",
  "10-dom-y-eventos",
  "11-asincronia",
  "12-ajax-fetch",
] as const;

export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Prerrequisitos"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lecciones 01–12 del track PBPEW:"}</strong>{" "}
          {LESSONS.map((slug, i) => (
            <span key={slug}>
              {i > 0 && ", "}
              <Link href={`/teaching/pbpew/${slug}`} className="text-[var(--color-secondary)]">
                {slug}
              </Link>
            </span>
          ))}
          {" — DOM, eventos, variables, tipos, operadores, funciones, estructuras de datos y manejo básico de errores."}
        </li>
        <li>
          <strong>
            {"Lección 10 ("}
            <Link href="/teaching/pbpew/10-dom-y-eventos" className="text-[var(--color-secondary)]">
              {"10-dom-y-eventos"}
            </Link>
            {"):"}
          </strong>
          {" `querySelector`, `textContent`, `addEventListener`, delegación de eventos."}
        </li>
        <li>
          <strong>
            {"Lección 04 ("}
            <Link href="/teaching/pbpew/04-operadores-y-decisiones" className="text-[var(--color-secondary)]">
              {"04-operadores-y-decisiones"}
            </Link>
            {"):"}
          </strong>
          {" operadores aritméticos, `if`/`switch`, división por cero en JavaScript."}
        </li>
        <li>
          <strong>
            {"Lección 03 ("}
            <Link href="/teaching/pbpew/03-variables-y-tipos" className="text-[var(--color-secondary)]">
              {"03-variables-y-tipos"}
            </Link>
            {"):"}
          </strong>
          {" `parseFloat`, `Number.isNaN`, strings vs números."}
        </li>
        <li>
          <strong>
            {"Lección 06 ("}
            <Link href="/teaching/pbpew/06-funciones-y-callbacks" className="text-[var(--color-secondary)]">
              {"06-funciones-y-callbacks"}
            </Link>
            {"):"}
          </strong>
          {" funciones con `return`, callbacks en listeners."}
        </li>
        <li>
          {"Saber enlazar un `<script>` al final del `<body>` o con `defer` ("}
          <Link href="/teaching/pbpew/02-js-en-html" className="text-[var(--color-secondary)]">
            {"lección 02"}
          </Link>
          {")."}
        </li>
      </ul>
    </section>
  );
}
