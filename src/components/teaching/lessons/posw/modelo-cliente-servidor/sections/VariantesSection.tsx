import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function VariantesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Variantes: P2P, híbrido y serverless"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"P2P: cada nodo es cliente y servidor (BitTorrent, blockchain). Sin servidor central de contenido."}
        </li>
        <li>
          {"Híbrido: servidor central coordina; clientes comparten datos (Skype, metadatos en Spotify)."}
        </li>
        <li>
          {
            "Serverless: funciones efímeras en la nube (Lambda, Cloudflare Workers); el proveedor gestiona infraestructura."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo usar cada variante"}</h3>
      <CompareTable
        headers={["Variante", "Ventaja", "Riesgo / límite"]}
        rows={[
          ["P2P", "Sin cuello de botella central", "NAT, descubrimiento; muchos «P2P» usan servidores de coordinación"],
          ["Híbrido", "Balance costo/confiabilidad", "Más piezas que P2P puro"],
          ["Serverless", "Escala automática sin administrar servidores", "Cold starts, vendor lock-in"],
        ]}
      />
      <Callout title="Caso real: videollamadas sin servidor de señalización">
        {
          "Una startup copia P2P puro para videollamadas. Sin signaling estable, las llamadas fallan detrás de NAT corporativo. Decisión: modelo híbrido — servidor central para autenticación y signaling; media P2P o TURN según la red."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Tratar microservicios como obligatorios (añaden complejidad de red y observabilidad)."}</li>
        <li>{"Pensar que P2P no tiene servidores (muchos usan servidores de descubrimiento)."}</li>
        <li>{"Exponer la BD directamente al cliente en 2-Tier mal aplicado."}</li>
      </ul>
    </section>
  );
}
