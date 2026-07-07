import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function JsonSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"JSON: serialización y deserialización"}
      </h2>
      <p className="my-4">
        {
          "JSON (JavaScript Object Notation) es un formato de texto para intercambiar datos: respuestas de APIs, `localStorage`, logs. Es un subconjunto de la sintaxis literal de objetos y arrays de JS — no admite funciones, `undefined` ni comentarios."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`JSON.stringify(obj)`:"}</strong>{" convierte objeto o array JS → cadena JSON. Pierde métodos y tipos no serializables."}
        </li>
        <li>
          <strong>{"`JSON.parse(texto)`:"}</strong>{" convierte cadena JSON → objeto o array JS. Lanza error si el texto no es JSON válido."}
        </li>
      </ul>
      <StepReveal
        title="Ciclo JSON: de objeto a texto y de vuelta"
        steps={[
          {
            title: "1. Objeto en memoria",
            content:
              'const curso = { nombre: "PBPEW", horas: 40, activo: true }; — datos vivos en JavaScript con propiedades y tipos nativos.',
          },
          {
            title: "2. Serializar",
            content:
              "const texto = JSON.stringify(curso); — convierte a cadena de texto lista para red o almacenamiento.",
          },
          {
            title: "3. Transmitir o guardar",
            content:
              "El texto viaja por HTTP, se guarda en localStorage o en un archivo. Solo es texto, no código ejecutable.",
          },
          {
            title: "4. Deserializar",
            content:
              "const otraVez = JSON.parse(texto); — reconstruye un objeto JS en memoria. Las funciones del original no vuelven.",
          },
          {
            title: "5. Usar en la app",
            content:
              "Accedes a otraVez.nombre, filtras arrays, etc. JSON.parse solo valida sintaxis, no reglas de negocio (ej. edad negativa).",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  O["Objeto JS\\ncurso"]
  O --> S["JSON.stringify"]
  S --> T["'{\\"nombre\\":\\"PBPEW\\"...}'"]
  T --> P["JSON.parse"]
  P --> O2["Objeto JS\\notraVez"]`}
      />
      <CodeFiddle
        language="javascript"
        code={`const curso = {
  nombre: "PBPEW",
  horas: 40,
  activo: true,
};

const texto = JSON.stringify(curso);
console.log(texto);
// {"nombre":"PBPEW","horas":40,"activo":true}

const otraVez = JSON.parse(texto);
console.log(otraVez.nombre); // "PBPEW"`}
      />
      <CodeFiddle
        language="json"
        title="Mismo dato en JSON"
        code={`{
  "nombre": "PBPEW",
  "horas": 40,
  "activo": true
}`}
      />
      <Callout title="Caso real: carrito que revive ítems eliminados">
        {
          "Un frontend guarda el carrito con JSON.stringify en localStorage. El dev muta el array en memoria con push pero olvida volver a serializar. Al recargar, JSON.parse restaura la versión antigua. Lección: tras cada cambio, serializa de nuevo o trabaja con estado inmutable y guarda el nuevo array."
        }
      </Callout>
      <Callout title="Error frecuente — stringify con funciones">
        {
          'JSON.stringify({ fn: () => {} }) produce "{}" — las funciones se omiten. Las propiedades con valor undefined en objetos también se excluyen del JSON.'
        }
      </Callout>
      <CodeChallenge
        title="Completa el código — parsear JSON"
        template={`const {{blank1}} = JSON.{{blank2}}('{"ok":true}');
console.log(obj.ok); // true`}
        blanks={[
          { id: "blank1", answer: "obj", placeholder: "nombre de variable" },
          { id: "blank2", answer: "parse", placeholder: "método JSON" },
        ]}
      />
      <PracticeExercise
        prompt="Ordena el flujo de persistir un carrito: (a) localStorage.setItem('carrito', texto), (b) const texto = JSON.stringify(carrito), (c) usuario modifica carrito, (d) al cargar JSON.parse(localStorage.getItem('carrito')). Indica el orden en uso normal."
        hints={["Primero el usuario cambia datos", "Luego serializas", "Luego guardas", "Al cargar parseas"]}
        expectedKeywords={["c", "b", "a", "d"]}
        successMessage="Correcto. Orden habitual: (c) modifica → (b) stringify → (a) guarda → (d) al cargar parse."
      />
      <PracticeExercise
        prompt="¿Por qué JSON.stringify({ fn: () => {} }) produce '{}' o omite fn?"
        hints={["JSON es solo datos", "No admite funciones ejecutables"]}
        expectedKeywords={["función", "serializ", "texto", "datos"]}
        successMessage="Correcto. JSON solo transporta datos estructurados (texto, números, booleanos, null, arrays, objetos). Las funciones no son datos serializables."
      />
    </section>
  );
}
