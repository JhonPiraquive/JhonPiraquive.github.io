import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SoftwareEnTodasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El software como puerta de entrada</h2>
      <p className="my-4">
        Detrás de casi toda tecnología emergente hay una aplicación: el panel donde se ven los datos de los sensores, la
        pantalla que conversa con un modelo de IA, el sistema que controla un robot. La arquitectura suele repetirse.
      </p>
      <MermaidDiagram
        title="Arquitectura común"
        description="Flujo: la persona usa una interfaz web, la interfaz llama a una API propia, y la API se comunica con la tecnología emergente (sensores, modelo de IA, robot o red eléctrica)."
        chart={`flowchart LR
  U["Persona"] --> I["Interfaz web<br/>por ejemplo, con React"]
  I --> A["API propia<br/>en un servidor"]
  A --> T["Tecnología emergente<br/>sensores, modelo de IA, robot"]
  T --> A
  A --> I`}
      />
      <CompareTable
        headers={["Tecnología emergente", "Qué construye quien sabe desarrollo web"]}
        rows={[
          ["Internet de las cosas", "Un panel que muestra en tiempo real los datos de los sensores y un CRUD para registrar dispositivos."],
          ["Inteligencia artificial", "Una pantalla con un formulario que envía texto a un servidor; el servidor consulta el modelo y devuelve la respuesta."],
          ["Realidad aumentada", "Escenas 3D en el navegador con librerías de JavaScript."],
          ["Blockchain", "La interfaz que se conecta con billeteras y contratos mediante peticiones asíncronas."],
          ["Robótica", "Un tablero para monitorear y controlar equipos con botones, estados y peticiones a una API."],
        ]}
      />
      <Callout title="La relación con las actividades" variant="callout-tip">
        <p className="mb-0">
          Las actividades del módulo (catálogo, sitio administrativo y CRUD con una API) construyen exactamente la capa de
          «interfaz web» y «API» de este diagrama. Lo que se aprende con React es la base para llevar cualquier tecnología
          emergente a una pantalla que una persona pueda usar.
        </p>
      </Callout>
    </section>
  );
}
