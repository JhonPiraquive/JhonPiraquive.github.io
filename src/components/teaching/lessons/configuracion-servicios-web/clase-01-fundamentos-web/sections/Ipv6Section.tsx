import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function Ipv6Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"IPv6: direcciones de 128 bits"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"IPv6: 128 bits en 8 grupos hexadecimales de 16 bits."}</li>
        <li>{"Motivación: agotamiento del espacio IPv4 (~4.300 millones de direcciones)."}</li>
        <li>{"Dual stack: IPv4 e IPv6 en paralelo en redes modernas."}</li>
        <li>{"Registro AAAA: equivalente IPv6 del registro A."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "IPv6 (Internet Protocol version 6) es la evolución de IPv4 que usa direcciones de 128 bits, escritas en notación hexadecimal con ocho grupos de 16 bits separados por dos puntos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "IPv4 tiene ~4.300 millones de direcciones; con el crecimiento de móviles, IoT y cloud se agotó el espacio. IPv6 ofrece un espacio de direcciones prácticamente ilimitado y simplifica el enrutamiento en redes modernas. Los servicios web deben soportar registros AAAA además de A."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "Misma lógica de enrutamiento que IPv4, pero con cabeceras optimizadas y direcciones más largas. Los clientes intentan IPv6 si hay registro AAAA; muchos proveedores ofrecen dual stack (IPv4 + IPv6 en paralelo)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <p className="my-4">
        {"Formato: XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX (8 grupos × 16 bits = 128 bits)."}
      </p>
      <p className="my-4 font-mono text-sm">
        {"Ejemplo completo: 2001:0db8:85a3:0000:0000:8a2e:0370:7334"}
      </p>
      <p className="my-4 font-semibold">{"Abreviaciones:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Ceros a la izquierda en un grupo se omiten: 0db8 → db8"}</li>
        <li>{"Secuencia de grupos 0000 consecutivos → :: (una sola vez por dirección)"}</li>
      </ul>
      <p className="my-4 font-mono text-sm">
        {"Ejemplo abreviado: 2001:db8:85a3::8a2e:370:7334"}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Tipo"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Prefijo típico"}</th>
            <th className="py-2 text-left font-semibold">{"Uso"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Global unicast"}</td>
            <td className="py-2 pr-4 font-mono">{"2000::/3"}</td>
            <td className="py-2">{"Internet público (equivalente a IP pública IPv4)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Link-local"}</td>
            <td className="py-2 pr-4 font-mono">{"fe80::/10"}</td>
            <td className="py-2">{"Comunicación en el mismo enlace"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Unique local"}</td>
            <td className="py-2 pr-4 font-mono">{"fc00::/7"}</td>
            <td className="py-2">{"Similar a privadas RFC 1918"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <CompareTable
        headers={["Aspecto", "IPv4", "IPv6"]}
        rows={[
          ["Bits", "32 bits (4 octetos)", "128 bits (8 grupos hex)"],
          ["Notación", "Decimal con puntos (192.168.1.1)", "Hexadecimal con dos puntos"],
          ["Espacio de direcciones", "Agotado (~4.300 millones)", "Prácticamente ilimitado"],
          ["Convivencia", "Estándar histórico", "Dual stack con IPv4 en producción"],
          ["Registro DNS", "A", "AAAA"],
          ["Adopción LATAM", "Documentación y herramientas predominantes", "Creciente pero desigual por ISP"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">{"Registro DNS AAAA para el mismo host:"}</p>
      <CodeFiddle
        language="dns"
        title="Registro AAAA"
        code={`www.ejemplo.co.  300  IN  AAAA  2001:db8:85a3::1`}
      />
      <p className="my-4">{"Consulta de IP pública IPv6 (si disponible):"}</p>
      <CodeFiddle
        language="bash"
        title="Consultar IP pública IPv6"
        code={`curl -6 ifconfig.me`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: publicar A y AAAA en sitios de producción; probar conectividad IPv6 con ping6 o curl -6."}</li>
        <li>
          {
            "Mal uso: ignorar AAAA y perder tráfico IPv6-only; copiar direcciones sin validar abreviatura ::; asumir que IPv6 reemplazó IPv4 de la noche a la mañana."
          }
        </li>
      </ul>
    </section>
  );
}
