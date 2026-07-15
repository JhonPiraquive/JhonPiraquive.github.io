import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MemoriaCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Memoria caché: L1, L2 y L3"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La memoria caché es SRAM ultrarrápida integrada en o cerca del CPU que guarda copias de datos e instrucciones usados recientemente. Reduce la brecha de velocidad entre el procesador (GHz) y la RAM principal (nanosegundos vs decenas de ns)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin caché, la CPU pasaría la mayor parte del tiempo esperando datos de RAM. Más caché L3 suele mejorar cargas con patrones de acceso repetitivos (bases de datos, compilación). No sustituye RAM insuficiente."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "Jerarquía típica: L1 (por núcleo, ~32–64 KB, 1–4 ciclos), L2 (por núcleo o cluster, ~256 KB–1 MB), L3 (compartida, varios MB). En miss de caché, se consulta el nivel siguiente hasta llegar a RAM."
        }
      </p>
      <MermaidDiagram
        title="Jerarquía de memoria caché"
        description="Pirámide L1 a L2 a L3 a RAM"
        chart={`flowchart TB
  L1["L1 - muy rapida poca capacidad"] --> L2["L2 - rapida"]
  L2 --> L3["L3 - compartida"]
  L3 --> RAM["RAM principal"]
`}
      />

      <CompareTable
        headers={["Nivel", "Tamaño típico", "Latencia", "Compartición"]}
        rows={[
          ["L1", "32–64 KB por núcleo", "Muy baja (~1 ns)", "Privada por núcleo"],
          ["L2", "256 KB – 1 MB", "Baja", "Por núcleo o grupo"],
          ["L3", "8 – 128 MB", "Media", "Compartida entre núcleos"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "Un bucle que suma el mismo arreglo millones de veces encaja en L1/L2. Un programa que salta por tablas enormes en RAM genera muchos cache miss y se nota más lento aunque el CPU tenga alto GHz."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Elegir CPU solo por caché L3 sin evaluar núcleos ni RAM: 96 MB de L3 no compensa 8 GB de RAM en VMs."}</li>
        <li>{"Confundir caché del CPU con caché de disco del SO: son capas distintas."}</li>
        <li>{"Desactivar caché en BIOS «para probar»: degrada rendimiento de forma extrema."}</li>
        <li>{"Comparar AMD 3D V-Cache con Intel solo por número de núcleos ignorando carga de juego vs compilación."}</li>
      </ul>
    </section>
  );
}
