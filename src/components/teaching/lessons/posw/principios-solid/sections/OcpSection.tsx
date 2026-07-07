import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const PROCESADOR_PAGO = `interface MetodoPago {
  procesar(monto: number): void;
}

class PagoTarjeta implements MetodoPago {
  procesar(monto: number): void {
    console.log(\`Cobrar $\${monto} con tarjeta\`);
  }
}

class PagoNequi implements MetodoPago {
  procesar(monto: number): void {
    console.log(\`Cobrar $\${monto} con Nequi\`);
  }
}

class ProcesadorPago {
  constructor(private metodo: MetodoPago) {}
  procesar(monto: number): void {
    this.metodo.procesar(monto);
  }
}`;

export function OcpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"OCP: extender sin modificar código existente"}
      </h2>
      <p className="my-4">
        {
          "Abierto a extensión (nuevas clases), cerrado a modificación (no editar el procesador central)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Procesador de pagos extensible"}</h3>
      <CodeFiddle language="typescript" title="MetodoPago + ProcesadorPago" code={PROCESADOR_PAGO} />
      <Callout title="Caso real: procesador de pagos con if/else infinito">
        {
          "Un ProcesadorPago con if (tipo === 'tarjeta' | 'paypal' | 'nequi') crece cada trimestre. Un bug en Nequi obliga a retestear todo. Decisión: interface MetodoPago, una clase por proveedor; el procesador solo delega."
        }
      </Callout>
      <CodeChallenge
        title="Añade PagoPSE sin modificar ProcesadorPago"
        template={`interface MetodoPago {
  procesar(monto: number): void;
}

class PagoPSE implements {{blank1}} {
  procesar(monto: number): void {
    console.log(\`PSE: $\${monto}\`);
  }
}`}
        blanks={[{ id: "blank1", answer: "MetodoPago", placeholder: "interface a implementar" }]}
      />
    </section>
  );
}
