import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: facturación con checkout e impuestos"}
      </h2>
      <p className="my-4">
        {
          "Sistema consola .NET que una pagos polimórficos y cálculo fiscal en un flujo coherente."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Pasarelas (interfaz)"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"IPasarelaPago con Nombre y Cobrar(decimal)."}</li>
        <li>{"Al menos tres implementaciones (tarjeta, transferencia, efectivo)."}</li>
        <li>{"Checkout con inyección; método Pagar(decimal) sin lógica switch interna."}</li>
        <li>{"List<Checkout> procesada en bucle en Main."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Impuestos (clase abstracta)"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"abstract class Impuesto con Calcular(decimal baseImponible)."}</li>
        <li>{"Iva (19%), ImpuestoCero, ImpuestoFijo (monto fijo)."}</li>
        <li>
          {
            "Clase Factura con decimal Base y List<Impuesto>; método TotalImpuestos() que itera sin if por tipo."
          }
        </li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Integración"}</p>
      <ol className="my-4 list-decimal pl-6" start={8}>
        <li>
          {
            "En Main: crear factura con base 100 y dos impuestos; imprimir total impuestos; luego ejecutar dos checkouts con pasarelas distintas."
          }
        </li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Extensión demostrada"}</p>
      <ol className="my-4 list-decimal pl-6" start={9}>
        <li>
          {
            "Añadir PasarelaNequi o ImpuestoReducido después de tener Partes A–C funcionando, sin editar Checkout ni Factura.TotalImpuestos."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compila; bucles sin ramas por tipo concreto; nueva pasarela o impuesto solo añade archivo/clase; salida numérica coherente con reglas definidas."
        }
      </p>
      <PracticeExercise
        prompt="Documenta qué archivos editaste al añadir PasarelaNequi o ImpuestoReducido (Parte D). ¿Por qué Checkout y Factura no aparecen en la lista?"
        hints={[
          "Solo nueva clase que implementa el contrato",
          "Main o composición registra la nueva instancia",
          "Cliente estable no cambia al extender",
        ]}
        expectedKeywords={["nueva clase", "sin editar", "Checkout", "Factura"]}
        successMessage="Excelente. Extensión por adición, no por modificación del cliente."
        rows={6}
      />
    </section>
  );
}
