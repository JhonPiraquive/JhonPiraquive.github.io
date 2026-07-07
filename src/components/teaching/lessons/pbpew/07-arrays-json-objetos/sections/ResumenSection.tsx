export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Un "}
          <strong>{"array"}</strong>
          {" es una lista ordenada con índices desde "}
          <strong>{"0"}</strong>
          {"; `length` indica cuántos elementos hay."}
        </li>
        <li>
          <strong>{"`push`/`pop`/`shift`/`unshift`"}</strong>
          {" mutan el array original; "}
          <strong>{".map y .filter"}</strong>
          {" devuelven arrays nuevos sin alterar el original."}
        </li>
        <li>
          <strong>{".forEach"}</strong>
          {" ejecuta un callback por elemento pero "}
          <strong>{"no"}</strong>
          {" devuelve un array transformado — usa "}
          <strong>{".map"}</strong>
          {" cuando necesites resultados acumulados."}
        </li>
        <li>
          {"Los "}
          <strong>{"callbacks"}</strong>
          {" de la lección 6 son el mismo patrón que `.forEach`, `.map` y `.filter`."}
        </li>
        <li>
          <strong>{"JSON"}</strong>
          {" serializa datos a texto (`stringify`) y los reconstruye (`parse`); no incluye funciones ni `undefined`."}
        </li>
        <li>
          {"Un "}
          <strong>{"objeto literal"}</strong>
          {" agrupa propiedades; acceso con `.` o `[]`; métodos son funciones como propiedades."}
        </li>
        <li>
          <strong>{"Arrays y objetos"}</strong>
          {" se asignan por "}
          <strong>{"referencia"}</strong>
          {"; "}
          <strong>{"spread"}</strong>
          {" y destructuración ayudan a copiar o extraer sin mutar accidentalmente."}
        </li>
        <li>
          <strong>{"Preview lección 8:"}</strong>
          {" `this` en métodos de objetos literales."}
        </li>
      </ul>
    </section>
  );
}
