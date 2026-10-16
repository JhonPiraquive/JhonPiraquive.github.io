import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PromesasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Por qué existe la asincronía y qué es una promesa</h2>
      <p className="my-4">
        Pedir datos a un servidor toma tiempo: desde unos milisegundos hasta varios segundos. Mientras esperas, tu página no
        puede quedarse congelada. JavaScript resuelve esto de una manera particular: hace una cosa a la vez, pero cuando
        una tarea es lenta (una petición, un temporizador) la deja «en espera» y sigue con lo demás. Cuando la tarea termina,
        vuelve a ella.
      </p>
      <p className="my-4">
        Piensa en una cafetería. Pides tu café y te entregan un número con un aviso. No te quedas inmóvil en el mostrador:
        te sientas, revisas el celular y, cuando el aviso suena, vas a recoger tu pedido. Mientras tanto el barista atiende
        a otras personas. Ese aviso es lo que en JavaScript se llama una <strong>promesa</strong>.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué es una promesa</h3>
      <p className="my-4">
        Una promesa (Promise) es un objeto que representa un resultado que todavía no existe pero existirá en el futuro.
        Siempre está en uno de tres estados:
      </p>
      <MermaidDiagram
        title="Los tres estados de una promesa"
        description="Diagrama de estados: una promesa empieza pendiente y termina cumplida con un valor o rechazada con un error."
        chart={`stateDiagram-v2
  [*] --> Pendiente
  Pendiente --> Cumplida: salió bien (resolve)
  Pendiente --> Rechazada: falló (reject)
  Cumplida --> [*]
  Rechazada --> [*]`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Pendiente</strong>: todavía esperando.</li>
        <li><strong>Cumplida</strong> (fulfilled): terminó bien y trae un valor.</li>
        <li><strong>Rechazada</strong> (rejected): falló y trae un error.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Reaccionar con then, catch y finally</h3>
      <CodeFiddle
        language="javascript"
        title="Una promesa que tarda un segundo"
        code={`const esperar = (milisegundos) =>
  new Promise((resolve) => setTimeout(resolve, milisegundos));

console.log("1. Inicio");

esperar(1000)
  .then(() => console.log("3. Pasó un segundo"))   // cuando se cumple
  .catch((error) => console.error(error))          // si se rechaza
  .finally(() => console.log("4. Terminó, bien o mal"));   // siempre

console.log("2. Esto se imprime antes de que pase el segundo");`}
      />
      <p className="my-4">
        Fíjate en el orden: el mensaje 2 sale <em>antes</em> que el 3. JavaScript no esperó; dejó la promesa trabajando y
        siguió con la siguiente línea. Esa es la esencia de la asincronía.
      </p>
      <Callout title="Encadenar entra rápido en un laberinto" variant="callout-warning">
        <p className="mb-0">
          Con varias peticiones que dependen una de otra, los <code>.then</code> encadenados se vuelven difíciles de leer.
          Por eso se creó una sintaxis que se lee como código normal, de arriba abajo: <code>async</code>/<code>await</code>,
          la siguiente sección. Debajo sigue siendo lo mismo; solo cambia cómo lo escribes.
        </p>
      </Callout>
    </section>
  );
}
