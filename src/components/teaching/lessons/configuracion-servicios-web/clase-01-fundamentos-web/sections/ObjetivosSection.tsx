import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase conecta la capa de usuario (el navegador) con la capa de red (IP, dominio, DNS) y termina con la publicación de un sitio. Sin estos fundamentos, configurar HTTPS o correo en la clase siguiente se vuelve adivinanza."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Comparar navegadores web y sus motores de renderizado, configurar cookies, caché y privacidad, y usar DevTools para diagnosticar problemas."}</li>
        <li>{"Explicar qué es una dirección IP, su composición en IPv4 e IPv6, y distinguir IP pública, privada, fija y dinámica."}</li>
        <li>{"Consultar la IP local y pública con comandos en Windows y Linux."}</li>
        <li>{"Describir la estructura de un dominio (subdominio, SLD, TLD) y registrar un dominio en LATAM."}</li>
        <li>{"Explicar el flujo DNS paso a paso y configurar registros A, AAAA, CNAME, MX, TXT, NS y SOA."}</li>
        <li>{"Comparar hosting compartido, VPS, dedicado y nube, y describir cómo un servidor publica un sitio web 24/7."}</li>
      </ul>
      <Callout title="Del nombre al paquete">
        {"El usuario escribe un dominio legible y la red enruta por IP. El DNS es el puente y el navegador es la ventana de diagnóstico más accesible."}
      </Callout>
    </section>
  );
}
