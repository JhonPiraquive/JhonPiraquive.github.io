import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: matrícula segura"}
      </h2>
      <p className="my-4">{"El reto reúne consultas y administración sobre el esquema de matrículas de Rutas Digitales:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Consultas con WHERE, DISTINCT de sedes y los dos programas con más cupos."}</li>
        <li>{"Agregados con GROUP BY y HAVING."}</li>
        <li>{"INNER y LEFT JOIN para detectar programas sin inscritos."}</li>
        <li>{"Un UPDATE y un DELETE seguros, con una reflexión de 3–4 líneas sobre qué pasa sin WHERE y por qué conviene un respaldo."}</li>
        <li>{"Una vista de programas y cupos, con su SELECT."}</li>
        <li>{"La inscripción atómica (UPDATE más INSERT), con WHERE en los cupos."}</li>
        <li>{"GRANT y REVOKE para una aplicación y para reportería, con mínimo privilegio."}</li>
        <li>{"Cuatro decisiones de aplicación frente a BD, y el esbozo de una función, un procedimiento o un trigger de auditoría."}</li>
      </ol>
      <ChallengeCard
        title="Matrícula segura"
        difficulty="integrador"
        prompt="Armar el flujo completo sobre el esquema de matrículas: consultas, JOINs, cambios seguros, vista, transacción, privilegios mínimos y decisiones entre aplicación y BD."
        acceptanceCriteria={[
          "Consultas con WHERE, ORDER y agregados",
          "INNER y LEFT JOIN documentados",
          "UPDATE y DELETE con WHERE y reflexión sobre el respaldo",
          "Transacción con WHERE en los cupos",
          "GRANT mínimo para aplicación y reportería",
          "Vista y al menos un objeto de rutina o trigger esbozado",
        ]}
        hints={["Un SELECT con COUNT antes de borrar", "No usar un root compartido", "Los triggers se mantienen delgados"]}
      />
    </section>
  );
}
