export function CasoLogisticaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Caso Logística SAS</h2>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Problemática</h3>
      <p className="my-4">
        En Logística SAS se pierde información porque todo se maneja por teléfono y en papel. Un cliente pide un
        servicio y luego no hay constancia: la orden no se ejecuta y el cliente pierde tiempo y dinero. El
        estado de su solicitud depende de quién conteste la llamada.
      </p>
      <p className="my-4">
        Cada orden genera muchos datos, pero no quedan guardados. Buscar al cliente a mano toma tiempo y el
        gerente no tiene estadísticas para decidir.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Objetivo general</h3>
      <p className="my-4">
        Crear un sistema de información que permita manejar la información del área de servicios de Logística SAS.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Objetivos específicos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Ordenar el flujo de información del área de servicios.</li>
        <li>Ofrecer consultas en pantalla y reportes para el trabajo administrativo.</li>
        <li>Capturar las órdenes en el sistema para responder más rápido.</li>
        <li>Relacionar los insumos usados en cada orden para mantener el inventario al día.</li>
        <li>Guardar los datos del área en formularios, de modo que estén disponibles.</li>
        <li>Consultar el estado de las órdenes.</li>
        <li>Permitir que el cliente registre y consulte órdenes desde la página de la empresa.</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Restricciones que salieron de la entrevista</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>No quieren comprar software ni periféricos: herramientas libres.</li>
        <li>Hoy usan Unix. El dueño no descarta Windows, así que el sistema debe poder adaptarse.</li>
        <li>Los equipos son nuevos. No hay servidor para alojar el sistema.</li>
        <li>Hay personas con muy poco manejo de computadores y otras que lo dominan. La interfaz tiene que ser simple.</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Peticiones de datos</h3>
      <p className="my-4">
        Clientes y proveedores: identificación, nombre, dirección y teléfono. Órdenes: número, cliente, dirección
        del servicio, teléfono, insumos, técnico, observaciones y estado (asignado, en espera por insumos, en
        espera por personal o cancelado). Además, seguimiento de la orden y reportes consultables de varias
        formas. En lo visual: logo, imágenes del proceso, botones con nombres claros y facilidad de uso.
      </p>
    </section>
  );
}
