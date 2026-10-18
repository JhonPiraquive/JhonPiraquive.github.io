export function PresentacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Presentación</h2>
      <p className="my-4">
        El módulo recorre los servicios web, los protocolos HTTP, las APIs, los frameworks de frontend y backend, las
        bases de datos, los principios SOLID, las convenciones de nombres y el uso de la IA en el desarrollo.
      </p>
      <p className="my-4">
        El recorrido sigue una escala de 0 a 100. En el 0 se sabe usar un navegador pero no cómo se comunican las
        aplicaciones web; en el 100 se diseña una API, se elige un stack y se justifica con criterios técnicos. Se
        organiza en tres clases: servicios web, HTTP y formatos de datos; arquitectura de APIs, datos y seguridad; y
        frontend, calidad de código y herramientas.
      </p>
    </section>
  );
}
