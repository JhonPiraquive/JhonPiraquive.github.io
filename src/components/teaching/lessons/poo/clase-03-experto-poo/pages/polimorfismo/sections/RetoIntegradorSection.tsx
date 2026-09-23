import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador — cobro y factura en Tienda Andes"}
      </h2>
      <p className="my-4">
        {
          "Consola .NET que una pasarelas polimórficas con impuestos opcionales. Todo en el lenguaje de la tienda; sin clientes ficticios extra."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Pasarelas"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"IPasarelaPago con Nombre y Cobrar(decimal)."}</li>
        <li>{"Al menos tarjeta, transferencia y efectivo."}</li>
        <li>{"Checkout con inyección; Pagar sin switch interno."}</li>
        <li>{"List<Checkout> en Main con foreach."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Impuestos (abstracta)"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"Impuesto con Calcular(decimal baseImponible)."}</li>
        <li>{"Iva 19%, ImpuestoCero, ImpuestoFijo."}</li>
        <li>{"Factura con Base y List<Impuesto>; TotalImpuestos() sin if por tipo."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Integración en Main"}</p>
      <ol className="my-4 list-decimal pl-6" start={8}>
        <li>{"Factura base 100 con dos impuestos; imprimir total; dos checkouts con pasarelas distintas."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Extensión"}</p>
      <ol className="my-4 list-decimal pl-6" start={9}>
        <li>{"PasarelaNequi o ImpuestoReducido después de A–C, sin editar Checkout ni Factura.TotalImpuestos."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: bucles sin ramas por tipo concreto; salida numérica coherente; extensión solo añade clases."
        }
      </p>
      <PracticeExercise
        prompt="Al añadir Nequi o ImpuestoReducido, lista qué archivos tocaste. ¿Por qué Checkout y Factura no deberían aparecer?"
        hints={[
          "Solo nueva implementación del contrato",
          "Main registra la instancia",
          "Cliente estable",
        ]}
        expectedKeywords={["nueva clase", "Checkout", "Factura"]}
        successMessage="Excelente. Polimorfismo = extender por adición."
        rows={6}
      />
    </section>
  );
}
