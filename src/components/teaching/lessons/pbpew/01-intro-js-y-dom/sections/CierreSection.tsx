export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado la introducción a JavaScript y al DOM. Los conceptos de esta lección son la base de todo el track PBPEW: sin entender la diferencia entre HTML estático y DOM vivo, y sin saber usar la consola del navegador, será difícil avanzar en manipulación del DOM, eventos y asincronía."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"HTML = estructura · CSS = presentación · JavaScript = comportamiento · DOM = puente en memoria."}</li>
        <li>{"El navegador ejecuta JavaScript; TypeScript es una capa de desarrollo que debe convertirse a JS."}</li>
        <li>{"DevTools (F12) es tu primera herramienta de diagnóstico: Elements, Console y Network."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección 02-js-en-html — vincular scripts al HTML con <script> (inline vs externo)."}
      </p>
    </section>
  );
}
