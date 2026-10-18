import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function MaquetaHtmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Maqueta HTML"}</h2>
      <p className="my-4">
        {
          "El marcado define la estructura y los atributos `data-action` / `data-value` que el JavaScript leerá. En la UI se muestran `×` y `÷`, pero internamente se mapean a `*` y `/`."
        }
      </p>
      <CodeFiddle
        language="html"
        code={`<div class="calculadora">
  <output id="display" class="pantalla" aria-live="polite">0</output>
  <div class="teclado" role="group" aria-label="Teclado calculadora">
    <button type="button" data-action="clear">C</button>
    <button type="button" data-action="operator" data-value="/">÷</button>
    <button type="button" data-action="operator" data-value="*">×</button>
    <button type="button" data-action="digit" data-value="7">7</button>
    <button type="button" data-action="digit" data-value="8">8</button>
    <button type="button" data-action="digit" data-value="9">9</button>
    <button type="button" data-action="operator" data-value="-">−</button>
    <!-- … resto de dígitos, punto y operadores … -->
    <button type="button" data-action="decimal">.</button>
    <button type="button" data-action="equals">=</button>
  </div>
</div>`}
      />
    </section>
  );
}
