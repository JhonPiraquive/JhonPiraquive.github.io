import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function McpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">MCP: un enchufe común para conectar herramientas</h2>
      <p className="my-4">
        Antes de que existiera un estándar, cada aplicación de IA tenía que programar por separado su conexión con cada
        servicio: una para GitHub, otra para la base de datos, otra para el calendario. Con muchas aplicaciones y muchos
        servicios, el número de conexiones se multiplicaba.
      </p>
      <p className="my-4">
        El <strong>Model Context Protocol (MCP)</strong> es un protocolo abierto que define una forma común de conectar
        aplicaciones de IA con herramientas y datos. Se suele comparar con el puerto USB-C: un único tipo de conector que
        sirve para muchos dispositivos. Un servicio que ofrece un servidor MCP puede usarse desde cualquier aplicación que
        hable MCP. Lo creó Anthropic y hoy lo gobierna una fundación abierta dentro de la Linux Foundation, con
        participación de varias empresas.
      </p>
      <MermaidDiagram
        title="Arquitectura de MCP"
        description="Diagrama: una aplicación anfitriona (host) crea un cliente MCP por cada servidor; un servidor local de archivos se conecta por entrada y salida estándar, y un servidor remoto de un servicio en la nube se conecta por HTTP."
        chart={`flowchart LR
  subgraph Host["Aplicación anfitriona (host)<br/>por ejemplo, un agente de programación"]
    C1["Cliente MCP 1"]
    C2["Cliente MCP 2"]
  end
  C1 <-->|"stdio (local)"| S1["Servidor MCP<br/>archivos del equipo"]
  C2 <-->|"HTTP (remoto)"| S2["Servidor MCP<br/>servicio en la nube"]`}
      />
      <CompareTable
        title="Piezas de MCP"
        headers={["Pieza", "Qué es"]}
        rows={[
          ["Host (anfitrión)", "La aplicación de IA que usa la persona: un agente de programación, un asistente de escritorio, un editor."],
          ["Cliente MCP", "El componente del host que mantiene la conexión con un servidor. Hay un cliente por cada servidor."],
          ["Servidor MCP", "El programa que ofrece capacidades. Puede ser local (corre en el mismo equipo) o remoto (corre en internet)."],
          ["Herramientas (tools)", "Funciones que el modelo puede pedir ejecutar: crear un issue, consultar una tabla, enviar un mensaje."],
          ["Recursos (resources)", "Datos que se pueden leer como contexto: el contenido de un archivo, el esquema de una base de datos."],
          ["Prompts", "Plantillas de instrucciones que el servidor ofrece y que la persona puede elegir."],
          ["Transporte", "El canal de comunicación: entrada y salida estándar (stdio) para servidores locales o HTTP para remotos."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Configurar un servidor MCP</h3>
      <p className="my-4">
        En la mayoría de harness basta con declarar el servidor en un archivo de configuración. El ejemplo conecta el
        servidor oficial de archivos, limitado a la carpeta <code>docs</code> del proyecto. El formato exacto varía un
        poco entre herramientas, pero la idea (nombre, cómo arrancarlo o dónde está) es la misma.
      </p>
      <CodeFiddle
        language="json"
        title=".mcp.json"
        code={`{
  "mcpServers": {
    "documentos": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./docs"]
    }
  }
}`}
      />
      <Callout title="Instalar un servidor MCP es dar acceso" variant="callout-danger">
        <p className="mb-0">
          Un servidor MCP ejecuta código y puede leer o modificar datos con los permisos de quien lo instala. Antes de
          agregar uno conviene revisar quién lo publica, qué herramientas ofrece y qué permisos pide. Un servidor de origen
          dudoso es tan peligroso como instalar un programa desconocido.
        </p>
      </Callout>
    </section>
  );
}
