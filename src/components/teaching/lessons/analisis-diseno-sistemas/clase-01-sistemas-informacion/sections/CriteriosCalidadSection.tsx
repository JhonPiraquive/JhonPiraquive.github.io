import { Callout } from "@/components/teaching/Callout";

const FILAS: [string, string][] = [
  ["Aceptable", "Coherente con los objetivos del negocio y aceptado por quienes lo usan."],
  ["Auditable", "Se puede medir y evaluar el funcionamiento de sus módulos."],
  ["Completo", "Están identificados los procesos que hará la persona, el computador o ambos."],
  ["Confidencial", "No se entra sin autorización."],
  ["Costo", "Hay un plan de inversión por etapa del ciclo de vida."],
  ["Dependencias", "Se sabe de qué datos, tecnología, usuarios y responsables depende."],
  ["Facilidad de uso", "Resulta claro para los distintos niveles de usuario."],
  ["Eficiencia", "Usa bien los recursos para producir las salidas."],
  ["Generalidad", "Si se compra, se sabe en qué otras empresas opera y qué soporte ofrece."],
  ["Integridad", "Los datos de entrada, proceso y salida son confiables y consistentes."],
  ["Interfaces", "Están definidas las conexiones con otros sistemas y usuarios."],
  ["Mantenimiento", "Corregir y mejorar no exige rehacer el sistema."],
];

export function CriteriosCalidadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Aspectos que no se pueden saltar</h2>
      <p className="my-4">Antes de crear, comprar o cambiar un sistema conviene fijar tres anclas:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Objetivo, estrategia y factores críticos de éxito.</strong> El objetivo tiene que ser claro y
          medible. La estrategia dice cómo se va a lograr. Los factores críticos señalan qué, dentro o fuera de
          la empresa, hace que el sistema valga la pena.
        </li>
        <li>
          <strong>Ajuste al ciclo de vida.</strong> En análisis se ordenan las necesidades. En diseño se concretan
          entradas, procesos y salidas. En desarrollo se eligen herramientas y equipo. En implantación se prueba,
          se entrena y se convierte la información.
        </li>
        <li>
          <strong>Factibilidad y costo/beneficio.</strong> Un sistema toca estructuras, equipos e inversión. Hay
          que estudiar el impacto antes de construirlo.
        </li>
      </ul>
      <p className="my-4">
        La importancia de cada cualidad la marca la estrategia de la empresa. Esta lista, adaptada de Universidad
        de Pamplona (2014), sirve para evaluar un sistema que ya existe o uno que está en análisis.
      </p>
      <div className="not-prose my-4 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]">
              <th className="py-2 pr-4 font-semibold">Cualidad</th>
              <th className="py-2 font-semibold">Definición</th>
            </tr>
          </thead>
          <tbody>
            {FILAS.map(([cualidad, definicion]) => (
              <tr key={cualidad} className="border-b border-[var(--color-neutral-mid)]/40">
                <td className="py-2 pr-4 font-semibold">{cualidad}</td>
                <td className="py-2">{definicion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Callout title="Cierre de la unidad" variant="callout-tip">
        <p className="mb-0">
          Ya tienes el mapa: qué es un sistema, de qué se compone, qué tipos existen, quién participa y con qué
          criterios se juzga. La clase siguiente pone nombre a las piezas del modelo (UML) y al camino del
          proyecto (ciclo de vida).
        </p>
      </Callout>
    </section>
  );
}
