import { CompareTable } from "@/components/teaching/CompareTable";

export function BusDatosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Bus de datos: paralelo, serial, SATA, PCIe y USB"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El bus de datos es el camino físico y lógico por el que circulan bits entre CPU, memoria, chipset y periféricos. Puede ser paralelo (varias líneas simultáneas, legado) o serial (un flujo de bits a alta frecuencia, estándar actual)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "El cuello de botella de un SSD NVMe no es solo el disco: el bus PCIe x4 Gen4 limita el throughput máximo. Conectar un SSD en puerto SATA cuando hay M.2 disponible desperdicia rendimiento."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "En buses seriales modernos, mayor generación y más carriles (lanes) aumentan ancho de banda. PCIe usa lanes × generación; USB y SATA tienen versiones con velocidad teórica distinta."
        }
      </p>

      <CompareTable
        headers={["Interfaz", "Tipo", "Velocidad teórica (orden magnitud)", "Uso típico"]}
        rows={[
          ["Bus paralelo (IDE/PATA)", "Paralelo", "Legacy ~133 MB/s", "Obsoleto en PCs nuevos"],
          ["SATA III", "Serial", "~600 MB/s", "HDD, SSD 2.5\""],
          ["PCIe 4.0 x4", "Serial", "~7 GB/s", "SSD NVMe M.2, GPU"],
          ["USB 3.2 Gen 2", "Serial", "~10 Gbps", "Discos externos, periféricos"],
          ["USB4 / Thunderbolt", "Serial", "40 Gbps", "Docks, eGPU, monitores"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "Un SSD NVMe PCIe 4.0 en slot M.2 x4 alcanza ~5000 MB/s secuencial. El mismo controlador en adaptador USB 3.2 queda limitado a ~1 GB/s — el bus externo es el cuello de botella."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Instalar GPU en slot PCIe x16 físico que está cableado a x4: rendimiento gráfico reducido."}</li>
        <li>{"Compartir lanes M.2 con SATA: al activar un slot, otro puerto deja de funcionar — no leer manual de placa."}</li>
        <li>{"Usar cable USB barato para clonar discos de 2 TB: desconexiones por falta de alimentación."}</li>
        <li>{"Confundir Gbps de marketing USB con MB/s reales de transferencia (~÷8)."}</li>
        <li>{"Mezclar generaciones PCIe sin revisar compatibilidad: funciona, pero a velocidad de la generación menor."}</li>
      </ul>
    </section>
  );
}
