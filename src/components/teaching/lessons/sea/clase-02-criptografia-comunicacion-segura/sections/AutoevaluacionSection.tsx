export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar la diferencia entre codificación, cifrado y hash con un ejemplo de cada uno."}</li>
        <li>{"Elegir la técnica adecuada para contraseñas, mensajes, integridad y autenticidad."}</li>
        <li>{"Describir qué protege HTTPS, cómo opera un ataque MITM y qué no soluciona."}</li>
        <li>{"Explicar la inyección SQL y aplicar consultas parametrizadas como mitigación principal."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/Security/Transport_Layer_Security" target="_blank" rel="noreferrer">MDN: Transport Layer Security</a>{": cómo funciona TLS y qué ofrece al navegador."}
        </li>
        <li>
          <a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" target="_blank" rel="noreferrer">OWASP: prevención de SQL Injection</a>{": guía de defensas con ejemplos."}
        </li>
        <li>
          <a href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" target="_blank" rel="noreferrer">OWASP: almacenamiento de contraseñas</a>{": algoritmos y parámetros recomendados."}
        </li>
      </ul>
    </section>
  );
}
