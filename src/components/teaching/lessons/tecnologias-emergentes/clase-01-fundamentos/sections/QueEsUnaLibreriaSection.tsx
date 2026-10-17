import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsUnaLibreriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es una librería y por qué importa</h2>
      <p className="my-4">
        Una librería (o biblioteca) es código que alguien más escribió, probó y publicó para que otros lo reutilicen. Es
        como comprar una puerta ya hecha en lugar de cortar la madera y fabricarla: se ahorra tiempo y se obtiene algo
        que miles de personas ya revisaron.
      </p>
      <p className="my-4">
        Un calendario para elegir fechas sirve de ejemplo. Programarlo desde cero tomaría días: meses de distinta
        duración, años bisiestos, manejo del teclado, accesibilidad. Con una librería se instala, se usa y el
        desarrollador sigue con su problema real.
      </p>
      <p className="my-4">
        Las librerías son también la forma en que una tecnología emergente llega a los desarrolladores: casi siempre
        aparece primero como un paquete que se instala y se prueba. De ahí la importancia de saber elegirlas.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Librería, framework y herramienta de construcción</h3>
      <p className="my-4">
        Estas palabras suelen mezclarse. Una diferencia sencilla: con una librería <strong>el desarrollador llama</strong>{" "}
        al código cuando lo necesita; con un framework, <strong>el código llama al desarrollador</strong>, que rellena las
        partes que el framework pide. Una herramienta de construcción, por su parte, prepara y empaqueta el proyecto.
      </p>
      <CompareTable
        headers={["Tipo", "Idea en una frase", "Ejemplos en este módulo"]}
        rows={[
          ["Librería", "Resuelve un problema concreto y el desarrollador decide cuándo usarla", "React (interfaces), Material UI (componentes), React Router (rutas)"],
          ["Framework", "Define la estructura completa de la aplicación", "Next.js, Angular (no se usan en este módulo)"],
          ["Herramienta de construcción", "Prepara el código para el navegador y muestra los cambios al instante", "Vite"],
        ]}
      />
      <Callout title="Una aclaración sobre React" variant="callout-info">
        <p className="mb-0">
          La documentación oficial describe a React como una librería para construir interfaces. Cuando se le suman
          rutas, manejo de datos y una herramienta como Vite, se arma algo parecido a un framework, y la propia
          documentación advierte que eso implica tomar muchas decisiones. Para aprender y para aplicaciones
          administrativas detrás de un inicio de sesión es una excelente opción, y por eso se usa en el módulo.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se ve un proyecto que usa librerías</h3>
      <MermaidDiagram
        title="Una aplicación depende de librerías, y ellas dependen de otras"
        description="Diagrama de flujo con la aplicación en el centro, conectada con React, Material UI y React Router, que a su vez usan otras dependencias."
        chart={`flowchart TD
  APP["Aplicación"] --> R["React"]
  APP --> M["Material UI"]
  APP --> RR["React Router"]
  M --> E["Emotion: estilos"]
  M --> R
  RR --> R
  APP --> V["Vite: herramienta de construcción"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ventajas y costos</h3>
      <CompareTable
        headers={["Ventaja", "Costo que debe conocerse"]}
        rows={[
          ["Ahorra tiempo de desarrollo", "Cada librería es una dependencia: si deja de mantenerse, el proyecto queda con un problema"],
          ["Código probado por miles de personas", "Aumenta el peso de la aplicación y su tiempo de carga"],
          ["Se vuelve un estándar que todos entienden", "Una librería puede traer errores de seguridad y hay que actualizarla"],
          ["Permite concentrarse en la lógica del negocio", "Si se usa sin entenderla, no se sabrá arreglar lo que falle"],
        ]}
      />

      <Callout title="Antes de instalar un paquete desconocido" variant="callout-warning">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Revisar el nombre con cuidado: existen paquetes con nombres casi iguales a los famosos que contienen código malicioso.</li>
          <li>Mirar cuántas descargas semanales tiene y cuándo fue su última actualización.</li>
          <li>Leer el README y la documentación: si no hay, conviene desconfiar.</li>
          <li>Después de instalar, ejecutar <code>npm audit</code> para ver si hay vulnerabilidades conocidas.</li>
        </ul>
      </Callout>
    </section>
  );
}
