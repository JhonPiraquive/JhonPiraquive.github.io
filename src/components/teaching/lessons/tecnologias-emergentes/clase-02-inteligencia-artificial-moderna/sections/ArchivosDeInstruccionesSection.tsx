import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ArchivosDeInstruccionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Archivos de instrucciones del proyecto</h2>
      <p className="my-4">
        Un harness viene con capacidades generales. Para que trabaje bien en un proyecto concreto hay que darle
        conocimiento de ese proyecto. Esta página recorre las formas de hacerlo, de la más simple a la más completa. La
        primera es un archivo de texto con instrucciones.
      </p>
      <p className="my-4">
        Un <strong>archivo de instrucciones</strong> es un documento en formato Markdown, guardado en la raíz del
        proyecto, que el harness lee al comenzar cada sesión y agrega al contexto. Es la memoria persistente más común:
        explica cómo está organizado el proyecto, qué comandos usar y qué reglas seguir. Se parece al manual de bienvenida
        que recibe una persona nueva en un equipo.
      </p>
      <p className="my-4">
        Existe un formato abierto, <code>AGENTS.md</code>, que leen muchos agentes de programación distintos. Algunas
        herramientas tienen además su propio nombre de archivo, como <code>CLAUDE.md</code> en Claude Code o
        <code> GEMINI.md</code> en Gemini CLI; la idea es la misma.
      </p>
      <CodeFiddle
        language="markdown"
        title="AGENTS.md de un proyecto de React"
        code={`# Panel administrativo de la biblioteca

## Tecnologías
- React con Vite, Material UI y React Router.
- La API de pruebas corre con json-server en el puerto 3001.

## Comandos
- Instalar: npm install
- Desarrollo: npm run dev
- Revisar el código: npm run lint

## Reglas del proyecto
- Componentes en src/components, una carpeta por pantalla en src/pages.
- Las peticiones a la API van en src/api; ningún componente llama a fetch directamente.
- Mostrar siempre estados de carga, error y vacío.
- No agregar librerías nuevas sin explicar por qué en la descripción del cambio.`}
      />
      <Callout title="Qué incluir y qué no" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Incluir lo que una persona nueva no adivinaría: comandos, convenciones, decisiones y advertencias.</li>
          <li>No repetir lo que ya está en el código ni escribir párrafos largos: todo el archivo ocupa contexto en cada sesión.</li>
          <li>Nunca incluir contraseñas ni claves: el archivo suele estar en el repositorio y se envía al modelo.</li>
        </ul>
      </Callout>
    </section>
  );
}
