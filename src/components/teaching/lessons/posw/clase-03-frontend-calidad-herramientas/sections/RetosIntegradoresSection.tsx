import { RetoFrontendSection } from "./RetoFrontendSection";
import { RetoTypescriptSection } from "./RetoTypescriptSection";
import { RetoReactSection } from "./RetoReactSection";
import { RetoAngularSection } from "./RetoAngularSection";
import { RetoHerramientasDesarrolloSection } from "./RetoHerramientasDesarrolloSection";
import { RetoPrincipiosSolidSection } from "./RetoPrincipiosSolidSection";
import { RetoNamingConventionsSection } from "./RetoNamingConventionsSection";
import { RetoIaEnDesarrolloWebSection } from "./RetoIaEnDesarrolloWebSection";

export function RetosIntegradoresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Retos integradores"}</h2>
      <RetoFrontendSection />
      <RetoTypescriptSection />
      <RetoReactSection />
      <RetoAngularSection />
      <RetoHerramientasDesarrolloSection />
      <RetoPrincipiosSolidSection />
      <RetoNamingConventionsSection />
      <RetoIaEnDesarrolloWebSection />
    </section>
  );
}
