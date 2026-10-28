import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RiesgosYReversibilidadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Riesgos, reversibilidad y plan de salida</h2>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Matriz de riesgos</h3>
      <p className="my-4">
        Un <strong>riesgo</strong> es algo que podría salir mal. Se describe con dos datos: qué tan probable es y qué tan
        grave sería su impacto. Al cruzarlos se sabe qué riesgos requieren atención inmediata y cuáles solo vigilancia.
      </p>
      <MermaidDiagram
        title="Matriz de probabilidad e impacto"
        description="Gráfica de cuatro cuadrantes: probabilidad en el eje horizontal e impacto en el vertical. Ubica cuatro riesgos de adoptar un servicio de IA: subida de precios, respuestas incorrectas, fuga de datos y caída del servicio."
        chart={`quadrantChart
  title Riesgos de adoptar un servicio de IA
  x-axis Baja probabilidad --> Alta probabilidad
  y-axis Bajo impacto --> Alto impacto
  quadrant-1 Atender ya
  quadrant-2 Plan de contingencia
  quadrant-3 Vigilar
  quadrant-4 Reducir
  Fuga de datos: [0.3, 0.9]
  Respuestas incorrectas: [0.8, 0.7]
  Subida de precios: [0.6, 0.35]
  Caida temporal del servicio: [0.4, 0.25]`}
      />
      <CompareTable
        headers={["Estrategia", "Qué hace", "Ejemplo"]}
        rows={[
          ["Evitar", "No hacer la actividad que genera el riesgo.", "No enviar datos de salud al servicio externo."],
          ["Reducir", "Bajar la probabilidad o el impacto.", "Revisión humana de las respuestas antes de enviarlas al cliente."],
          ["Transferir", "Pasar el impacto a otro.", "Un contrato con el proveedor que incluya garantías y soporte."],
          ["Aceptar", "Asumirlo de forma consciente porque es pequeño.", "Una caída corta del servicio durante el piloto."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Puertas de una vía y de dos vías</h3>
      <p className="my-4">
        Una idea útil para decidir con rapidez es separar las decisiones en dos tipos. Las <strong>puertas de dos
        vías</strong> se pueden deshacer con poco costo: probar una librería en un proyecto pequeño, por ejemplo. Las
        <strong> puertas de una vía</strong> son difíciles o imposibles de deshacer: migrar todos los datos a una base de
        datos nueva y apagar la anterior. Las primeras se toman rápido; las segundas, con mucho cuidado.
      </p>
      <p className="my-4">
        Muchas decisiones de una vía pueden convertirse en dos vías con un buen <strong>plan de salida</strong>: cómo se
        volvería atrás si la tecnología falla. Por ejemplo, mantener el sistema anterior funcionando en paralelo durante el
        piloto, guardar los datos en formatos estándar exportables o envolver la librería nueva en una capa propia para
        poder reemplazarla.
      </p>
      <Callout title="La pregunta que no puede faltar" variant="callout-tip">
        <p className="mb-0">
          Antes de adoptar: «Si en seis meses esta tecnología deja de servir, ¿qué se haría y cuánto costaría?». Si la
          respuesta es «no se sabe», falta el plan de salida.
        </p>
      </Callout>
    </section>
  );
}
