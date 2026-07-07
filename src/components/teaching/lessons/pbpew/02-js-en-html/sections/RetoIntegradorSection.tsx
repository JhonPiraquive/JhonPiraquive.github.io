import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: arregla la página del evento"}
      </h2>
      <p className="my-4 font-semibold">{"“Arregla la página del evento”"}</p>
      <p className="my-4">{"Te entregan este fragmento roto:"}</p>
      <CodeFiddle
        language="html"
        code={`<!doctype html>
<html lang="es">
  <head>
    <script src="scripts/main.js"></script>
  </head>
  <body>
    <button id="registro">Inscribirme</button>
    <script src="/js/contador.js"></script>
  </body>
</html>`}
      />
      <p className="my-4">
        {
          "main.js (ruta real: js/main.js) hace document.getElementById(\"registro\").addEventListener(...). contador.js existe en js/contador.js junto al HTML. En local la página se ve bien pero el botón no responde y Network muestra un 404."
        }
      </p>
      <p className="my-4">{"En 8–10 líneas (lista numerada), entrega:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Dos errores concretos (ruta + ubicación del script)."}</li>
        <li>{"Dos correcciones propuestas (ruta correcta + defer o mover script)."}</li>
        <li>{"Qué comprobarías en DevTools (Console + Network)."}</li>
        <li>{"Un console.log de prueba que añadirías para confirmar que main.js cargó."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: identifica 404 por ruta incorrecta, explica DOM no listo en head sin defer, propone src=\"js/main.js\" defer o script al final del body, menciona verificación en Network/Console."
        }
      </p>
      <PracticeExercise
        prompt="Redacta tu diagnóstico (8–10 líneas) para la página del evento: identifica errores de ruta y ubicación del script, propone correcciones y describe qué verificarías en DevTools."
        hints={[
          "main.js está en js/main.js, no en scripts/",
          "contador.js usa ruta absoluta /js/ pero el archivo está en js/ relativo al HTML",
          "Script en head sin defer puede ejecutarse antes de que exista #registro",
          "Añade console.log al inicio de main.js para confirmar carga",
        ]}
        expectedKeywords={["404", "defer", "ruta", "network", "consola"]}
        successMessage="Excelente diagnóstico. Has integrado ubicación del script, rutas relativas y verificación en DevTools."
        rows={8}
      />
    </section>
  );
}
