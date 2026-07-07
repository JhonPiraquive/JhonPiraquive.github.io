import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>

      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo elegirías HDD en lugar de SSD para un servidor de archivos de una notaría en Cartagena? Menciona costo, capacidad y patrón de acceso."
          hints={["Terabytes de PDF", "Acceso secuencial", "Presupuesto limitado"]}
          expectedKeywords={["HDD", "capacidad", "costo", "archivo", "TB"]}
          successMessage="Correcto. HDD sigue siendo económico para gran capacidad y acceso no crítico en latencia; SSD reserva para SO y apps activas."
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="Un portátil con SSD NVMe tarda 8 minutos en arrancar Windows. ¿El disco es necesariamente el cuello de botella? Nombra otras dos causas."
          hints={["Arranque lento ≠ disco lento", "Actualizaciones", "Antivirus"]}
          expectedKeywords={["no", "malware", "actualización", "servicios", "BIOS"]}
          successMessage="Correcto. SSD NVMe debería arrancar en segundos; revisa malware, actualizaciones pendientes, disco casi lleno o servicios de arranque excesivos."
        />
      </div>

      <div className="my-8">
        <CodeChallenge
          title="Resolución Full HD"
          template="Full HD equivale a {{blank1}} × {{blank2}} píxeles."
          blanks={[
            { id: "blank1", answer: "1920", placeholder: "horizontal" },
            { id: "blank2", answer: "1080", placeholder: "vertical" },
          ]}
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué periférico recomendarías para videollamadas en open space ruidoso: micrófono omnidireccional de mesa o diadema USB? Justifica."
          hints={["Patrón de captura", "Eco y ruido ambiente"]}
          expectedKeywords={["diadema", "cardioide", "ruido", "omnidireccional"]}
          successMessage="Correcto. Diadema con mic cardioide o cancelación de ruido aísla la voz del ambiente; omnidireccional captura todo el ruido de la sala."
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="Diferencia freeware y software libre. ¿Puedes modificar y redistribuir el código de un programa freeware típico?"
          hints={["Código fuente", "EULA", "GPL vs gratis"]}
          expectedKeywords={["libre", "código", "freeware", "no", "EULA"]}
          successMessage="Correcto. Software libre permite usar y modificar código según su licencia; freeware es gratis para usar pero suele ser cerrado y sin derecho a modificar/redistribuir."
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="Lista tres campos obligatorios en la hoja de vida de un PC de inventario institucional."
          hints={["Identificación", "Hardware", "Software o responsable"]}
          expectedKeywords={["serial", "hardware", "software", "activo", "responsable"]}
          successMessage="Correcto. Mínimo: identificador de activo/serial, especificación hardware, software/licencias y responsable o ubicación."
        />
      </div>
    </section>
  );
}
