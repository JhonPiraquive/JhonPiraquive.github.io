import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RutaDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">De 0 a 100: lo logrado y cómo seguir</h2>
      <p className="my-4">
        La escalera del módulo empezó en cero. La tabla resume lo que se aprendió en cada tramo y dónde repasarlo.
      </p>
      <CompareTable
        headers={["Nivel", "Capacidad adquirida", "Página de referencia"]}
        rows={[
          ["0 a 15", "Definir y evaluar una tecnología emergente; usar la terminal, npm y package.json", "Clase 1, páginas 1 y 2"],
          ["15 a 35", "JavaScript moderno (const y let, flechas, objetos, arreglos, desestructuración, spread y módulos) y primer proyecto con Vite y React", "Clase 1, páginas 3 a 5"],
          ["35 a 50", "Estado y eventos, formularios controlados, listas sin mutar, efectos y hooks propios", "Clase 2, páginas 1 y 2"],
          ["50 a 70", "Interfaces con Material UI, principios de UX y accesibilidad, rutas con layouts y parámetros", "Clase 2, páginas 3 a 5"],
          ["70 a 85", "HTTP y APIs, promesas, async/await y fetch, CRUD completo con estados de carga, error y éxito", "Clase 3, páginas 1 a 3"],
          ["85 a 100", "Validación en cliente y servidor, rendimiento, calidad, configuración, build y criterio para elegir tecnología", "Clase 3, páginas 4 a 6"],
        ]}
      />
      <p className="my-4">
        El nivel 100 del módulo no significa que no quede nada por aprender. Significa que es posible construir un sitio
        administrativo completo, explicar las decisiones tomadas y seguir aprendiendo de forma autónoma. El siguiente
        mapa muestra un orden razonable para continuar:
      </p>
      <MermaidDiagram
        title="Ruta sugerida después del módulo"
        description="Flujo de seis pasos: TypeScript, pruebas, backend, autenticación, frameworks y despliegue continuo."
        chart={`flowchart LR
  A["TypeScript"] --> B["Pruebas automáticas<br/>Vitest + Testing Library"]
  B --> C["Backend propio<br/>Node, Express, bases de datos"]
  C --> D["Autenticación y permisos"]
  D --> E["Un framework<br/>Next.js o React Router"]
  E --> F["Despliegue continuo<br/>GitHub Actions"]`}
      />
      <CompareTable
        headers={["Paso", "Por qué", "Primer recurso"]}
        rows={[
          ["TypeScript", "Detecta errores antes de ejecutar y reemplaza a PropTypes", "Plantilla react-ts de Vite y el manual oficial"],
          ["Pruebas automáticas", "Permiten cambiar código sin miedo a romper algo", "Vitest y React Testing Library"],
          ["Backend propio", "Ayuda a entender de dónde salen los datos que se consumen", "Node con Express y una base de datos (el video de MongoDB de la asignatura es un buen comienzo)"],
          ["Autenticación", "Casi todo sistema real tiene usuarios y permisos", "Sesiones con cookies seguras o tokens JWT"],
          ["Un framework", "Resuelve rutas, servidor y posicionamiento", "Next.js o el modo framework de React Router"],
          ["Despliegue continuo", "Hace que publicar sea automático y repetible", "GitHub Actions"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Mantenerse al día sin agobiarse</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Seguir los blogs oficiales de las herramientas en uso (React, Vite, MUI, React Router): publican poco y todo es relevante.</li>
        <li>Ante una versión mayor nueva, leer la guía de migración antes de actualizar: allí está lo que se rompe.</li>
        <li>Revisar una vez al mes <code>npm outdated</code> y <code>npm audit</code> en los proyectos.</li>
        <li>Construir cosas pequeñas con lo nuevo antes de ponerlo en algo importante.</li>
        <li>Desconfiar de los tutoriales sin fecha: conviene comprobar qué versión usan y compararla con la actual.</li>
      </ul>
      <Callout title="Ideas de proyectos para un portafolio" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Un administrador de inventario para un negocio pequeño, con CRUD, búsqueda y modo oscuro.</li>
          <li>Un tablero que consuma una API pública y muestre datos con gráficas.</li>
          <li>Una versión instalable (PWA) de uno de los proyectos, que funcione sin conexión.</li>
        </ul>
      </Callout>
    </section>
  );
}
