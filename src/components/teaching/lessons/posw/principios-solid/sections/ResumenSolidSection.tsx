import { CompareTable } from "@/components/teaching/CompareTable";

export function ResumenSolidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Resumen: principios y señales de violación"}
      </h2>
      <CompareTable
        headers={["Principio", "Letra", "Regla", "Señal de violación"]}
        rows={[
          ["Single Responsibility", "S", "Una clase, una razón para cambiar", "God class: valida + guarda + envía email"],
          ["Open/Closed", "O", "Extender sin modificar código existente", "Cadena if/else por tipo de pago"],
          ["Liskov Substitution", "L", "Subtipo sustituye al padre sin romper", "Subclase lanza en método heredado"],
          ["Interface Segregation", "I", "Interfaces pequeñas y específicas", "Robot obligado a comer() y dormir()"],
          ["Dependency Inversion", "D", "Alto nivel depende de abstracciones", "new MySQLRepository() dentro del servicio"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Aplicación en el track Programación Orientada a Sitios Web (POSW)"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Controladores delgados."}</li>
        <li>{"Servicios con lógica de negocio."}</li>
        <li>{"Repositorios detrás de interfaces."}</li>
        <li>{"DTOs separados de entidades."}</li>
      </ul>
    </section>
  );
}
