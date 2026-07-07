import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function JsonSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"JSON: JavaScript Object Notation"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Formato ligero basado en sintaxis de objetos JS (~2001, Douglas Crockford)."}</li>
        <li>{"Tipos nativos: string, number, boolean, null, array, object."}</li>
        <li>
          <strong>{"Sin comentarios"}</strong>
          {" en la spec estándar; sin atributos ni namespaces."}
        </li>
        <li>{"Predeterminado en APIs REST modernas."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "JSON representa datos estructurados de forma compacta. Los metadatos que en XML van como atributos (moneda=\"COP\") en JSON son campos anidados dentro de objetos."
        }
      </p>
      <CodeFiddle
        language="json"
        title="Mismo pedido en JSON"
        code={`{
  "pedido": {
    "id": 1042,
    "cliente": {
      "nombre": "Ana García",
      "email": "ana@ejemplo.com"
    },
    "items": [
      {
        "producto": "Laptop Pro 15",
        "cantidad": 1,
        "precio": { "valor": 4500000, "moneda": "COP" }
      },
      {
        "producto": "Mouse inalámbrico",
        "cantidad": 2,
        "precio": { "valor": 85000, "moneda": "COP" }
      }
    ],
    "total": { "valor": 4670000, "moneda": "COP" }
  }
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Parsear JSON en JavaScript"}</h3>
      <CodeFiddle
        language="javascript"
        title="Parsear JSON en JavaScript"
        code={`const raw = '{"id":1042,"activo":true,"items":[]}';
const pedido = JSON.parse(raw);
console.log(pedido.id);      // 1042
console.log(pedido.activo);  // true (boolean, no string)
console.log(typeof pedido.id);     // "number"
console.log(typeof pedido.activo); // "boolean"`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-ejemplo: JSON inválido"}</h3>
      <CodeFiddle
        language="json"
        title="Anti-ejemplo: JSON inválido"
        code={`{
  "id": 1042,
  "nota": // esto rompe JSON.parse en la spec estándar
}`}
      />
      <Callout title="Error frecuente">
        {
          'Asumir que JSON admite comentarios con // o /* */. La especificación estándar no los permite; parsers estrictos fallan. Usa campos como "_comentario" si necesitas metadatos.'
        }
      </Callout>
      <CodeChallenge
        title="Completa los tipos nativos de JSON"
        template="JSON soporta tipos nativos como ___, ___, ___ y ___ (además de array y object)."
        blanks={[
          { id: "blank1", answer: "string", placeholder: "texto" },
          { id: "blank2", answer: "number", placeholder: "numérico" },
          { id: "blank3", answer: "boolean", placeholder: "true/false" },
          { id: "blank4", answer: "null", placeholder: "ausencia de valor" },
        ]}
      />
    </section>
  );
}
