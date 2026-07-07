import { CompareTable } from "@/components/teaching/CompareTable";

export function RamSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"RAM: DRAM, SRAM y generaciones DDR"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La RAM (Random Access Memory) es la memoria volátil principal donde el SO y los programas cargan datos e instrucciones en ejecución. DRAM (Dynamic RAM) es la tecnología de los módulos DDR; SRAM (Static RAM) es más rápida y cara, usada en caché del CPU."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Poca RAM obliga al SO a usar swap en disco — el equipo se vuelve lento. RAM insuficiente es una de las causas más comunes de lentitud en PCs de oficina con muchas pestañas del navegador."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "Los módulos DIMM (escritorio) o SO-DIMM (portátil) se insertan en ranuras de la placa base. El controlador de memoria del CPU define tipo DDR, velocidad máxima y canales dual/quad. Al apagar, el contenido se pierde."
        }
      </p>

      <figure>
        <img
          src="/teaching/configuracion-sistemas-operativos/ram-stick.jpg"
          alt="Módulo de memoria RAM DDR"
          className="my-4 max-w-full rounded-lg"
        />
      </figure>

      <CompareTable
        headers={["Generación", "Pin / notch", "Velocidad ejemplo", "Notas"]}
        rows={[
          ["DDR4", "288 pines", "3200 MT/s", "Amplia adopción hasta ~2022"],
          ["DDR5", "288 pines (notch distinto)", "4800–6400+ MT/s", "Mayor ancho de banda, PMIC en módulo"],
          ["SRAM", "Integrada en CPU", "Más rápida que DRAM", "No se compra como módulo de sistema"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "PC de oficina: 16 GB DDR4 dual-channel. Estación virtualización: 32–64 GB DDR5. Servidor con VMs: ECC registrada según plataforma Xeon/EPYC."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Un solo módulo en placa dual-channel: pierde ~30–50 % ancho de banda de memoria."}</li>
        <li>{"Forzar XMP/EXPO sin refrigeración adecuada: inestabilidad o pantallazos azules."}</li>
        <li>{"Mezclar DDR4 y DDR5 «si encajan»: el notch evita insertar — son incompatibles."}</li>
        <li>{"Comprar 4 GB en 2026 para Windows 11 + navegador: experiencia frustrante garantizada."}</li>
      </ul>
    </section>
  );
}
