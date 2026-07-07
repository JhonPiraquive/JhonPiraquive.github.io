import { Callout } from "@/components/teaching/Callout";

export function QueEsSoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es un sistema operativo?"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un sistema operativo (SO) es el software de base que gestiona el hardware del computador: CPU, memoria, almacenamiento y periféricos. Proporciona una interfaz para que las aplicaciones (navegador, procesador de textos, servidor web) ejecuten sin programar directamente cada dispositivo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "El SO permite multitarea (varios programas a la vez), aislamiento entre procesos, seguridad por usuarios y permisos, y abstracción del hardware. En soporte TI, casi todo incidente pasa por el SO: arranque, drivers, espacio en disco, servicios o permisos mal configurados."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El firmware (BIOS/UEFI) carga el gestor de arranque del SO desde el disco."}</li>
        <li>{"El kernel inicializa hardware, memoria y servicios del sistema."}</li>
        <li>{"El planificador de procesos asigna tiempo de CPU a cada tarea según prioridad y política."}</li>
        <li>{"Las aplicaciones solicitan recursos al kernel mediante llamadas al sistema (syscalls)."}</li>
        <li>{"El SO traduce esas peticiones en operaciones sobre hardware real."}</li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Planificador de procesos"}</h3>
      <p className="my-4">
        {
          "El planificador (scheduler) decide qué proceso usa la CPU en cada instante. En un PC con 4 núcleos y 40 pestañas abiertas, el SO alterna miles de veces por segundo entre procesos para dar la ilusión de ejecución simultánea."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Colas de listos, bloqueados y en ejecución."}</li>
        <li>{"Prioridades: procesos del sistema suelen tener más prioridad que aplicaciones de usuario."}</li>
        <li>{"Time slicing: cada proceso recibe un quantum de CPU antes de ceder el turno."}</li>
      </ul>
      <Callout title="Señal de buen uso">
        {"Un SO actualizado con recursos suficientes mantiene la CPU en rangos razonables (< 80 % sostenido) y responde sin congelarse al abrir varias apps."}
      </Callout>
      <Callout title="Señal de mal uso">
        {"CPU al 100 % constante, swap excesivo o un solo proceso consumiendo toda la RAM indica planificación saturada o fuga de memoria."}
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Instalar un SO de escritorio en un servidor de producción sin hardening: interfaz gráfica innecesaria, más superficie de ataque y consumo de RAM."
          }
        </li>
        <li>
          {
            "Deshabilitar actualizaciones del SO «para que no se ponga lento» y dejar vulnerabilidades sin parche durante meses."
          }
        </li>
        <li>
          {
            "Ejecutar todo como administrador/root en estaciones de trabajo: un malware o script erróneo compromete todo el equipo."
          }
        </li>
        <li>
          {
            "Ignorar el monitor de procesos cuando un equipo «se pone lento»: matar procesos al azar sin identificar la causa raíz."
          }
        </li>
        <li>
          {
            "Mezclar SO obsoleto (sin soporte) con datos sensibles de clientes en una PYME contable."
          }
        </li>
      </ul>
    </section>
  );
}
