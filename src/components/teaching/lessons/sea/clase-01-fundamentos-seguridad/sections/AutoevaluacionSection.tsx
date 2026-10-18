export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Narrar cómo la conectividad amplió la superficie de ataque y por qué la seguridad es un proceso."}</li>
        <li>{"Distinguir hacker, vector de ataque y vulnerabilidad, y enumerar canales típicos de ataque."}</li>
        <li>{"Definir los cuatro principios (CIA + autenticidad) y clasificar un incidente según el principio roto."}</li>
        <li>{"Reconocer señales de phishing y aplicar un protocolo de verificación."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noreferrer">OWASP Top Ten</a>{": las categorías de riesgo más frecuentes en aplicaciones web."}
        </li>
        <li>
          <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noreferrer">NIST Cybersecurity Framework</a>{": marco de referencia para organizar la gestión de la seguridad."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/Security" target="_blank" rel="noreferrer">MDN: seguridad web</a>{": guías de seguridad para desarrolladores web."}
        </li>
      </ul>
    </section>
  );
}
