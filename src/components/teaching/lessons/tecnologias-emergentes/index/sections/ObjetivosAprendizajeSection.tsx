export function ObjetivosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">Al terminar el módulo, el estudiante será capaz de:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          Explicar qué es una tecnología emergente, distinguirla de una moda y ubicarla en su ciclo de vida con la curva S,
          el ciclo de sobreexpectación, la difusión de innovaciones y los niveles de madurez.
        </li>
        <li>
          Identificar tecnologías emergentes actuales y futuras a partir de señales y fuentes de vigilancia confiables, y
          analizarlas con una ficha basada en evidencia.
        </li>
        <li>
          Explicar cómo funciona la inteligencia artificial moderna: modelos de lenguaje, tokens, contexto, sesiones,
          agentes, harness, comandos, skills, servidores MCP, hooks y plugins.
        </li>
        <li>Usar herramientas de IA de forma segura y responsable, verificando lo que generan.</li>
        <li>
          Decidir con criterios si adoptar una tecnología, usando una matriz ponderada, pruebas de concepto, pilotos,
          métricas, análisis de riesgos y registros de decisión.
        </li>
        <li>
          Construir con React y JavaScript moderno las interfaces y conexiones con APIs que piden las actividades,
          apoyándose en la guía técnica del módulo.
        </li>
      </ul>
    </section>
  );
}
