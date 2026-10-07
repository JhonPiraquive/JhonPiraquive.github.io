import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EntradaProcesoSalidaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Entrada, proceso y salida</h2>
      <p className="my-4">
        Todo sistema de información, por pequeño que sea, recorre tres fases. Si falta una, no hay sistema: hay
        un archivo suelto o una conversación que se olvida.
      </p>
      <MermaidDiagram
        title="Flujo básico de un sistema de información"
        description="Los datos entran, se transforman y salen como información útil"
        chart={`flowchart LR
  E[Entrada] --> P[Proceso]
  P --> S[Salida]
  S --> Otro[Otro sistema o una decision]`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Entrada</h3>
      <p className="my-4">
        Son los datos que el sistema necesita para funcionar. Pueden venir del entorno (un cliente que llama),
        de otro sistema (el inventario) o de un cálculo interno (el consecutivo de la orden). En Logística SAS
        la entrada de hoy es verbal: cédula, dirección y qué servicio pide el cliente. Mañana debería ser un
        formulario.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Proceso</h3>
      <p className="my-4">
        Es lo que el sistema hace con esos datos: validar, calcular, ordenar, cambiar de estado. Asignar un
        técnico a una orden y marcarla como «en espera por falta de insumos» es un proceso, no un adorno de la
        pantalla.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Salida</h3>
      <p className="my-4">
        Es el resultado que alguien usa: un número de orden, un reporte para el gerente, una consulta del
        cliente por internet. Esa salida puede alimentar otro sistema. Si nadie la usa, el proceso no aportó
        valor.
      </p>
    </section>
  );
}
