export function QueEsCiaAutenticidadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es CIA + Autenticidad"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "CIA resume tres objetivos: Confidencialidad (solo ve quien debe), Integridad (no se altera sin permiso) y Disponibilidad (accesible cuando se necesita). Autenticidad añade confianza en el origen: saber quién envió un mensaje o ejecutó una acción."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Todo control de seguridad se puede mapear a uno o más principios CIA. Al diseñar una app, preguntas: ¿qué datos son secretos? ¿qué no puede cambiar sin autorización? ¿qué pasa si el servicio cae? ¿cómo verifico identidad?"
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (ejemplo rápido)"}</h3>
      <p className="my-4">
        {
          "Transferencia bancaria: confidencialidad (solo tú y el banco ven el monto), integridad (el monto no se altera en tránsito), disponibilidad (la app responde en horario de operación), autenticidad (firma digital o MFA confirma que fuiste tú)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Priorizar solo confidencialidad:"}</strong>
          {" App cifraba datos pero no validaba integridad de pedidos; atacante cambió precios en tránsito. Corrección: equilibrar los tres pilares según el activo."}
        </li>
        <li>
          <strong>{"Disponibilidad sin límites:"}</strong>
          {" API sin rate limiting colapsó ante bot; usuarios legítimos no pudieron pagar. Corrección: disponibilidad con controles anti-abuso."}
        </li>
        <li>
          <strong>{"Autenticidad solo con contraseña:"}</strong>
          {" Cuenta de admin comprometida por reutilización de password filtrada. Corrección: MFA en cuentas privilegiadas."}
        </li>
        <li>
          <strong>{"Logs sin integridad:"}</strong>
          {" Atacante borró evidencia de acceso porque logs eran editables. Corrección: logs append-only o centralizados con retención."}
        </li>
      </ul>
    </section>
  );
}
