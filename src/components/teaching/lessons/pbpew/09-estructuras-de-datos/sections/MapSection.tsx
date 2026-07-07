import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MapSection() {
  return (
    <section>
      <p className="my-4">
        {
          "Una estructura de datos es la forma de organizar y acceder a información en memoria. En Programación básica para entornos web (PBPEW) ya usaste arrays y objetos literales; aquí amplías el repertorio con `Map`, `Set` y dos patrones clásicos: pila (LIFO) y cola (FIFO)."
        }
      </p>
      <p className="my-4">
        {
          "Pila y cola no son tipos nativos de JavaScript: son convenciones sobre cómo usar un array. Lo importante es respetar el contrato de entrada y salida."
        }
      </p>
      <p className="my-4">
        {"Usa este mapa para elegir `Map`, `Set`, objeto, pila o cola según lo que necesites:"}
      </p>
      <MermaidDiagram
        chart={`flowchart TD
  Q["¿Qué necesitas?"]
  Q --> U["¿Valores únicos sin repetir?"]
  U -->|Sí| SET["Set"]
  Q --> K["¿Pares clave-valor?"]
  K -->|JSON/API fija| OBJ["Objeto literal"]
  K -->|Claves dinámicas o tipos mixtos| MAP["Map"]
  Q --> O["¿Orden de salida?"]
  O -->|Último entra, primero sale| STACK["Pila: push/pop"]
  O -->|Primero entra, primero sale| QUEUE["Cola: push/shift"]`}
      />
      <h2 className="mb-4 mt-8 text-2xl font-bold text-[var(--color-primary)]">
        {"`Map` en JavaScript: pares clave-valor"}
      </h2>
      <p className="my-4">
        {
          "`Map` es una colección de pares clave → valor donde la clave puede ser cualquier tipo (string, número, objeto, función). Se crea con `new Map()` y se manipula con la API dedicada."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Método / propiedad"}</th>
            <th className="py-2 text-left font-semibold">{"Acción"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".set(clave, valor)"}</td>
            <td className="py-2">{"Añade o actualiza una entrada"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".get(clave)"}</td>
            <td className="py-2">{"Lee el valor (o `undefined` si no existe)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".has(clave)"}</td>
            <td className="py-2">{"Comprueba si existe la clave"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".delete(clave)"}</td>
            <td className="py-2">{"Elimina una entrada"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".clear()"}</td>
            <td className="py-2">{"Vacía el mapa"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{".size"}</td>
            <td className="py-2">{"Número de entradas"}</td>
          </tr>
        </tbody>
      </table>
      <Callout title="Error frecuente">
        {
          'No uses Map como objeto plano: mapa.nombre = "Ana" no funciona. Hace falta mapa.set("nombre", "Ana") y mapa.get("nombre"). Confundir .size con .length también es habitual — Map y Set usan .size; los arrays usan .length.'
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`const edades = new Map();
edades.set("Ana", 21);
edades.set("Luis", 22);
console.log(edades.get("Ana")); // 21
console.log(edades.has("Luis")); // true
console.log(edades.size); // 2

edades.set("Ana", 22); // actualiza
console.log(edades.get("Ana")); // 22`}
      />
      <p className="my-4">
        <strong>{"Ventaja sobre objeto literal:"}</strong>{" la clave conserva su tipo real. Con un objeto, una clave objeto se convierte a string (`\"[object Object]\"`)."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`const porId = new Map();
const usuario = { id: 1, nombre: "Ana" };
porId.set(usuario, "sesión activa");
console.log(porId.get(usuario)); // "sesión activa"

// Con objeto literal la clave sería "[object Object]" — frágil`}
      />
      <p className="my-4">
        <strong>{"Iterar un Map:"}</strong>{" no uses `for...in` (itera propiedades del wrapper). Usa `for...of` con desestructuración o `.forEach`."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`const precios = new Map([["manzana", 500], ["pera", 600]]);

for (const [fruta, precio] of precios) {
  console.log(fruta, precio);
}

precios.forEach((precio, fruta) => {
  console.log(\`\${fruta}: \${precio}\`);
});`}
      />
      <Callout title="Caso real: caché de sesión en dashboard">
        {
          "Un dashboard guarda datos por userId (número) en un objeto: cache[userId] = datos. Al borrar usuarios inactivos notan claves convertidas a string y colisiones con el prototipo en tests. Migran a const cache = new Map() con .set(userId, datos) y .delete(userId) — altas y bajas claras, y .size exacto para métricas."
        }
      </Callout>
      <CodeChallenge
        title="Completa el Map — inventario"
        template={`const inventario = new Map();
inventario.{{blank1}}("manzana", 10);
inventario.{{blank2}}("pera", 5);

function stock(nombre) {
  return inventario.{{blank3}}(nombre) ?? 0;
}
console.log(stock("manzana")); // 10
console.log(stock("uva"));     // 0`}
        blanks={[
          { id: "blank1", answer: "set", placeholder: "método para guardar" },
          { id: "blank2", answer: "set", placeholder: "método para guardar" },
          { id: "blank3", answer: "get", placeholder: "método para leer" },
        ]}
      />
    </section>
  );
}
