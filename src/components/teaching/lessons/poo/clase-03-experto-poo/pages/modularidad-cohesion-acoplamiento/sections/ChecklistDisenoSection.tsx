import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const COMPOSICION_MAIN_CODE = `// Borde de Tienda Andes — elige implementaciones
IReporteVentasRenderer renderer = new ReporteHtmlRenderer();
var reportes = new ReporteVentasDia(renderer);
reportes.Generar();

var repo = new RepositorioPedidosMemoria();
var pedidos = new ServicioPedidos(repo);
pedidos.Crear("PED-001");`;

export function ChecklistDisenoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Checklist antes de dar por bueno el diseño"}
      </h2>
      <p className="my-4">
        {
          "Sirve para revisar un proyecto final o un cambio de otro equipo. Cada ítem pide evidencia en código o diagrama, no un ✓ de memoria."
        }
      </p>
      <CompareTable title="Recorrido SOLID + módulos" headers={["Paso", "Qué ocurre"]} rows={[
          {
            title: "SRP",
            content: "¿Pedido, caja y reporte tienen un rol claro? ¿Hay God class?",
          },
          {
            title: "OCP",
            content: "¿Nequi o EnvioGratis son clases nuevas sin switch en orquestador?",
          },
          {
            title: "LSP",
            content: "¿Todo Producto responde CalcularDescuento sin throw sorpresa?",
          },
          {
            title: "ISP",
            content: "¿Interfaces pequeñas — ticket vs escaneo?",
          },
          {
            title: "DIP",
            content: "¿Dominio sin new Sql/Pdf? ¿Main compone?",
          },
          {
            title: "Cohesión / acoplamiento",
            content: "¿Sin Utilidades cajón? ¿Flechas hacia contratos?",
          },
        ].map((s) => [s.title, s.content])} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Main como raíz de composición"}</h3>
      <CodeFiddle language="csharp" code={COMPOSICION_MAIN_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mal uso del checklist"}</h3>
      <p className="my-4">
        {
          "Marcar DIP cumplido porque «hay interfaz» mientras ServicioPedidos instancia SQL adentro. Actualizar diagrama solo en la entrega, no cuando cambian dependencias."
        }
      </p>
    </section>
  );
}
