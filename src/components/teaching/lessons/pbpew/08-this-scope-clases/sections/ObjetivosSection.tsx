export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección profundiza en tres pilares del JavaScript moderno: dónde viven los nombres (scope), a qué objeto apunta una función en ejecución (`this`) y cómo modelar entidades con clases ES6 e herencia. El dominio técnico sigue el brief del topic-expert; los objetivos medibles se listan abajo."
        }
      </p>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Explicar"}</strong>{" qué es el ámbito (scope) en JavaScript y "}
          <strong>{"distinguir"}</strong>{" ámbito global, de función y de bloque con `let`/`const` frente a `var`."}
        </li>
        <li>
          <strong>{"Describir"}</strong>{" qué es `this` y "}
          <strong>{"predecir"}</strong>{" su valor según la forma de invocación (método de objeto, llamada suelta, modo estricto)."}
        </li>
        <li>
          <strong>{"Contrastar"}</strong>{" `this` en funciones normales y en funciones flecha, y "}
          <strong>{"aplicar"}</strong>{" flechas como callbacks que conservan el contexto del objeto."}
        </li>
        <li>
          <strong>{"Definir"}</strong>{" clases ES6 con `constructor` y métodos de instancia, "}
          <strong>{"instanciar"}</strong>{" con `new` y "}
          <strong>{"usar"}</strong>{" `this` coherente en la instancia."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>{" herencia con `extends` y `super`, respetando la regla de invocar `super(...)` antes de usar `this` en constructores hijos."}
        </li>
        <li>
          <strong>{"Diagnosticar"}</strong>{" errores frecuentes: pérdida de `this` en callbacks, olvidar `new`, contaminar el global y sombreado de variables."}
        </li>
      </ul>
    </section>
  );
}
