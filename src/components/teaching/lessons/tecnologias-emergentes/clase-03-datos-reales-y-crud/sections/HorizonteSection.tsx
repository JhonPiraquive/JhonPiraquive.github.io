import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HorizonteSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Hacia dónde avanzan las tecnologías emergentes</h2>
      <p className="my-4">
        El recorrido por una aplicación web completa (JavaScript, React, interfaz, rutas, API y despliegue) ofrece una
        base para mirar las tecnologías emergentes con más criterio. El ecosistema evoluciona rápido y la habilidad más
        duradera no es memorizar herramientas, sino saber <strong>cuándo vale la pena adoptar una</strong>. Los seis
        criterios de la primera clase siguen siendo la brújula.
      </p>
      <MermaidDiagram
        title="Decidir si adoptar una tecnología"
        description="Diagrama de decisión: resuelve un problema real, es estable, tiene comunidad y documentación, se prueba a pequeña escala y recién entonces se adopta; cualquier respuesta negativa lleva a esperar."
        chart={`flowchart TD
  A["Aparece una tecnología nueva"] --> B{"¿Resuelve un problema<br/>real y actual?"}
  B -->|"No"| X["Guardar para después"]
  B -->|"Sí"| C{"¿Es estable<br/>y está mantenida?"}
  C -->|"No"| X
  C -->|"Sí"| D{"¿Tiene documentación<br/>y comunidad?"}
  D -->|"No"| X
  D -->|"Sí"| E["Probar en un proyecto pequeño"]
  E --> F{"¿Mejoró algo real?"}
  F -->|"Sí"| G["Adoptar y anotar el motivo"]
  F -->|"No"| X`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tecnologías del ecosistema web, con criterio</h3>
      <p className="my-4">
        La tabla clasifica cada tecnología según su madurez y señala cuándo tiene sentido incorporarla. Es una fotografía
        orientativa: la columna de madurez es la que más cambia con el tiempo.
      </p>
      <CompareTable
        headers={["Tecnología", "Qué es", "Madurez", "Cuándo adoptarla"]}
        rows={[
          ["TypeScript", "JavaScript con tipos: detecta errores al escribir", "Estándar de la industria", "Desde ya. Es el siguiente paso natural después de este módulo"],
          ["TanStack Query", "Librería para pedir, guardar en caché y sincronizar datos del servidor", "Estable y muy extendida", "Cuando varias pantallas piden los mismos datos o se necesita caché, reintentos y actualización optimista"],
          ["Compilador de React", "Optimiza redibujos automáticamente al construir", "Estable, de adopción reciente", "En proyectos nuevos, como opción; no es necesario para aprender"],
          ["Frameworks sobre React (Next.js, React Router en modo framework)", "Añaden rutas, renderizado en servidor y más", "Maduros; la documentación de React los recomienda para aplicaciones nuevas en producción", "Cuando importan el posicionamiento en buscadores o la carga muy rápida. Un panel administrativo detrás de un inicio de sesión suele estar bien como SPA con Vite"],
          ["PWA (aplicación web progresiva)", "Sitio instalable que funciona sin conexión", "Madura", "Cuando el sitio debe instalarse como app y tener uso sin red"],
          ["WebAssembly (Wasm)", "Código de otros lenguajes (Rust, C++) ejecutándose en el navegador casi a velocidad nativa", "Madura en navegadores", "Para tareas muy pesadas: edición de imagen o video, juegos, cálculo científico. No para pantallas de formularios"],
          ["WebXR", "Realidad aumentada y virtual en el navegador", "Emergente; el soporte varía según dispositivo y navegador", "Para experiencias inmersivas específicas, verificando antes la compatibilidad"],
          ["IA en aplicaciones web", "Modelos de lenguaje o visión consumidos desde una aplicación", "En evolución muy rápida", "Cuando aporte valor concreto. Se llaman desde el servidor, nunca con la clave en el navegador"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un ejemplo: la misma lista con TanStack Query</h3>
      <p className="my-4">
        Cuando una librería se encarga de cargar, reintentar, cancelar y cachear, buena parte del código manual
        desaparece. Aún así, entender el código manual de la página del CRUD es lo que permite apreciar (y depurar) lo que
        la librería hace por debajo. Adoptar una tecnología sin comprender lo que automatiza es el riesgo habitual.
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
  if (isError) return <Alert severity="error" action={<Button onClick={refetch}>Reintentar</Button>}>No se pudo cargar.</Alert>;

  return <TablaMaterias materias={materias} alEliminar={(m) => eliminar.mutate(m.id)} />;
}

// En main.jsx hace falta envolver la aplicación:
// const queryClient = new QueryClient();
// <QueryClientProvider client={queryClient}><App /></QueryClientProvider>`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una lección real: lo nuevo también falla</h3>
      <Callout title="Las tecnologías nuevas traen riesgos nuevos" variant="callout-warning">
        <p className="mb-0">
          Hace poco se publicaron vulnerabilidades graves en los React Server Components, una de las novedades más
          celebradas del ecosistema, incluida una que permitía ejecutar código de forma remota sin autenticación. Se
          corrigieron en versiones de parche y quienes mantenían sus dependencias al día quedaron protegidos. La enseñanza
          no es evitar lo nuevo, sino adoptarlo con conciencia: leer los avisos de seguridad, actualizar las dependencias
          con regularidad (<code>npm outdated</code>, <code>npm audit</code>) y no tratar una novedad como «segura por ser
          reciente».
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Otras tecnologías emergentes vistas desde JavaScript</h3>
      <p className="my-4">
        Las tecnologías de la presentación del módulo no son ajenas a lo aprendido: casi todas se consumen o se controlan
        mediante una interfaz web que habla con una API.
      </p>
      <CompareTable
        headers={["Tecnología emergente", "Cómo se conecta con lo aprendido"]}
        rows={[
          ["Internet de las cosas (IoT)", "Un panel como el de esta clase muestra datos de sensores que llegan por una API o por WebSockets. El CRUD sería el módulo de dispositivos"],
          ["Inteligencia artificial", "Una pantalla con un formulario envía un texto a un servidor, que consulta un modelo y devuelve una respuesta que la interfaz dibuja. Fetch y los estados de carga y error son los mismos"],
          ["Realidad aumentada y virtual", "WebXR y librerías como Three.js o A-Frame usan JavaScript y se integran con React"],
          ["Blockchain", "Las aplicaciones descentralizadas tienen un frontend en React que se comunica con billeteras y contratos; el patrón de peticiones asíncronas es parecido"],
          ["Robótica y domótica", "Paneles web para controlar y monitorear equipos: botones, estados y peticiones a una API"],
        ]}
      />
    </section>
  );
}
