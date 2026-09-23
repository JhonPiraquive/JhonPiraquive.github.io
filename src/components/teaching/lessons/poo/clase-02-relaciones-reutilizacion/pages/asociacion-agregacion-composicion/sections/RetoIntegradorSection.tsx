import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: mostrador, carrito y pedido"}
      </h2>
      <p className="my-4">
        {"Consola .NET con las tres relaciones en un solo dominio: Tienda Andes."}
      </p>
      <p className="my-4 font-semibold">{"Parte A — Asociación"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente, AsesorVentas, SesionMostrador (asesor, cliente, DateTime)."}</li>
        <li>{"AsesorVentas.Atender(SesionMostrador) imprime materia/fecha o mensaje de atención."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Agregación"}</p>
      <ol className="my-4 list-decimal pl-6" start={3}>
        <li>{"CarritoCompras con Agregar, Quitar por SKU, Listar; productos creados en Main."}</li>
        <li>{"Tras Quitar, demuestra que la variable local al Producto sigue imprimiendo SKU."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Composición"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"Pedido solo crea LineaPedido vía AgregarLinea; lista privada."}</li>
        <li>{"QuitarSku, Total() y dos líneas en Main con total correcto."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Justificación"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>
          {
            "Párrafo: por qué Cliente no hereda de Pedido y por qué LineaPedido no se pasa ya construida desde Main."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: compila; tres relaciones claras en código y texto; ningún «tiene un» usa herencia."
        }
      </p>
      <PracticeExercise
        prompt="Redacta la Parte D en tres frases."
        hints={[
          "Cliente y Pedido son roles distintos — asociación",
          "LineaPedido pertenece al pedido confirmado",
          "Pedido controla creación y reglas",
        ]}
        expectedKeywords={["herencia", "composición", "asociación", "ciclo"]}
        successMessage="Excelente. Modelo coherente con Tienda Andes."
        rows={6}
      />
    </section>
  );
}
