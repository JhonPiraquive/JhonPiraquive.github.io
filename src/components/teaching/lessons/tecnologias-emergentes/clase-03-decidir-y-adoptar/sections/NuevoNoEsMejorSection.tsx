import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function NuevoNoEsMejorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Lo nuevo no siempre es lo mejor</h2>
      <p className="my-4">
        En tecnología es fácil caer en una trampa: creer que lo más reciente es automáticamente lo mejor. A veces lo es.
        Otras veces la novedad todavía tiene errores, casi nadie la usa y no hay ayuda cuando algo falla. Y a veces lo
        antiguo sigue siendo lo más sensato porque es estable y todo el mundo lo conoce.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Casos reales de este módulo</h3>
      <p className="my-4">
        Al preparar la guía de React del módulo aparecieron varias decisiones donde «lo más nuevo» y «lo mejor para
        aprender» no coincidían. La tabla muestra cómo se aplicó el criterio.
      </p>
      <CompareTable
        headers={["Tema", "Lo más reciente", "Lo que se enseña y por qué"]}
        rows={[
          ["Rutas", "La librería de rutas actual concentró todo en un único paquete, react-router.", "Se enseña la forma actual. Los tutoriales antiguos importan react-router-dom: mismo concepto, otro import."],
          ["Validar props", "React actual ya no valida PropTypes; la recomendación oficial es TypeScript.", "Se explica PropTypes porque aparece en proyectos existentes, aclarando que hoy no valida nada."],
          ["API de práctica", "La rama más nueva de json-server todavía es beta.", "Se usa la rama estable para practicar sin sorpresas."],
          ["Pedir datos", "Librerías como TanStack Query hacen gran parte del trabajo.", "Primero se aprende fetch para entender qué ocurre por dentro; después se evalúa la librería."],
          ["Grillas de Material UI", "La versión actual usa Grid con la propiedad size.", "Se enseña la forma actual y se muestra la antigua, porque las plantillas viejas todavía la usan."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Lo nuevo también trae riesgos nuevos</h3>
      <p className="my-4">
        Una de las novedades más celebradas del ecosistema de React, los componentes de servidor, tuvo vulnerabilidades
        graves, entre ellas una que permitía ejecutar código de forma remota sin autenticación. Se corrigieron con
        actualizaciones y quienes mantenían sus dependencias al día quedaron protegidos. La lección no es evitar lo nuevo,
        sino adoptarlo con conciencia: leer los avisos de seguridad y actualizar con regularidad.
      </p>
      <CompareTable
        headers={["Conviene lo nuevo cuando…", "Conviene esperar o lo establecido cuando…"]}
        rows={[
          ["Resuelve un problema que lo actual no resuelve.", "Lo actual funciona y el cambio solo es estético o de moda."],
          ["El proyecto es nuevo, pequeño o de aprendizaje.", "El sistema es crítico y un fallo afecta a muchas personas."],
          ["El costo de volver atrás es bajo.", "Volver atrás sería muy costoso."],
          ["El equipo tiene tiempo para aprender y probar.", "El plazo es corto y nadie conoce la tecnología."],
          ["La ventaja de llegar primero es importante.", "La ventaja de llegar primero es pequeña."],
        ]}
      />
      <Callout title="La regla práctica" variant="callout-tip">
        <p className="mb-0">
          Para producción conviene lo estable que el equipo entiende. Para aprender y explorar, lo nuevo se prueba en un
          proyecto pequeño. Mezclar ambas cosas sin pensar es lo que suele salir caro.
        </p>
      </Callout>
    </section>
  );
}
