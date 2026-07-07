import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ArquitecturaComputadorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Arquitectura del computador: visión general"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La arquitectura del computador describe cómo se organizan y conectan los componentes que procesan información: unidad central de procesamiento (CPU), memoria principal (RAM), dispositivos de entrada/salida (teclado, disco, red) y los buses que transportan datos, direcciones y señales de control."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin este mapa mental, diagnosticar lentitud, elegir hardware o instalar un SO se reduce a intuición. Saber qué hace la CPU frente a la RAM, o qué papel tiene la BIOS, permite especificar equipos, ampliar memoria con criterio y entender mensajes de arranque o errores de hardware."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "En el modelo von Neumann, programa e instrucciones residen en memoria. La CPU lee instrucciones (fetch), las interpreta (decode) y las ejecuta (execute), leyendo y escribiendo datos en memoria o en dispositivos E/S. Los buses conectan todo el sistema:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Bus de datos: transporta bits entre CPU, memoria y periféricos."}</li>
        <li>{"Bus de direcciones: indica qué celda de memoria o registro se accede."}</li>
        <li>{"Bus de control: señales de lectura/escritura, interrupciones y sincronización."}</li>
      </ul>

      <MermaidDiagram
        chart={`flowchart LR
  CPU["CPU\\n(CU + ALU)"]
  RAM["RAM\\n(memoria principal)"]
  IO["E/S\\n(disco, red, USB)"]
  ROM["ROM/BIOS\\n(firmware)"]
  CPU <-->|"bus datos"| RAM
  CPU <-->|"bus datos"| IO
  CPU -->|"arranque"| ROM`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "Al abrir un navegador, el SO carga el ejecutable desde disco (E/S) a RAM. La CPU ejecuta millones de instrucciones por segundo; la caché L1/L2/L3 acelera accesos repetidos. Si la RAM se llena, el SO usa el disco como memoria virtual — mucho más lento."
        }
      </p>

      <figure>
        <img
          src="/teaching/configuracion-sistemas-operativos/cpu-chip.jpg"
          alt="Microprocesador montado en socket de placa base"
          className="my-4 max-w-full rounded-lg"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Comprar solo «más GHz» sin evaluar núcleos, caché o refrigeración: un CPU de 5 GHz mal refrigerado hace thermal throttling y rinde peor que uno equilibrado."
          }
        </li>
        <li>
          {
            "Confundir memoria RAM con espacio en disco: «tengo 1 TB de memoria» suele referirse al disco, no a RAM — el equipo seguirá lento con poca RAM."
          }
        </li>
        <li>
          {
            "Ignorar compatibilidad de socket y chipset al cambiar CPU: un procesador nuevo no encaja en cualquier placa base."
          }
        </li>
        <li>
          {
            "Ampliar RAM sin verificar generación DDR (DDR4 vs DDR5): los módulos no son intercambiables."
          }
        </li>
      </ul>
    </section>
  );
}
