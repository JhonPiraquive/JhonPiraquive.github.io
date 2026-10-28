import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComandosYSkillsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Comandos y skills</h2>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Comandos</h3>
      <p className="my-4">
        Un <strong>comando</strong> es una instrucción corta que empieza con barra diagonal y que la persona escribe en
        lugar de un mensaje, por ejemplo <code>/help</code>, <code>/clear</code> o <code>/review</code>. Hay dos tipos:
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Comandos integrados del harness:</strong> controlan la herramienta, no le piden nada al modelo. Por
          ejemplo, limpiar la sesión, compactar el contexto, cambiar de modelo o ver los permisos.
        </li>
        <li>
          <strong>Comandos personalizados:</strong> atajos para instrucciones que se repiten. En lugar de escribir cada vez
          «revisa el código siguiendo estos diez puntos», se escribe <code>/revisar</code> y el harness envía esas
          instrucciones guardadas.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Skills</h3>
      <p className="my-4">
        Una <strong>skill</strong> (habilidad) es una carpeta con un archivo <code>SKILL.md</code> que enseña al agente a
        hacer una tarea concreta: los pasos, las reglas y, si hace falta, plantillas o scripts de apoyo. Es como una receta
        guardada en el recetario de la cocina: no se lee todos los días, pero cuando toca preparar ese plato se saca y se
        sigue al pie de la letra.
      </p>
      <p className="my-4">
        Su característica clave es la <strong>carga progresiva</strong>. Al inicio de la sesión el agente solo conoce el
        nombre y la descripción de cada skill, que ocupan muy pocos tokens. Cuando una tarea coincide con la descripción,
        el agente carga el contenido completo. Así pueden existir decenas de skills sin llenar la ventana de contexto. En
        varias herramientas una skill también se puede invocar a mano como un comando, con su nombre después de la barra.
      </p>
      <MermaidDiagram
        title="Carga progresiva de una skill"
        description="Flujo: al iniciar, el agente ve solo nombre y descripción de cada skill; si la tarea coincide con una descripción, carga el SKILL.md completo; si lo necesita, usa las plantillas o scripts de la carpeta."
        chart={`flowchart LR
  A["Inicio de sesión<br/>solo nombre y descripción"] --> B{"¿La tarea coincide<br/>con alguna skill?"}
  B -- No --> C["Sigue sin cargarla"]
  B -- Sí --> D["Carga el SKILL.md<br/>completo"]
  D --> E["Usa plantillas o scripts<br/>de la carpeta si hace falta"]`}
      />
      <CodeFiddle
        language="markdown"
        title=".claude/skills/crear-pantalla-crud/SKILL.md"
        code={`---
name: crear-pantalla-crud
description: Crea una pantalla de listado y formulario para una entidad nueva del panel administrativo (por ejemplo, autores o préstamos). Usar cuando se pida agregar un módulo CRUD.
---

# Crear una pantalla CRUD

1. Leer src/api/cliente.js y reutilizar sus funciones; no llamar a fetch desde los componentes.
2. Crear src/pages/<entidad>/Listado<Entidad>.jsx con una tabla de Material UI,
   estados de carga, error y vacío, y un botón «Nuevo».
3. Crear src/pages/<entidad>/Formulario<Entidad>.jsx que sirva para crear y editar,
   con validación antes de enviar.
4. Registrar las rutas /<entidad>, /<entidad>/nuevo y /<entidad>/:id/editar.
5. Ejecutar npm run lint y corregir lo que reporte.
6. Resumir los archivos creados y cómo probar la pantalla.`}
      />
      <Callout title="Un estándar abierto" variant="callout-info">
        <p className="mb-0">
          El formato de skills nació en Claude Code y luego se publicó como estándar abierto (Agent Skills), que hoy leen
          varios agentes de distintas empresas. La ubicación de la carpeta varía según la herramienta (el ejemplo usa la de
          Claude Code); el contenido del <code>SKILL.md</code> es el mismo.
        </p>
      </Callout>
    </section>
  );
}
