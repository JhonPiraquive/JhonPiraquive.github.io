import { RetoModeloClienteServidorSection } from "./RetoModeloClienteServidorSection";
import { RetoServiciosWebSection } from "./RetoServiciosWebSection";
import { RetoTiposServiciosWebSection } from "./RetoTiposServiciosWebSection";
import { RetoApisSection } from "./RetoApisSection";
import { RetoHttpMetodosStatusSection } from "./RetoHttpMetodosStatusSection";
import { RetoHttpHeadersSection } from "./RetoHttpHeadersSection";
import { RetoFormatosDatosSection } from "./RetoFormatosDatosSection";

export function RetosIntegradoresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Retos integradores"}</h2>
      <RetoModeloClienteServidorSection />
      <RetoServiciosWebSection />
      <RetoTiposServiciosWebSection />
      <RetoApisSection />
      <RetoHttpMetodosStatusSection />
      <RetoHttpHeadersSection />
      <RetoFormatosDatosSection />
    </section>
  );
}
