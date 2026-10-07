import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsUnCasoDeUsoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Casos de uso en el diseño</h2>
      <p className="my-4">
        En diseño se agrupan los casos de uso por actor y se dibujan. El caso de uso captura lo que el sistema
        hace visto desde fuera. Guía el desarrollo y es el idioma entre el cliente y el equipo: el cliente no
        necesita saber cómo está programado.
      </p>
      <p className="my-4">
        Tres objetivos prácticos: expresar requisitos funcionales desde el usuario, ordenar el trabajo de
        construcción y ponerse de acuerdo sobre la interacción.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Agrupar por actor</h3>
      <p className="my-4">
        Antes del dibujo, una tabla evita casos sueltos. En Logística SAS, después de depurar, el orden lógico
        para cargar datos es este:
      </p>
      <ol className="my-4 list-decimal space-y-1 pl-6">
        <li>Administrar tipos de usuario, permisos y usuarios.</li>
        <li>Administrar estados del servicio e insumos.</li>
        <li>Administrar clientes y proveedores.</li>
        <li>Registrar y administrar órdenes, incluido el registro por internet.</li>
        <li>Hacer seguimiento por internet y generar reportes.</li>
      </ol>
      <MermaidDiagram
        title="Casos de uso del empleado que asigna servicios"
        description="El actor se une a cada caso. El detalle de include se ve en la sección siguiente."
        chart={`flowchart LR
  Empleado([Empleado]) --- C1([Administrar clientes])
  Empleado --- C2([Registrar orden])
  Empleado --- C3([Administrar ordenes])
  Empleado --- C4([Generar reportes])`}
      />
      <p className="my-4">
        Depura antes de especificar todo. En el caso se pueden retirar «petición de insumos» (basta con
        administrar proveedores), «seguimiento por un empleado» y «actualizar orden» si ya viven dentro de
        administrar órdenes. Menos casos, más claros.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo descubrir casos que faltan</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Opuestos.</strong> Si existe «solicitar servicio», pregunta por «cancelar servicio». De ahí
          sale «administrar órdenes».
        </li>
        <li>
          <strong>Qué ocurre antes.</strong> Para registrar una orden, el cliente ya debe existir y el empleado
          debe haber iniciado sesión.
        </li>
        <li>
          <strong>Qué ocurre después.</strong> Después de registrar, alguien asigna técnico, insumos y estado.
        </li>
      </ul>
    </section>
  );
}
