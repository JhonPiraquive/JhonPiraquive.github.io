export function ObjetivosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">Al terminar el módulo, el estudiante será capaz de:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          Explicar qué es una tecnología emergente, reconocer en qué etapa de su ciclo de vida se encuentra y decidir
          con criterios si conviene adoptarla, sin dejarse llevar solo por la novedad.
        </li>
        <li>
          Instalar y manejar librerías con npm, y entender por qué una librería ahorra trabajo y también genera
          responsabilidades.
        </li>
        <li>
          Escribir JavaScript moderno con soltura: variables, funciones flecha, objetos, arreglos, desestructuración y
          peticiones asíncronas con async/await.
        </li>
        <li>
          Construir interfaces con React: componentes, props, estado, efectos y listas, a partir de un proyecto creado
          con Vite.
        </li>
        <li>
          Diseñar una experiencia de usuario clara en un sitio administrativo, con Material UI y navegación entre
          pantallas mediante React Router.
        </li>
        <li>
          Conectar la interfaz con una API para crear, leer, actualizar y eliminar datos, validando lo que escribe el
          usuario y mostrando siempre el estado de la operación.
        </li>
        <li>
          Relacionar lo aprendido con otras tecnologías emergentes (inteligencia artificial, WebAssembly, PWA, WebXR) y
          proponer una ruta de aprendizaje para incorporarlas.
        </li>
      </ul>
    </section>
  );
}
