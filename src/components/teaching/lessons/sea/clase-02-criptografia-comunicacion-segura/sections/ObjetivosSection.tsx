import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase explica cómo se protege la información en reposo y en tránsito: qué es codificar, cifrar y calcular un hash, qué aporta HTTPS y dónde se rompe una aplicación aunque el canal sea seguro, como en la inyección SQL."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Distinguir codificación (Base64), cifrado y hash (SHA-256), y elegir la técnica correcta según el caso."}</li>
        <li>{"Reconocer malas prácticas con claves, contraseñas y algoritmos caseros."}</li>
        <li>{"Explicar qué aporta HTTPS a CIA y autenticidad, cómo funciona un ataque MITM y qué no soluciona HTTPS."}</li>
        <li>{"Describir cómo ocurre una inyección SQL, su impacto y las mitigaciones del lado del servidor."}</li>
        <li>{"Diferenciar validación de entrada de consultas parametrizadas."}</li>
      </ul>
      <Callout title="El canal seguro no basta">
        {"HTTPS protege el trayecto, pero no corrige consultas mal construidas ni contraseñas débiles: cada capa protege algo distinto."}
      </Callout>
    </section>
  );
}
