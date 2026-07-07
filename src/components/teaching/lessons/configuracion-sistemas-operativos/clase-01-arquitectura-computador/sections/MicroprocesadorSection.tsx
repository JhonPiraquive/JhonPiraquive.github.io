import { CompareTable } from "@/components/teaching/CompareTable";

export function MicroprocesadorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Microprocesador: núcleos, hilos y familias"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El microprocesador es la implementación física del CPU en un solo chip (o chiplet). Integra uno o varios núcleos de ejecución, caché, controlador de memoria y, en muchos casos, gráficos integrados."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Al comprar o especificar un equipo, el modelo de microprocesador define socket, RAM soportada, consumo y rendimiento por tipo de tarea. Confundir núcleos físicos con hilos lógicos lleva a sobredimensionar o subdimensionar."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Núcleo (core): unidad de ejecución independiente con ALU y registros."}</li>
        <li>{"Hilo lógico (thread): con Hyper-Threading (Intel) o SMT (AMD), un núcleo puede ejecutar dos hilos simultáneamente compartiendo recursos."}</li>
        <li>{"Un CPU «8 núcleos / 16 hilos» tiene 8 núcleos físicos y 16 hilos lógicos."}</li>
      </ul>

      <figure>
        <img
          src="/teaching/configuracion-sistemas-operativos/cpu-chip.jpg"
          alt="Chip de microprocesador visto de cerca"
          className="my-4 max-w-full rounded-lg"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparativa de familias"}</h3>
      <CompareTable
        headers={["Familia", "Ejemplos", "Fortaleza", "Consideración"]}
        rows={[
          ["Intel Core", "i3, i5, i7, i9", "Amplio ecosistema, Quick Sync", "Socket cambia por generación"],
          ["AMD Ryzen", "3, 5, 7, 9", "Muchos núcleos por precio", "Verificar BIOS para CPUs nuevas en placas antiguas"],
          ["Apple Silicon", "M1, M2, M3, M4", "Eficiencia energética, SoC unificado", "Solo Mac; no intercambiable"],
          ["Intel Xeon / AMD EPYC", "Servidor", "ECC, muchos núcleos, fiabilidad", "Costo y plataforma distinta a escritorio"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "Estación de trabajo para diseño 3D: AMD Ryzen 9 (12 núcleos) aprovecha render multihilo. PC de recepción con navegador y Office: Intel Core i3 o Ryzen 3 (4 núcleos) es suficiente. Portátil ultraligero: Apple M2 prioriza batería y rendimiento por vatio."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Contar hilos como núcleos físicos al licenciar software por socket: algunas licencias cuentan cores físicos."}</li>
        <li>{"Comprar Xeon para gaming doméstico: frecuencias turbo menores y costo alto sin beneficio."}</li>
        <li>{"Mezclar RAM de velocidades distintas sin documentar: el controlador baja a la velocidad del módulo más lento."}</li>
        <li>{"Actualizar solo el CPU sin revisar TDP y VRM de la placa base: inestabilidad o no arranque."}</li>
        <li>{"Asumir que Apple Silicon ejecuta todo x86 nativamente: apps sin traducción Rosetta pueden fallar o ir lentas."}</li>
      </ul>
    </section>
  );
}
