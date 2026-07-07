import { CompareTable } from "@/components/teaching/CompareTable";

export function ComputacionNubeSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1.5"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Computación en la nube"}</h2>
      <p className="my-4">
        {
          "La nube ofrece recursos de cómputo, almacenamiento y redes bajo demanda por Internet, con pago por uso y escalado elástico."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.5.1 Principios de computación en la nube"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Autoservicio bajo demanda: provisionar servidores en minutos."}</li>
        <li>{"Acceso amplio a la red: desde cualquier dispositivo con Internet."}</li>
        <li>{"Agrupación de recursos: multi-tenant con aislamiento lógico."}</li>
        <li>{"Elasticidad: escalar arriba o abajo según carga."}</li>
        <li>{"Medición del uso: facturación por hora, GB o request."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.5.2 Modelos de computación en la nube"}</h3>
      <CompareTable
        headers={["Modelo", "Qué gestionas tú", "Ejemplos"]}
        rows={[
          ["IaaS", "SO, runtime, apps, datos", "AWS EC2, Google Compute Engine, Azure VMs"],
          ["PaaS", "Apps y datos", "Heroku, Google App Engine, AWS Elastic Beanstalk"],
          ["SaaS", "Solo uso y configuración", "Gmail, Salesforce, GitHub, Notion"],
        ]}
      />
      <p className="my-4">
        {
          "Relaciona IaaS con VPS en la nube, PaaS con deploy sin administrar el SO, y SaaS con aplicaciones listas para usar. La lección de herramientas-desarrollo profundiza en contenedores como unidad de despliegue en la nube."
        }
      </p>
    </section>
  );
}
