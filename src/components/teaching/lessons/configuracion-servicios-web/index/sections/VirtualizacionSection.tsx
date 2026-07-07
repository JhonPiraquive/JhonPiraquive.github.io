import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function VirtualizacionSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"3.2"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Virtualización de sistemas operativos (máquina virtual)"}
      </h2>
      <p className="my-4">
        {
          "Una máquina virtual (VM) emula hardware completo y ejecuta un sistema operativo invitado sobre un hipervisor. Permite probar Linux en Windows, Windows en Mac, o aislar entornos de laboratorio."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Hipervisores habituales"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"VirtualBox: gratuito, multiplataforma, ideal para aprendizaje."}</li>
        <li>{"VMware Workstation / Fusion: rendimiento y snapshots avanzados."}</li>
        <li>{"Hyper-V: integrado en Windows Pro/Enterprise."}</li>
        <li>{"KVM: en Linux, base de muchos clouds."}</li>
      </ul>
      <StepReveal
        title="Crear una VM de laboratorio"
        steps={[
          {
            title: "Descargar ISO",
            content: "Ubuntu Server o Debian para practicar SSH y hosting.",
          },
          {
            title: "Crear VM",
            content: "Asignar RAM (2 GB mínimo), disco virtual (20 GB+) y red NAT o bridge.",
          },
          {
            title: "Instalar SO invitado",
            content: "Seguir el asistente del ISO; crear usuario con sudo.",
          },
          {
            title: "Snapshots",
            content: "Guardar estado limpio antes de experimentos; restaurar si algo falla.",
          },
          {
            title: "Probar servicios",
            content: "Instalar Nginx, configurar firewall, acceder desde el host por IP de la VM.",
          },
        ]}
      />
      <PracticeExercise
        prompt="¿Cuándo elegirías una VM en lugar de un contenedor Docker? Da al menos dos escenarios."
        hints={["SO distinto al host", "Kernel distinto", "GUI completa"]}
        expectedKeywords={["sistema operativo", "kernel", "windows", "linux"]}
        successMessage="Correcto. VM cuando necesitas SO o kernel distinto; contenedor cuando basta compartir kernel y empaquetar la app."
      />
    </section>
  );
}
