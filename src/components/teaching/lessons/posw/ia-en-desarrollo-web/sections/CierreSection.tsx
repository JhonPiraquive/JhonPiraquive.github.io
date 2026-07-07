export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has aprendido a usar IA en desarrollo web de forma productiva y responsable."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"La IA amplifica productividad; no reemplaza criterio técnico."}</li>
        <li>{"Alucinaciones son reales: verifica paquetes, APIs y docs oficiales."}</li>
        <li>{"Entender el código antes de mergear; si no puedes explicarlo, no lo integres."}</li>
        <li>{"CLAUDE.md y .claude/ dan contexto al agente (stack, convenciones, prohibiciones)."}</li>
        <li>{"Prompts efectivos incluyen stack, restricciones y criterios de calidad."}</li>
        <li>
          {
            "Privacidad: nunca secrets, PII ni código propietario en chats públicos sin acuerdo."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"arquitectura-api"}</code>
        {" — capas internas, SOAP, GraphQL, gRPC y patrones Gateway/BFF."}
      </p>
    </section>
  );
}
