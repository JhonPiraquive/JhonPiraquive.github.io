import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {"Cada bloque completa un fragmento de código de los temas de la clase. Los huecos se rellenan con la palabra o el tipo que falta."}
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Abstracción, clases abstractas e interfaces"}</h3>
      <CodeChallenge
        title="Completar la inyección"
        template="public Caja({{b1}} pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));"
        blanks={[
          { id: "b1", answer: "IPago", placeholder: "Tipo del contrato que recibe el constructor" },
        ]}
      />

      <CodeChallenge
        title="Implementar el repositorio"
        template={`public class RepositorioConsola : {{b1}}\n{\n    public void Guardar(string pedidoId) => Console.WriteLine($"Pedido {pedidoId} registrado");\n}`}
        blanks={[
          { id: "b1", answer: "IRepositorioPedidos", placeholder: "Contrato que declara Guardar" },
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Polimorfismo"}</h3>
      <CodeChallenge
        title="Completar el checkout"
        template="public void Pagar(decimal monto) => {{b1}}.Cobrar(monto);"
        blanks={[
          { id: "b1", answer: "_pasarela", placeholder: "Campo readonly del contrato inyectado" },
        ]}
      />
    </section>
  );
}
