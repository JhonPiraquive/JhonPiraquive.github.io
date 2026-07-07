export function QueEsPhishingSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es phishing"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Phishing es suplantación con objetivo: el atacante se hace pasar por alguien confiable (banco, jefe, soporte IT) para que entregues credenciales, instales malware o apruebes una transferencia. El truco es emocional y contextual, no solo técnico."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Es el vector de entrada más común en brechas corporativas. Un solo clic puede comprometer toda la red. Conocer señales reduce el riesgo individual y organizacional sin depender solo de filtros de correo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "Canales: email, SMS (smishing), WhatsApp, llamadas (vishing), redes sociales. Tácticas: urgencia («tu cuenta será bloqueada»), autoridad («soy el director financiero»), curiosidad (enlace «factura pendiente»). El objetivo final: credenciales, acceso remoto o transferencia."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Capacitación anual sin simulacros:"}</strong>
          {" Empleados olvidaron señales; 12% hizo clic en simulacro real 10 meses después. Corrección: simulacros periódicos + feedback inmediato."}
        </li>
        <li>
          <strong>{"Verificar transferencias solo por email:"}</strong>
          {" Contador transfirió $15.000 USD tras email falsificado del «CEO». Corrección: confirmación por canal alternativo (llamada conocida)."}
        </li>
        <li>
          <strong>{"Enlaces acortados en mensajes internos:"}</strong>
          {" «IT» envió bit.ly para «actualizar password»; era dominio de phishing. Corrección: política de no usar acortadores en comunicaciones sensibles."}
        </li>
        <li>
          <strong>{"Castigar quien reporta:"}</strong>
          {" Empleado ocultó clic por miedo; malware persistió semanas. Corrección: cultura de reporte sin represalias."}
        </li>
      </ul>
    </section>
  );
}
