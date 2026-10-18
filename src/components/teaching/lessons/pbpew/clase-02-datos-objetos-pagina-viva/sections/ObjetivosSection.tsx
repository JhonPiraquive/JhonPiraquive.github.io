import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase modela información con arrays, objetos, JSON, clases y estructuras de datos, y la conecta con la página: seleccionar nodos del DOM, modificarlos y responder a eventos. Cierra con un juego completo que integra todo."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Trabajar con arrays y sus métodos (map, filter, forEach), objetos literales y JSON."}</li>
        <li>{"Explicar el ámbito, el valor de this y las clases con herencia."}</li>
        <li>{"Elegir entre Map, Set, pila y cola según el problema."}</li>
        <li>{"Seleccionar y modificar nodos del DOM, y responder a eventos del usuario."}</li>
        <li>{"Integrar lógica, estado y DOM en un juego pequeño."}</li>
      </ul>
      <Callout title="Datos que se ven">
        {"Un programa web es datos más una vista: el estado se guarda en estructuras y el DOM lo muestra."}
      </Callout>
    </section>
  );
}
