import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <p className="my-4 font-semibold">{"«Ajedrez en el navegador» — capstone PBPEW (tres niveles)"}</p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nivel A — Demo obligatoria"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"HTML: #tablero, botones #nueva, #deshacer, #guardar, #cargar, #estado."}</li>
        <li>{"Modelo: tablero 8×8, POSICION_INICIAL, estado con turno y seleccion."}</li>
        <li>{"Vista: render completo con Unicode; casillas claras/oscuras; clase .seleccionada."}</li>
        <li>{"Control: delegación de clics; movimiento legal al menos para rey y peón; alternar turno; captura."}</li>
        <li>{"Promoción automática de peón a dama en la última fila."}</li>
        <li>{"Re-render tras cada movimiento legal."}</li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nivel B — Persistencia e historial"}</h3>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"historial.push copia superficial antes de cada movimiento legal."}</li>
        <li>{"\"Deshacer\" con pop (mínimo un nivel)."}</li>
        <li>{"\"Guardar\" / \"Cargar\" con localStorage y JSON; \"Nueva partida\" resetea a inicial."}</li>
        <li>{"Manejo de error si la carga falla (mensaje en #estado)."}</li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nivel C — Desafío profundo (elige uno o más)"}</h3>
      <ol className="my-4 list-decimal pl-6" start={11}>
        <li>{"Reglas ampliadas (torre, alfil, caballo, dama)."}</li>
        <li>{"Jaque simplificado con lógica propia."}</li>
        <li>{"Integración chess.js solo en modelo."}</li>
        <li>{"UX: último movimiento, casillas legales, contador."}</li>
        <li>{"Refactor con clases."}</li>
      </ol>

      <p className="my-4">
        <strong>{"Criterio de éxito mínimo (Nivel A):"}</strong>
        {
          " matriz 2D coherente, render 8×8, delegación, dos clics, validación no trivial, turnos, estado centralizado, textContent para piezas."
        }
      </p>
      <p className="my-4">
        <strong>{"Criterio excelencia:"}</strong>
        {" Nivel B completo + al menos un ítem de Nivel C documentado en comentarios."}
      </p>

      <p className="my-4 font-semibold">{"Integración curricular:"}</p>
      <table className="my-6 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)]">
            <th className="px-4 py-3 text-left font-semibold">{"Lección"}</th>
            <th className="px-4 py-3 text-left font-semibold">{"Aplicación"}</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["01–02", "DOM, script en página"],
            ["03–04", "tipos, if, validación"],
            ["05", "bucles render, try/catch en carga"],
            ["06", "callbacks en listeners"],
            ["07", "matriz, objetos estado, JSON"],
            ["08", "clases opcionales"],
            ["09", "pila deshacer"],
            ["10", "delegación, classList, dataset"],
            ["11–12", "localStorage + JSON"],
          ].map(([leccion, aplicacion], i) => (
            <tr key={leccion} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-neutral-light)]"}>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{leccion}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{aplicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CodeFiddle
        language="html"
        code={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ajedrez PBPEW</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <main>
    <div id="tablero" class="tablero-ajedrez"></div>
    <div class="barra-acciones">
      <button type="button" id="nueva">Nueva partida</button>
      <button type="button" id="deshacer">Deshacer</button>
      <button type="button" id="guardar">Guardar</button>
      <button type="button" id="cargar">Cargar</button>
    </div>
    <p id="estado">Turno: blancas</p>
  </main>
  <script src="modelo.js"></script>
  <script src="vista.js"></script>
  <script src="controlador.js"></script>
</body>
</html>`}
      />
      <PracticeExercise
        prompt="Implementa el Nivel A del capstone: tablero 8×8, delegación de clics, movimiento legal de rey y peón, turnos y re-render. Describe o pega tu estructura modelo-vista-controlador."
        hints={[
          "estado.tablero como fuente de verdad",
          "un solo addEventListener en #tablero",
          "movimientoLegal antes de aplicarMovimiento",
          "textContent para símbolos Unicode",
        ]}
        expectedKeywords={["tablero", "deleg", "movimientoLegal", "turno"]}
        successMessage="Excelente. Has integrado matriz 2D, DOM, eventos y validación en el capstone del track PBPEW."
        rows={10}
      />
    </section>
  );
}
