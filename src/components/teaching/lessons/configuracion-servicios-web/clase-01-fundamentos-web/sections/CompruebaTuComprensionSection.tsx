import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="IPv4 tiene ___ bits, divididos en ___ octetos de ___ bits. Completa los valores y explica por qué el primer octeto de 192.168.1.1 empieza con 11000000 en binario."
          hints={["4 × 8 = ?", "Cada octeto va de 0 a 255", "192 en binario usa los 8 bits del primer octeto"]}
          expectedKeywords={["32", "4", "8"]}
          successMessage="Correcto: 32 bits, 4 octetos de 8 bits. 192 decimal = 11000000 en binario de 8 posiciones."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué pasaría si configuras dos registros MX con la misma prioridad en proveedores distintos sin migrar buzones?"
          hints={["Entrega de correo", "Proveedores distintos", "Sin sincronización"]}
          expectedKeywords={["reparto", "pérdida", "duplicado", "proveedores"]}
          successMessage="Correcto. El correo se reparte aleatoriamente entre proveedores; mensajes pueden perderse o quedar en buzones no sincronizados."
        />
      </div>
    </section>
  );
}
