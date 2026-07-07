import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección conecta la capa de usuario (navegador) con la capa de red (IP, dominio, DNS). Sin entender estos fundamentos, configurar hosting, correo o HTTPS en lecciones posteriores se vuelve adivinanza."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Comparar navegadores web y sus motores de renderizado (Blink, Gecko, WebKit); configurar cookies, caché y privacidad; usar DevTools (Red, Consola, Almacenamiento) para diagnosticar problemas."
          }
        </li>
        <li>
          {
            "Explicar qué es una dirección IP, su composición en IPv4 (octetos, bits) e IPv6 (hexadecimal, 128 bits); distinguir IP pública, privada, fija y dinámica."
          }
        </li>
        <li>
          {
            "Consultar la IP local y pública con comandos en Windows (ipconfig) y Linux (ip addr, curl ifconfig.me)."
          }
        </li>
        <li>
          {
            "Describir la estructura de un dominio (subdominio, SLD, TLD), tipos de TLD y ventajas de un dominio propio; registrar un dominio en LATAM (p. ej. .co vía NIC Colombia)."
          }
        </li>
        <li>
          {
            "Explicar el flujo DNS paso a paso (URL → resolver → respuesta A) y configurar registros DNS (A, AAAA, CNAME, MX, TXT, NS, SOA) con nameservers y subdominios."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lección posw/modelo-cliente-servidor:"}</strong>
          {" paradigma cliente-servidor, flujo DNS → TCP → TLS → HTTP al abrir una URL."}
        </li>
        <li>
          <strong>{"Lección posw/servicios-web:"}</strong>
          {" concepto de servicio web, roles de cliente y servidor en la web."}
        </li>
        <li>{"Familiaridad básica con la línea de comandos en Windows o Linux."}</li>
      </ul>
      <Callout title="Del nombre al paquete">
        {
          "El usuario escribe un dominio legible; la red enruta por IP. El DNS es el puente. El navegador es la ventana de diagnóstico más accesible que tienes."
        }
      </Callout>
    </section>
  );
}
