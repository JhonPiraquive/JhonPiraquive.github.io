import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PorQueTypescriptSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Por qué TypeScript?"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Detección temprana: errores en editor/compilación, no en producción."}</li>
        <li>{"Documentación viva: firmas y formas de objetos explícitas en el código."}</li>
        <li>{"Refactoring seguro: renombrar propiedades actualiza todos los usos tipados."}</li>
        <li>{"Contratos con APIs REST: tipar respuestas evita desajustes con el backend."}</li>
      </ul>
      <CompareTable
        headers={["Aspecto", "JavaScript", "TypeScript"]}
        rows={[
          ["Detección de errores de tipo", "En runtime (producción)", "En compilación/editor"],
          ["Autocompletado", "Limitado sin tipos", "IntelliSense completo"],
          ["Refactoring", "Frágil en proyectos grandes", "Renombrado seguro con tipos"],
          ["Contrato API REST", "Fácil usar any sin aviso", "Interfaces y genéricos explícitos"],
          ["Curva inicial", "Menor", "Requiere aprender sistema de tipos"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        title="Bug en JavaScript — error en producción"
        code={`// JavaScript — el error aparece en producción
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}
calcularTotal("4500", 3); // Retorna "450045004500"`}
      />
      <CodeFiddle
        language="typescript"
        title="Misma función en TypeScript — error en el editor"
        code={`// TypeScript — el error aparece en el editor
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad;
}
calcularTotal("4500", 3);
// Error TS: Argument of type 'string' is not assignable to parameter of type 'number'`}
      />
      <Callout title="Concatenación de precios en checkout">
        {
          'Un campo de formulario envía "4500" (string) y el total se concatena: "450045004500". Decisión: migrar el módulo de carrito a TypeScript con firmas number; el compilador rechaza calcularTotal("4500", 3) antes del deploy.'
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt='Explica por qué `calcularTotal("4500", 3)` falla en TypeScript pero no en JavaScript. ¿En qué capa se detecta cada error?'
        hints={["Multiplicación vs concatenación", "Compilación vs runtime", "Firmas number"]}
        expectedKeywords={["compilación", "runtime", "string", "number"]}
        successMessage="Correcto. JS concatena en runtime; TS rechaza el argumento incompatible en compilación."
      />
    </section>
  );
}
