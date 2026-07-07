import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DeshacerPersistenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Deshacer y persistencia"}</h2>
      <p className="my-4">
        <strong>{"Pila LIFO (lección 9):"}</strong>
        {" antes de cada movimiento legal, "}
        <code>{"historial.push"}</code>
        {" copia superficial del tablero + turno. \"Deshacer\" hace "}
        <code>{"pop"}</code>
        {" y restaura — incluye pieza capturada y turno previo."}
      </p>
      <p className="my-4">
        <strong>{"localStorage (lección 12):"}</strong>
        {" "}
        <code>{"JSON.stringify"}</code>
        {" al guardar; "}
        <code>{"JSON.parse"}</code>
        {" al cargar con "}
        <code>{"try/catch"}</code>
        {". Esquema versionado "}
        <code>{"{ version: 1, tablero, turno }"}</code>
        {". Si no hay partida o el JSON está corrupto, posición inicial."}
      </p>
      <StepReveal
        title="Pila deshacer (LIFO)"
        steps={[
          { title: "Antes del movimiento 1", content: "historial = []. push copia del estado inicial opcional." },
          { title: "Movimiento 1 legal", content: "push({ tablero: copia, turno }). Aplicar movimiento." },
          { title: "Movimiento 2 legal", content: "push otra copia. historial tiene 2 entradas." },
          {
            title: "Deshacer",
            content: "pop() devuelve el estado anterior al último movimiento. Restaurar tablero y turno.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TB
  M1["movimiento 1 push"] --> M2["movimiento 2 push"]
  M2 --> M3["movimiento 3 push"]
  M3 --> POP["Deshacer pop"]
  POP --> REST["restaura tablero anterior"]`}
      />
      <CodeFiddle
        language="javascript"
        code={`const historial = [];
const CLAVE = "pbpew-ajedrez-partida";

function registrarMovimiento(estado) {
  historial.push({
    tablero: estado.tablero.map((fila) => [...fila]),
    turno: estado.turno,
  });
}

function deshacer(estado) {
  const anterior = historial.pop();
  if (!anterior) return;
  estado.tablero = anterior.tablero;
  estado.turno = anterior.turno;
  estado.seleccion = null;
}

function guardarPartida(estado) {
  const datos = { version: 1, tablero: estado.tablero, turno: estado.turno };
  localStorage.setItem(CLAVE, JSON.stringify(datos));
}

function cargarPartida(estado) {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return false;
    const datos = JSON.parse(raw);
    if (!datos.tablero || !datos.turno) return false;
    estado.tablero = datos.tablero;
    estado.turno = datos.turno;
    return true;
  } catch {
    return false;
  }
}`}
      />
      <PracticeExercise
        prompt="Implementa deshacer con un array como pila: push antes de mover, pop al pulsar el botón. ¿Qué debe restaurar además del tablero?"
        hints={["turno previo", "seleccion = null", "pieza capturada queda en la copia del tablero"]}
        expectedKeywords={["turno", "pop", "push", "pila"]}
        successMessage="Correcto. El pop debe devolver tablero y turno coherentes; la capturada ya está en la copia de la matriz."
      />
    </section>
  );
}
