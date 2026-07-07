import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function DominiosIpSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1.2 · 1.2.1"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Direcciones IP: pública, privada, fija y dinámica"}
      </h2>
      <p className="my-4">
        {
          "Una dirección IP identifica un dispositivo en una red. En Internet conviven direcciones públicas (enrutables globalmente) y privadas (solo dentro de una LAN, rangos RFC 1918: 10.x, 172.16–31.x, 192.168.x)."
        }
      </p>
      <CompareTable
        headers={["Tipo", "Alcance", "Ejemplo", "Uso típico"]}
        rows={[
          ["IP pública", "Visible en Internet", "190.25.80.42", "Servidor web, router WAN"],
          ["IP privada", "Solo LAN", "192.168.1.105", "Laptop, impresora, NAS"],
          ["IP fija", "No cambia (manual/DHCP reservado)", "192.168.1.10", "Servidor local, cámara IP"],
          ["IP dinámica", "Asignada por DHCP", "192.168.1.47", "Portátiles, móviles"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.2.2 ¿Cómo conocer la dirección IP actual?"}</h3>
      <h4 className="mt-4 mb-2 font-semibold">{"Windows"}</h4>
      <CodeFiddle
        language="bash"
        title="Consultar IP en Windows"
        code={`ipconfig
ipconfig /all
# IP pública (desde el navegador o terminal):
curl ifconfig.me`}
      />
      <h4 className="mt-4 mb-2 font-semibold">{"Linux"}</h4>
      <CodeFiddle
        language="bash"
        title="Consultar IP en Linux"
        code={`ip addr show
hostname -I
curl -4 ifconfig.me`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.2.3 ¿Cómo cambiar la dirección IP?"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"En LAN: panel del router → DHCP → reserva por MAC, o IP estática en el SO."}</li>
        <li>{"En Windows: Configuración → Red → Propiedades del adaptador → IPv4 manual."}</li>
        <li>{"En Linux: NetworkManager (`nmcli`) o editar `/etc/netplan/*.yaml`."}</li>
        <li>{"IP pública del proveedor: suele ser dinámica salvo contrato de IP fija empresarial."}</li>
      </ul>
    </section>
  );
}
