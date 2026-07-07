export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de funciones, return, parámetros y callbacks en JavaScript. Estos conceptos conectan la lógica reutilizable con los bucles de la lección 5 y preparan los métodos de array de la lección 7."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Funciones"}</strong>{" agrupan lógica; "}
          <strong>{"return"}</strong>{" envía el resultado al llamador."}
        </li>
        <li>
          <strong>{"Parámetros"}</strong>{" vs "}
          <strong>{"argumentos"}</strong>
          {"; "}
          <strong>{"parámetros por defecto"}</strong>{" para valores opcionales."}
        </li>
        <li>
          <strong>{"Declaración"}</strong>
          {", "}
          <strong>{"expresión"}</strong>{" y "}
          <strong>{"flecha"}</strong>{" — distinto hoisting y retorno implícito en arrow."}
        </li>
        <li>
          <strong>{"Callbacks"}</strong>{" conectan tu código con quien decide cuándo ejecutarlo (bucles, eventos, APIs)."}
        </li>
        <li>
          {"Pasa "}
          <strong>{"referencia"}</strong>
          {" (`fn`), no "}
          <strong>{"invocación"}</strong>
          {" (`fn()`) cuando quieres ejecutar después."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "lección 07-arrays-json-objetos — arrays, objetos JSON y métodos .forEach, .map y .filter con callbacks."
        }
      </p>
    </section>
  );
}
