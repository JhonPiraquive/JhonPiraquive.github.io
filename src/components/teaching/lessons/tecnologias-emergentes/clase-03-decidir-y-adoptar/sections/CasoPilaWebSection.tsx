import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { Link } from "@/i18n/navigation";

export function CasoPilaWebSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Caso 2: elegir la pila de un panel administrativo</h2>
      <p className="my-4">
        Una fundación que presta libros en veredas necesita un panel interno para registrar libros, lectores y préstamos.
        Lo usarán cinco personas detrás de un inicio de sesión. Es el mismo tipo de proyecto que se construye en las
        actividades del módulo, por lo que el caso explica las decisiones de la{" "}
        <Link href="/teaching/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes">guía de apoyo React</Link>.
      </p>
      <CompareTable
        title="Decisiones y su justificación"
        headers={["Decisión", "Alternativas", "Elección", "Criterio que más pesó"]}
        rows={[
          [
            "Librería de interfaz",
            "React, Vue, Svelte, HTML con JavaScript sin librería.",
            "React.",
            "Comunidad, documentación y talento disponible: es la más usada y la que el equipo conoce.",
          ],
          [
            "Herramienta de construcción",
            "Vite, un framework completo como Next.js.",
            "Vite.",
            "Necesidad real: un panel detrás de un inicio de sesión no necesita posicionamiento en buscadores ni renderizado en servidor.",
          ],
          [
            "Componentes visuales",
            "Material UI, componentes propios, librerías sin estilos.",
            "Material UI.",
            "Madurez y costo: tablas, formularios y diálogos accesibles listos.",
          ],
          [
            "Navegación",
            "React Router, otras librerías de rutas.",
            "React Router.",
            "Madurez y documentación; es la opción estándar con React.",
          ],
          [
            "Peticiones a la API",
            "fetch nativo, una librería de manejo de datos del servidor.",
            "fetch, con la opción de migrar.",
            "Costo de cambiar bajo y equipo que está aprendiendo: primero se entiende lo básico.",
          ],
          [
            "Asistente de IA dentro del panel",
            "Agregar un chat para buscar libros, no agregarlo.",
            "No por ahora; revisar en seis meses.",
            "Necesidad real: con cinco usuarios y una búsqueda simple, no justifica el costo ni el riesgo de privacidad.",
          ],
        ]}
      />
      <Callout title="Adoptar y no adoptar son decisiones igual de válidas" variant="callout-info">
        <p className="mb-0">
          La última fila es tan importante como las demás. Decidir no adoptar una tecnología emergente, con razones y con
          fecha de revisión, es un resultado profesional del método, no un fracaso. Lo que se evita es adoptar o descartar
          sin pensarlo.
        </p>
      </Callout>
    </section>
  );
}
