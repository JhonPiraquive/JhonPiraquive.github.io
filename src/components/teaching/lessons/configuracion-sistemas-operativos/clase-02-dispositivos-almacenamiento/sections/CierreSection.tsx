export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>

      <p className="my-4 font-semibold">{"Resumen"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "HDD (platillos magnéticos), SSD (flash NAND) y SAS (empresarial) cubren desde escritorio económico hasta servidores; elegir según capacidad, IOPS y presupuesto."
          }
        </li>
        <li>
          {
            "El disco óptico sigue útil para recovery legacy y archivo; la tendencia es USB booteable e ISO en red."
          }
        </li>
        <li>
          {
            "Periféricos de entrada/salida definen ergonomía y productividad: teclado, mouse, audio, cámara y monitor acordes al entorno."
          }
        </li>
        <li>
          {
            "Resolución = píxeles horizontales × verticales; PPI depende del tamaño físico del panel."
          }
        </li>
        <li>
          {
            "La hoja de vida del PC centraliza hardware, software, mantenimiento y responsable para soporte y garantías."
          }
        </li>
        <li>
          {
            "Licencias: distinguir libre, freeware, shareware, propietario y comercial; en Colombia el cumplimiento evita riesgo legal y de seguridad."
          }
        </li>
        <li>
          {
            "Siguiente clase: clase-03-sistemas-operativos — tipos de SO, instalación, consola, usuarios y respaldo."
          }
        </li>
      </ul>
    </section>
  );
}
