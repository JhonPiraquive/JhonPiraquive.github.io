import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RutaDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">De 0 a 100: lo que lograste y cómo seguir</h2>
      <p className="my-4">
        Al empezar, la escalera estaba en cero. Este es el resumen de lo que ya sabes hacer en cada tramo. Revísalo con
        honestidad: si un punto te cuesta explicarlo con tus palabras, vuelve a esa página.
      </p>
      <CompareTable
        headers={["Nivel", "Ya sabes…", "Página de referencia"]}
        rows={[
          ["0 a 15", "Qué es una tecnología emergente y cómo evaluarla; usar la terminal, npm y package.json", "Clase 1, páginas 1 y 2"],
          ["15 a 35", "JavaScript moderno: const y let, flechas, objetos, arreglos, desestructuración, spread y módulos; tu primer proyecto con Vite y React", "Clase 1, páginas 3 a 5"],
          ["35 a 50", "Estado y eventos, formularios controlados, listas sin mutar, efectos y hooks propios", "Clase 2, páginas 1 y 2"],
          ["50 a 70", "Interfaces con Material UI, principios de UX y accesibilidad, rutas con layouts y parámetros", "Clase 2, páginas 3 a 5"],
          ["70 a 85", "HTTP y APIs, promesas, async/await y fetch, CRUD completo con estados de carga, error y éxito", "Clase 3, páginas 1 a 3"],
          ["85 a 100", "Validación en cliente y servidor, rendimiento, calidad, configuración, build y criterio para elegir tecnología", "Clase 3, páginas 4 a 6"],
        ]}
      />
      <p className="my-4">
        El nivel 100 de este módulo no significa que no haya más que aprender. Significa que puedes construir un sitio
        administrativo completo, explicar tus decisiones y seguir aprendiendo por tu cuenta. Este es un mapa de lo que
        puedes explorar después, en un orden razonable:
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
          ["Pruebas automáticas", "Cambiar código sin miedo a romper algo", "Vitest y React Testing Library"],
          ["Backend propio", "Entender de dónde salen los datos que consumes", "Node con Express y una base de datos (el video de MongoDB de la asignatura es un buen comienzo)"],
          ["Autenticación", "Casi todo sistema real tiene usuarios y permisos", "Sesiones con cookies seguras o tokens JWT"],
          ["Un framework", "Rutas, servidor y posicionamiento resueltos", "Next.js o el modo framework de React Router"],
          ["Despliegue continuo", "Que publicar sea automático y repetible", "GitHub Actions"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Mantenerte al día sin agobiarte</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Sigue los blogs oficiales de las herramientas que usas (React, Vite, MUI, React Router). Publican poco y todo es relevante.</li>
        <li>Cuando veas una versión mayor nueva, lee la guía de migración antes de actualizar. Allí está lo que se rompe.</li>
        <li>Revisa una vez al mes <code>npm outdated</code> y <code>npm audit</code> en tus proyectos.</li>
        <li>Construye cosas pequeñas con lo nuevo para probarlo, antes de ponerlo en algo importante.</li>
        <li>Desconfía de los tutoriales sin fecha: mira la versión que usan y compárala con la actual.</li>
      </ul>
      <Callout title="Ideas de proyectos para tu portafolio" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Un administrador de inventario para un negocio pequeño, con CRUD, búsqueda y modo oscuro.</li>
          <li>Un tablero que consuma una API pública y muestre datos con gráficas.</li>
          <li>Una versión instalable (PWA) de uno de tus proyectos, que funcione sin conexión.</li>
        </ul>
      </Callout>
    </section>
  );
}
