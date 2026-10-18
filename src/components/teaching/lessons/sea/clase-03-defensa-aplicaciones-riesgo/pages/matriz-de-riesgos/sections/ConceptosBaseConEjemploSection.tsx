export function ConceptosBaseConEjemploSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Conceptos base (con ejemplo simple)"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La gestión de riesgos parte de vocabulario preciso: Activo (lo que proteges), Amenaza (lo que podría pasar), Vulnerabilidad (debilidad explotable), Impacto (cuánto duele), Probabilidad (qué tan fácil/frecuente) y Riesgo (impacto × probabilidad)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin lenguaje común, equipos discuten «prioridades» sin datos. La matriz de riesgos ordena esfuerzo: mitigar primero lo crítico y probable, aceptar o transferir lo residual con evidencia."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Activo: base de clientes. Amenaza: robo por SQLi. Vulnerabilidad: búsqueda sin parametrizar. Impacto: alto (multas, reputación). Probabilidad: media (endpoint público). Riesgo: alto → prioridad 1: prepared statements + WAF."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Matriz sin dueños:"}</strong>
          {" Riesgos listados en Excel sin responsable; nadie mitigó en 8 meses. Corrección: cada riesgo con owner y fecha."}
        </li>
        <li>
          <strong>{"Probabilidad subjetiva sin evidencia:"}</strong>
          {" «Bajo» porque «nunca nos ha pasado»; ransomware llegó igual. Corrección: basarse en logs, threat intel y sector."}
        </li>
        <li>
          <strong>{"Mitigar todo por igual:"}</strong>
          {" Presupuesto gastado en controles menores; SQLi crítico sin parche. Corrección: priorizar por score de riesgo."}
        </li>
        <li>
          <strong>{"No revisar tras cambios:"}</strong>
          {" Migración a nube sin actualizar matriz; nuevos activos expuestos. Corrección: revisión tras cada despliegue mayor."}
        </li>
      </ul>
    </section>
  );
}
