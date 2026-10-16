import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function QueEsUnaLibreriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es una librería y por qué importa</h2>
      <p className="my-4">
        Una librería (o biblioteca) es código que alguien más escribió, probó y publicó para que tú lo reutilices. Es
        como comprar una puerta ya hecha en lugar de cortar la madera y fabricarla: ahorras tiempo y obtienes algo que
        miles de personas ya revisaron.
      </p>
      <p className="my-4">
        Imagina que necesitas un calendario para elegir fechas. Programarlo desde cero te tomaría días: meses de
        distinta duración, años bisiestos, teclado, accesibilidad. Con una librería lo instalas, lo usas y sigues con tu
        problema real.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Librería, framework y herramienta de construcción</h3>
      <p className="my-4">
        Estas palabras se mezclan mucho. Una diferencia sencilla: con una librería <strong>tú llamas</strong> al código
        cuando lo necesitas. Con un framework, <strong>el código te llama a ti</strong> y tú rellenas las partes que él
        pide. Y una herramienta de construcción prepara y empaqueta tu proyecto.
      </p>
      <CompareTable
        headers={["Tipo", "Idea en una frase", "Ejemplos que usamos"]}
        rows={[
          ["Librería", "Resuelve un problema concreto y tú decides cuándo usarla", "React (interfaces), Material UI (componentes), React Router (rutas)"],
          ["Framework", "Define la estructura completa de la aplicación", "Next.js, Angular (no los usamos en este módulo)"],
          ["Herramienta de construcción", "Prepara tu código para el navegador y muestra cambios al instante", "Vite"],
        ]}
      />
      <Callout title="Una aclaración sobre React" variant="callout-info">
        <p className="mb-0">
          La documentación oficial describe a React como una librería para construir interfaces. Cuando le sumas
          rutas, manejo de datos y una herramienta como Vite, armas por tu cuenta algo parecido a un framework. La
          documentación de React incluso avisa que esto implica decidir muchas cosas tú mismo. Para aprender y para
          aplicaciones administrativas detrás de un login es una excelente opción, y por eso la usamos.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se ve un proyecto que usa librerías</h3>
      <MermaidDiagram
        title="Tu proyecto depende de librerías, y ellas dependen de otras"
        description="Diagrama de flujo con tu aplicación en el centro, conectada con React, Material UI y React Router, que a su vez usan otras dependencias."
        chart={`flowchart TD
  APP["Tu aplicación"] --> R["React"]
  APP --> M["Material UI"]
  APP --> RR["React Router"]
  M --> E["Emotion: estilos"]
  M --> R
  RR --> R
  APP --> V["Vite: herramienta de construcción"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Lo bueno y lo que cuesta</h3>
      <CompareTable
        headers={["Ventaja", "Costo que debes conocer"]}
        rows={[
          ["Ahorras tiempo de desarrollo", "Cada librería es una dependencia: si deja de mantenerse, tu proyecto queda con un problema"],
          ["Código probado por miles de personas", "Aumenta el peso de tu aplicación y su tiempo de carga"],
          ["Se vuelve un estándar que todos entienden", "Una librería puede traer errores de seguridad; hay que actualizarla"],
          ["Puedes concentrarte en la lógica de tu negocio", "Si la usas sin entenderla, no sabrás arreglar lo que falle"],
        ]}
      />

      <Callout title="Antes de instalar un paquete desconocido" variant="callout-warning">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Revisa el nombre con cuidado. Existen paquetes con nombres casi iguales a los famosos que contienen código malicioso.</li>
          <li>Mira cuántas descargas semanales tiene y cuándo fue su última actualización.</li>
          <li>Lee el README y la documentación: si no hay, desconfía.</li>
          <li>Después de instalar, ejecuta <code>npm audit</code> para ver si hay vulnerabilidades conocidas.</li>
        </ul>
      </Callout>

      <PracticeExercise
        title="Piénsalo con un caso"
        prompt="Necesitas mostrar gráficas de ventas en una página. Explica con tus palabras por qué usarías una librería de gráficas y qué dos cosas revisarías antes de instalarla."
        hints={["Piensa en el tiempo que ahorras", "Recuerda los criterios: mantenimiento, comunidad, documentación"]}
        expectedKeywords={["tiempo", "mantenimiento", "comunidad", "documentación", "descargas", "actualiz"]}
      />
    </section>
  );
}
