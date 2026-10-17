export function ExplorarMasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación final y recursos</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación del módulo</h3>
      <p className="my-4">Al terminar el módulo, el estudiante debería poder cumplir cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar qué ocurre desde que se hace clic en «Guardar» hasta que la base de datos tiene el registro.</li>
        <li>Escribir una petición con fetch, revisar <code>ok</code> y manejar los errores con try/catch.</li>
        <li>Construir un CRUD completo con estados de carga, vacío, error y éxito.</li>
        <li>Validar en el cliente sabiendo que el servidor también debe validar.</li>
        <li>Explicar qué hace <code>npm run build</code>, por qué las variables VITE_ son públicas y cómo publicar un sitio con rutas.</li>
        <li>Evaluar una tecnología emergente con criterios, sin dejarse llevar solo por la moda, y ubicarla en su ciclo de adopción.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Documentación de lo visto en la clase</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noreferrer">MDN: Uso de Fetch</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods" target="_blank" rel="noreferrer">MDN: Métodos de petición HTTP</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">MDN: Códigos de estado de respuesta HTTP</a>
        </li>
        <li>
          <a href="https://es.react.dev/reference/react/lazy" target="_blank" rel="noreferrer">React: lazy</a> (carga perezosa de componentes).
        </li>
        <li>
          <a href="https://reactrouter.com/start/declarative/routing" target="_blank" rel="noreferrer">React Router: enrutamiento del lado del cliente</a>
        </li>
        <li>
          <a href="https://es.react.dev/learn/synchronizing-with-effects" target="_blank" rel="noreferrer">React: sincronizar con efectos</a>
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un recurso anterior: leerlo sabiendo qué cambió</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://es.legacy.reactjs.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noreferrer">React (documentación anterior): verificación de tipos con PropTypes</a>. Explica bien el concepto, pero en las versiones actuales de React PropTypes ya no valida. Sirve para entender código antiguo.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Videos de la asignatura y de la bibliografía</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><a href="https://www.youtube.com/watch?v=6BY69bqGyIM" target="_blank" rel="noreferrer">Configuración de la base de datos: MongoDB</a> (video de la facultad).</li>
        <li><a href="https://youtu.be/I-MhmB5B6Zk" target="_blank" rel="noreferrer">Fazt Code: Node.js y MongoDB, CRUD y despliegue desde cero</a>. Muestra el lado del servidor de lo que aquí se consume. Es un video antiguo: sirve para comprender la idea, y las versiones de cada librería deben revisarse antes de copiar el código.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para mirar el horizonte</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><a href="https://tanstack.com/query/latest" target="_blank" rel="noreferrer">TanStack Query</a></li>
        <li><a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">React Hook Form</a> y <a href="https://zod.dev/" target="_blank" rel="noreferrer">Zod</a></li>
        <li><a href="https://react.dev/blog" target="_blank" rel="noreferrer">Blog oficial de React</a> (en inglés)</li>
        <li><a href="https://web.dev/learn/pwa" target="_blank" rel="noreferrer">web.dev: Aprende PWA</a> (en inglés)</li>
        <li><a href="https://developer.mozilla.org/es/docs/WebAssembly" target="_blank" rel="noreferrer">MDN: WebAssembly</a></li>
        <li><a href="https://developer.mozilla.org/es/docs/Web/API/WebXR_Device_API" target="_blank" rel="noreferrer">MDN: WebXR Device API</a></li>
      </ul>
    </section>
  );
}
