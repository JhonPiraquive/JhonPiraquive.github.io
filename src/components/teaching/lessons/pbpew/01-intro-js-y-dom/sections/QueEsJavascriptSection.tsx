import { ClayCard } from "@/components/clay/ClayCard";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function QueEsJavascriptSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es JavaScript?"}</h2>
      <p className="my-4">
        {
          "JavaScript (JS) es un lenguaje de programación diseñado al inicio para dar comportamiento a las páginas web en el navegador: validar formularios, reaccionar a clics, cambiar contenido sin recargar toda la página, etc."
        }
      </p>
      <p className="my-4">
        {
          "Hoy también se usa fuera del navegador (servidores con Node.js, herramientas de desarrollo, scripts de automatización). El estándar oficial del lenguaje se publica como ECMAScript; cuando leas “ES2015”, “ES6” o “ES2024”, se refieren a versiones de ese estándar. “JavaScript” es la implementación práctica en motores y navegadores."
        }
      </p>
      <p className="my-4">
        {
          "El motor JavaScript (V8, SpiderMonkey, etc.) lee y ejecuta el código cuando la página carga o cuando un script se dispara. No modifica el archivo HTML en disco, sino la representación en memoria."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        <p>
          {
            "No confundas HTML con JavaScript: HTML define la estructura; JavaScript define el comportamiento. Editar solo HTML no añade lógica interactiva."
          }
        </p>
      </ClayCard>
      <CodeFiddle
        language="javascript"
        code={`console.log("Hola desde JavaScript");
console.log(2 + 2);
console.log({ curso: "PBPEW", leccion: 1 });`}
      />
    </section>
  );
}
