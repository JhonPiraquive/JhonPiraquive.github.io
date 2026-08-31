import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const FLUJO_CLIENTE_MOTOR = `flowchart LR
  GUI[GUI] --> MOTOR[Motor SGBD]
  CLI[CLI] --> MOTOR
  APP[Aplicación] --> MOTOR
  MOTOR --> DATA[(Datos en disco)]`;

export function SgbdSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SGBD — Sistema Gestor de Bases de Datos"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El SGBD (Sistema Gestor de Bases de Datos) es el software que administra una o varias BD: crea estructuras, acepta lenguajes de consulta, controla usuarios, almacenamiento y recuperación. “Motor” enfatiza el servidor (mysqld, mongod)."
        }
      </p>
      <p className="my-4">
        <strong>{"Frase ancla:"}</strong>{" "}
        {
          "la BD es el contenido organizado; el SGBD es el motor + herramientas que lo hacen usable. phpMyAdmin no es el SGBD."
        }
      </p>

      <p className="my-4">
        {
          "En un laboratorio: se instala MariaDB (SGBD/motor). Los estudiantes usan phpMyAdmin (GUI) o mariadb (CLI) para crear la BD laboratorio y la tabla Programas. La BD es laboratorio; el SGBD es MariaDB; phpMyAdmin solo es la ventana."
        }
      </p>

      <MermaidDiagram
        title="BD, SGBD y clientes"
        description="Flujo: GUI, CLI y aplicación hablan con el motor; el motor persiste en disco"
        chart={FLUJO_CLIENTE_MOTOR}
      />
    </section>
  );
}
