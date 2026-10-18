import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const MAPA_CAPAS_DATOS = `mindmap
  root((Datos persistentes))
    BD
      Conjunto organizado
      Fuente de verdad
    SGBD
      Motor servidor
        MySQL
        MariaDB
        MongoDB
      Clientes
        GUI
          phpMyAdmin
          Workbench
          DBeaver
          Compass
        CLI
          mysql
          mariadb
          mongosh
    Modelo
      Relacional
        Tablas SQL
      NoSQL
        Documentos
        Clave-valor
        Columnas
        Grafos`;

export function IntroMapaOperativoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Del relato histórico al abecedario operativo"}
      </h2>
      <p className="my-4">
        {
          "La página anterior explicó por qué existen las bases de datos y cómo evolucionaron los modelos. Esta página baja al terreno diario del tecnólogo: qué es una BD frente a un SGBD (Sistema Gestor de Bases de Datos), cuándo conviene SQL (Structured Query Language) frente a documentos, y por qué el motor que guarda los datos no es lo mismo que la ventana gráfica (GUI) o la terminal (CLI) con que se consulta."
        }
      </p>
      <p className="my-4">
        {
          "El hilo conductor es la academia «Rutas Digitales» (Cali) y el centro «Andes Tech» (Medellín), que necesitan un nombre oficial de programa, por ejemplo «Técnica Profesional en Configuración de Servicios Web», sin versiones divergentes por WhatsApp ni Excel por sede."
        }
      </p>
      <MermaidDiagram
        title="Capas de trabajo con datos"
        description="Relación entre BD, SGBD (motor), clientes GUI/CLI y modelos relacional vs NoSQL"
        chart={MAPA_CAPAS_DATOS}
      />
    </section>
  );
}
