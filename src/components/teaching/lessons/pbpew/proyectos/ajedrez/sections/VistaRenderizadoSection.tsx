import { ClayCard } from "@/components/clay/ClayCard";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function VistaRenderizadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Vista: renderizado en el DOM"}</h2>
      <p className="my-4">
        {
          "Contenedor con CSS Grid 8×8 o tabla semántica. Por cada celda: data-fila y data-col para identificar clics. Piezas con textContent y símbolos Unicode — seguro y sin imágenes externas."
        }
      </p>
      <CodeFiddle
        language="html"
        code={`<div id="tablero" class="tablero-ajedrez" aria-label="Tablero de ajedrez"></div>
<div class="barra-acciones">
  <button type="button" id="nueva">Nueva partida</button>
  <button type="button" id="deshacer">Deshacer</button>
  <button type="button" id="guardar">Guardar</button>
  <button type="button" id="cargar">Cargar</button>
</div>
<p id="estado" aria-live="polite">Turno: blancas</p>`}
      />
      <CodeFiddle
        language="css"
        code={`.tablero-ajedrez {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: min(90vw, 400px);
  aspect-ratio: 1;
}

.tablero-ajedrez button {
  font-size: 2rem;
  border: none;
  cursor: pointer;
}

.tablero-ajedrez .clara { background: #f0d9b5; }
.tablero-ajedrez .oscura { background: #b58863; }
.tablero-ajedrez .seleccionada { outline: 3px solid var(--color-accent, #6B4EFF); }
.tablero-ajedrez .ultimo-movimiento { background: rgba(107, 78, 255, 0.35); }`}
      />
      <CodeFiddle
        language="javascript"
        code={`function crearTableroHTML(contenedor, tablero, seleccion) {
  contenedor.innerHTML = "";
  contenedor.className = "tablero-ajedrez";

  for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
      const celda = document.createElement("button");
      celda.type = "button";
      celda.dataset.fila = String(fila);
      celda.dataset.col = String(col);
      celda.setAttribute("aria-label", aNotacionAlgebraica(fila, col));
      celda.classList.add((fila + col) % 2 === 0 ? "clara" : "oscura");

      if (seleccion && seleccion.fila === fila && seleccion.col === col) {
        celda.classList.add("seleccionada");
      }

      const pieza = tablero[fila][col];
      celda.textContent = pieza ? SIMBOLOS[pieza] : "";
      contenedor.appendChild(celda);
    }
  }
}`}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        {
          "No uses innerHTML con datos dinámicos para piezas. textContent con Unicode es suficiente y evita riesgo XSS si en el futuro mezclas nombres de usuario."
        }
      </ClayCard>
      <PracticeExercise
        prompt="Escribe function simbolo(codigo) que devuelva el Unicode correcto desde SIMBOLOS o cadena vacía si codigo es null."
        hints={['SIMBOLOS[codigo] ?? ""', "Comprueba null antes de indexar"]}
        expectedKeywords={["SIMBOLOS", "null", "textContent"]}
        successMessage="Correcto. Una función pura centraliza el mapeo código → símbolo."
      />
    </section>
  );
}
