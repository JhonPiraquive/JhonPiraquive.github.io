import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: preparar un agente para un proyecto</h2>
      <p className="my-4">
        La práctica consiste en preparar un agente de programación para trabajar en un proyecto pequeño: un inventario de
        una tienda de bicicletas hecho con React. El objetivo no es que el agente haga el proyecto, sino comprobar en vivo
        las piezas de la clase: sesión, contexto, instrucciones, skills, hooks y permisos.
      </p>
      <p className="my-4">
        Sirve cualquier agente de programación disponible (varios tienen planes gratuitos o licencias para estudiantes).
        Si no se dispone de ninguno, la práctica se hace igual escribiendo los archivos y explicando qué haría el harness
        con cada uno.
      </p>
      <StepReveal
        title="Siete pasos"
        steps={[
          {
            title: "Partir de un commit limpio",
            content:
              "Crear el proyecto con Vite y React, iniciar Git y hacer un primer commit. Así cualquier cambio del agente se puede revisar con git diff y deshacer.",
          },
          {
            title: "Escribir el archivo de instrucciones",
            content:
              "Crear AGENTS.md (o el archivo propio de la herramienta) con las tecnologías, los comandos y tres reglas del proyecto, por ejemplo: peticiones solo en src/api, estados de carga y error siempre visibles, no instalar librerías sin justificar.",
          },
          {
            title: "Observar el contexto",
            content:
              "Abrir una sesión y preguntar al agente qué sabe del proyecto. Debería mencionar lo escrito en el archivo de instrucciones. Luego abrir una sesión nueva y comprobar que no recuerda la conversación anterior, pero sí el archivo.",
          },
          {
            title: "Crear una skill",
            content:
              "Escribir una skill que describa cómo crear una pantalla de listado para una entidad (por ejemplo, proveedores). Pedir una tarea que coincida con su descripción y observar si el agente la carga.",
          },
          {
            title: "Agregar un hook",
            content:
              "Configurar un hook que ejecute el revisor de código después de cada edición, o que bloquee la edición del archivo .env. Comprobar que se ejecuta sin que el modelo tenga que recordarlo.",
          },
          {
            title: "Revisar los permisos",
            content:
              "Identificar qué acciones pide confirmar el harness (ejecutar comandos, editar archivos, acceder a la red) y cuáles no. Anotar qué cambiaría para un proyecto real con datos de clientes.",
          },
          {
            title: "Revisar el resultado",
            content:
              "Leer con git diff todo lo que el agente cambió, probar la pantalla y escribir tres líneas: qué hizo bien, qué hubo que corregir y qué parte se entendió mejor gracias a la práctica.",
          },
        ]}
      />
      <Callout title="Cómo verificar la práctica" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Se puede señalar, en la configuración, qué es instrucción, qué es skill y qué es hook.</li>
          <li>Se puede explicar por qué una sesión nueva no recuerda la anterior.</li>
          <li>Todo el código que quedó en el proyecto se entiende y se probó.</li>
        </ul>
      </Callout>
    </section>
  );
}
