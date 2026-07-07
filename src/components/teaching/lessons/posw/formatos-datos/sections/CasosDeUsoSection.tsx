import { Callout } from "@/components/teaching/Callout";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CasosDeUsoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Casos de uso reales"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Cuándo XML sigue siendo la opción correcta"}
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Caso"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Por qué XML"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Core bancario SOAP"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Contrato WSDL + envelopes XML; enviar JSON rompe el esquema"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Facturación electrónica DIAN"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Estándar regulatorio exige XML"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Maven pom.xml, Spring config"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Ecosistema Java empresarial"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"RSS/Atom, WSDL"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Formatos definidos sobre XML"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo JSON es la opción correcta"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Caso"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Por qué JSON"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"API REST pública (GitHub, Stripe)"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Compacto, tipos nativos, parsing trivial en JS"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"package.json, settings.json"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Herramientas Node y editores"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"MongoDB, WebSockets"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Documentos y mensajes JSON nativos"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"App móvil + web nuevas"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Menor payload, menor latencia"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Callout title="Caso real: integración bancaria">
        {
          "Un equipo envía cuerpos JSON a un endpoint SOAP del banco. El banco rechaza todas las transacciones con error de esquema. Decisión clave: respetar el contrato del dominio (XML + WSDL); JSON queda para APIs internas REST."
        }
      </Callout>
      <PracticeExercise
        prompt="Tu API nueva expone catálogo de productos para app móvil y web. ¿XML o JSON? Justifica con interoperabilidad y tamaño."
        hints={["API REST moderna", "Ecosistema web y parsing nativo"]}
        expectedKeywords={["JSON", "compacto", "REST", "parse"]}
        successMessage="Correcto. JSON es el predeterminado en APIs REST nuevas: compacto, tipos nativos y parsing trivial en clientes web y móviles."
      />
    </section>
  );
}
