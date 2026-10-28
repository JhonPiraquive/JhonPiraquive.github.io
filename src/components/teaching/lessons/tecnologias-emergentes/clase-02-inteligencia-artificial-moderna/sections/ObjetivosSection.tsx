import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 35 a 70</strong>. La clase estudia a fondo la tecnología emergente más
        influyente del momento, la inteligencia artificial generativa, desde lo que ocurre dentro de un modelo hasta cómo
        se arma un agente que trabaja con herramientas. El objetivo no es memorizar productos, sino entender las piezas
        que todos comparten.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar qué es un modelo de lenguaje, qué son los tokens y en qué se diferencian el entrenamiento y la inferencia.</li>
        <li>Describir cómo se construye una conversación: mensajes, roles, ventana de contexto, sesiones y memoria.</li>
        <li>Explicar qué es un agente, cómo funciona su ciclo y qué papel cumple el harness que lo rodea.</li>
        <li>Distinguir archivos de instrucciones, comandos, skills, servidores MCP, hooks y plugins, y saber cuándo usar cada uno.</li>
        <li>Reconocer los riesgos de usar IA (permisos, inyección de instrucciones, secretos, errores) y aplicar prácticas de uso responsable.</li>
      </ul>
      <Callout title="Apoyo técnico para la actividad 2" variant="callout-info">
        <p className="mb-0">
          La actividad del módulo docente (rutas, listado, formulario y acciones) se apoya en la{" "}
          <Link href="/teaching/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router">
            guía de apoyo React, parte 2
          </Link>
          . Lo que se aprende en esta clase sirve para usar asistentes de IA al programar esa actividad con criterio: como
          ayuda que se verifica, no como reemplazo del aprendizaje.
        </p>
      </Callout>
    </section>
  );
}
