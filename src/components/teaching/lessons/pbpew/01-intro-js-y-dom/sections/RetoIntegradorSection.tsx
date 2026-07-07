import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: diagnóstico de página rota"}
      </h2>
      <p className="my-4 font-semibold">{"“Diagnóstico de página rota”"}</p>
      <p className="my-4">{"Te llega este reporte de un compañero:"}</p>
      <blockquote className="my-4 border-l-4 border-[var(--color-secondary)] pl-4 italic">
        {
          "“Cambié el <h1> en index.html pero el título no cambia. Además el botón Agregar no hace nada. Uso TypeScript en el proyecto.”"
        }
      </blockquote>
      <p className="my-4">{"En 6–8 líneas (o lista numerada), explica:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Qué es el DOM y por qué editar HTML en disco puede no coincidir con lo visible."}</li>
        <li>
          {
            "Dónde se ejecuta el JS de esa app (navegador) y qué herramienta usarías para investigar (DevTools: Elements, Console, Network)."
          }
        </li>
        <li>{"Dos comprobaciones concretas (¿carga el .js? ¿hay errores en consola?)."}</li>
        <li>{"Por qué TypeScript implica un paso extra antes de que el navegador ejecute código."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: distingue HTML fuente vs DOM vivo, nombra DevTools/consola, menciona transpilación TS→JS, propone verificar carga del script."
        }
      </p>
      <PracticeExercise
        prompt="Redacta tu diagnóstico (6–8 líneas) para el reporte del compañero: título que no cambia, botón inerte y proyecto en TypeScript. Incluye DOM, DevTools y transpilación."
        hints={[
          "El DOM es la copia viva en memoria; una SPA puede generar el título con JS",
          "Revisa Network: ¿el .js carga o devuelve 404?",
          "Revisa Console: ¿hay errores de referencia?",
          "TypeScript debe compilarse/transpilarse a JS antes de ejecutarse",
        ]}
        expectedKeywords={["dom", "devtools", "consola", "transpil", "script"]}
        successMessage="Excelente diagnóstico. Has integrado los conceptos clave de la lección."
        rows={5}
      />
    </section>
  );
}
