export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has conectado la experiencia del usuario (navegador) con la infraestructura invisible (IP, dominio, DNS) que hace posible cada clic."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "El navegador es cliente y herramienta de diagnóstico: DevTools aísla fallos de servidor, red, caché y extensiones."
          }
        </li>
        <li>
          {
            "IPv4 (32 bits, 4 octetos) e IPv6 (128 bits, hex) conviven en dual stack; el registro A y AAAA los publican en DNS."
          }
        </li>
        <li>{"IP privada (RFC 1918) ≠ IP pública; el registro A de producción necesita la IP enrutable desde Internet."}</li>
        <li>{"El dominio da identidad; los subdominios separan servicios sin comprar dominios nuevos."}</li>
        <li>
          {
            "El DNS delega jerárquicamente: raíz → TLD → NS autoritativo → respuesta A/AAAA; la propagación no es instantánea."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección clase-02-hosting-correo-https — hosting, correo corporativo y certificados HTTPS."}
      </p>
    </section>
  );
}
