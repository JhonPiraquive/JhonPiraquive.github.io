import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cierre</h2>
      <p className="my-4">
        Has integrado las 12 lecciones núcleo PBPEW en un minijuego real: estado, funciones con
        responsabilidad única, arrays, decisiones, DOM, eventos y (opcional) asincronía.
      </p>
      <p className="my-4 font-semibold">Ideas clave para retener:</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>Orden de la ronda:</strong> clic → CPU aleatoria → comparar → marcador → DOM.
        </li>
        <li>
          <strong>
            <code>determinarGanador</code>
          </strong>{" "}
          es lógica pura;{" "}
          <strong>
            <code>actualizarMarcador</code>
          </strong>{" "}
          muta estado solo con el resultado calculado.
        </li>
        <li>
          <strong>
            <code>Math.floor(Math.random() * opciones.length)</code>
          </strong>{" "}
          para índices seguros.
        </li>
        <li>
          <strong>
            <code>addEventListener</code> + delegación
          </strong>{" "}
          escala mejor que N listeners o <code>onclick</code> inline.
        </li>
        <li>
          <strong>
            <code>textContent</code>
          </strong>{" "}
          para mensajes fijos; siempre pintar resultado incluso en empate.
        </li>
      </ul>
      <p className="my-4">
        <strong>Proyectos hermanos:</strong>{" "}
        <Link href="/teaching/pbpew/proyectos/calculadora" className="text-[var(--color-secondary)]">
          calculadora
        </Link>
        ,{" "}
        <Link href="/teaching/pbpew/proyectos/todo-list" className="text-[var(--color-secondary)]">
          todo-list
        </Link>
        ,{" "}
        <Link href="/teaching/pbpew/proyectos/ajedrez" className="text-[var(--color-secondary)]">
          ajedrez
        </Link>{" "}
        — cada uno refuerza un patrón distinto del mismo stack.
      </p>
    </section>
  );
}
