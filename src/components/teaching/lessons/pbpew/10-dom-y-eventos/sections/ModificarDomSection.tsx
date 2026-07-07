import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ModificarDomSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Modificar el DOM"}</h2>
      <p className="my-4">
        {
          "Una vez seleccionado el nodo, puedes leer y escribir contenido, cambiar estilos y añadir o quitar nodos del árbol."
        }
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold">{"Contenido: textContent frente a innerHTML"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`textContent`"}</strong>
          {" — texto plano; al asignar, el navegador no interpreta etiquetas HTML. Más seguro con datos de usuario."}
        </li>
        <li>
          <strong>{"`innerHTML`"}</strong>
          {" — interpreta marcado HTML; útil para plantillas controladas por ti, peligroso con entrada no confiable (riesgo XSS)."}
        </li>
      </ul>
      <CompareTable
        headers={["Criterio", "textContent", "innerHTML"]}
        rows={[
          ["Interpreta HTML", "No (texto plano)", "Sí"],
          ["Riesgo con usuario", "Bajo", "Alto (XSS)"],
          ["Uso PBPEW", "Mensajes, contadores, datos", "Plantillas fijas controladas por ti"],
          ["Ejemplo", "p.textContent = userInput", 'p.innerHTML = "<strong>OK</strong>"'],
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`const p = document.querySelector("#mensaje");

p.textContent = "Nuevo texto"; // seguro: muestra texto literal
p.innerHTML = "<strong>Importante</strong>"; // interpreta etiquetas

const usuario = "<img src=x onerror=alert(1)>";
p.textContent = usuario; // se ve como texto — correcto
// p.innerHTML = usuario; // ⚠️ peligroso con entrada externa`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold">{"Estilos y clases"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`elemento.style.propiedad = valor`"}</strong>
          {" — estilo inline puntual (`color`, `display`, etc.)."}
        </li>
        <li>
          <strong>{"`elemento.classList`"}</strong>
          {
            " — API moderna: `.add(\"activo\")`, `.remove(\"oculto\")`, `.toggle(\"visible\")`, `.contains(\"activo\")`. Preferible a pelear con `className` como string (pisarías otras clases)."
          }
        </li>
      </ul>
      <CodeFiddle
        language="javascript"
        code={`const tarjeta = document.querySelector(".card");

tarjeta.style.color = "#0f766e"; // inline puntual
tarjeta.classList.add("activa");
tarjeta.classList.toggle("oculta");
console.log(tarjeta.classList.contains("activa")); // true`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold">{"Crear y eliminar nodos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`document.createElement(\"li\")`"}</strong>
          {" — crea nodo vacío en memoria (aún no visible)."}
        </li>
        <li>
          <strong>{"`padre.appendChild(hijo)`"}</strong>
          {" — inserta al final del padre."}
        </li>
        <li>
          <strong>{"`hijo.remove()`"}</strong>
          {" o "}
          <strong>{"`padre.removeChild(hijo)`"}</strong>
          {" — elimina del árbol."}
        </li>
      </ul>
      <CodeFiddle
        language="javascript"
        code={`const lista = document.querySelector("#lista");
const li = document.createElement("li");
li.textContent = "Elemento nuevo";
lista.appendChild(li);

// más tarde:
li.remove(); // o lista.removeChild(li);`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Renderizar comentarios de usuario con `innerHTML`"}</strong>
          {" — un visitante inserta `<script>` o atributos `onerror` y compromete la sesión (XSS). "}
          <em>{"Corrección:"}</em>
          {" `textContent` o sanitización en servidor."}
        </li>
        <li>
          <strong>{"Concatenar plantillas HTML con datos de API sin escapar"}</strong>
          {" — un campo `nombre` con `<img onerror=…>` ejecuta código en el navegador de otros usuarios. "}
          <em>{"Corrección:"}</em>
          {" plantillas controladas + `textContent` para valores dinámicos."}
        </li>
        <li>
          <strong>{"Sobrescribir `className` como string"}</strong>
          {" — pierdes clases de utilidades o de un framework al añadir una sola clase nueva. "}
          <em>{"Corrección:"}</em>
          {" `classList.add` / `toggle` / `remove`."}
        </li>
        <li>
          <strong>{"Insertar nodos sin `textContent` en listas generadas"}</strong>
          {" — mezclar `innerHTML` en un ítem y texto plano en otro abre inconsistencias y vectores XSS. "}
          <em>{"Corrección:"}</em>
          {" `createElement` + `textContent` + `appendChild` de forma uniforme."}
        </li>
      </ul>
      <Callout title="Caso real: formulario que recarga y pierde datos">
        {
          "Una landing valida campos con JS pero el form sigue haciendo submit nativo. La página se recarga, se pierde lo escrito y el equipo cree que el JavaScript no funciona. El handler sí corrió, pero no llamó event.preventDefault(). En submit, valida y usa preventDefault si quieres manejar el envío en cliente."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Por qué textContent es más seguro que innerHTML cuando muestras un comentario escrito por un usuario?"
        hints={["innerHTML interpreta etiquetas y scripts", "textContent trata todo como texto plano"]}
        expectedKeywords={["texto", "HTML", "XSS", "segur"]}
        successMessage="Correcto. innerHTML parsea marcado arbitrario; textContent muestra el valor como texto literal."
      />
      <CodeChallenge
        title="Completa la creación de un ítem"
        template={`const lista = document.querySelector("#lista");
const li = document.{{blank1}}("li");
li.{{blank2}} = "Tarea nueva";
lista.{{blank3}}(li);`}
        blanks={[
          { id: "blank1", answer: "createElement", placeholder: "crear nodo" },
          { id: "blank2", answer: "textContent", placeholder: "asignar texto" },
          { id: "blank3", answer: "appendChild", placeholder: "insertar en padre" },
        ]}
      />
    </section>
  );
}
