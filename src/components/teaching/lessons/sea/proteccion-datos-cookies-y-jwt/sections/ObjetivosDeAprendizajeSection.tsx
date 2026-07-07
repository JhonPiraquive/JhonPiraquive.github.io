export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar qué datos de usuario son sensibles y por qué."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir qué hace una cookie de sesión y qué banderas la protegen."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Enumerar banderas y prácticas: Secure, HttpOnly, SameSite, expiración."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar qué es JWT y cuándo usarlo (y cuándo no)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Identificar 4 riesgos típicos: XSS/robo de token, expiración mal gestionada, almacenamiento inseguro, falta de rotación."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Redactar una política simple de sesión: duración, renovación y cierre."}</li>
      </ul>
    </section>
  );
}
