import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CpuSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"CPU: unidad central de procesamiento"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La CPU (Central Processing Unit) es el componente que ejecuta instrucciones de programa. Internamente combina la Unidad de Control (CU), que orquesta el ciclo de instrucciones, y la Unidad Aritmético-Lógica (ALU), que realiza operaciones matemáticas y lógicas."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Toda tarea — desde escribir en un documento hasta compilar código — se reduce a instrucciones que la CPU procesa. Su velocidad efectiva depende de frecuencia (GHz), arquitectura, caché y número de núcleos frente al tipo de carga."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">{"El ciclo clásico de instrucción:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Fetch: leer la instrucción desde memoria (dirección en PC — program counter)."}</li>
        <li>{"Decode: interpretar el opcode y operandos."}</li>
        <li>{"Execute: ALU o unidad especializada ejecuta la operación."}</li>
        <li>{"Memory / Write-back: acceder a memoria si hace falta y guardar resultado en registro."}</li>
      </ol>

      <MermaidDiagram
        chart={`flowchart LR
  F["Fetch\\n(leer instrucción)"]
  D["Decode\\n(interpretar)"]
  E["Execute\\n(ALU / CU)"]
  W["Write-back\\n(actualizar registro)"]
  F --> D --> E --> W --> F`}
      />
      <figure className="my-6">
        <img
          src="/teaching/configuracion-sistemas-operativos/cpu-cycle-diagram.png"
          alt="Diagrama del ciclo fetch-decode-execute de la CPU"
          className="max-w-full rounded-lg"
        />
        <figcaption className="mt-2 text-center text-sm text-[var(--color-neutral-mid)]">
          {"Ciclo fetch → decode → execute → write-back"}
        </figcaption>
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"CU: secuencia fetch-decode-execute, señales de control a memoria y E/S."}</li>
        <li>{"ALU: suma, resta, AND, OR, comparaciones."}</li>
        <li>{"Registros: almacenamiento ultrarrápido dentro del CPU."}</li>
        <li>{"GHz: miles de millones de ciclos por segundo; no es el único indicador de rendimiento."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">{"Consultar información del procesador en Linux:"}</p>
      <CodeFiddle
        language="bash"
        title="Información de CPU en Linux"
        code={`# Modelo y núcleos
lscpu | grep -E 'Model name|CPU\\(s\\)|Thread|MHz'

# Detalle por núcleo
cat /proc/cpuinfo | grep 'model name' | head -1`}
      />
      <p className="my-4">{"Equivalente en Windows (PowerShell):"}</p>
      <CodeFiddle
        language="powershell"
        title="Información de CPU en Windows"
        code={`Get-CimInstance Win32_Processor |
  Select-Object Name, NumberOfCores, NumberOfLogicalProcessors, MaxClockSpeed`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Comparar solo GHz entre familias distintas (Intel 12.ª gen vs AMD Zen 4): la arquitectura importa más."}</li>
        <li>{"Asumir que «más núcleos» acelera todo: muchas apps de oficina usan pocos hilos."}</li>
        <li>{"Ignorar límites de TDP en laptops: un CPU de 45 W sostenido necesita refrigeración adecuada."}</li>
        <li>{"Ejecutar carga 100 % sin monitorizar temperatura en laboratorio: riesgo de throttling o apagado."}</li>
      </ul>
    </section>
  );
}
