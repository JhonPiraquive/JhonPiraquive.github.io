import { Callout } from "@/components/teaching/Callout";

export function DefinicionSistemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es un sistema de información</h2>
      <p className="my-4">
        En tecnología no se construye software por moda. Se construye porque alguien percibe un problema: las rutinas
        se hacen a mano, la información llega tarde o las decisiones se toman sin datos. Un sistema de
        información recoge esos datos, los transforma y los devuelve para que la organización trabaje mejor.
      </p>
      <p className="my-4">
        Laudon y Laudon (2004, p. 15) lo definen así: un conjunto de componentes interrelacionados que recolectan
        (o recuperan), procesan, almacenan y distribuyen información para apoyar la toma de decisiones y el
        control de una organización; ayudar a gerentes y trabajadores a analizar problemas, visualizar asuntos
        complejos y crear productos nuevos.
      </p>
      <Callout title="Traducción a lenguaje simple" variant="callout-info">
        <p className="mb-0">
          No es solo un programa. Es personas, datos, reglas y tecnología trabajando juntos para que la
          organización sepa qué está pasando y pueda actuar. En Logística SAS, el teléfono y el cuaderno son un
          sistema informal. El módulo va a convertirlo en un sistema explícito: qué entra, qué se hace con eso y
          qué sale.
        </p>
      </Callout>
      <p className="my-4">
        Con un sistema bien planteado, la organización puede automatizar el trabajo diario, decidir con mejor
        información y, a veces, diferenciarse de la competencia. Esos tres usos se detallan en la página
        siguiente.
      </p>
    </section>
  );
}
