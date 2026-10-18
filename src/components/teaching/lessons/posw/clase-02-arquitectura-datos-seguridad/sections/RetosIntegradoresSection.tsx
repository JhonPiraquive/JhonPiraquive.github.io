import { RetoRestPrincipiosSection } from "./RetoRestPrincipiosSection";
import { RetoArquitecturaApiSection } from "./RetoArquitecturaApiSection";
import { RetoBackendSection } from "./RetoBackendSection";
import { RetoBasesDeDatosSection } from "./RetoBasesDeDatosSection";
import { RetoCacheSection } from "./RetoCacheSection";
import { RetoProtocolosSeguridadSection } from "./RetoProtocolosSeguridadSection";
import { RetoTokensSection } from "./RetoTokensSection";

export function RetosIntegradoresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Retos integradores"}</h2>
      <RetoRestPrincipiosSection />
      <RetoArquitecturaApiSection />
      <RetoBackendSection />
      <RetoBasesDeDatosSection />
      <RetoCacheSection />
      <RetoProtocolosSeguridadSection />
      <RetoTokensSection />
    </section>
  );
}
