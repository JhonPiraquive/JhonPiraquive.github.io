import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir qué es un sistema operativo y describir el rol del planificador de procesos."}</li>
        <li>{"Clasificar SO de escritorio, móvil, servidor y tiempo real con ejemplos."}</li>
        <li>{"Comparar Windows, macOS, distribuciones Linux, Android e iOS según uso y administración."}</li>
        <li>{"Planificar una instalación: requisitos, BIOS/UEFI, particiones y drivers."}</li>
        <li>{"Ejecutar comandos básicos en consola Linux y sus equivalentes en Windows."}</li>
        <li>{"Distinguir rutas absolutas y relativas en ambos entornos."}</li>
        <li>{"Gestionar usuarios, grupos y permisos rwx con useradd, passwd y chmod."}</li>
        <li>{"Diseñar una estrategia de respaldo en cuatro niveles (espejo, NAS, nube, geo-redundante)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"clase-01-arquitectura-computador:"}</strong>
          {" CPU, RAM, buses y jerarquía de memoria."}
        </li>
        <li>
          <strong>{"clase-02-dispositivos-almacenamiento:"}</strong>
          {" HDD/SSD, interfaces y periféricos de entrada/salida."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Introducción"}</h3>
      <p className="my-4">
        {
          "El sistema operativo es el intermediario entre el hardware que estudiaste en las clases anteriores y las aplicaciones que usa el usuario final. En soporte TI de una PYME en Bogotá o un laboratorio SENA en Medellín, saber instalar, configurar la consola y respaldar datos evita pérdidas costosas y tiempos de inactividad."
        }
      </p>
      <Callout title="SO = capa de abstracción y control">
        {
          "Sin un SO estable no hay multitarea fiable, permisos ni acceso seguro al disco. La consola es la herramienta del técnico cuando la interfaz gráfica falla o el servidor no tiene escritorio."
        }
      </Callout>
    </section>
  );
}
