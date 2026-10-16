import { Link } from "@/i18n/navigation";

export function ExplorarMasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Para seguir explorando por tu cuenta</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Documentación oficial (siempre actualizada)</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" target="_blank" rel="noreferrer">MDN: Guía de JavaScript</a>: la referencia más confiable del lenguaje, en español.
        </li>
        <li>
          <a href="https://es.react.dev/learn" target="_blank" rel="noreferrer">React: Aprende React</a>: el tutorial oficial, con ejercicios en el navegador.
        </li>
        <li>
          <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">Vite: Guía</a>: cómo funciona la herramienta y todas sus opciones.
        </li>
        <li>
          <a href="https://docs.npmjs.com/" target="_blank" rel="noreferrer">Documentación de npm</a>: comandos y conceptos del gestor de paquetes.
        </li>
        <li>
          <a href="https://javascript.info/" target="_blank" rel="noreferrer">javascript.info</a>: curso gratuito de JavaScript, claro y con muchos ejemplos.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Videos de la asignatura</h3>
      <p className="my-4">Serie «Implementación y uso de librerías» de la facultad. Verlos te sirve como segunda explicación del mismo tema.</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><a href="https://www.youtube.com/watch?v=qRk7Bw-oRcM" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 1</a></li>
        <li><a href="https://www.youtube.com/watch?v=l0w4Yps1ZvM" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 2</a></li>
        <li><a href="https://www.youtube.com/watch?v=JBLSt4TYzOs" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 3</a></li>
        <li><a href="https://www.youtube.com/watch?v=Uz1_zaVylMQ" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 4</a></li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Si necesitas reforzar los fundamentos</h3>
      <p className="my-4">En este mismo sitio tienes el módulo de programación básica con explicaciones paso a paso:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><Link href="/teaching/pbpew/03-variables-y-tipos">Variables y tipos</Link></li>
        <li><Link href="/teaching/pbpew/06-funciones-y-callbacks">Funciones y callbacks</Link></li>
        <li><Link href="/teaching/pbpew/07-arrays-json-objetos">Arreglos, JSON y objetos</Link></li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación</h3>
      <p className="my-4">Antes de pasar a la clase 2, comprueba que puedes decir «sí» a todo esto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Sé crear un proyecto con Vite, arrancarlo y detenerlo.</li>
        <li>Sé qué hace cada parte de package.json y para qué sirve node_modules.</li>
        <li>Uso const por defecto y sé explicar cuándo necesito let.</li>
        <li>Puedo escribir una función flecha con retorno implícito.</li>
        <li>Sé desestructurar un objeto en los parámetros de una función.</li>
        <li>Sé cuándo usar map, filter y find.</li>
        <li>Puedo crear un componente que reciba props y mostrar una lista con key.</li>
      </ul>
    </section>
  );
}
