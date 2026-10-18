import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {"Cada bloque completa un fragmento de código de los temas de la clase. Los huecos se rellenan con la palabra o el tipo que falta."}
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Asociación, agregación y composición"}</h3>
      <CodeChallenge
        title="Completar la asociación"
        template={`public void Recomendar({{b1}} cliente, Producto producto)
{
    Console.WriteLine($"{Nombre} sugiere a {cliente.Nombre}: {producto.Sku}");
}`}
        blanks={[{ id: "b1", answer: "Cliente", placeholder: "Tipo del parámetro cliente" }]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Herencia"}</h3>
      <CodeChallenge
        title="Completar la vitrina"
        template={`var vitrina = new List<Producto> { new Libro("A", 10m, "978-x"), new {{b1}}(), new {{b2}}() };
foreach (var item in vitrina) Console.WriteLine(item.{{b3}}());`}
        blanks={[
          { id: "b1", answer: "Gadget", placeholder: "Otra derivada de Producto" },
          { id: "b2", answer: "Producto", placeholder: "Instancia de la base" },
          { id: "b3", answer: "DescripcionEtiqueta", placeholder: "Método virtual en Producto" },
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Override y sobrecarga"}</h3>
      <CodeChallenge
        title="Completar el override"
        template={`public class Artesania : Producto
{
    public {{b1}} string DescripcionEtiqueta()
        => $"Artesanía de {Artesano} — {Sku}";
}`}
        blanks={[
          {
            id: "b1",
            answer: "override",
            placeholder: "Palabra clave para redefinir un virtual",
          },
        ]}
      />
    </section>
  );
}
