import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ControladorEventosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Controlador: eventos y flujo de dos clics"}
      </h2>
      <p className="my-4">
        <strong>{"Delegación de eventos:"}</strong>
        {" un solo "}
        <code>{"addEventListener(\"click\")"}</code>
        {" en "}
        <code>{"#tablero"}</code>
        {"; leer "}
        <code>{"event.target.closest(\"[data-fila]\")"}</code>
        {". Escala cuando regeneras el tablero entero tras cada movimiento — evita listeners duplicados."}
      </p>
      <p className="my-4 font-semibold">{"Flujo:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Primer clic en pieza propia → guardar seleccion y resaltar casilla."}</li>
        <li>{"Segundo clic en destino → validar → si es legal, actualizar matriz, limpiar selección, alternar turno, re-renderizar."}</li>
        <li>{"Si el segundo clic es ilegal → limpiar selección sin mover."}</li>
      </ol>
      <StepReveal
        title="Flujo de dos clics"
        steps={[
          { title: "Tablero inicial", content: 'POSICION_INICIAL renderizada. turno = "w". seleccion = null.' },
          {
            title: "Clic en pieza blanca",
            content: 'Si colorDePieza(pieza) === turno, estado.seleccion = { fila, col }. Casilla con clase .seleccionada.',
          },
          {
            title: "Clic en destino vacío legal",
            content: "movimientoLegal devuelve true. aplicarMovimiento actualiza la matriz. turno alterna a \"b\". Re-render.",
          },
          {
            title: "Matriz actualizada",
            content: "tablero refleja el movimiento. DOM sincronizado desde la matriz, no al revés.",
          },
          {
            title: "Clic ilegal",
            content: "movimientoLegal devuelve false. seleccion = null. Sin cambio en tablero ni turno.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant V as Vista DOM
  participant C as Controlador
  participant M as Modelo tablero
  U->>V: clic casilla origen
  V->>C: fila, col
  C->>M: leer pieza
  C->>C: guardar seleccion
  U->>V: clic casilla destino
  V->>C: fila, col destino
  C->>M: movimientoLegal?
  alt legal
    C->>M: aplicarMovimiento
    C->>M: alternar turno
    C->>V: re-render
  else ilegal
    C->>C: limpiar seleccion
  end`}
      />
      <CodeFiddle
        language="javascript"
        code={`const contenedor = document.querySelector("#tablero");

contenedor.addEventListener("click", (e) => {
  const celda = e.target.closest("[data-fila]");
  if (!celda) return;
  const fila = Number(celda.dataset.fila);
  const col = Number(celda.dataset.col);
  manejarClic(fila, col);
});

function manejarClic(fila, col) {
  const pieza = estado.tablero[fila][col];

  if (!estado.seleccion) {
    if (pieza && colorDePieza(pieza) === estado.turno) {
      estado.seleccion = { fila, col };
    }
    crearTableroHTML(contenedor, estado.tablero, estado.seleccion);
    return;
  }

  const { fila: f0, col: c0 } = estado.seleccion;

  if (movimientoLegal(estado.tablero, f0, c0, fila, col)) {
    registrarMovimiento(estado);
    aplicarMovimiento(estado, f0, c0, fila, col);
    estado.turno = estado.turno === "w" ? "b" : "w";
    actualizarEstadoUI();
  }

  estado.seleccion = null;
  crearTableroHTML(contenedor, estado.tablero, estado.seleccion);
}

function actualizarEstadoUI() {
  const el = document.querySelector("#estado");
  if (el) {
    el.textContent = \`Turno: \${estado.turno === "w" ? "blancas" : "negras"}\`;
  }
}`}
      />
      <PracticeExercise
        prompt="Explica el flujo de dos clics (seleccionar → mover) y qué ocurre si el segundo clic es ilegal."
        hints={[
          "Primer clic guarda seleccion si la pieza es del turno",
          "Segundo clic valida con movimientoLegal",
          "Si es ilegal, solo se limpia seleccion",
        ]}
        expectedKeywords={["seleccion", "legal", "turno", "limpiar"]}
        successMessage="Correcto. La validación ocurre antes de mutar la matriz; un clic ilegal no cambia el tablero."
      />
      <CodeChallenge
        title="Completa el alternado de turno"
        template={`estado.turno = estado.turno === "w" ? {{blank1}} : {{blank2}};`}
        blanks={[
          { id: "blank1", answer: '"b"', placeholder: "turno negro" },
          { id: "blank2", answer: '"w"', placeholder: "turno blanco" },
        ]}
      />
    </section>
  );
}
