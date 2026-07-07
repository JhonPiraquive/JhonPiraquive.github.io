import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección explica el paradigma cliente-servidor que sustenta la web moderna: quién solicita, quién responde, qué ocurre al abrir una URL y cómo organizar capas en aplicaciones reales."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir el modelo cliente-servidor y distinguir roles de cliente (solicita) y servidor (provee recursos)."
          }
        </li>
        <li>
          {
            "Describir el flujo completo al abrir una URL: DNS → TCP → TLS → HTTP request/response → renderizado."
          }
        </li>
        <li>
          {
            "Comparar arquitecturas 2 capas, 3 capas y N capas/microservicios en seguridad, escalabilidad y separación de responsabilidades."
          }
        </li>
        <li>
          {
            "Identificar variantes (P2P, híbrido, serverless) y cuándo cada una aplica en aplicaciones reales."
          }
        </li>
        <li>
          {
            "Mapear aplicaciones cotidianas (búsqueda, correo, streaming, juegos) a cliente, servidor y protocolo subyacente."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección react: componentes, estado y consumo de datos en el frontend."}</li>
        <li>{"Familiaridad con URLs y navegación web básica."}</li>
        <li>{"Concepto general de API y JSON (reforzado en lecciones apis y http-metodos-status)."}</li>
      </ul>
      <Callout title="Cliente ≠ solo navegador">
        {
          "El cliente puede ser navegador, app móvil, terminal ATM o un script curl. Lo que comparten es que inician peticiones; no almacenan la lógica de negocio ni exponen la base de datos."
        }
      </Callout>
    </section>
  );
}
