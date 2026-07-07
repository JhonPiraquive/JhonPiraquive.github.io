import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DelegacionEventosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Delegación de eventos en el teclado"}
      </h2>
      <p className="my-4">
        {
          "Un solo listener en `.teclado` escala mejor que dieciséis listeners sueltos. Usa `closest(\"button\")` porque el clic puede caer en un hijo del botón."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`teclado.addEventListener("click", (event) => {
  const boton = event.target.closest("button");
  if (!boton || !teclado.contains(boton)) return;

  const accion = boton.dataset.action;

  if (accion === "digit") {
    manejarDigito(boton.dataset.value);
  } else if (accion === "decimal") {
    manejarPunto();
  } else if (accion === "operator") {
    manejarOperador(boton.dataset.value);
  } else if (accion === "equals") {
    manejarIgual();
  } else if (accion === "clear") {
    limpiar();
  }
});`}
      />
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant T as .teclado
  participant JS as manejarDigito
  participant D as #display

  U->>T: clic en botón "8"
  T->>JS: listener (delegación)
  JS->>JS: actualizar operandoActual
  JS->>D: textContent = operandoActual
  D-->>U: ve "8"`}
      />
      <CodeChallenge
        title="Completa el listener con delegación"
        template={`const teclado = document.querySelector(".teclado");
teclado.addEventListener("{{blank1}}", (event) => {
  const boton = event.target.{{blank2}}("button");
  if (!boton) return;
  const accion = boton.dataset.{{blank3}};
  if (accion === "digit") manejarDigito(boton.dataset.value);
});`}
        blanks={[
          { id: "blank1", answer: "click", placeholder: "evento de ratón" },
          { id: "blank2", answer: "closest", placeholder: "sube al botón padre" },
          { id: "blank3", answer: "action", placeholder: "atributo data-action" },
        ]}
      />
    </section>
  );
}
