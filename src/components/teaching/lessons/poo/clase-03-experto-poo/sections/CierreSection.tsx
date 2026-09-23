import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre del track POO"}</h2>
      <p className="my-4">
        {
          "De clase y objeto a contratos, polimorfismo, SOLID y módulos — siempre con la misma tienda. Guarda capstone (diagrama + C# + checklist) para tu portafolio académico."
        }
      </p>
      <Callout title="Qué llevar contigo" variant="callout-tip">
        <p className="mb-0">
          {
            "POO no es sintaxis: es decidir qué sabe cada objeto, cómo colaboran sin romper encapsulamiento y cuándo una interfaz vale más que un switch."
          }
        </p>
      </Callout>
      <p className="mt-4">
        <Link href="/teaching/poo/index" className="text-[var(--color-secondary)] hover:underline">
          {"Volver al hub del módulo POO"}
        </Link>
      </p>
    </section>
  );
}
