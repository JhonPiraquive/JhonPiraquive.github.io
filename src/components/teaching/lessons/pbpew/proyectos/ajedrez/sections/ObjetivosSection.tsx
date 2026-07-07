export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar este proyecto integrador, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Representar"}</strong>
          {" un tablero de ajedrez como matriz 2D "}
          <code>{"tablero[fila][col]"}</code>
          {" con códigos de pieza ("}
          <code>{"\"wP\""}</code>
          {", "}
          <code>{"\"bK\""}</code>
          {", "}
          <code>{"null"}</code>
          {") como "}
          <strong>{"fuente de verdad"}</strong>
          {" del estado."}
        </li>
        <li>
          <strong>{"Renderizar"}</strong>
          {" un tablero 8×8 en el DOM con CSS Grid, símbolos Unicode y atributos "}
          <code>{"data-fila"}</code>
          {" / "}
          <code>{"data-col"}</code>
          {" para identificar casillas sin depender del texto visible."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>
          {" el flujo de dos clics (seleccionar → mover) con delegación de eventos en el contenedor padre y estado centralizado ("}
          <code>{"turno"}</code>
          {", "}
          <code>{"seleccion"}</code>
          {")."}
        </li>
        <li>
          <strong>{"Validar"}</strong>
          {" movimientos legales con funciones puras (mínimo rey y peón; ampliar a torre, alfil, caballo en reto avanzado) sin mutar el tablero durante la comprobación."}
        </li>
        <li>
          <strong>{"Gestionar"}</strong>
          {" turnos, capturas, promoción automática de peón a dama, pila LIFO para deshacer y persistencia con "}
          <code>{"localStorage"}</code>
          {" + JSON."}
        </li>
        <li>
          <strong>{"Diseñar"}</strong>
          {" el proyecto en capas modelo-vista-controlador e "}
          <strong>{"integrar"}</strong>
          {" opcionalmente chess.js solo en la capa de reglas para jaque/mate."}
        </li>
      </ul>
    </section>
  );
}
