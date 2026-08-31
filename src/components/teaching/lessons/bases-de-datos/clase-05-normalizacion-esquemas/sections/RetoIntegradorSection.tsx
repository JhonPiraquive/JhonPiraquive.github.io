import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: De la sábana al esquema limpio"}
      </h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Tabla sucia (≥5 columnas) + una anomalía de cada tipo."}</li>
        <li>{"≥4 DFs A → B."}</li>
        <li>{"Procedimiento 1FN→2FN→3FN con evidencia de qué se extrajo."}</li>
        <li>{"3–5 líneas sobre cuándo sospechar BCNF."}</li>
        <li>{"Un atributo a congelar en factura + riesgo aceptado."}</li>
        <li>{"Estrella mínima + variante copo; aclarar que no es el OLTP."}</li>
        <li>{"Argumentación para coordinador no técnico."}</li>
      </ol>
      <ChallengeCard
        title="De tabla sucia a 3FN + BI"
        difficulty="integrador"
        prompt="Normaliza un dominio de matrículas/facturas, justifica un snapshot y dibuja estrella vs copo sin confundirlos con el OLTP."
        acceptanceCriteria={[
          "Anomalías y DFs explícitas",
          "Pasos 1FN→3FN con evidencia",
          "Desnormalización consciente documentada",
          "Estrella/copo distintos del OLTP",
        ]}
        hints={["Teléfono de sede → Sedes", "Snapshot solo en factura"]}
      />
    </section>
  );
}
