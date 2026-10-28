import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function SenalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Las señales de una tecnología emergente</h2>
      <p className="my-4">
        Una tecnología emergente deja huellas antes de volverse famosa, igual que una tormenta se anuncia con nubes y
        viento. Esas huellas se llaman <strong>señales</strong>. Algunas aparecen muy temprano (señales débiles) y otras
        cuando la tecnología ya está creciendo (señales fuertes).
      </p>
      <CompareTable
        title="Señales, de la más temprana a la más tardía"
        headers={["Señal", "Dónde se observa", "Qué indica"]}
        rows={[
          ["Publicaciones científicas", "Artículos, conferencias, repositorios de preimpresiones como arXiv.", "Hay investigación activa. Es la señal más temprana."],
          ["Patentes", "Bases de datos de patentes (Google Patents, oficinas nacionales).", "Empresas creen que tendrá valor comercial y quieren protegerlo."],
          ["Inversión", "Rondas de financiación de empresas emergentes, fondos públicos.", "Alguien apuesta dinero a que crecerá."],
          ["Proyectos de código abierto", "Repositorios en GitHub: estrellas, contribuidores, actividad reciente.", "Desarrolladores la usan y la mejoran por iniciativa propia."],
          ["Descargas de paquetes", "Estadísticas de npm, PyPI y otros gestores.", "Uso real en proyectos, no solo interés."],
          ["Encuestas de desarrolladores", "Encuesta de Stack Overflow, State of JS, informes de GitHub.", "Cuántas personas la usan, la quieren aprender o la abandonan."],
          ["Ofertas de empleo", "Portales de empleo que mencionan la tecnología.", "Las organizaciones ya la necesitan en producción."],
          ["Estándares y regulación", "Organismos de estándares, leyes y políticas públicas.", "La tecnología ya es tan relevante que hay que ordenarla."],
        ]}
      />
      <p className="my-4">
        Ninguna señal sola es suficiente. Las estrellas de un repositorio, por ejemplo, se pueden inflar con campañas; las
        descargas pueden venir de sistemas automáticos. La fuerza está en ver varias señales que apuntan en la misma
        dirección.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Medir una señal con código</h3>
      <p className="my-4">
        npm publica las descargas de cada paquete en una API pública. El siguiente código, que puede pegarse en la consola
        del navegador, compara las descargas del último mes de dos paquetes. El mismo patrón sirve para observar si una
        librería crece o decrece.
      </p>
      <CodeFiddle
        language="javascript"
        title="Comparar descargas de paquetes en npm"
        code={`async function descargasUltimoMes(paquete) {
  const respuesta = await fetch(\`https://api.npmjs.org/downloads/point/last-month/\${paquete}\`);
  if (!respuesta.ok) throw new Error(\`No se encontró el paquete \${paquete}\`);
  const datos = await respuesta.json();
  return datos.downloads;
}

const paquetes = ["react", "vue", "svelte"];

const resultados = await Promise.all(
  paquetes.map(async (nombre) => ({ nombre, descargas: await descargasUltimoMes(nombre) })),
);

console.table(resultados);`}
      />
      <Callout title="Señal no es lo mismo que calidad" variant="callout-warning">
        <p className="mb-0">
          Un paquete muy descargado puede estar abandonado o tener problemas de seguridad, y uno poco descargado puede ser
          excelente para un nicho. Las señales dicen qué tan extendida está una tecnología; la calidad se juzga con los
          criterios de la clase 3.
        </p>
      </Callout>
    </section>
  );
}
