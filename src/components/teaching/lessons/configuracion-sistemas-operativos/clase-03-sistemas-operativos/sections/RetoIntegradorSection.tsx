import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: puesta en marcha de estación de soporte"}
      </h2>
      <p className="my-4 font-semibold">{"Contexto: consultora TI en Lima con 8 PCs y 1 servidor Ubuntu"}</p>
      <p className="my-4">
        {
          "Se requiere documentar la instalación de Ubuntu Server en el host de archivos, crear usuarios por área (ventas, soporte), configurar permisos en /srv/compartido y proponer respaldo en 4 niveles."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Requisitos mínimos de RAM y disco para el servidor."}</li>
        <li>{"Particiones GPT recomendadas (/boot/efi, /, /srv)."}</li>
        <li>{"Comandos useradd, passwd y usermod para el usuario soporte dentro del grupo sudo."}</li>
        <li>{"Permisos chmod de la carpeta compartida: lectura para todos, escritura solo para el grupo soporte."}</li>
        <li>{"Niveles 1 a 4 de respaldo, con medios concretos."}</li>
      </ol>
      <div className="my-8">
        <PracticeExercise
          prompt="Reto integrador: completar el plan de servidor Ubuntu (particiones, usuarios, chmod /srv/compartido y estrategia 3-2-1)."
          hints={[
            "8 GB RAM, 100 GB+ disco",
            "EFI 512 MB, / 40 GB, /srv resto",
            "useradd -m, usermod -aG",
            "chmod 775 o 2775 con grupo soporte",
            "USB + NAS + S3 + réplica otra ciudad",
          ]}
          expectedKeywords={["GPT", "useradd", "chmod", "NAS", "nube", "sudo", "/srv"]}
          successMessage="Excelente plan: particiones documentadas, usuarios con mínimo privilegio, permisos de grupo y respaldo multicapa."
          rows={8}
        />
      </div>
    </section>
  );
}
