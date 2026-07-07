import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ContenedoresSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"3.1"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Virtualización de sistemas operativos en contenedores"}
      </h2>
      <h3 className="mt-4 mb-2 text-xl font-semibold">{"3.1.1 ¿Qué es un contenedor?"}</h3>
      <p className="my-4">
        {
          "Un contenedor empaqueta una aplicación con sus dependencias en una imagen portable que comparte el kernel del SO host. Es más ligero que una máquina virtual completa."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"3.1.2 Ventajas de los contenedores"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Arranque en segundos frente a minutos de una VM."}</li>
        <li>{"Imagen reproducible: mismo comportamiento en dev, CI y producción."}</li>
        <li>{"Aislamiento de procesos sin virtualizar SO completo."}</li>
        <li>{"Escalado horizontal: más réplicas del mismo contenedor."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"3.1.3 Diferencias entre máquina virtual y contenedor"}</h3>
      <CompareTable
        headers={["Aspecto", "Máquina virtual", "Contenedor"]}
        rows={[
          ["SO", "SO completo por instancia", "Comparte kernel del host"],
          ["Tamaño", "Gigabytes", "Megabytes"],
          ["Arranque", "Minutos", "Segundos"],
          ["Uso típico", "SO distintos en un host", "Microservicios, apps web"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"3.1.4 ¿Qué es la orquestación de contenedores?"}</h3>
      <p className="my-4">
        {
          "La orquestación coordina el ciclo de vida de muchos contenedores: despliegue, escalado, balanceo de carga, redes y recuperación ante fallos. Sin orquestación, operar decenas de contenedores manualmente no escala."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"3.1.5 Software especializado: Kubernetes y Docker"}
      </h3>
      <p className="my-4">
        {
          "Docker crea y ejecuta contenedores individuales. Kubernetes (K8s) orquesta muchos contenedores: despliegue, balanceo, autoescalado y autorrecuperación. Docker Compose orquesta pocos servicios en un solo host."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"3.1.6 ¿Cómo instalar un contenedor Docker en Windows?"}</h3>
      <StepReveal
        title="Docker Desktop en Windows"
        steps={[
          {
            title: "Requisitos",
            content: "Windows 10/11 64 bits, virtualización habilitada en BIOS, WSL 2 recomendado.",
          },
          {
            title: "Descargar",
            content: "Docker Desktop desde docker.com/products/docker-desktop.",
          },
          {
            title: "Instalar WSL 2",
            content: "wsl --install si no está presente; reiniciar si se solicita.",
          },
          {
            title: "Verificar",
            content: "docker run hello-world en PowerShell o terminal integrada.",
          },
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Primer contenedor"
        code={`docker pull nginx:alpine
docker run -d -p 8080:80 --name web nginx:alpine
docker ps`}
      />
      <Callout title="Profundizar">
        {
          "La lección herramientas-desarrollo cubre Dockerfile multi-etapa, Compose y empaquetado de apps React. Aquí el foco es el rol del contenedor en la configuración de servicios."
        }
      </Callout>
    </section>
  );
}
