import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Un CPU tiene 6 núcleos y 12 hilos. ¿Cuántos núcleos físicos tiene y qué tecnología explica la diferencia con los hilos?"
          hints={["Los hilos suelen ser el doble de núcleos", "Intel: Hyper-Threading", "AMD: SMT"]}
          expectedKeywords={["6", "SMT", "Hyper-Threading", "hilos"]}
          successMessage="Correcto: 6 núcleos físicos; 12 hilos gracias a SMT/Hyper-Threading (2 hilos por núcleo)."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué un SSD NVMe en puerto M.2 PCIe x4 es más rápido que el mismo disco en caja USB 3.2?"
          hints={["Ancho de banda del bus", "Gbps vs lanes PCIe", "Cuello de botella"]}
          expectedKeywords={["PCIe", "bus", "ancho de banda", "USB"]}
          successMessage="Correcto: PCIe x4 ofrece mucho más ancho de banda que USB; el bus externo limita la velocidad del SSD."
        />
      </div>
    </section>
  );
}
