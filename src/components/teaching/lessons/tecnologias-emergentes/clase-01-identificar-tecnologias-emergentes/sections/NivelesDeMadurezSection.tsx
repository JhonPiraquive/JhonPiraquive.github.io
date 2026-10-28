import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function NivelesDeMadurezSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Niveles de madurez tecnológica</h2>
      <p className="my-4">
        La NASA creó una escala para medir qué tan lista está una tecnología, conocida como <strong>TRL</strong>
        (por <em>Technology Readiness Level</em>, nivel de madurez tecnológica). Va de 1 a 9 y hoy la usan agencias de
        investigación, empresas y fondos de financiación de muchos países, entre ellos los de ciencia y tecnología en
        Colombia. Su ventaja es que obliga a responder con evidencia: no basta con decir «está casi lista».
      </p>
      <CompareTable
        title="Escala TRL resumida"
        headers={["Nivel", "Etapa", "Qué evidencia existe"]}
        rows={[
          ["TRL 1–2", "Investigación básica", "Se observaron los principios y se formuló el concepto. Solo hay papel y teoría."],
          ["TRL 3–4", "Prueba de concepto", "Un experimento en laboratorio demuestra que la idea funciona por partes."],
          ["TRL 5–6", "Prototipo", "Un prototipo funciona en un entorno parecido al real."],
          ["TRL 7–8", "Demostración", "El sistema funciona en el entorno real y queda listo para producción."],
          ["TRL 9", "Uso probado", "Se usa en operación real y con éxito repetido."],
        ]}
      />
      <p className="my-4">
        La escala ayuda a ubicar a las tecnologías emergentes: suelen estar entre los niveles 5 y 8. Por debajo son todavía
        investigación; en el 9 ya son tecnologías establecidas.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El equivalente en el software</h3>
      <p className="my-4">
        En el software no se habla de TRL, pero existe una escala parecida en las etiquetas de las versiones. Leerlas bien
        es la forma más rápida de saber la madurez de una librería o herramienta.
      </p>
      <CompareTable
        headers={["Etiqueta", "Qué significa", "Equivale aproximadamente a"]}
        rows={[
          ["Experimental o canary", "Puede cambiar o desaparecer sin aviso.", "TRL 3–4"],
          ["Alfa", "Funciona, pero incompleta y con errores conocidos.", "TRL 5"],
          ["Beta o vista previa", "Completa, en prueba con usuarios reales; la interfaz aún puede cambiar.", "TRL 6–7"],
          ["Estable", "Lista para producción; los cambios que rompen compatibilidad se anuncian.", "TRL 8"],
          ["Soporte a largo plazo (LTS)", "Versión estable que recibe correcciones durante años.", "TRL 9"],
        ]}
      />
      <Callout title="Los cuatro modelos juntos" variant="callout-info">
        <p className="mb-0">
          Cada modelo responde una pregunta distinta. La curva S: ¿cuánto puede mejorar todavía? El ciclo de
          sobreexpectación: ¿las expectativas están por encima de la realidad? La difusión: ¿quién la usa hoy? La escala
          TRL: ¿qué tan probada está? Una tecnología se entiende bien cuando se responden las cuatro.
        </p>
      </Callout>
    </section>
  );
}
