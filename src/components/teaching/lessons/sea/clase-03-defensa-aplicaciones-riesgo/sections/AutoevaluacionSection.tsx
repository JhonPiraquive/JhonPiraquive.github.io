export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Describir las banderas de una cookie de sesión y cuándo usar tokens JWT."}</li>
        <li>{"Aplicar reglas de programación segura en errores, registros y configuración."}</li>
        <li>{"Diferenciar ISO/IEC 27001 y 27002 y relacionar cumplimiento con reducción de riesgo."}</li>
        <li>{"Construir una matriz de riesgos y justificar una decisión de tratamiento."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Set-Cookie" target="_blank" rel="noreferrer">MDN: cabecera Set-Cookie</a>{": banderas y atributos de las cookies."}
        </li>
        <li>
          <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" target="_blank" rel="noreferrer">OWASP: gestión de sesiones</a>{": buenas prácticas de sesión."}
        </li>
        <li>
          <a href="https://www.iso.org/standard/27001" target="_blank" rel="noreferrer">ISO/IEC 27001</a>{": descripción oficial de la norma."}
        </li>
        <li>
          <a href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" target="_blank" rel="noreferrer">OWASP: registro de eventos</a>{": qué registrar y qué evitar."}
        </li>
      </ul>
    </section>
  );
}
