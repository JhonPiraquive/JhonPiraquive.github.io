import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MapaDelModuloSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Mapa del módulo: de 0 a 100</h2>
      <p className="my-4">
        Imagina una escalera con cien escalones. En el escalón 0 estás hoy, sin saber nada del tema. En el escalón 100
        puedes construir una aplicación completa y explicar por qué tomaste cada decisión. Esta es la escalera dividida
        en tres tramos, uno por clase.
      </p>
      <MermaidDiagram
        title="Ruta del módulo en tres clases"
        description="Flujo de tres clases: la primera de 0 a 35, la segunda de 35 a 70 y la tercera de 70 a 100."
        chart={`flowchart LR
  A["Nivel 0<br/>No sé nada"] --> B["Clase 1: nivel 0 a 35<br/>Entorno, JavaScript moderno, primer componente"]
  B --> C["Clase 2: nivel 35 a 70<br/>Estado, MUI, UX y rutas"]
  C --> D["Clase 3: nivel 70 a 100<br/>APIs, CRUD, validación y calidad"]
  D --> E["Nivel 100<br/>Sitio administrativo completo"]`}
      />

      <CompareTable
        title="Qué haces en cada clase"
        headers={["Clase", "Nivel", "Qué aprendes", "Qué puedes mostrar al final"]}
        rows={[
          ["1", "0 a 35", "Terminal, npm, JavaScript moderno, JSX, props, listas", "Un catálogo de tarjetas que cambia según los datos y se adapta al tamaño de pantalla"],
          ["2", "35 a 70", "Estado, efectos, Material UI, UX, React Router", "Un sitio administrativo con menú, varias pantallas y una tabla con formulario"],
          ["3", "70 a 100", "HTTP, async/await, fetch, CRUD, validación, rendimiento", "El mismo sitio leyendo y guardando datos reales en una API"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Con qué versiones trabajamos</h3>
      <p className="my-4">
        Las herramientas cambian rápido. Estas son las versiones de referencia al momento de escribir este módulo
        (octubre de 2026). Si ves una versión más nueva, casi siempre lo que aprendas aquí sigue funcionando; revisa las
        notas de cambios del paquete antes de actualizar.
      </p>
      <CompareTable
        headers={["Herramienta", "Versión de referencia", "Para qué la usamos"]}
        rows={[
          ["Node.js", "22.22 o superior (se recomienda la versión LTS más reciente)", "Ejecutar herramientas y npm en tu computador"],
          ["Vite", "8.x", "Crear el proyecto y verlo en el navegador mientras programas"],
          ["React", "19.3", "Construir la interfaz con componentes"],
          ["Material UI (MUI)", "9.x", "Componentes visuales ya hechos"],
          ["React Router", "8.x", "Navegar entre pantallas"],
        ]}
      />

      <Callout title="Cómo usar este material por tu cuenta" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Cada página se puede leer en 15 a 25 minutos y tiene ejemplos que puedes copiar y probar.</li>
          <li>Las cajas de «Pista» y los ejercicios de completar sirven para comprobar que entendiste antes de seguir.</li>
          <li>Al final de cada clase hay una práctica guiada, un mini-quiz y una lista de enlaces para profundizar.</li>
          <li>Si una palabra no la conoces, está explicada la primera vez que aparece; vuelve a esa página.</li>
        </ul>
      </Callout>
    </section>
  );
}
