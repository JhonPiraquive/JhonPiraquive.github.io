import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {"Cada bloque completa un fragmento de código de los temas de la clase. Los huecos se rellenan con la palabra o el tipo que falta."}
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Encapsulamiento"}</h3>
      <CodeChallenge
        title="Completar la validación del constructor"
        template={`public Promocion(string nombre, DateTime inicio, DateTime fin)
{
    if (string.IsNullOrWhiteSpace(nombre))
        throw new ArgumentException("Nombre requerido");
    {{blank1}}
        throw new ArgumentException(
            $"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})");
    Nombre = nombre;
    Inicio = inicio;
    Fin = fin;
}`}
        blanks={[
          { id: "blank1", answer: "if (fin <= inicio)", placeholder: "condición de invariante" },
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Fundamentos"}</h3>
      <CodeChallenge
        title="Completar — instanciar y tipar"
        template={`var cafe = {{blank1}} Producto("Café de Nariño", 12000m);
public {{blank2}} Precio { get; }`}
        blanks={[
          { id: "blank1", answer: "new", placeholder: "keyword de creación" },
          { id: "blank2", answer: "decimal", placeholder: "tipo del precio" },
        ]}
      />
    </section>
  );
}
