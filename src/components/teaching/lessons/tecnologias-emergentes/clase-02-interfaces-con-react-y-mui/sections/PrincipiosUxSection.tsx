import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PrincipiosUxSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">UX y UI: qué son y qué se exige a un sitio administrativo</h2>
      <p className="my-4">
        <strong>UI</strong> (interfaz de usuario) es lo que se ve y se toca: colores, botones, tipografías, la forma de la
        tabla. <strong>UX</strong> (experiencia de usuario) es lo que la persona siente al usar el producto: si logra lo que
        quería, rápido, sin equivocarse y sin frustrarse. Una interfaz puede ser muy bonita (buena UI) y aun así ser un
        suplicio para usar (mala UX).
      </p>
      <p className="my-4">
        Un sitio administrativo tiene algo particular: quienes lo usan lo hacen todos los días, durante horas, para
        trabajar. No les importa que sea espectacular; les importa que sea <strong>rápido, claro y que no se
        equivoque</strong>. Un administrador que borra un registro por error por culpa de un botón mal ubicado es un fallo
        de UX, no del usuario.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Las reglas de oro de la usabilidad</h3>
      <p className="my-4">
        Jakob Nielsen, un referente en usabilidad, resumió diez reglas generales (las «heurísticas de Nielsen»). Estas son
        las que más se aplican al diseñar un panel administrativo:
      </p>
      <CompareTable
        headers={["Regla", "Qué significa", "Ejemplo en un panel administrativo"]}
        rows={[
          ["Visibilidad del estado", "El sistema siempre dice qué está pasando", "Un indicador de carga mientras se piden los datos; un mensaje «Guardado»"],
          ["Lenguaje del usuario", "Se usan palabras que la persona entiende", "«Eliminar curso» y no «Ejecutar DELETE»"],
          ["Control y libertad", "Siempre hay una salida", "Botón Cancelar en cada formulario; confirmar antes de borrar"],
          ["Consistencia", "Lo parecido se ve y se comporta igual", "Todos los módulos con el mismo botón Agregar en la misma posición"],
          ["Prevenir errores", "Mejor evitar el error que mostrarlo", "Deshabilitar Guardar si faltan campos; usar un selector de fecha"],
          ["Reconocer antes que recordar", "No se obliga a memorizar", "Etiquetas visibles en los campos, no solo placeholders"],
          ["Ayuda ante errores", "Los mensajes explican y orientan", "«La identificación ya existe. Revise el número o edite al docente existente»"],
          ["Diseño minimalista", "Solo lo necesario en pantalla", "Una tabla con las columnas clave, el resto en el detalle"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Jerarquía visual: guiar la mirada</h3>
      <p className="my-4">
        En cada pantalla hay una acción principal (por ejemplo, «Agregar docente») y varias secundarias («Editar»,
        «Filtrar»). La jerarquía visual consiste en hacer evidente cuál es cuál con tamaño, color y posición.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Un solo botón principal por pantalla, en <code>variant=&quot;contained&quot;</code>. Los demás, <code>outlined</code> o <code>text</code>.</li>
        <li>Las acciones destructivas (eliminar) en color de error y siempre con confirmación.</li>
        <li>Títulos más grandes que el contenido y campos relacionados agrupados bajo un subtítulo.</li>
        <li>Espacio en blanco entre grupos: el espacio también comunica.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El patrón clásico de un módulo administrativo</h3>
      <MermaidDiagram
        title="Las cuatro pantallas de casi cualquier módulo"
        description="Flujo: el listado lleva al formulario de crear, al de editar y a la confirmación de eliminar, y todos regresan al listado."
        chart={`flowchart LR
  L["Listado<br/>tabla + buscar + Agregar"] -->|"Agregar"| C["Formulario<br/>Crear"]
  L -->|"Editar"| E["Formulario<br/>Editar"]
  L -->|"Eliminar"| D["Confirmación<br/>de borrado"]
  C -->|"Guardar o Cancelar"| L
  E -->|"Guardar o Cancelar"| L
  D -->|"Confirmar o Cancelar"| L`}
      />
      <Callout title="Por qué importa que se repita el patrón" variant="callout-info">
        <p className="mb-0">
          Cuando el módulo de docentes funciona igual que el de estudiantes y el de materias, la persona aprende una vez y
          sabe usar todo. Esto es consistencia, y es lo que hace que un sistema se sienta profesional. También beneficia al
          desarrollador: el módulo se escribe una vez y la estructura se copia.
        </p>
      </Callout>

    </section>
  );
}
