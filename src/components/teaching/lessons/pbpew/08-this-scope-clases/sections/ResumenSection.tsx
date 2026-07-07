export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Ámbito (scope): global, de función y de bloque. `let`/`const` respetan bloque; `var` solo función (legacy)."
          }
        </li>
        <li>
          {
            "Sombreado y bucles con `let` vs `var` en callbacks — cada iteración con `let` tiene su propia variable."
          }
        </li>
        <li>
          {
            "`this` no es una variable declarativa; depende de cómo se invoca la función (método de objeto vs llamada suelta)."
          }
        </li>
        <li>
          {
            "Modo estricto: `this` en llamada suelta es `undefined`. Flechas: `this` léxico del scope exterior — ideal para callbacks internos."
          }
        </li>
        <li>
          {
            "Clases ES6: `class`, `constructor`, métodos de instancia, instanciar con `new`. `this` es la instancia."
          }
        </li>
        <li>
          {
            "Herencia: `extends`, `super(...)` en constructor hijo antes de usar `this`. Métodos del padre disponibles en la hija."
          }
        </li>
        <li>
          {
            "Evitar: perder `this` en callbacks, flecha como método de instancia cuando necesitas `this` dinámico, olvidar `new`, contaminar el global."
          }
        </li>
      </ul>
    </section>
  );
}
