export function ObjetivosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">Al terminar el módulo vas a poder:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          Explicar qué es una tecnología emergente y decidir con criterios si conviene adoptarla, sin dejarte llevar
          solo por lo nuevo.
        </li>
        <li>
          Instalar y manejar librerías con npm, y entender por qué una librería te ahorra trabajo y también te
          genera responsabilidades.
        </li>
        <li>
          Escribir JavaScript moderno con soltura: variables, funciones flecha, objetos, arreglos, desestructuración y
          peticiones asíncronas con async/await.
        </li>
        <li>
          Construir interfaces con React: componentes, props, estado, efectos y listas, usando un proyecto creado con Vite.
        </li>
        <li>
          Diseñar una experiencia de usuario clara en un sitio administrativo, con Material UI y navegación
          entre pantallas usando React Router.
        </li>
        <li>
          Conectar la interfaz con una API para crear, leer, actualizar y eliminar datos, validando lo que escribe el
          usuario y mostrando siempre qué está pasando.
        </li>
      </ul>
    </section>
  );
}
