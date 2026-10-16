import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HorizonteSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Hacia dónde sigue el ecosistema y cómo decidir qué aprender</h2>
      <p className="my-4">
        Ya recorriste el camino completo de una aplicación web: JavaScript, React, interfaz, rutas, API y despliegue. Este es
        un buen momento para mirar alrededor. El ecosistema evoluciona rápido, y la habilidad que más te va a servir no es
        memorizar herramientas, sino saber <strong>cuándo vale la pena adoptar una</strong>. Aplica los seis criterios de la
        primera clase.
      </p>
      <MermaidDiagram
        title="¿Debo adoptar esta tecnología?"
        description="Diagrama de decisión: resuelve un problema real, es estable, tiene comunidad y documentación, se prueba a pequeña escala y recién ahí se adopta; cualquier respuesta negativa lleva a esperar."
        chart={`flowchart TD
  A["Veo una tecnología nueva"] --> B{"¿Resuelve un problema<br/>que tengo hoy?"}
  B -->|"No"| X["Guardar para después"]
  B -->|"Sí"| C{"¿Versión estable<br/>y mantenida?"}
  C -->|"No"| X
  C -->|"Sí"| D{"¿Hay documentación<br/>y comunidad?"}
  D -->|"No"| X
  D -->|"Sí"| E["Probar en un proyecto pequeño"]
  E --> F{"¿Mejoró algo real?"}
  F -->|"Sí"| G["Adoptar y anotar por qué"]
  F -->|"No"| X`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El panorama, con criterio (octubre de 2026)</h3>
      <CompareTable
        headers={["Tecnología", "Qué es", "Estado", "Cuándo adoptarla"]}
        rows={[
          ["TypeScript", "JavaScript con tipos: detecta errores al escribir", "Estándar de la industria", "Ya. Es el siguiente paso natural después de este módulo (plantilla react-ts)"],
          ["TanStack Query", "Librería para pedir, guardar en caché y sincronizar datos del servidor", "Estable (v5), muy extendida", "Cuando varias pantallas piden los mismos datos o necesitas caché, reintentos y actualización optimista"],
          ["React Compiler", "Optimiza redibujos automáticamente al construir", "v1.0 estable desde octubre de 2025", "En proyectos nuevos, como opción; no la necesitas para aprender"],
          ["Frameworks sobre React (Next.js, React Router modo framework)", "Añaden rutas, renderizado en servidor y más", "Maduros. La documentación de React los recomienda para aplicaciones nuevas en producción", "Cuando necesitas buen posicionamiento en buscadores o carga muy rápida. Un panel administrativo detrás de un login suele estar bien como SPA con Vite"],
          ["PWA (aplicación web progresiva)", "Sitio instalable que funciona sin conexión", "Madura", "Cuando quieras que se instale como app y tenga uso sin red"],
          ["WebAssembly (Wasm)", "Código de otros lenguajes (Rust, C++) corriendo en el navegador casi a velocidad nativa", "Madura en navegadores", "Para tareas muy pesadas: edición de imagen o video, juegos, cálculo científico. No para pantallas de formularios"],
          ["WebXR", "Realidad aumentada y virtual en el navegador", "Emergente; el soporte varía según dispositivo y navegador", "Para experiencias inmersivas específicas; verifica la compatibilidad antes de comprometerte"],
          ["IA en aplicaciones web", "Usar modelos de lenguaje o visión desde tu aplicación", "En evolución muy rápida", "Cuando aporte valor concreto. Llámalos desde tu servidor, nunca con la clave en el navegador"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un ejemplo: la misma lista con TanStack Query</h3>
      <p className="my-4">
        Mira cuánto desaparece del listado cuando una librería se encarga de cargar, reintentar, cancelar y cachear. No lo
        necesitas todavía; entender el código manual de la página del CRUD es lo que te permite apreciar (y depurar) lo que
        la librería hace por ti.
      </p>
      <CodeFiddle
        language="jsx"
        title="Listado con TanStack Query"
        code={`import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/cliente.js";

export default function ListadoMaterias() {
  const queryClient = useQueryClient();

  const { data: materias = [], isPending, isError, refetch } = useQuery({
    queryKey: ["materias"],
    queryFn: ({ signal }) => api.listar("materias", signal),   // la cancelación viene incluida
  });

  const eliminar = useMutation({
    mutationFn: (id) => api.eliminar("materias", id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["materias"] }),   // vuelve a pedir la lista
  });

  if (isPending) return <LinearProgress />;
  if (isError) return <Alert severity="error" action={<Button onClick={refetch}>Reintentar</Button>}>No pudimos cargar.</Alert>;

  return <TablaMaterias materias={materias} alEliminar={(m) => eliminar.mutate(m.id)} />;
}

// En main.jsx hace falta envolver la aplicación:
// const queryClient = new QueryClient();
// <QueryClientProvider client={queryClient}><App /></QueryClientProvider>`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una lección de la vida real: lo nuevo también falla</h3>
      <Callout title="Las tecnologías nuevas traen riesgos nuevos" variant="callout-warning">
        <p className="mb-0">
          En diciembre de 2025 se publicaron vulnerabilidades graves en los React Server Components, una de las novedades
          más celebradas del ecosistema, incluida una que permitía ejecutar código de forma remota sin autenticación. Se
          corrigieron en versiones de parche y quien mantenía sus dependencias al día quedó protegido. La enseñanza no es
          evitar lo nuevo, sino adoptarlo con conciencia: lee los avisos de seguridad, actualiza las dependencias con
          regularidad (<code>npm outdated</code>, <code>npm audit</code>) y no trates una novedad como «segura por ser
          reciente».
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Las tecnologías de la presentación del módulo, vistas desde JavaScript</h3>
      <CompareTable
        headers={["Tecnología emergente", "Cómo se conecta con lo que aprendiste"]}
        rows={[
          ["Internet de las cosas (IoT)", "Un panel como el de esta clase muestra datos de sensores que llegan por una API o por WebSockets. Tu CRUD sería el módulo de dispositivos"],
          ["Inteligencia artificial", "Una pantalla con un formulario que envía un texto a tu servidor, que consulta un modelo y devuelve una respuesta que tú dibujas. Fetch y estados de carga y error son los mismos"],
          ["Realidad aumentada y virtual", "WebXR y librerías como Three.js o A-Frame usan JavaScript y se integran con React"],
          ["Blockchain", "Las aplicaciones descentralizadas tienen un frontend en React que habla con billeteras y contratos; el patrón de peticiones asíncronas es parecido"],
          ["Robótica y domótica", "Paneles web para controlar y monitorear equipos: botones, estados y peticiones a una API"],
        ]}
      />
    </section>
  );
}
