import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const INVENTARIO_INSEGURO_CODE = `public class Producto
{
    public string Sku { get; set; }
    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
}

public class InventarioService
{
    public void RegistrarSalida(Producto producto, int unidades)
    {
        if (producto.Cantidad >= unidades) // validación duplicada en otro servicio también
            producto.Cantidad -= unidades;
    }

    public void AjusteManual(Producto producto, int nuevaCantidad)
    {
        producto.Cantidad = nuevaCantidad; // sin validar negativos
    }
}`;

const CUENTA_LIMITE_DIARIO_CODE = `public class CuentaConLimiteDiario : CuentaBancaria
{
    private const decimal LimiteDiario = 200m;
    private decimal _retiradoHoy;

    public CuentaConLimiteDiario(decimal saldoInicial) : base(saldoInicial) { }

    public new void Retirar(decimal monto)
    {
        if (_retiradoHoy + monto > LimiteDiario)
            throw new InvalidOperationException(
                $"Límite diario excedido. Retirado hoy: {_retiradoHoy}, límite: {LimiteDiario}");
        base.Retirar(monto);
        _retiradoHoy += monto;
    }
}`;

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: auditar el módulo de inventario"}
      </h2>
      <p className="my-4">
        {
          "Te entregan este código de un sistema de almacén. QA reporta: stock negativo en reportes, cantidades que “saltan” sin trazabilidad, y un script de mantenimiento que hace producto.Cantidad = 0 sin pasar por reglas."
        }
      </p>
      <CodeFiddle language="csharp" title="Módulo de inventario (antes)" code={INVENTARIO_INSEGURO_CODE} />
      <p className="my-4 font-semibold">{"Tareas:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Refactoriza Producto para proteger Cantidad con encapsulamiento: lectura pública, escritura solo vía métodos (Ingresar, Retirar, Ajustar con validación)."
          }
        </li>
        <li>
          {
            "Define al menos dos invariantes explícitas (ej. Cantidad >= 0, PrecioUnitario > 0) y valídalas en constructor o métodos mutadores."
          }
        </li>
        <li>
          {
            "Elimina la validación duplicada de InventarioService — el servicio debe confiar en que Producto rechaza operaciones inválidas."
          }
        </li>
        <li>
          {
            "Escribe un Main que demuestre: retiro válido, retiro que lanza excepción por stock insuficiente, e intento de cantidad negativa en ajuste."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: ningún código externo puede asignar Cantidad directamente; invariantes se aplican en un solo lugar; excepciones con mensajes claros; InventarioService queda más simple porque la lógica vive en el dominio."
        }
      </p>
      <PracticeExercise
        prompt="Implementa la refactorización del módulo de inventario: Producto encapsulado con Ingresar/Retirar/Ajustar, dos invariantes validadas, InventarioService simplificado y Main con los tres escenarios (retiro válido, stock insuficiente, ajuste negativo). Pega tu código o describe la estructura clave."
        hints={[
          "public int Cantidad { get; private set; }",
          "Constructor valida PrecioUnitario > 0 y Cantidad >= 0",
          "Retirar lanza si unidades > Cantidad",
          "InventarioService solo llama producto.Retirar — sin if duplicado",
          "AjusteManual usa producto.Ajustar(nuevaCantidad) con validación interna",
        ]}
        expectedKeywords={["private set", "invariante", "Retirar", "Ingresar", "excepción"]}
        successMessage="Excelente. Has aplicado encapsulamiento e invariantes en un caso real de inventario y eliminado validación duplicada en el servicio."
        rows={6}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Extensión opcional — límite diario de retiro"}</h3>
      <p className="my-4">
        {
          "Agrega a CuentaBancaria la regla de límite diario (LimiteDiario = 200, campo _retiradoHoy). Tres retiros de 80 deben fallar en el tercero."
        }
      </p>
      <CodeFiddle language="csharp" title="Extensión opcional — límite diario" code={CUENTA_LIMITE_DIARIO_CODE} />
    </section>
  );
}
