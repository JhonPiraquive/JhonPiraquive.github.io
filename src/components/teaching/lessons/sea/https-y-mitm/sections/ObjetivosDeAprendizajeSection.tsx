export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar en términos simples qué aporta HTTPS a CIA + Autenticidad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir un escenario MITM y cómo HTTPS lo dificulta."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Identificar 4 errores comunes al “usar HTTPS” sin estar realmente seguro."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reconocer qué HTTPS NO soluciona (ej. SQLi, credenciales débiles)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proponer prácticas de configuración y verificación (sin entrar a comandos avanzados)."}</li>
      </ul>
    </section>
  );
}
