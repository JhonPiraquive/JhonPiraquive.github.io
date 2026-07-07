import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function EventosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Eventos en JavaScript"}</h2>
      <p className="my-4">
        {
          "El navegador notifica acciones del usuario o del sistema: `click`, `input`, `keydown`, `submit`. El patrón PBPEW es `addEventListener(tipo, callback)` — separa HTML (estructura) de comportamiento (JS) y permite varios listeners por evento."
        }
      </p>
      <CompareTable
        headers={["Criterio", "onclick en HTML", "addEventListener"]}
        rows={[
          ["Separación de capas", "Mezcla HTML y JS", "JS aparte"],
          ["Varios handlers", "Uno (se pisan)", "Varios por evento"],
          ["Patrón PBPEW", "Evitar", "Preferido"],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold">{"Objeto evento"}</h3>
      <p className="my-4">{"El callback recibe un objeto (p. ej. `evento` o `e`):"}</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Propiedad / método"}</th>
            <th className="py-2 text-left font-semibold">{"Uso"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"evento.type"}</td>
            <td className="py-2">{'Nombre del evento ("click")'}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"evento.target"}</td>
            <td className="py-2">{"Nodo que originó el evento (p. ej. el `<button>` pulsado)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"evento.currentTarget"}</td>
            <td className="py-2">{"Nodo donde está registrado el listener (en delegación, el contenedor)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"evento.key"}</td>
            <td className="py-2">{'Tecla en eventos de teclado ("Enter", "Escape")'}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"evento.preventDefault()"}</td>
            <td className="py-2">{"Cancela comportamiento por defecto (envío de formulario, seguir enlace)"}</td>
          </tr>
        </tbody>
      </table>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant N as Navegador
  participant L as Listener JS
  U->>N: click en botón
  N->>N: encola evento (FIFO)
  N->>L: dispara callback
  L->>N: actualiza DOM (textContent, classList, etc.)`}
      />
      <CodeFiddle
        language="javascript"
        code={`const btn = document.querySelector("#ok");

btn.addEventListener("click", (evento) => {
  console.log("clic en", evento.target);
  console.log("tipo", evento.type);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter pulsado");
  }
});`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold">{"preventDefault en formularios"}</h3>
      <p className="my-4">
        {"Sin interceptar `submit`, un `<form>` recarga la página. Con `preventDefault` controlas el flujo en cliente."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`const form = document.querySelector("#contacto");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("[name=email]").value;
  console.log("Enviar simulado:", email);
  // actualizar DOM con mensaje de éxito
});`}
      />
      <CodeChallenge
        title="Completa preventDefault"
        template={`form.addEventListener("submit", (e) => {
  e.{{blank1}}();
  console.log("OK");
});`}
        blanks={[{ id: "blank1", answer: "preventDefault", placeholder: "cancelar envío nativo" }]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold">{"Delegación de eventos"}</h3>
      <p className="my-4">
        {
          "En listas largas o dinámicas, no enlaces un listener por cada hijo. Registra uno en un ancestro común y usa `event.target` (a veces con `closest`) para saber qué hijo disparó la acción. Los hijos añadidos después siguen funcionando sin re-enlazar."
        }
      </p>
      <StepReveal
        title="Delegación en lista — paso a paso"
        steps={[
          {
            title: "Lista con N hijos",
            content:
              'Un <ul id="lista-tareas"> con muchos <li>, cada uno con un botón .eliminar. Enlazar 200 listeners consume memoria.',
          },
          {
            title: "Un listener en el padre",
            content: 'lista.addEventListener("click", handler) — un solo punto de enlace en el <ul>.',
          },
          {
            title: "event.target identifica el origen",
            content:
              'Dentro del handler: const boton = e.target.closest("button.eliminar"); if (!boton) return; — filtra clics que no son en eliminar.',
          },
          {
            title: "Hijos nuevos sin re-enlazar",
            content:
              "Al appendChild un <li> nuevo, el listener del <ul> ya captura sus clics. Escala mejor que un bucle de addEventListener.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TB
  subgraph malo [Muchos listeners]
    B1[btn 1] --> L1[listener 1]
    B2[btn 2] --> L2[listener 2]
    B3[btn 3] --> L3[listener 3]
  end

  subgraph bueno [Delegación]
  UL[ul listener único]
  UL --> T{event.target.closest}
  T --> H1[li 1]
  T --> H2[li 2]
  T --> H3[li 3]
  end`}
      />
      <CodeFiddle
        language="javascript"
        code={`const lista = document.querySelector("#lista-tareas");

lista.addEventListener("click", (e) => {
  const boton = e.target.closest("button.eliminar");
  if (!boton) return;

  const li = boton.closest("li");
  li.remove();
});`}
      />
      <Callout title="Caso real: panel admin con 200 filas">
        {
          'Un panel renderiza 200 filas y enlaza addEventListener en cada una. Al añadir filas vía API, los botones nuevos no responden. Migran a un solo listener en tbody que lee event.target.closest("tr") y actúa según data-id.'
        }
      </Callout>
      <PracticeExercise
        prompt="Explica la diferencia entre event.target y event.currentTarget en una lista con delegación (listener en el <ul>, clic en un <li>)."
        hints={["target = origen del clic", "currentTarget = nodo donde está el listener"]}
        expectedKeywords={["target", "currentTarget", "deleg"]}
        successMessage="Correcto. currentTarget es el <ul> (donde registraste el listener); target puede ser el <li>, un <span> interno o el botón pulsado."
      />
      <PracticeExercise
        prompt="Ordena el flujo al pulsar un botón: (a) navegador encola evento, (b) callback actualiza DOM, (c) usuario hace clic, (d) navegador despacha evento al listener. Indica el orden correcto."
        hints={["Primero el usuario, luego encolar, despachar, actualizar"]}
        expectedKeywords={["c", "a", "d", "b"]}
        successMessage="Correcto. Orden: (c) clic → (a) encola → (d) despacha → (b) callback actualiza DOM."
      />
    </section>
  );
}
