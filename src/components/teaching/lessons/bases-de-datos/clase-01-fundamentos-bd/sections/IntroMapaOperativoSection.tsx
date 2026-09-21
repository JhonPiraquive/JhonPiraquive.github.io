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
        {"Del mapa histórico al abecedario operativo"}
      </h2>
      <p className="my-4">
        {
          "En la clase 1 viste por qué existen las BD (bases de datos) y cómo evolucionaron los modelos. Esta clase baja al terreno diario del tecnólogo: qué es exactamente una BD frente a un SGBD (Sistema Gestor de Bases de Datos), cuándo conviene tablas SQL (Structured Query Language) frente a documentos, y cómo no confundir el motor que guarda datos con la ventana (GUI — Graphical User Interface) o la terminal (CLI — Command Line Interface) desde la que lo administras."
        }
      </p>
      <p className="my-4">
        {
          "Trabajarás con un hilo conductor: la academia “Rutas Digitales” (Cali) y el centro “Andes Tech” (Medellín), que necesitan un nombre oficial de programa — p. ej. 'Técnica Profesional en Configuración de Servicios Web' — sin versiones divergentes por WhatsApp ni Excel por sede."
        }
      </p>
      <MermaidDiagram
        title="Mapa mental — capas de trabajo con datos"
        description="Relación entre BD, SGBD (motor), clientes GUI/CLI y modelos relacional vs NoSQL"
        chart={MAPA_CAPAS_DATOS}
      />
    </section>
  );
}
