import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección aborda la instalación y configuración de sistemas operativos sobre hardware real: comprender la arquitectura del computador, seleccionar y documentar componentes, instalar un SO y administrarlo desde consola."
        }
      </p>
      <p className="my-4 font-semibold">{"Competencia"}</p>
      <p className="my-4">
        {"Instalar y configurar sistemas operativos en equipos de cómputo, documentando hardware y cumpliendo buenas prácticas de mantenimiento."}
      </p>
      <p className="my-4 font-semibold">{"Resultados de aprendizaje"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Identifica los componentes de la arquitectura del computador (CPU, memoria, buses, chasis)."}</li>
        <li>{"Diferencia tipos de almacenamiento (HDD, SSD) y periféricos de entrada/salida."}</li>
        <li>{"Elabora hoja de vida de hardware y verifica licencias de software."}</li>
        <li>{"Instala sistemas operativos de escritorio y ejecuta tareas básicas en consola."}</li>
        <li>{"Administra usuarios, permisos, rutas y respaldos del sistema."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Estructura del tema"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"1. Arquitectura del computador: chasis, CPU, memoria, binario y buses."}</li>
        <li>{"2. Almacenamiento y periféricos: discos, monitores, inventario técnico."}</li>
        <li>{"3. Sistemas operativos: tipos, instalación, consola y mantenimiento."}</li>
      </ul>
      <Callout title="Enfoque práctico">
        {
          "Cada bloque incluye ejemplos con comandos, tablas comparativas y ejercicios. El reto integrador de la Clase 1 une especificación de hardware con criterios de refrigeración y memoria."
        }
      </Callout>
    </section>
  );
}
