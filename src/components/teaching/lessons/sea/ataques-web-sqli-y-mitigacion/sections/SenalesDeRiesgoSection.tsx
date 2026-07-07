export function SenalesDeRiesgoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Señales de riesgo"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Concatenación de strings para armar consultas."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Errores de base de datos visibles al usuario."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Filtros “mágicos” basados solo en bloquear palabras."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Campos de búsqueda que aceptan cualquier cosa sin límites."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Endpoints que devuelven demasiada información por un solo parámetro."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Falta de logs/alertas ante patrones anómalos."}</li>
      </ul>
    </section>
  );
}
