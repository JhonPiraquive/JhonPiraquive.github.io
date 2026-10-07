export function OrientacionAObjetosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Metodología orientada a objetos</h2>
      <p className="my-4">
        Esta metodología analiza, diseña y construye a partir de lo que ocurre en el mundo real. Los diagramas
        se dibujan con UML. Metodologías conocidas de esta familia son RUP (Rational Unified Process), OPEN y
        MÉTRICA.
      </p>
      <p className="my-4">Sus rasgos prácticos:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Agrupa capas de objetos por nivel de abstracción.</li>
        <li>Identifica situaciones relevantes del negocio.</li>
        <li>Permite un prototipo de diseño y validarlo con situaciones de uso.</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Principios</h3>
      <p className="my-4">Rodríguez, de la Universidad de Alcalá, los resume así:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Los modelos se basan en conceptos del mundo real.</li>
        <li>El software es una colección de objetos. A cada objeto se le asocian datos (atributos) y comportamiento (métodos).</li>
        <li>Los objetos se comunican con mensajes. Quien recibe el mensaje ejecuta una operación.</li>
      </ul>
      <p className="my-4">
        La mayoría de lenguajes actuales se apoyan en herencia, modularidad, polimorfismo y encapsulamiento
        (Kendall y Kendall, 2011). En este módulo no vas a codificarlos: vas a reconocerlos en el modelo. Si ya
        cursaste Programación Orientada a Objetos, aquí los vuelves a ver como herramienta de análisis, no como
        sintaxis.
      </p>
    </section>
  );
}
