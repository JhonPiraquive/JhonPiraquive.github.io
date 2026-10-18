import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase incorpora el tiempo y la red: temporizadores, promesas, async/await y fetch para consumir una API. Después aplica todo en tres proyectos: calculadora, lista de tareas y ajedrez."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Distinguir código sincrónico de asíncrono y usar temporizadores y promesas."}</li>
        <li>{"Escribir funciones async/await con manejo de errores."}</li>
        <li>{"Consumir una API con fetch, comprobando la respuesta e interpretando JSON."}</li>
        <li>{"Construir una calculadora, una lista de tareas y un tablero de ajedrez separando datos, lógica y vista."}</li>
      </ul>
      <Callout title="La página habla con el mundo">
        {"Las peticiones tardan: el programa no se detiene a esperar, sino que reacciona cuando llega la respuesta."}
      </Callout>
    </section>
  );
}
