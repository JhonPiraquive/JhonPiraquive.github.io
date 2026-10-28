import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HooksYPluginsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Hooks y plugins</h2>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Hooks: reglas que siempre se cumplen</h3>
      <p className="my-4">
        Las instrucciones y las skills son texto: el modelo normalmente las sigue, pero puede olvidarlas o interpretarlas
        mal. Un <strong>hook</strong> (gancho) es distinto: es un comando o script que <strong>el harness</strong> ejecuta
        automáticamente en un momento concreto, sin depender de que el modelo se acuerde. Por ejemplo: antes de usar una
        herramienta, después de editar un archivo, al iniciar la sesión o al terminar un turno.
      </p>
      <p className="my-4">
        La diferencia es como la que hay entre un letrero que dice «cierre la puerta» y una puerta que se cierra sola.
      </p>
      <CodeFiddle
        language="json"
        title=".claude/settings.json (ejemplo en Claude Code)"
        code={`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [{ "type": "command", "command": "node .claude/hooks/proteger-env.js" }]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [{ "type": "command", "command": "npm run lint --silent" }]
      }
    ]
  }
}`}
      />
      <CodeFiddle
        language="javascript"
        title=".claude/hooks/proteger-env.js"
        code={`// El harness entrega por la entrada estándar un JSON con la herramienta y sus datos.
let entrada = "";
process.stdin.on("data", (parte) => (entrada += parte));
process.stdin.on("end", () => {
  const { tool_input } = JSON.parse(entrada);
  const ruta = tool_input?.file_path ?? "";

  if (ruta.endsWith(".env")) {
    console.error("Bloqueado: el archivo .env contiene secretos y no se edita con el agente.");
    process.exit(2); // el código 2 bloquea la acción y el mensaje se le muestra al modelo
  }
  process.exit(0); // 0 permite continuar
});`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Plugins: todo en un paquete</h3>
      <p className="my-4">
        Un <strong>plugin</strong> es un paquete que agrupa varias extensiones (skills, comandos, subagentes, hooks y
        servidores MCP) para instalarlas juntas con un solo paso. Sirve para compartir una configuración completa con un
        equipo o con la comunidad. Los plugins se distribuyen en <strong>marketplaces</strong>, que son catálogos desde
        donde se instalan y actualizan.
      </p>
      <MermaidDiagram
        title="Qué puede contener un plugin"
        description="Diagrama: un plugin agrupa un manifiesto, skills, subagentes, hooks y servidores MCP; se publica en un marketplace y se instala en el harness."
        chart={`flowchart LR
  subgraph PL["Plugin"]
    M["Manifiesto<br/>nombre y versión"]
    S["Skills y comandos"]
    A["Subagentes"]
    H["Hooks"]
    X["Servidores MCP"]
  end
  MK["Marketplace<br/>catálogo"] --> PL
  PL --> HR["Harness del equipo"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cuándo usar cada extensión</h3>
      <CompareTable
        headers={["Extensión", "Qué es", "Cuándo usarla", "Se activa"]}
        rows={[
          ["Archivo de instrucciones", "Texto con el contexto y las reglas del proyecto.", "Lo que debe saberse en todas las sesiones.", "Siempre, al iniciar la sesión."],
          ["Comando", "Atajo para una instrucción o acción.", "Algo que la persona pide a menudo y quiere lanzar a mano.", "Cuando la persona lo escribe."],
          ["Skill", "Receta detallada para una tarea, con archivos de apoyo.", "Un procedimiento largo que solo hace falta a veces.", "Cuando la tarea coincide con su descripción, o a mano."],
          ["Subagente", "Agente especializado con su propio contexto.", "Subtareas que generan mucho detalle o requieren otro enfoque.", "Cuando el agente principal delega."],
          ["Servidor MCP", "Conexión con un servicio o fuente de datos externa.", "Cuando el agente necesita datos o acciones de otro sistema.", "Cuando el modelo pide una de sus herramientas."],
          ["Hook", "Script que el harness ejecuta en un evento.", "Reglas que deben cumplirse siempre, sin excepción.", "Automáticamente en cada evento."],
          ["Plugin", "Paquete con varias de las anteriores.", "Compartir o reutilizar una configuración completa.", "Al instalarlo y habilitarlo."],
        ]}
      />
      <Callout title="Todo lo que se agrega tiene costo" variant="callout-warning">
        <p className="mb-0">
          Cada extensión habilitada ocupa algo de contexto (al menos su nombre y descripción), puede ejecutar código con los
          permisos de la persona y agrega algo que mantener. Se aplica el mismo criterio que con cualquier tecnología:
          instalar lo que resuelve un problema real y revisar periódicamente lo que ya no se usa.
        </p>
      </Callout>
    </section>
  );
}
