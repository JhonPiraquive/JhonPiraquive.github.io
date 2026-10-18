import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase parte de cero: qué es JavaScript, cómo se conecta a una página HTML y con qué piezas básicas se escribe un programa (variables, tipos, operadores, decisiones, bucles y funciones). Cada concepto se prueba en la consola del navegador."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir JavaScript y el DOM, y distinguir el HTML guardado en disco de la página viva en memoria."}</li>
        <li>{"Incluir scripts en HTML (inline y externos) y depurar con la consola del navegador."}</li>
        <li>{"Declarar variables con const y let, y reconocer los tipos de datos y el hoisting."}</li>
        <li>{"Aplicar operadores y estructuras de decisión (if, else y switch) con comparación estricta."}</li>
        <li>{"Repetir tareas con bucles y controlar fallos con try/catch."}</li>
        <li>{"Definir funciones con parámetros y retorno, y usar callbacks."}</li>
      </ul>
      <Callout title="Del código a la página">
        {"JavaScript es un lenguaje; el navegador lo ejecuta y el DOM es el puente con la página. Todo lo que se aprende en esta clase se puede comprobar en la consola."}
      </Callout>
    </section>
  );
}
