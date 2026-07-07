import { Link } from "@/i18n/navigation";
import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el primer proyecto integrador del track Programación básica para entornos web (PBPEW): una calculadora que une variables, operadores, funciones, DOM y eventos en una interfaz usable."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Estado en memoria"}</strong>
          {" — el `#display` es vista; `operadorPendiente` y `esperandoNuevoOperando` no viven solo en pantalla."}
        </li>
        <li>
          <strong>{"`textContent`"}</strong>
          {" — seguro para números y mensajes de error; evita `innerHTML` y `eval()`."}
        </li>
        <li>
          <strong>{"Delegación"}</strong>
          {" — un listener en `.teclado` + `closest(\"button\")` escala sin re-enlazar botones."}
        </li>
        <li>
          <strong>{"`calcular()` pura"}</strong>
          {" — separa lógica aritmética del DOM; valida `NaN` y divisor cero."}
        </li>
        <li>
          <strong>{"División por cero"}</strong>
          {" — JavaScript devuelve `Infinity`; la UX debe detectar y resetear con `C`."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        <Link href="/teaching/pbpew/proyectos/todo-list" className="text-[var(--color-secondary)]">
          {"proyectos/todo-list"}
        </Link>
        {" (orden 102) — persistencia en memoria, listas dinámicas y más delegación de eventos."}
      </p>
      <h3 className="mt-8 mb-4 text-xl font-semibold text-[var(--color-primary)]">{"Miniquiz"}</h3>
      <QuizSection slug="proyectos/calculadora" track="pbpew" />
    </section>
  );
}
