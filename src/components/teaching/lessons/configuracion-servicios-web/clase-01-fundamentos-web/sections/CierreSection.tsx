import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El navegador es cliente y herramienta de diagnóstico: DevTools aísla fallos de servidor, red, caché y extensiones."}</li>
        <li>{"IPv4 (32 bits, 4 octetos) e IPv6 (128 bits, hexadecimal) conviven en dual stack; los registros A y AAAA los publican en DNS."}</li>
        <li>{"Una IP privada (RFC 1918) no es una IP pública: el registro A de producción necesita una IP enrutable desde Internet."}</li>
        <li>{"El dominio da identidad y los subdominios separan servicios sin comprar dominios nuevos."}</li>
        <li>{"El DNS delega de forma jerárquica (raíz, TLD, NS autoritativo) y la propagación no es instantánea."}</li>
        <li>{"Un hosting publica el sitio 24/7 y une el DNS con los archivos del servidor y los puertos 80 y 443; se elige según tráfico, presupuesto y habilidades."}</li>
      </ol>
      <p className="my-4">{"La clase 2 protege lo publicado con HTTPS, configura el correo corporativo y llega a la nube y a la transferencia de archivos."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/configuracion-servicios-web/clase-02-https-correo-nube" className="clay-button">
          {"Continuar a la clase 2: HTTPS, correo y nube"}
        </Link>
      </p>
    </section>
  );
}
