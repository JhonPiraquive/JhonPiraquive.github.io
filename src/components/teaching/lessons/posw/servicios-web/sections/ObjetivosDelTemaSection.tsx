import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce qué es un servicio web, por qué las organizaciones los adoptan y una vista previa de SOLID aplicado a APIs."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir servicio web como sistema máquina-a-máquina con interfaz estandarizada (típicamente HTTP) y distinguirlo de un sitio web estático orientado solo a humanos."
          }
        </li>
        <li>
          {
            "Enumerar al menos cuatro objetivos de los servicios web (interoperabilidad, compartir datos, escalabilidad, modularidad, estandarización o acceso remoto) con un ejemplo concreto de cada uno."
          }
        </li>
        <li>
          {
            "Describir el flujo cliente → servicio web → recurso (base de datos u otro servicio) usando un diagrama o analogía (p. ej. ATM)."
          }
        </li>
        <li>
          {
            "Explicar por qué SOLID aplica al diseño de servicios web y nombrar cada letra del acrónimo con un ejemplo de endpoint o módulo."
          }
        </li>
        <li>
          {
            "Identificar en un escenario empresarial cuándo conviene exponer funcionalidad como servicio en lugar de duplicar lógica en cada cliente."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Conocimientos básicos de programación y de la web (navegador, URL, peticiones)."}</li>
        <li>{"Familiaridad con el concepto de cliente y servidor en red."}</li>
        <li>
          {
            "No se requiere experiencia previa en APIs REST ni en arquitectura distribuida; esta es la primera lección del track Programación Orientada a Sitios Web (POSW)."
          }
        </li>
      </ul>
      <Callout title="Contrato público">
        {
          "Un servicio web no es solo código en un servidor: es una interfaz estandarizada que otros sistemas consumen. Cambiar rutas o respuestas sin versionar rompe clientes existentes."
        }
      </Callout>
    </section>
  );
}
