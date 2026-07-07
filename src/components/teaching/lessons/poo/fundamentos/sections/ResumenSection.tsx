export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "La POO organiza el software en objetos con estado y comportamiento, útil cuando hay reglas de negocio e invariantes."
          }
        </li>
        <li>
          {
            "Un objeto encapsula reglas; evita objetos anémicos y setters públicos que rompen el control del dominio."
          }
        </li>
        <li>
          {
            "Una clase es el molde; una instancia es el objeto concreto creado con new; cada instancia tiene su propio estado."
          }
        </li>
        <li>
          {
            "El constructor se ejecuta al instanciar y debe dejar el objeto en estado válido, validando entradas esenciales."
          }
        </li>
        <li>
          {
            "Convenciones C#: PascalCase, { get; private set; }, excepciones con mensajes claros, dotnet run para probar."
          }
        </li>
        <li>{"Siguiente lección: encapsulamiento — protección de estado y visibilidad de miembros."}</li>
      </ul>
    </section>
  );
}
