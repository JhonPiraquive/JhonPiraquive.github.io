import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: de la sábana al esquema de matrículas"}
      </h2>
      <p className="my-4">{"Rutas Digitales guarda hoy sus matrículas en una hoja de cálculo con celdas repetidas y listas separadas por comas. El reto lleva esa hoja hasta un esquema SQL limpio:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Una tabla sucia de al menos cinco columnas con una anomalía de cada tipo."}</li>
        <li>{"Al menos cuatro dependencias funcionales A → B."}</li>
        <li>{"El paso de 1FN a 2FN y a 3FN, con evidencia de qué se extrajo en cada paso."}</li>
        <li>{"Un atributo que se congela en la factura y el riesgo que se acepta."}</li>
        <li>{"El DDL con los padres primero: tipos, PK, UNIQUE y FK."}</li>
        <li>{"Dos o tres INSERT válidos y uno inválido (violación de FK) documentado."}</li>
      </ol>
      <ChallengeCard
        title="De tabla sucia a esquema de matrículas"
        difficulty="integrador"
        prompt="Normalizar un dominio de matrículas hasta 3FN, justificar un snapshot y escribir el DDL con padres primero, incluyendo pruebas de llave foránea."
        acceptanceCriteria={[
          "Anomalías y dependencias funcionales explícitas",
          "Pasos de 1FN a 3FN con evidencia",
          "Desnormalización consciente documentada",
          "DDL con padres antes que hijas, con PK y FK",
          "Un INSERT inválido documentado",
        ]}
        hints={["El teléfono de sede pertenece a Sedes", "El snapshot vive solo en la factura", "La tabla Inscripciones es el puente N:M"]}
      />
    </section>
  );
}
