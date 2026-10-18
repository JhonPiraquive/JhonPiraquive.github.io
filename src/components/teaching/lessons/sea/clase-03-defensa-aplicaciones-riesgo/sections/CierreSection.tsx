export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Una sesión segura combina cookie con Secure, HttpOnly y SameSite, expiración razonable y renovación controlada."}</li>
        <li>{"La programación segura muestra al usuario mensajes genéricos y deja el detalle en registros sin datos sensibles."}</li>
        <li>{"ISO/IEC 27001 define el sistema de gestión; ISO/IEC 27002 lista los controles que lo apoyan."}</li>
        <li>{"La matriz de riesgos prioriza por impacto y probabilidad y cada riesgo termina en una decisión: aceptar, mitigar, transferir o evitar."}</li>
      </ol>
      <p className="my-4">{"Con la clase 3 se completa el recorrido: desde reconocer una amenaza hasta justificar con evidencia las decisiones de seguridad de una aplicación."}</p>
    </section>
  );
}
