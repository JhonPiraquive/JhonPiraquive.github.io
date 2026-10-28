import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function EticaYRegulacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ética y regulación</h2>
      <p className="my-4">
        Como toda tecnología emergente con gran impacto, la IA plantea preguntas que no son solo técnicas. Quien la usa o
        la integra en un sistema debe considerarlas desde el inicio, no al final.
      </p>
      <CompareTable
        headers={["Tema", "Pregunta clave", "Ejemplo"]}
        rows={[
          ["Privacidad", "¿Qué datos personales se envían al modelo y quién los almacena?", "Enviar historias clínicas a un servicio externo sin autorización."],
          ["Sesgo y equidad", "¿El sistema trata igual a todas las personas?", "Un filtro de hojas de vida que descarta perfiles por el barrio o el género."],
          ["Transparencia", "¿Las personas saben que interactúan con una IA o que un contenido fue generado?", "Un chat de atención que se presenta como humano."],
          ["Autoría y propiedad", "¿Quién es autor del contenido generado y qué derechos tienen las obras usadas para entrenar?", "Presentar como propio un texto generado en un trabajo académico."],
          ["Impacto ambiental", "¿Cuánta energía y agua consume el uso a gran escala?", "Usar un modelo enorme para tareas que uno pequeño resuelve igual."],
          ["Responsabilidad", "Si el sistema se equivoca, ¿quién responde?", "Una decisión de crédito tomada solo por un modelo."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se está regulando</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Unión Europea:</strong> la Ley de Inteligencia Artificial clasifica los sistemas por nivel de riesgo.
          Prohíbe algunos usos (como la puntuación social de ciudadanos), exige controles estrictos para los de alto riesgo
          (selección de personal, crédito, salud) y obligaciones de transparencia para otros, como los chatbots.
        </li>
        <li>
          <strong>Colombia:</strong> el documento CONPES 4144 establece la Política Nacional de Inteligencia Artificial,
          con objetivos de ética y gobernanza, datos, infraestructura, talento y adopción en los sectores. Además, la ley
          de protección de datos personales (Ley 1581) aplica cuando un sistema de IA procesa información de personas.
        </li>
        <li>
          <strong>Principios internacionales:</strong> la UNESCO y la OCDE publicaron recomendaciones sobre IA confiable
          que muchos países toman como referencia.
        </li>
      </ul>
      <Callout title="Regulación como criterio de decisión" variant="callout-tip">
        <p className="mb-0">
          La regulación no es solo un trámite: es uno de los criterios para decidir si una tecnología se adopta y cómo. Un
          uso de IA que es sencillo en un sector puede estar muy restringido en otro, como salud o finanzas. La clase 3
          incluye este criterio en la matriz de decisión.
        </p>
      </Callout>
    </section>
  );
}
