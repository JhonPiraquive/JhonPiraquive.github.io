import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre qué es TypeScript, por qué usarlo frente a JavaScript puro, el sistema de tipos, interfaces y genéricos, y la configuración de un proyecto con tsconfig.json."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir TypeScript como superset tipado de JavaScript que compila a JS y explicar el flujo tsc → JavaScript."
          }
        </li>
        <li>
          {
            "Comparar JavaScript vs TypeScript en detección de errores (runtime vs compilación) con un ejemplo de tipos incorrectos."
          }
        </li>
        <li>
          {
            "Aplicar el sistema de tipos: primitivos, arrays, tuplas, uniones, literales, unknown vs any."
          }
        </li>
        <li>
          {
            "Modelar datos de API con interfaces, type aliases y enums; elegir cuándo usar cada uno."
          }
        </li>
        <li>
          {
            "Escribir funciones y clases genéricas reutilizables y configurar un proyecto con tsconfig.json en modo strict."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección rest-principios: recursos REST, contratos JSON y consumo de APIs."}</li>
        <li>{"Familiaridad con JavaScript moderno (funciones, objetos, async/await)."}</li>
        <li>{"Conocimiento básico de JSON como formato de intercambio."}</li>
      </ul>
      <Callout title="TypeScript no valida en runtime">
        {
          "Los tipos desaparecen al compilar. TypeScript detecta errores en desarrollo; para respuestas JSON externas sigue siendo necesaria validación runtime (Zod, etc.) en producción."
        }
      </Callout>
    </section>
  );
}
