export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has recorrido la arquitectura del computador desde el gabinete hasta el firmware de arranque: la base sobre la que se instalarán sistemas operativos y aplicaciones en las clases siguientes."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"CPU ejecuta instrucciones (fetch-decode-execute); núcleos e hilos definen paralelismo real vs lógico."}</li>
        <li>{"Caché L1/L2/L3 acelera acceso a datos; RAM DRAM es volátil y crítica para multitarea."}</li>
        <li>{"Bits, bytes y binario explican capacidades y codificación (ASCII/UTF-8)."}</li>
        <li>{"Buses seriales (PCIe, SATA, USB) determinan el rendimiento real de discos y periféricos."}</li>
        <li>{"BIOS/UEFI en flash ROM inicializa hardware antes del SO."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección clase-02-dispositivos-almacenamiento — HDD, SSD, periféricos e inventario de hardware."}
      </p>
    </section>
  );
}
