import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SesionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Sesiones: el modelo no recuerda</h2>
      <p className="my-4">
        Una de las ideas más importantes, y menos intuitivas, es esta: <strong>el modelo no tiene memoria entre
        llamadas</strong>. Cada vez que recibe una petición empieza de cero. La sensación de que «recuerda» lo que se dijo
        antes se debe a que el programa le reenvía, en cada turno, toda la conversación anterior.
      </p>
      <p className="my-4">
        A esa conversación acumulada se le llama <strong>sesión</strong>. La sesión vive en el programa (la aplicación de
        chat, el editor, la terminal), no en el modelo. Una analogía: el modelo es un experto con amnesia que atiende una
        ventanilla; la sesión es la carpeta que el funcionario le entrega cada vez con todo el expediente.
      </p>
      <MermaidDiagram
        title="Cada turno reenvía toda la conversación"
        description="Diagrama de secuencia: en el turno 1 la aplicación envía un mensaje; en el turno 2 envía el mensaje 1, la respuesta 1 y el mensaje 2; en el turno 3 envía todo lo anterior más el mensaje 3."
        chart={`sequenceDiagram
  participant App as Aplicación (guarda la sesión)
  participant M as Modelo (sin memoria)
  App->>M: Turno 1: mensaje 1
  M-->>App: respuesta 1
  App->>M: Turno 2: mensaje 1 + respuesta 1 + mensaje 2
  M-->>App: respuesta 2
  App->>M: Turno 3: todo lo anterior + mensaje 3
  M-->>App: respuesta 3`}
      />
      <p className="my-4">
        El siguiente código, para la consola del navegador, simula una sesión. El «modelo» falso solo cuenta cuántos
        mensajes recibe, lo que permite ver cómo crece lo que se envía en cada turno.
      </p>
      <CodeFiddle
        language="javascript"
        title="Simulación de una sesión"
        code={`// Modelo falso: no recuerda nada, solo ve lo que recibe en esta llamada
function modeloFalso(mensajes) {
  const ultimo = mensajes.at(-1).content;
  return \`Recibí \${mensajes.length} mensajes. El último dice: "\${ultimo}"\`;
}

const sesion = []; // la memoria vive aquí, en el programa

function enviar(texto) {
  sesion.push({ role: "user", content: texto });
  const respuesta = modeloFalso(sesion); // se envía TODA la sesión
  sesion.push({ role: "assistant", content: respuesta });
  console.log(respuesta);
}

enviar("Hola, me llamo Ana.");
enviar("¿Cómo me llamo?");
enviar("Gracias.");

// Si se borra la sesión, el modelo "olvida" todo
sesion.length = 0;
enviar("¿Cómo me llamo?");`}
      />
      <Callout title="Consecuencias prácticas" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Abrir una conversación nueva es empezar de cero: el modelo no sabe nada de la anterior.</li>
          <li>Las conversaciones largas cuestan más, porque en cada turno se reenvían todos los tokens previos.</li>
          <li>Muchas herramientas permiten <strong>reanudar</strong> una sesión guardada o <strong>bifurcarla</strong> para probar otro camino sin perder la original.</li>
        </ul>
      </Callout>
    </section>
  );
}
