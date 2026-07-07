import Link from "next/link";
import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">
        {
          "Has completado el proyecto integrador más exigente del track PBPEW. Combina matriz 2D, renderizado DOM, delegación de eventos, validación con funciones puras, pila LIFO y persistencia JSON — la síntesis de las lecciones 01–12."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <code>{"tablero[fila][col]"}</code>
          {" es la fuente de verdad; el DOM solo refleja el modelo."}
        </li>
        <li>{"Delegación en el contenedor padre evita listeners duplicados al re-renderizar."}</li>
        <li>{"Validar sin mutar — copia superficial o cálculo puro antes de aplicarMovimiento."}</li>
        <li>
          <strong>{"Pila LIFO"}</strong>
          {" para deshacer; "}
          <strong>{"JSON plano"}</strong>
          {" para localStorage."}
        </li>
        <li>{"Progresión incremental — MVP con rey/peón antes de reglas completas o chess.js."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" repasa proyectos hermanos ("}
        <Link href="/teaching/pbpew/proyectos/calculadora" className="text-[var(--color-secondary)] hover:underline">
          calculadora
        </Link>
        {", "}
        <Link href="/teaching/pbpew/proyectos/todo-list" className="text-[var(--color-secondary)] hover:underline">
          todo-list
        </Link>
        {", "}
        <Link href="/teaching/pbpew/proyectos/piedra-papel-tijera" className="text-[var(--color-secondary)] hover:underline">
          piedra-papel-tijera
        </Link>
        {") y compara cómo cada uno prioriza estado, eventos y persistencia."}
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-bold text-[var(--color-primary)]">{"Mini-quiz"}</h2>
      <QuizSection slug="proyectos/ajedrez" track="pbpew" />
    </section>
  );
}
