import { Callout } from "@/components/teaching/Callout";

export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Prerrequisitos"}</h2>
      <p className="my-4">
        {
          "Antes de la Clase 1 conviene haber completado (o estar cursando en paralelo) estos temas del track Programación Orientada a Sitios Web (POSW):"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Servicios web — qué es un servicio en red y roles cliente/servidor."}</li>
        <li>{"Protocolos de seguridad — TLS, puertos, firewalls básicos."}</li>
        <li>{"Modelo cliente-servidor — HTTP, DNS como servicio de nombres."}</li>
      </ul>
      <Callout title="Material de apoyo">
        {
          "Si no dominas HTTP o el modelo cliente-servidor, repasa esas lecciones POSW antes de configurar hosting o certificados TLS."
        }
      </Callout>
    </section>
  );
}
