import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
export function SeleccionarNodosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Seleccionar nodos del DOM"}</h2>
      <p className="my-4">
        {
          "Cualquier manipulación empieza por obtener una referencia al nodo. Se prefiere `querySelector` / `querySelectorAll` por flexibilidad (combinan etiqueta, clase, `id`, atributos)."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"API"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Devuelve"}</th>
            <th className="py-2 text-left font-semibold">{"Notas"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"document.querySelector(selectorCSS)"}</td>
            <td className="py-2 pr-4">{"Primer nodo o `null`"}</td>
            <td className="py-2">{"Selectores CSS (`#app`, `.card`, `button.item`)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"document.querySelectorAll(selectorCSS)"}</td>
            <td className="py-2 pr-4">{"`NodeList` estática"}</td>
            <td className="py-2">{"No es array; se usa `forEach` o `[...lista]`"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{'document.getElementById("id")'}</td>
            <td className="py-2 pr-4">{"Un elemento o `null`"}</td>
            <td className="py-2">{"Válido cuando solo hay un `id` único"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{'document.getElementsByClassName("clase")'}</td>
            <td className="py-2 pr-4">{"Colección viva"}</td>
            <td className="py-2">{"Menos flexible que `querySelectorAll`"}</td>
          </tr>
        </tbody>
      </table>
      <Callout title="Error frecuente">
        {
          "Si querySelector no encuentra nada devuelve null. Llamar .textContent sin comprobar lanza TypeError. Se valida la referencia o se usa optional chaining con cuidado."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`const titulo = document.querySelector("h1");
const botones = document.querySelectorAll("button.item");
const porId = document.getElementById("app");
const porClase = document.getElementsByClassName("card");

console.log(titulo?.textContent);
botones.forEach((btn) => console.log(btn));`}
      />
    </section>
  );
}
