import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function TecnologiasBackendSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tecnologías y frameworks"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Node.js: Express (minimalista), NestJS (enterprise, modular)."}
        </li>
        <li>
          {"Python: FastAPI (async, OpenAPI), Django (full-stack con ORM)."}
        </li>
        <li>{"Java: Spring Boot (estándar enterprise)."}</li>
        <li>{"PHP: Laravel (CMS/e-commerce)."}</li>
        <li>{"Go: Gin/Fiber (microservicios de alto rendimiento)."}</li>
        <li>{"C#: ASP.NET Core (cross-platform Microsoft)."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — TecnologiasBackend"
        chart={`mindmap
  root((TecnologiasBackend))
    Nodejs
    Python
    Java
    PHP
    Go
    C`}
      />

      <CompareTable
        headers={["Framework", "Lenguaje", "Curva", "Uso típico"]}
        rows={[
          [
            "Express",
            "JavaScript/Node.js",
            "Baja",
            "APIs REST rápidas, startups",
          ],
          [
            "NestJS",
            "TypeScript/Node.js",
            "Media",
            "Enterprise, arquitectura modular",
          ],
          [
            "FastAPI",
            "Python",
            "Media",
            "ML/AI, APIs modernas con OpenAPI auto",
          ],
          ["Django", "Python", "Media", "Full-stack, admin panel incluido"],
          ["Spring Boot", "Java", "Alta", "Banca, sistemas regulados"],
          ["Laravel", "PHP", "Media", "CMS, e-commerce"],
          [
            "ASP.NET Core",
            "C#",
            "Media-Alta",
            "Enterprise Microsoft, alto rendimiento",
          ],
        ]}
      />
      <Callout title="Startup de delivery: Go prematuro">
        {
          "Un equipo de 4 elige Go por benchmarks pero solo conoce JavaScript. Tres meses en curva de aprendizaje; la competencia lanza antes. Decisión: Node.js + NestJS; optimizar SQL y añadir Redis cuando haya tráfico real; migrar hot paths solo si métricas lo justifican (>10k req/s)."
        }
      </Callout>
    </section>
  );
}
