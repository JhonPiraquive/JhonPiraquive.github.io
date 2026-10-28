import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CriteriosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Los criterios para decidir</h2>
      <p className="my-4">
        La pregunta «¿es buena esta tecnología?» no tiene respuesta. La pregunta correcta es «¿es buena <em>para este
        problema, este equipo y este momento</em>?». Los criterios ordenan esa respuesta. Se agrupan en tres familias.
      </p>
      <CompareTable
        title="Criterios técnicos"
        headers={["Criterio", "Pregunta", "Señal de alerta"]}
        rows={[
          ["Madurez", "¿Tiene una versión estable y uso probado en producción?", "La documentación dice «beta» o «experimental»."],
          ["Comunidad", "¿Hay personas usándola, respondiendo dudas y escribiendo guías?", "Solo existe la documentación oficial y un video."],
          ["Documentación", "¿Está clara, actualizada y con ejemplos que funcionan?", "Los ejemplos fallan al copiarlos."],
          ["Mantenimiento", "¿Recibe correcciones y mejoras de seguridad con regularidad?", "El último cambio fue hace más de un año."],
          ["Seguridad", "¿Tiene un historial razonable y un proceso para corregir vulnerabilidades?", "Vulnerabilidades conocidas sin corregir."],
          ["Integración", "¿Encaja con lo que ya se usa?", "Obliga a reescribir partes que funcionan."],
        ]}
      />
      <CompareTable
        title="Criterios de negocio"
        headers={["Criterio", "Pregunta", "Señal de alerta"]}
        rows={[
          ["Necesidad real", "¿Resuelve un problema que existe hoy y que se puede describir en una frase?", "Se propone porque está de moda."],
          ["Costo total", "¿Cuánto cuesta adoptarla: licencias, infraestructura, capacitación y mantenimiento?", "Solo se mira el precio de la licencia."],
          ["Dependencia del proveedor", "¿Qué pasa si el proveedor sube precios, cambia condiciones o desaparece?", "No hay forma de exportar los datos ni alternativa."],
          ["Costo de cambiar después", "¿Qué tan difícil sería reemplazarla?", "Todo el sistema depende de ella."],
          ["Regulación y ética", "¿Cumple las leyes del sector y respeta la privacidad?", "Envía datos sensibles a terceros sin autorización."],
        ]}
      />
      <CompareTable
        title="Criterios de personas"
        headers={["Criterio", "Pregunta", "Señal de alerta"]}
        rows={[
          ["Conocimiento del equipo", "¿Alguien la conoce o puede aprenderla a tiempo?", "Nadie la ha usado y el plazo es corto."],
          ["Talento disponible", "¿Se puede contratar o formar a personas que la dominen?", "Casi no hay ofertas ni profesionales en el mercado local."],
          ["Aceptación", "¿Las personas que la usarán la ven útil?", "Se impone sin consultar a quienes la usarán."],
        ]}
      />
      <Callout title="No todos los criterios pesan lo mismo" variant="callout-info">
        <p className="mb-0">
          En un hospital, la regulación y la seguridad pesan más que la velocidad de desarrollo. En un prototipo para una
          feria, la velocidad pesa más que el mantenimiento a largo plazo. Por eso la siguiente herramienta asigna pesos a
          los criterios.
        </p>
      </Callout>
    </section>
  );
}
