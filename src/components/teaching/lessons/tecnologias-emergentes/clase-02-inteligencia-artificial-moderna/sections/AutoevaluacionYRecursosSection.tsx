export function AutoevaluacionYRecursosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación y recursos</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación de la clase</h3>
      <p className="my-4">Antes de pasar a la clase 3, el estudiante debería poder cumplir cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar qué es un token y por qué importa para el costo y el contexto.</li>
        <li>Diferenciar entrenamiento e inferencia, y explicar qué es la fecha de corte.</li>
        <li>Nombrar tres límites de los modelos y cómo mitigarlos.</li>
        <li>Describir los roles de los mensajes y explicar por qué el modelo no recuerda entre sesiones.</li>
        <li>Explicar qué es la ventana de contexto, qué es compactar y qué es RAG.</li>
        <li>Definir agente, harness y subagente, y dibujar el ciclo de un agente.</li>
        <li>Distinguir archivo de instrucciones, comando, skill, servidor MCP, hook y plugin, con un ejemplo de cada uno.</li>
        <li>Explicar qué es una inyección de instrucciones y tres defensas.</li>
        <li>Aplicar una lista de revisión a código generado por IA.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Documentación oficial y estándares</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://modelcontextprotocol.io/" target="_blank" rel="noreferrer">Model Context Protocol</a>: especificación, guías y lista de servidores.
        </li>
        <li>
          <a href="https://agents.md/" target="_blank" rel="noreferrer">AGENTS.md</a>: el formato abierto de archivos de instrucciones para agentes.
        </li>
        <li>
          <a href="https://agentskills.io/" target="_blank" rel="noreferrer">Agent Skills</a>: el estándar abierto de skills.
        </li>
        <li>
          <a href="https://code.claude.com/docs" target="_blank" rel="noreferrer">Documentación de Claude Code</a>: ejemplos completos de sesiones, skills, hooks, subagentes, MCP y plugins en un harness real.
        </li>
        <li>
          <a href="https://docs.claude.com/" target="_blank" rel="noreferrer">Documentación de la API de Claude</a> y{" "}
          <a href="https://platform.openai.com/docs" target="_blank" rel="noreferrer">de la API de OpenAI</a>: mensajes, uso de herramientas y buenas prácticas de prompts.
        </li>
        <li>
          <a href="https://genai.owasp.org/" target="_blank" rel="noreferrer">OWASP: seguridad en IA generativa</a>: los riesgos más comunes de las aplicaciones con modelos de lenguaje.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ética y regulación</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.unesco.org/es/artificial-intelligence/recommendation-ethics" target="_blank" rel="noreferrer">UNESCO: Recomendación sobre la ética de la IA</a>.
        </li>
        <li>
          <a href="https://oecd.ai/es/ai-principles" target="_blank" rel="noreferrer">OCDE: principios de IA</a>.
        </li>
        <li>CONPES 4144, Política Nacional de Inteligencia Artificial de Colombia, disponible en el sitio del Departamento Nacional de Planeación.</li>
      </ul>
    </section>
  );
}
