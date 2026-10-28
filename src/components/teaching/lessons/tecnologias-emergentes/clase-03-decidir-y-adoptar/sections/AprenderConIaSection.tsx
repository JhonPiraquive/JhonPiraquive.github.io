import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function AprenderConIaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Aprender con IA sin dejar de aprender</h2>
      <p className="my-4">
        La IA puede acelerar mucho el aprendizaje o anularlo por completo. La diferencia está en quién hace el esfuerzo de
        pensar. Aprender requiere un esfuerzo mental que la IA puede quitar con demasiada facilidad, igual que un
        ascensor quita el ejercicio de subir escaleras.
      </p>
      <CompareTable
        headers={["Uso que ayuda a aprender", "Uso que impide aprender"]}
        rows={[
          ["Pedir que explique un concepto de otra manera o con otra analogía.", "Pedir la solución completa de la actividad y entregarla."],
          ["Intentar primero y pedir una pista cuando se está bloqueado.", "Preguntar antes de intentar."],
          ["Pedir que revise un código propio y explique los errores.", "Copiar un código que no se entiende."],
          ["Pedir preguntas de práctica sobre un tema y responderlas sin ayuda.", "Pedir el resumen y no leer el material."],
          ["Comparar la respuesta de la IA con la documentación oficial.", "Aceptar la respuesta sin verificar."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Instrucciones que convierten a la IA en tutora</h3>
      <p className="my-4">
        Muchos asistentes permiten fijar instrucciones permanentes. Unas instrucciones como las siguientes cambian el
        comportamiento del asistente de «resolver» a «enseñar»:
      </p>
      <blockquote className="my-4 border-l-4 border-[var(--color-secondary)] pl-4 italic">
        «Actuar como tutor. No dar la solución completa a menos que se pida explícitamente. Responder con preguntas que
        guíen, una pista a la vez. Cuando haya código, señalar dónde está el problema pero no reescribirlo.»
      </blockquote>
      <Callout title="Las reglas de cada curso mandan" variant="callout-info">
        <p className="mb-0">
          Cada asignatura y cada institución define cuándo y cómo se permite usar IA en las actividades. Cuando se usa,
          declarar para qué se usó es una práctica de honestidad académica y también una práctica profesional: en un equipo
          de trabajo se espera saber qué partes de un cambio vinieron de una herramienta.
        </p>
      </Callout>
    </section>
  );
}
