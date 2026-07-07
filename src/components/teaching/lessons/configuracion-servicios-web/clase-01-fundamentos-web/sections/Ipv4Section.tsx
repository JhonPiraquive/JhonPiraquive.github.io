import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function Ipv4Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Dirección IP: composición IPv4"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Dirección IP: identificador numérico de cada interfaz de red; la «dirección postal» del equipo."}</li>
        <li>{"IPv4: 32 bits = 4 octetos de 8 bits; notación decimal (192.168.1.1)."}</li>
        <li>{"Pública vs privada: enrutable en Internet vs RFC 1918 (LAN)."}</li>
        <li>{"Fija vs dinámica: reserva DHCP o manual vs asignación que puede cambiar."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una dirección IP (Internet Protocol) es un identificador numérico asignado a cada interfaz de red conectada a una red IP. Permite que routers y hosts enruten paquetes hasta el destino correcto — la «dirección postal» de un equipo en Internet o en una red local."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Toda comunicación cliente-servidor en Internet necesita una IP de destino. El DNS traduce nombres legibles (ejemplo.com) a IP; sin IP no hay conexión TCP. Distinguir IP pública vs privada evita errores al exponer servicios o al diagnosticar conectividad."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El emisor encapsula datos en paquetes con IP origen y destino."}</li>
        <li>{"Routers consultan tablas de enrutamiento y reenvían hop a hop."}</li>
        <li>
          {
            "En redes locales, DHCP asigna IP dinámica; en servidores de producción suele usarse IP fija o reserva DHCP."
          }
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición (IPv4)"}</h3>
      <p className="my-4">
        {
          "IPv4 usa 32 bits divididos en 4 octetos de 8 bits cada uno, separados por puntos en notación decimal."
        }
      </p>
      <pre className="my-4 overflow-x-auto rounded-[var(--clay-radius)] bg-[var(--color-neutral-light)] p-4 font-mono text-sm">
        {`192 . 168 . 1 . 1
 │     │     │   └── octeto 4 (8 bits): 0–255
 │     │     └────── octeto 3
 │     └──────────── octeto 2
 └────────────────── octeto 1
Total: 4 × 8 = 32 bits`}
      </pre>
      <figure className="my-6">
        <img
          src="/teaching/configuracion-servicios-web/ipv4-composicion.png"
          alt="Composición IPv4: 4 octetos de 8 bits = 32 bits, ejemplo 192.168.1.1"
          className="mx-auto max-w-full rounded-[var(--clay-radius)]"
        />
      </figure>
      <p className="my-4 font-semibold">{"Conversión decimal ↔ binario (ejemplo 192.168.1.1):"}</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Octeto"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Decimal"}</th>
            <th className="py-2 text-left font-semibold">{"Binario (8 bits)"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"1"}</td>
            <td className="py-2 pr-4">{"192"}</td>
            <td className="py-2 font-mono">{"11000000"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"2"}</td>
            <td className="py-2 pr-4">{"168"}</td>
            <td className="py-2 font-mono">{"10101000"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"3"}</td>
            <td className="py-2 pr-4">{"1"}</td>
            <td className="py-2 font-mono">{"00000001"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"4"}</td>
            <td className="py-2 pr-4">{"1"}</td>
            <td className="py-2 font-mono">{"00000001"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4 font-mono text-sm">
        {"IP completa en binario: 11000000.10101000.00000001.00000001"}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Tipo"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Rango / origen"}</th>
            <th className="py-2 text-left font-semibold">{"Uso"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Pública"}</td>
            <td className="py-2 pr-4">{"Enrutable en Internet; asignada por ISP"}</td>
            <td className="py-2">{"Servidor web, API expuesta, router hacia WAN"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Privada (RFC 1918)"}</td>
            <td className="py-2 pr-4">{"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16"}</td>
            <td className="py-2">{"LAN, Wi‑Fi casa/oficina; no enrutable en Internet"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Fija (estática)"}</td>
            <td className="py-2 pr-4">{"Reserva DHCP o configuración manual"}</td>
            <td className="py-2">{"Servidores, cámaras IP, impresoras de red"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"Dinámica"}</td>
            <td className="py-2 pr-4">{"Asignada por DHCP del router/ISP"}</td>
            <td className="py-2">{"PCs, móviles; puede cambiar al reconectar"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Tipo"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Ventaja"}</th>
            <th className="py-2 text-left font-semibold">{"Desventaja"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Pública fija"}</td>
            <td className="py-2 pr-4">{"Siempre alcanzable en la misma IP; ideal para DNS A directo"}</td>
            <td className="py-2">{"Costo ISP; superficie de ataque si no hay firewall"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Privada"}</td>
            <td className="py-2 pr-4">{"Seguridad por NAT; sin costo de IP pública por dispositivo"}</td>
            <td className="py-2">{"No accesible desde Internet sin port forwarding o túnel"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Dinámica"}</td>
            <td className="py-2 pr-4">{"Simple para usuarios finales"}</td>
            <td className="py-2">{"Cambia la IP; rompe DNS si no hay DDNS o IP fija"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto — consultar IP"}</h3>
      <CodeFiddle
        language="powershell"
        title="Consultar IP en Windows"
        code={`ipconfig
ipconfig /all`}
      />
      <CodeFiddle
        language="bash"
        title="Consultar IP local y pública en Linux"
        code={`ip addr show
hostname -I
curl -4 ifconfig.me    # IP pública IPv4`}
      />
      <p className="my-4">
        {
          "Un estudiante ejecuta ipconfig en Windows y ve 192.168.1.45 — es IP privada de su PC en la red Wi‑Fi. Luego curl ifconfig.me devuelve 190.25.80.42 — IP pública del router vista desde Internet."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Conversión octeto a binario"}</h3>
      <CodeFiddle
        language="bash"
        title="Conversión octeto 192 a binario"
        code={`# Octeto 192 → binario
printf '%08d\\n' $(echo "obase=2;192" | bc)
# 11000000`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Buen uso: consultar IP pública al configurar registro A; usar IP privada solo detrás de NAT; reservar IP fija en router para servidor casero."
          }
        </li>
        <li>
          {
            "Mal uso: creer que 192.168.x.x es la IP que ve el mundo; exponer servicios sensibles en IP pública sin firewall; confundir IP del router con IP del servidor web detrás de proxy."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"IP privada en registro A público:"}</strong>
          {" Técnico en Cali publicó 192.168.1.10 como A de tienda.com.co; sitio inalcanzable desde Internet. Corrección: IP pública del hosting/VPS, reservar privada solo en LAN."}
        </li>
        <li>
          <strong>{"NAT sin port forwarding:"}</strong>
          {" Cámaras IP en bodega Medellín: app móvil dejó de funcionar tras cambio de router. Corrección: reserva DHCP + port forwarding documentado o IP fija con ISP."}
        </li>
        <li>
          <strong>{"Compartir IP en hosting ultra-barato:"}</strong>
          {" Vecino en misma IP envió spam; dominio de ONG en lista negra compartida. Corrección: IP dedicada o proveedor con reputación verificable."}
        </li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Un compañero dice: «Mi IP es 192.168.0.15, así que ya puedo poner esa IP en el registro A del dominio». ¿Qué le explicas sobre IP privada vs pública?"
        hints={["RFC 1918", "NAT", "IP pública del servidor o balanceador"]}
        expectedKeywords={["privada", "pública", "Internet", "NAT"]}
        successMessage="Correcto. 192.168.x.x es de red local; el registro A público necesita la IP enrutable desde Internet."
      />
    </section>
  );
}
