export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Definir"}</strong>{" qué es una estructura de datos y "}
          <strong>{"distinguir"}</strong>{" entre tipos nativos (`Map`, `Set`) y patrones sobre arrays (pila LIFO, cola FIFO)."}
        </li>
        <li>
          <strong>{"Crear y manipular"}</strong>{" un `Map` con `.set`, `.get`, `.has`, `.delete` y "}
          <strong>{"iterar"}</strong>{" entradas con `for...of` o `.forEach`."}
        </li>
        <li>
          <strong>{"Usar"}</strong>{" `Set` para garantizar valores únicos y "}
          <strong>{"eliminar duplicados"}</strong>{" de un array con spread."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>{" una pila con `push`/`pop` y una cola con `push`/`shift`, "}
          <strong>{"explicando"}</strong>{" el orden de salida LIFO vs FIFO."}
        </li>
        <li>
          <strong>{"Elegir"}</strong>{" entre objeto literal y `Map` según el caso: JSON fijo vs claves dinámicas o de tipos mixtos."}
        </li>
        <li>
          <strong>{"Integrar"}</strong>{" `Map`, `Set`, cola y pila en un flujo de caché y turnos (reto integrador)."}
        </li>
      </ul>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        <strong>{"Prerrequisitos:"}</strong>{" arrays y objetos (lección 07), scope y objetos con propiedades (lección 08), variables, bucles y funciones (lecciones 01–06)."}
      </p>
    </section>
  );
}
