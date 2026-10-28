import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HarnessSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El harness: el programa que rodea al modelo</h2>
      <p className="my-4">
        En la simulación anterior, la función <code>ejecutarAgente</code> hacía mucho más que llamar al modelo: guardaba
        las observaciones, ejecutaba las herramientas, contaba los pasos y decidía cuándo parar. A ese programa que rodea
        al modelo se le llama <strong>harness</strong> (en inglés, «arnés»: el equipo que permite dirigir y aprovechar la
        fuerza de un caballo).
      </p>
      <p className="my-4">
        La analogía de un automóvil ayuda: el modelo es el motor; el harness es todo lo demás (volante, frenos, tablero,
        cinturones). Un motor excelente en un mal vehículo rinde poco. Por eso dos productos que usan el mismo modelo
        pueden dar resultados muy distintos.
      </p>
      <MermaidDiagram
        title="Qué contiene un harness"
        description="Diagrama: la persona interactúa con el harness; el harness contiene la interfaz, el ciclo del agente, la gestión del contexto y la sesión, las herramientas, los permisos y las extensiones; el harness se comunica con el modelo."
        chart={`flowchart LR
  U["Persona"] <--> H
  subgraph H["Harness"]
    I["Interfaz<br/>terminal, editor, web"]
    C["Ciclo del agente"]
    X["Contexto y sesión"]
    T["Herramientas<br/>leer, editar, ejecutar, buscar"]
    S["Permisos y seguridad"]
    E["Extensiones<br/>comandos, skills, MCP, hooks, plugins"]
  end
  H <--> M["Modelo"]`}
      />
      <CompareTable
        title="Responsabilidades del harness"
        headers={["Responsabilidad", "Qué hace"]}
        rows={[
          ["Interfaz", "Muestra la conversación y recibe instrucciones, en una terminal, un editor de código, una aplicación de escritorio o la web."],
          ["Ciclo del agente", "Llama al modelo, interpreta si pide una herramienta, la ejecuta y le devuelve el resultado."],
          ["Contexto y sesión", "Arma el prompt de cada turno: instrucciones del sistema, archivos de instrucciones, historial; guarda, reanuda y compacta sesiones."],
          ["Herramientas", "Ofrece las herramientas integradas, como leer y editar archivos, ejecutar comandos o buscar en internet."],
          ["Permisos", "Decide qué puede hacerse sin preguntar, qué requiere confirmación y qué está prohibido; puede aislar la ejecución en un entorno protegido (sandbox)."],
          ["Extensiones", "Carga los comandos, skills, servidores MCP, hooks y plugins configurados."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ejemplos de harness</h3>
      <p className="my-4">
        Los agentes de programación son el ejemplo más claro. Claude Code, Codex, Gemini CLI, GitHub Copilot o Cursor son
        harness: programas que conectan un modelo con los archivos, la terminal y las herramientas de un proyecto. Cada uno
        tiene su propia interfaz, pero todos comparten las piezas de la tabla. Quien entiende las piezas puede cambiar de
        herramienta sin volver a empezar.
      </p>
      <Callout title="Modelo, harness y producto" variant="callout-info">
        <p className="mb-0">
          Cuando alguien dice «uso tal IA», conviene preguntar: ¿qué modelo?, ¿en qué harness?, ¿con qué herramientas y
          permisos? Las tres respuestas juntas explican lo que el sistema puede hacer y los riesgos que implica.
        </p>
      </Callout>
    </section>
  );
}
