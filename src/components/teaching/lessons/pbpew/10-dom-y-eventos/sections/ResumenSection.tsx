export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"El DOM es mutable: leer, crear, actualizar y borrar nodos en tiempo de ejecución."}</li>
        <li>
          {"Selección: preferir `querySelector` / `querySelectorAll`; comprobar `null` antes de usar el nodo."}
        </li>
        <li>
          {
            "Contenido: `textContent` para datos y mensajes; `innerHTML` solo con plantillas controladas (riesgo XSS con usuario)."
          }
        </li>
        <li>{"Estilos: `style` puntual; `classList` para clases sin pisar otras."}</li>
        <li>{"Nodos: `createElement` + `appendChild`; eliminar con `remove` o `removeChild`."}</li>
        <li>
          {
            "Eventos: `addEventListener` separa comportamiento del HTML; objeto evento con `target`, `currentTarget`, `key`, `preventDefault`."
          }
        </li>
        <li>{"Delegación: un listener en el ancestro + `closest` — escala en listas dinámicas."}</li>
        <li>{"Cola de eventos: el navegador encola y despacha en FIFO (puente con lección 9)."}</li>
        <li>
          {
            "Preview lección 11: fetch y promesas actualizarán el DOM cuando lleguen datos del servidor."
          }
        </li>
      </ul>
    </section>
  );
}
