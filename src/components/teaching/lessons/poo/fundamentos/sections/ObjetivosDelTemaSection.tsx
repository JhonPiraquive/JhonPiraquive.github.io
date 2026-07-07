export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce los pilares de la POO en C#: qué es el paradigma, qué es un objeto, cómo se define una clase, cómo se crean instancias y qué papel cumple el constructor. Al finalizar, el estudiante podrá:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir la Programación Orientada a Objetos (POO) y explicar sus beneficios frente a funciones sueltas cuando hay reglas de negocio y entidades con estado."
          }
        </li>
        <li>
          {
            "Distinguir objeto, clase, instancia y constructor, usando la analogía molde → objeto concreto."
          }
        </li>
        <li>
          {
            "Identificar estado (propiedades) y comportamiento (métodos) en un ejemplo C# y reconocer el anti-patrón del objeto anémico."
          }
        </li>
        <li>
          {
            "Implementar clases básicas en C# con new, constructor que valida entradas y propiedades con { get; private set; } para proteger invariantes."
          }
        </li>
        <li>
          {
            "Aplicar convenciones C# (PascalCase, dotnet console) para crear instancias independientes y manejar excepciones con mensajes claros."
          }
        </li>
      </ul>
    </section>
  );
}
