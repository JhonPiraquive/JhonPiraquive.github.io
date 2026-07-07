import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

const SNAPSHOT_VBOX = `# Crear snapshot desde CLI (opcional en laboratorio)
VBoxManage snapshot "Ubuntu-Lab" take "pre-nginx-$(date +%Y%m%d)" --description "Antes de instalar Nginx"`;

export function VirtualizacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Virtualización y laboratorio seguro"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La virtualización de SO permite ejecutar varias máquinas lógicas sobre un host físico. En Programación Orientada a Sitios Web (POSW) se usa para laboratorio seguro: experimentar con SSH, Nginx y firewall sin comprometer el equipo principal."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <p className="my-4">
        {
          "Antes de ejecutar `certbot` o abrir puertos en un VPS pagado, conviene practicar en un entorno aislado. Los snapshots guardan el estado del disco en un punto conocido; si una práctica de `ufw` bloquea el SSH, restauras el snapshot en lugar de reinstalar el SO."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Hipervisores habituales"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Hipervisor"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Plataforma"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Uso típico en POSW"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"VirtualBox"}</td>
              <td className="px-4 py-3">{"Win/macOS/Linux"}</td>
              <td className="px-4 py-3">{"Laboratorio gratuito, snapshots"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-neutral-light)]/50">
              <td className="px-4 py-3 font-medium">{"Hyper-V"}</td>
              <td className="px-4 py-3">{"Windows Pro/Enterprise"}</td>
              <td className="px-4 py-3">{"VMs en equipos institucionales"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"KVM"}</td>
              <td className="px-4 py-3">{"Linux"}</td>
              <td className="px-4 py-3">{"Base de muchos clouds"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">{"VMware Workstation/Fusion"}</td>
              <td className="px-4 py-3">{"Multi"}</td>
              <td className="px-4 py-3">{"Rendimiento y snapshots avanzados"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Crear VM de laboratorio"}</h3>
      <StepReveal
        title="Crear VM de laboratorio"
        steps={[
          {
            title: "1. Descargar ISO",
            content:
              "Obtén Ubuntu Server 22.04 LTS desde el sitio oficial. Verifica el checksum si el laboratorio lo exige.",
          },
          {
            title: "2. Configurar recursos",
            content:
              "Asigna RAM (mínimo 2 GB), disco (20 GB) y adaptador de red NAT o bridge según necesites acceso externo.",
          },
          {
            title: "3. Instalar SO invitado",
            content:
              "Completa la instalación, crea usuario con sudo y habilita OpenSSH Server durante el setup o con `apt install openssh-server`.",
          },
          {
            title: "4. Snapshot antes de experimentar",
            content: 'Toma un snapshot con nombre descriptivo, por ejemplo `pre-nginx-20250623`, no «Snapshot 1».',
          },
          {
            title: "5. Probar Nginx y SSH",
            content:
              "Instala Nginx, configura un virtual host de prueba y conéctate por SSH desde el host. Si algo falla, restaura el snapshot.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Snapshot desde CLI"}</h3>
      <CodeFiddle language="bash" title="Snapshot VirtualBox (CLI)" code={SNAPSHOT_VBOX} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" snapshots con fecha y propósito (`pre-ufw-20250623`), red bridge/NAT documentada, guest additions instaladas si aplica."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" snapshots sin nomenclatura, VM sin red por adaptador mal configurado, usar la VM de producción para experimentos destructivos."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Snapshot como único backup:"}</strong>
          {" Snapshot corrupto tras apagón; VM no arranca. Corrección: backup externo exportado y restore probado."}
        </li>
        <li>
          <strong>{"Bridge mal configurado en laptop:"}</strong>
          {" VM sin Internet en clase; 2 h perdidas. Corrección: NAT para labs, bridge solo cuando se necesite IP LAN."}
        </li>
      </ul>

      <Callout title="Síntoma: VM sin red">
        {
          "Si `ping` al gateway falla desde el invitado, revisa el modo del adaptador (NAT vs bridge) en VirtualBox o Hyper-V antes de reinstalar el SO."
        }
      </Callout>
    </section>
  );
}
