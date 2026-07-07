export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección profundiza en cómo vincular JavaScript al HTML: formas de inclusión (inline vs externo), ubicación del <script> y herramientas de depuración en consola. Al finalizar, el estudiante podrá:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Diferenciar JavaScript inline y externo, nombrando al menos una ventaja del enfoque externo (reutilización, caché o separación de responsabilidades)."
          }
        </li>
        <li>
          {
            "Colocar etiquetas <script> en HTML sin romper el parseo del DOM: explicar cuándo usar script al final del <body>, defer en el <head> o async, y reconocer el riesgo de acceder al DOM antes de que exista."
          }
        </li>
        <li>
          {
            "Escribir un programa “Hola mundo” con console.log y usar al menos tres métodos de consola (log, warn, error o table) para depurar en DevTools."
          }
        </li>
        <li>
          {
            "Aplicar comentarios de una y varias líneas (//, /* */) para documentar el propósito del código, no lo obvio."
          }
        </li>
        <li>
          {
            "Diagnosticar un script externo que no carga (404 en Network) o un script en <head> sin defer que falla al acceder al DOM, proponiendo correcciones concretas."
          }
        </li>
      </ul>
    </section>
  );
}
