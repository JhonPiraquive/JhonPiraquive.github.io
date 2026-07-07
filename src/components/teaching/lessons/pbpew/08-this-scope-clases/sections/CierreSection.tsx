export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de ámbito, `this`, clases y herencia en JavaScript. Estos conceptos conectan los objetos literales de la lección 7 con el modelado orientado a objetos que aplicarás en estructuras de datos (lección 9)."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Scope:"}</strong>{" global, función, bloque — `let`/`const` respetan `{ }`; evita `var` en bucles con callbacks."}
        </li>
        <li>
          <strong>{"`this`:"}</strong>{" depende de la invocación; métodos de objeto enlazan `this` al objeto; flechas heredan `this` léxico."}
        </li>
        <li>
          <strong>{"Callbacks:"}</strong>{" wrapper flecha, `.bind(obj)` o diseño cuidadoso para no perder contexto."}
        </li>
        <li>
          <strong>{"Clases:"}</strong>{" molde con `constructor` y métodos; instanciar siempre con `new`."}
        </li>
        <li>
          <strong>{"Herencia:"}</strong>{" `extends` + `super(...)` en constructor hijo antes de `this`; `super.metodo()` para reutilizar lógica del padre."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "lección 09-estructuras-de-datos — pilas, colas y modelado con clases u objetos con estado interno."
        }
      </p>
    </section>
  );
}
