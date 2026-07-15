import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DockerConceptosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Docker: imagen, contenedor y Dockerfile"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Docker: plataforma de contenedores; empaqueta app + dependencias en unidad portable que comparte el kernel del host."
          }
        </li>
        <li>
          {
            "Imagen (Image): plantilla de solo lectura; se construye con Dockerfile o se descarga de un registry."
          }
        </li>
        <li>
          {
            "Contenedor (Container): instancia en ejecución de una imagen; efímera salvo volúmenes persistentes."
          }
        </li>
        <li>
          {
            "Dockerfile: instrucciones declarativas (FROM, COPY, RUN, EXPOSE, CMD)."
          }
        </li>
        <li>
          {
            "Docker Compose: orquesta varios contenedores desde docker-compose.yml."
          }
        </li>
        <li>
          {
            "Mapeo de puertos: -p 8080:80 expone puerto 80 del contenedor en 8080 del host."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — DockerConceptos"
        chart={`mindmap
  root((DockerConceptos))
    Docker
    Imagen Image
    Contenedor Container
    Dockerfile
    Docker Compose
    Mapeo de puertos`}
      />

      <CompareTable
        headers={["Aspecto", "Máquina virtual", "Contenedor Docker"]}
        rows={[
          ["SO virtualizado", "SO completo por VM", "Comparte kernel del host"],
          ["Tamaño típico", "Gigabytes", "Megabytes"],
          ["Arranque", "Minutos", "Segundos"],
          ["Aislamiento", "Muy fuerte", "Proceso aislado, kernel compartido"],
          [
            "Uso típico",
            "SO distintos en un host",
            "Empaquetar apps con dependencias",
          ],
        ]}
      />
      <Callout title={"Caso real: «en mi máquina funciona»"}>
        {
          "Cuatro estudiantes con PHP 8.2 en Windows y 8.0 en Linux fallan en demo por extensiones distintas. Decisión: docker-compose.yml con php:8.2-apache y mariadb:11 fijas para todos y para CI."
        }
      </Callout>
    </section>
  );
}
