import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

const PERMISOS = `# Permisos en Linux — lectura conceptual
# rwx para owner, group, others (octal: 755 = rwxr-xr-x)

ls -la /home/transferencia/archivos

# Cambiar permisos (desde SSH en el servidor)
chmod 750 /home/transferencia/archivos/reportes
chmod 644 /home/transferencia/archivos/informe.pdf

# Cambiar propietario (requiere root/sudo)
sudo chown transferencia:transferencia /home/transferencia/archivos/nuevo.pdf`;

const ORGANIZAR = `# Crear estructura de carpetas remotas (SSH en servidor)
mkdir -p /home/transferencia/archivos/2026/contratos
mkdir -p /home/transferencia/archivos/2026/imagenes

# Mover y renombrar
mv /home/transferencia/archivos/temp.pdf \\
   /home/transferencia/archivos/2026/contratos/contrato-v1.pdf

# Eliminar (con precaución)
rm /home/transferencia/archivos/borrador.txt
rmdir /home/transferencia/archivos/vacio   # solo si carpeta vacía`;

export function AdministracionRemotaArchivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Administración remota de archivos y permisos"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La administración remota de archivos abarca crear carpetas, mover, renombrar y eliminar objetos en el servidor de transferencia, ya sea desde el cliente FTP (FileZilla: clic derecho → crear directorio) o por SSH con mkdir, mv, rm. Los permisos (chmod) y propietario (chown) controlan quién puede leer, escribir o ejecutar cada archivo en el sistema Linux."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un directorio FTP desordenado dificulta auditorías y backups. Permisos incorrectos (777 en todo) exponen datos sensibles; demasiado restrictivos (600 en carpeta compartida) impiden subidas legítimas. Organizar por año/proyecto y aplicar chmod 750 en carpetas y 644 en archivos es práctica habitual en servidores de documentos corporativos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — desde cliente FTP vs SSH"}</h3>
      <StepReveal
        title="Operaciones remotas"
        steps={[
          {
            title: "Crear carpetas",
            content:
              "FileZilla: clic derecho en panel remoto → Crear directorio. SSH: mkdir -p ruta/jerárquica.",
          },
          {
            title: "Organizar archivos",
            content: "Arrastrar entre carpetas en GUI o mv origen destino en terminal.",
          },
          {
            title: "Eliminar",
            content: "FileZilla: Eliminar. SSH: rm archivo; rmdir carpeta vacía. Confirmar antes en producción.",
          },
          {
            title: "Permisos (chmod)",
            content: "Tres triadas rwx. 755 directorio ejecutable; 644 archivo legible por grupo/otros según política.",
          },
          {
            title: "Propietario (chown)",
            content: "sudo chown usuario:grupo archivo. El usuario FTP debe ser dueño de lo que sube en chroot.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Organizar directorios remotos" code={ORGANIZAR} />
      <CodeFiddle language="bash" title="chmod y chown — conceptos" code={PERMISOS} />

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Permiso octal"}</th>
            <th className="border p-2 text-left">{"Significado"}</th>
            <th className="border p-2 text-left">{"Uso típico FTP"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"755"}</td>
            <td className="border p-2">{"rwxr-xr-x"}</td>
            <td className="border p-2">{"Directorios navegables por usuario FTP"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"644"}</td>
            <td className="border p-2">{"rw-r--r--"}</td>
            <td className="border p-2">{"PDFs e imágenes de solo lectura pública interna"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"750"}</td>
            <td className="border p-2">{"rwxr-x---"}</td>
            <td className="border p-2">{"Carpetas restringidas al grupo del usuario"}</td>
          </tr>
        </tbody>
      </table>

      <Callout title="Limitaciones desde cliente FTP">
        {
          "FileZilla puede cambiar permisos numéricos en propiedades del archivo remoto si el servidor lo permite (SITE CHMOD). chown casi siempre requiere SSH con sudo. Documenta qué herramienta usaste para cada cambio."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "El equipo de soporte crea /archivos/2026/tickets/, mueve capturas PNG allí desde la raíz FTP y aplica chmod 750 a la carpeta vía SSH. Documenta ls -la antes/después y captura FileZilla con la nueva jerarquía visible."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" jerarquía por proyecto/año; permisos mínimos; backup antes de rm masivo."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" chmod 777 recursivo; eliminar sin confirmar; mezclar archivos de clientes en una sola carpeta sin ACL."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Editar wp-config.php en prod con nano SSH:"}</strong>
          {" Typo tumba WordPress en vivo. Corrección: editar local, diff, deploy SFTP, backup previo."}
        </li>
        <li>
          <strong>{"Dos admins editando mismo archivo:"}</strong>
          {" Cambios sobrescritos sin control de versiones. Corrección: Git + deploy, o lock comunicado en equipo."}
        </li>
      </ul>

    </section>
  );
}
