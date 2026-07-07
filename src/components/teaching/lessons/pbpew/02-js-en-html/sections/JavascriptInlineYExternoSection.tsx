import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function JavascriptInlineYExternoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"JavaScript inline y externo"}</h2>
      <p className="my-4">
        {
          "El navegador solo ejecuta JavaScript si está incluido en la página mediante la etiqueta <script>. Hay dos enfoques principales:"
        }
      </p>
      <p className="my-4">
        <strong>{"JavaScript inline:"}</strong>{" "}
        {
          "código escrito directamente en el HTML — entre <script>...</script> o en atributos de evento (onclick, onload, etc.). Útil para prototipos y pruebas rápidas; en proyectos reales se usa con moderación porque mezcla estructura y comportamiento."
        }
      </p>
      <p className="my-4">
        <strong>{"JavaScript externo:"}</strong>{" "}
        {
          "código en un archivo .js separado, enlazado con <script src=\"ruta.js\">. Ventajas: reutilización entre páginas, caché del navegador, HTML más limpio y posibilidad de que distintos miembros del equipo trabajen archivos separados."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        <p>
          {
            "No uses <link> para JavaScript: <link> es para CSS. JavaScript externo siempre va en <script src=\"...\">."
          }
        </p>
      </ClayCard>
      <CompareTable
        headers={["Aspecto", "Inline", "Externo (src)"]}
        rows={[
          ["Ubicación", "Dentro del HTML", "Archivo .js aparte"],
          ["Caché", "No separado", "Sí, reutilizable entre páginas"],
          ["Mantenimiento", "Mezclado con markup", "HTML y JS separados"],
          ["Uso típico", "Prototipos, snippets", "Proyectos reales"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Hola mundo inline"}</h3>
      <CodeFiddle
        language="html"
        code={`<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primera página JS</title>
  </head>
  <body>
    <h1>JavaScript en HTML</h1>
    <script>
      console.log("Hola mundo");
    </script>
  </body>
</html>`}
      />
      <p className="my-4">
        {
          "Abre el archivo en el navegador y verifica el mensaje en DevTools → Console (F12). La salida aparece en consola; no modifica la página visible."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"JavaScript externo con defer"}</h3>
      <CodeFiddle
        language="html"
        code={`<head>
  <meta charset="utf-8" />
  <title>Ejemplo defer</title>
  <script src="js/app.js" defer></script>
</head>
<body>
  <p id="msg">Hola</p>
</body>`}
      />
      <CodeFiddle
        language="javascript"
        code={`// js/app.js — se ejecuta tras parsear el HTML gracias a defer
console.log("Script externo cargado");
console.log(document.getElementById("msg").textContent); // "Hola"`}
      />
      <p className="my-4">
        {
          "Rutas relativas en src: ./js/app.js, js/app.js o /assets/app.js dependen de la carpeta del HTML y la estructura del proyecto. Una ruta mal escrita impide cargar el script (404 en Network)."
        }
      </p>
      <Callout title="Caso real: deploy en subcarpeta">
        {
          "Un equipo publica la web en https://empresa.com/producto/ pero el HTML referencia <script src=\"/js/analytics.js\"> (ruta absoluta desde la raíz del dominio). El archivo real está en /producto/js/analytics.js. Network muestra 404; métricas y eventos no se registran aunque el diseño se vea intacto."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Cuándo preferirías JavaScript externo sobre inline? Menciona al menos dos razones."
        hints={["Piensa en proyectos medianos o grandes", "¿Qué gana el navegador con archivos separados?"]}
        expectedKeywords={["reutiliz", "caché", "mantenimiento", "separación"]}
        successMessage="Correcto. JS externo favorece reutilización, caché del navegador, separación de responsabilidades y mantenimiento en proyectos reales."
      />
    </section>
  );
}
