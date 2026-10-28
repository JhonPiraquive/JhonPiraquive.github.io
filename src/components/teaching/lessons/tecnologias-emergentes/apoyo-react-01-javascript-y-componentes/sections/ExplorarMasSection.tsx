import { Link } from "@/i18n/navigation";

export function ExplorarMasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación y recursos</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación de la parte 1</h3>
      <p className="my-4">Antes de pasar a la parte 2 de la guía, el estudiante debería poder cumplir cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Crear un proyecto con Vite, arrancarlo y detenerlo.</li>
        <li>Explicar qué hace cada parte de package.json y para qué sirve node_modules.</li>
        <li>Usar const por defecto y justificar cuándo hace falta let.</li>
        <li>Escribir una función flecha con retorno implícito.</li>
        <li>Desestructurar un objeto en los parámetros de una función.</li>
        <li>Elegir entre map, filter y find según la necesidad.</li>
        <li>Crear un componente que reciba props y mostrar una lista con key.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Documentación oficial</h3>
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
      <p className="my-4">Serie «Implementación y uso de librerías» de la facultad. Funcionan como segunda explicación de los mismos temas; son material anterior al módulo, por lo que algunas herramientas pueden diferir de las actuales.</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><a href="https://www.youtube.com/watch?v=qRk7Bw-oRcM" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 1</a></li>
        <li><a href="https://www.youtube.com/watch?v=l0w4Yps1ZvM" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 2</a></li>
        <li><a href="https://www.youtube.com/watch?v=JBLSt4TYzOs" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 3</a></li>
        <li><a href="https://www.youtube.com/watch?v=Uz1_zaVylMQ" target="_blank" rel="noreferrer">Implementación y uso de librerías, parte 4</a></li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para reforzar los fundamentos</h3>
      <p className="my-4">Este mismo sitio incluye el módulo de programación básica con explicaciones paso a paso:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><Link href="/teaching/pbpew/03-variables-y-tipos">Variables y tipos</Link></li>
        <li><Link href="/teaching/pbpew/06-funciones-y-callbacks">Funciones y callbacks</Link></li>
        <li><Link href="/teaching/pbpew/07-arrays-json-objetos">Arreglos, JSON y objetos</Link></li>
      </ul>
    </section>
  );
}
