import { Callout } from "@/components/teaching/Callout";

export function MetodologiasYRolSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Metodología y papel del tecnólogo</h2>
      <p className="my-4">
        Una metodología es un marco para estructurar, planificar y controlar el desarrollo. No es un software.
        Combina un modelo de proceso (por ejemplo, cascada o iteraciones cortas) con artefactos, roles,
        actividades y técnicas recomendadas.
      </p>
      <p className="my-4">
        Hoy la mayoría de aplicaciones viven en internet, con varios usuarios, requisitos de seguridad y partes
        que al inicio no están del todo definidas. Por eso una metodología útil tiene que cubrir el proceso
        completo, no solo la programación (Maida y Pacienzia, 2015).
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué se espera de ti en el equipo</h3>
      <p className="my-4">
        Para diseñar un sistema eficaz primero hay que entender el entorno, la estructura, la función y las
        políticas de la organización. Saber computación en general ya no alcanza. Hace falta seguir el proyecto,
        detectar el problema real y conocer, con detalle, cómo se ejecuta hoy el proceso que se va a sistematizar.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Entender los requerimientos en el contexto del negocio, no solo como una lista de pantallas.</li>
        <li>Diseñar sistemas que las personas puedan controlar, entender y usar de manera ética.</li>
        <li>Proponer una arquitectura de la información alineada con las metas de la empresa.</li>
      </ul>
      <Callout title="Atención" variant="callout-warning">
        <p className="mb-0">
          Si no sabes cómo se asigna hoy una orden en Logística SAS, no puedes diseñar la pantalla de asignación.
          El tecnólogo aporta cuando conoce el proceso, no cuando inventa botones.
        </p>
      </Callout>
    </section>
  );
}
