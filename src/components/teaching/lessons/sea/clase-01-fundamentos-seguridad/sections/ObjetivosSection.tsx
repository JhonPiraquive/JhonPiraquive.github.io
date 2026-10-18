import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase parte de por qué la seguridad existe: cómo las redes abiertas multiplicaron las amenazas, quién ataca y por qué canales, qué se protege (CIA y autenticidad) y cómo la manipulación de personas se convierte en el vector más frecuente."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Narrar los hitos que cambiaron la forma de atacar y defender sistemas y explicar por qué la seguridad es un proceso y no un producto."}</li>
        <li>{"Distinguir entre hacker, vector de ataque y vulnerabilidad, y reconocer los canales típicos del ciberdelincuente."}</li>
        <li>{"Definir confidencialidad, integridad, disponibilidad y autenticidad, y clasificar incidentes según el principio que se rompe."}</li>
        <li>{"Identificar señales de phishing y aplicar un protocolo de verificación ante solicitudes sensibles."}</li>
        <li>{"Proponer medidas de protección personales y de equipo de desarrollo."}</li>
      </ul>
      <Callout title="Seguridad no es lo mismo que herramienta">
        {"Antes de elegir un control se necesita saber qué se protege (CIA + autenticidad) y de quién (hackers y manipulación de personas)."}
      </Callout>
    </section>
  );
}
