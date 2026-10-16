export function ExplorarMasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Para seguir explorando por tu cuenta</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Documentación oficial</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://es.react.dev/learn/state-a-components-memory" target="_blank" rel="noreferrer">React: el estado, la memoria de un componente</a> y toda la sección «Gestión del estado».
        </li>
        <li>
          <a href="https://es.react.dev/learn/you-might-not-need-an-effect" target="_blank" rel="noreferrer">React: puede que no necesites un efecto</a>: lectura clave para no abusar de useEffect.
        </li>
        <li>
          <a href="https://mui.com/material-ui/getting-started/" target="_blank" rel="noreferrer">Material UI: primeros pasos</a> y el catálogo de componentes, con ejemplos para copiar.
        </li>
        <li>
          <a href="https://reactrouter.com/start/declarative/installation" target="_blank" rel="noreferrer">React Router: modo declarativo</a> y su guía de enrutamiento del lado del cliente.
        </li>
        <li>
          <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noreferrer">Nielsen Norman Group: 10 heurísticas de usabilidad</a> (en inglés).
        </li>
        <li>
          <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/es" target="_blank" rel="noreferrer">W3C: introducción a la accesibilidad web</a>.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Videos de la asignatura sobre el proyecto inicial</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><a href="https://www.youtube.com/watch?v=63YK-BGIN88" target="_blank" rel="noreferrer">Traer proyecto inicial desde una plataforma online</a></li>
        <li><a href="https://www.youtube.com/watch?v=cu25mU4N2xs" target="_blank" rel="noreferrer">Qué es lo que compone nuestro proyecto</a></li>
        <li><a href="https://www.youtube.com/watch?v=uUO-ssTXLpI" target="_blank" rel="noreferrer">Descargar proyecto</a></li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Videos externos sobre Material UI: úsalos con cuidado</h3>
      <p className="my-4">
        Estos videos son de la bibliografía de la asignatura. Explican muy bien la idea de usar una librería de
        componentes, pero fueron grabados en 2020 y 2021, cuando Material UI estaba en las versiones 4 y 5. Hoy la
        instalación y algunas importaciones son distintas. Míralos para entender el concepto y copia el código siempre de la
        documentación actual.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><a href="https://www.youtube.com/watch?v=8-sn405JX1Q" target="_blank" rel="noreferrer">Midudev: Usa Material UI en tu aplicación de React (2021)</a></li>
        <li><a href="https://www.youtube.com/watch?v=-ipl60m5eQA" target="_blank" rel="noreferrer">Bluuweb: Curso Material UI, instalación (2020)</a></li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación</h3>
      <p className="my-4">Antes de pasar a la clase 3, comprueba que puedes decir «sí» a todo esto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Sé explicar por qué cambiar una variable normal no redibuja la pantalla y useState sí.</li>
        <li>Actualizo listas y objetos del estado sin mutarlos.</li>
        <li>Puedo decidir si algo necesita un useEffect o se calcula al dibujar.</li>
        <li>Sé instalar MUI y armar un formulario y una tabla con sus componentes.</li>
        <li>Puedo armar un layout con Outlet y rutas anidadas, y leer un id con useParams.</li>
        <li>Diseño pantallas con estados de carga, vacío, error y éxito, y botones con nombre accesible.</li>
      </ul>
    </section>
  );
}
