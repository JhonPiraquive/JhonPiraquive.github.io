import { Link } from "@/i18n/navigation";

export function AutoevaluacionYRecursosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación y recursos</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación del módulo</h3>
      <p className="my-4">Al terminar la clase 3, el estudiante debería poder cumplir cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Nombrar criterios técnicos, de negocio y de personas, y elegir los que importan en un caso.</li>
        <li>Construir una matriz ponderada con criterios eliminatorios e interpretar su sensibilidad.</li>
        <li>Explicar cuándo conviene lo nuevo y cuándo lo establecido.</li>
        <li>Diseñar una prueba de concepto con pregunta, límite de tiempo y criterio de éxito escrito antes.</li>
        <li>Definir métricas con línea base que combinen velocidad y calidad.</li>
        <li>Escribir un ADR de una página.</li>
        <li>Ubicar riesgos en una matriz de probabilidad e impacto y proponer un plan de salida.</li>
        <li>Recorrer el método completo, de la identificación a la decisión, para una tecnología emergente.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Recursos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://adr.github.io/" target="_blank" rel="noreferrer">Architectural Decision Records</a>: plantillas y ejemplos de ADR.
        </li>
        <li>
          <a href="https://www.thoughtworks.com/radar/byor" target="_blank" rel="noreferrer">Construir un radar propio (Thoughtworks)</a>: herramienta para crear el radar de un equipo o personal.
        </li>
        <li>
          <a href="https://www.thoughtworks.com/radar" target="_blank" rel="noreferrer">Thoughtworks Technology Radar</a>: ejemplos de decisiones de adopción explicadas.
        </li>
        <li>
          <a href="https://survey.stackoverflow.co/" target="_blank" rel="noreferrer">Encuesta de desarrolladores de Stack Overflow</a>: datos para el criterio de comunidad y talento disponible.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para las actividades</h3>
      <p className="my-4">La guía de apoyo React reúne todo lo técnico de las tres actividades:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><Link href="/teaching/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes">Parte 1: JavaScript moderno y primer componente</Link></li>
        <li><Link href="/teaching/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router">Parte 2: interfaces con MUI y React Router</Link></li>
        <li><Link href="/teaching/tecnologias-emergentes/apoyo-react-03-datos-y-crud">Parte 3: datos reales, CRUD y calidad</Link></li>
      </ul>
    </section>
  );
}
