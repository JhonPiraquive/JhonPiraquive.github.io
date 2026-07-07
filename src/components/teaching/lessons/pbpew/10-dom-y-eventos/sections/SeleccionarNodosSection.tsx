import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function SeleccionarNodosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Seleccionar nodos del DOM"}</h2>
      <p className="my-4">
        {
          "Cualquier manipulación empieza por obtener una referencia al nodo. En Programación básica para entornos web (PBPEW) se prefiere `querySelector` / `querySelectorAll` por flexibilidad (combinan etiqueta, clase, `id`, atributos)."
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
            <td className="py-2">{"No es array; usa `forEach` o `[...lista]`"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{'document.getElementById("id")'}</td>
            <td className="py-2 pr-4">{"Un elemento o `null`"}</td>
            <td className="py-2">{"Válido cuando solo tienes un `id` único"}</td>
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
          "Si querySelector no encuentra nada devuelve null. Llamar .textContent sin comprobar lanza TypeError. Valida la referencia o usa optional chaining con cuidado."
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
      <CodeChallenge
        title="Completa el selector"
        template={`const items = document.{{blank1}}(".item");
const app = document.{{blank2}}("#app");

if (app) {
  console.log(app.textContent);
}`}
        blanks={[
          { id: "blank1", answer: "querySelectorAll", placeholder: "todos los .item" },
          { id: "blank2", answer: "querySelector", placeholder: "primer #app" },
        ]}
      />
      <PracticeExercise
        prompt='Selecciona el elemento con id titulo y cambia su textContent a tu nombre. Describe qué API usaste y por qué.'
        hints={['document.querySelector("#titulo")', "Comprueba que no sea null antes de asignar"]}
        expectedKeywords={["querySelector", "textContent", "titulo"]}
        successMessage='Correcto. querySelector("#titulo") devuelve el nodo; textContent actualiza el texto visible.'
      />
    </section>
  );
}
