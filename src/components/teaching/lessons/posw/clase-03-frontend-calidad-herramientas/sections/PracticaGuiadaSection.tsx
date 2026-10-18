import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada bloque corresponde a una página de la clase. Se responde con palabras propias y las pistas se piden solo si hacen falta."}</p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Frontend: tecnologías y frameworks"}</h3>
      <PracticeExercise
        prompt="Dibuja mentalmente la separación frontend/backend de una app de mensajería. ¿Qué corre en el navegador y qué en el servidor? ¿Cómo se comunican?"
        hints={[
          "UI y fetch en navegador",
          "BD y lógica en servidor",
          "HTTP + JSON",
        ]}
        expectedKeywords={["navegador", "servidor", "API", "HTTP"]}
        successMessage="Correcto. Frontend: UI, estado local, fetch. Backend: persistencia, auth, reglas de negocio. Comunicación por API REST."
      />
      <CodeChallenge
        title="Completar características de cada framework"
        template={`React usa {{blank1}} para mezclar HTML en JS
Angular usa {{blank2}} por defecto
Vue 3 expone lógica reutilizable con {{blank3}} API
Svelte compila en {{blank4}} time sin Virtual DOM runtime`}
        blanks={[
          { id: "blank1", answer: "JSX", placeholder: "sintaxis" },
          { id: "blank2", answer: "TypeScript", placeholder: "lenguaje" },
          { id: "blank3", answer: "Composition", placeholder: "API" },
          { id: "blank4", answer: "build", placeholder: "tiempo" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Un proyecto necesita SEO fuerte y el equipo tiene experiencia en React. ¿Qué framework base y meta-framework se elegiría según el árbol de decisión?"
          hints={["SSR para crawlers", "Meta-framework de React"]}
          expectedKeywords={["React", "Next.js", "SSR", "SEO"]}
          successMessage="Correcto. React como base + Next.js para server-side rendering e indexación en buscadores."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué no se debe calcular el precio final con descuento solo en el frontend antes de enviar el pago?"
          hints={["Cliente manipulable", "Fuente de verdad", "Validación en servidor"]}
          expectedKeywords={["backend", "validación", "manipular", "servidor"]}
          successMessage="Correcto. El frontend es manipulable; el backend debe recalcular y validar precios y stock antes de procesar el pago."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Compara React y Angular: ¿cuál es librería vs framework completo y qué implica para un proyecto nuevo?"
          hints={["React = decisiones adicionales", "Angular = todo integrado", "Curva de aprendizaje"]}
          expectedKeywords={["librería", "framework", "routing", "TypeScript"]}
          successMessage="Correcto. React es librería (eliges routing/estado/build); Angular es framework opinionado con TS, módulos y DI integrados."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"TypeScript"}</h3>
      <CodeChallenge
        title="Ordenar el flujo de desarrollo TypeScript"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}
5. {{blank5}}`}
        blanks={[
          {
            id: "blank1",
            answer: "escribes .ts con tipos",
            placeholder: "paso a",
          },
          {
            id: "blank2",
            answer: "el editor muestra error de tipo",
            placeholder: "paso b",
          },
          {
            id: "blank3",
            answer: "tsc genera JavaScript",
            placeholder: "paso c",
          },
          {
            id: "blank4",
            answer: "el bundler sirve al navegador",
            placeholder: "paso d",
          },
          {
            id: "blank5",
            answer: "ejecutas tests en Node",
            placeholder: "paso e",
          },
        ]}
      />
      <PracticeExercise
        prompt='Explica por qué `calcularTotal("4500", 3)` falla en TypeScript pero no en JavaScript. ¿En qué capa se detecta cada error?'
        hints={[
          "Multiplicación vs concatenación",
          "Compilación vs runtime",
          "Firmas number",
        ]}
        expectedKeywords={["compilación", "runtime", "string", "number"]}
        successMessage="Correcto. JS concatena en runtime; TS rechaza el argumento incompatible en compilación."
      />
      <CodeChallenge
        title="Completar la firma genérica"
        template="function primerElemento<T>(arr: T[]): {{blank1}}"
        blanks={[
          {
            id: "blank1",
            answer: "T | undefined",
            placeholder: "tipo de retorno",
          },
        ]}
      />
      <PracticeExercise
        prompt="¿Qué tipo infiere TypeScript en `primerElemento([1, 2, 3])`? ¿Por qué los genéricos son útiles frente a usar `any`?"
        hints={[
          "Inferencia automática",
          "Conserva el tipo del array",
          "number",
        ]}
        expectedKeywords={["number", "genérico", "inferencia", "tipo"]}
        successMessage="Correcto. Infiere `number` y mantiene type safety sin perder flexibilidad."
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué TypeScript no elimina la necesidad de validar respuestas JSON del servidor en runtime? ¿Qué capa cubre cada una?"
          hints={["Tipos desaparecen al compilar", "Compilación vs ejecución", "Zod o similar"]}
          expectedKeywords={["runtime", "compilación", "validación", "tipos"]}
          successMessage="Correcto. TS cubre desarrollo; la validación runtime cubre datos externos en ejecución."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un colega propone tipar toda respuesta de `fetch` como `any` para ir más rápido. ¿Qué riesgo hay y qué alternativa propones?"
          hints={["Contrato roto con API", "interface Producto", "ApiResponse<T>"]}
          expectedKeywords={["any", "interface", "contrato", "runtime"]}
          successMessage="Correcto. `any` anula los beneficios; interfaces y genéricos documentan el contrato REST."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo se usaría `type` en lugar de `interface`? Da un ejemplo de unión de tipos."
          hints={["Uniones", "Producto | Error", "No solo objetos"]}
          expectedKeywords={["type", "unión", "interface", "objeto"]}
          successMessage="Correcto. `interface` para forma de objetos; `type` para uniones como `Producto | ErrorApi`."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"React: fundamentos"}</h3>
      <PracticeExercise
        prompt='Convierte este HTML a JSX válido: <div class="catalogo"><h2>Productos</h2><img src={url}></div>'
        hints={["className", "self-closing img", "llaves para url"]}
        expectedKeywords={["className", "img", "src"]}
        successMessage="Correcto. className reemplaza class; img debe ser self-closing con src en llaves."
      />
      <CodeChallenge
        title="Completar el render de lista"
        template="productos.map(p => <TarjetaProducto key={{blank1}} nombre={p.nombre} ... />)"
        blanks={[{ id: "blank1", answer: "p.id", placeholder: "key estable" }]}
      />
      <PracticeExercise
        prompt="Compara el flujo de datos en React (props hacia abajo) con @Input/@Output en Angular. ¿Qué similitudes y diferencias encuentras?"
        hints={["Props ≈ Input", "Callback ≈ Output", "JSX vs templates"]}
        expectedKeywords={["props", "padre", "hijo", "callback"]}
        successMessage="Correcto. Ambos fluyen datos del padre al hijo; React usa callbacks en lugar de EventEmitter."
      />
      <CodeChallenge
        title="Completar la actualización del contador"
        template="setCuenta(c => {{blank1}})"
        blanks={[{ id: "blank1", answer: "c + 1", placeholder: "nuevo valor" }]}
      />
      <CodeChallenge
        title="Ordenar el ciclo de useEffect con [id]"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}`}
        blanks={[
          { id: "blank1", answer: "render inicial", placeholder: "paso a" },
          { id: "blank2", answer: "efecto fetch", placeholder: "paso b" },
          { id: "blank3", answer: "id cambia → limpieza → nuevo efecto", placeholder: "paso c" },
          { id: "blank4", answer: "desmontaje ejecuta limpieza", placeholder: "paso d" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué `setCuenta(cuenta + 1)` puede fallar si hay múltiples actualizaciones rápidas? ¿Qué forma es más segura?"
          hints={["Estado asíncrono", "Forma funcional", "c => c + 1"]}
          expectedKeywords={["funcional", "setter", "asíncrono"]}
          successMessage="Correcto. La forma funcional setCuenta(c => c + 1) usa el valor más reciente del estado."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un useEffect hace fetch pero no tiene array de dependencias ni cleanup. ¿Qué bugs pueden aparecer?"
          hints={["Bucle infinito", "Race condition", "Warning al desmontar"]}
          expectedKeywords={["infinito", "desmontar", "dependencias"]}
          successMessage="Correcto. Sin deps puede buclear; sin cleanup actualiza estado tras desmontar o aplica datos obsoletos."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué usar p.id como key en lugar del índice del array en una lista de productos editable?"
          hints={["Reconciliación", "Reordenar o borrar", "Virtual DOM"]}
          expectedKeywords={["key", "id", "reconciliación", "índice"]}
          successMessage="Correcto. El índice cambia al reordenar; React reutiliza nodos incorrectamente."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Angular: fundamentos"}</h3>
      <PracticeExercise
        prompt="Dibuja el árbol de componentes de una tienda online: AppComponent, navbar, catálogo con tarjetas y carrito. ¿Cuál es presentacional y cuál contenedor?"
        hints={[
          "TarjetaProducto recibe @Input",
          "Catalogo carga datos",
          "Separación de responsabilidades",
        ]}
        expectedKeywords={["AppComponent", "Catalogo", "Tarjeta", "Input"]}
        successMessage="Correcto. TarjetaProducto es presentacional; Catalogo orquesta datos y pasa props."
      />
      <CodeChallenge
        title="Completar la sintaxis de binding"
        template={`Mostrar imagen dinámica imagenUrl → {{blank1}}
Click en guardar → {{blank2}}
Two-way en campo búsqueda → {{blank3}}`}
        blanks={[
          {
            id: "blank1",
            answer: '[src]="imagenUrl"',
            placeholder: "property binding",
          },
          {
            id: "blank2",
            answer: '(click)="guardar()"',
            placeholder: "event binding",
          },
          {
            id: "blank3",
            answer: '[(ngModel)]="busqueda"',
            placeholder: "two-way binding",
          },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué Angular se considera framework completo y React librería? Enumera al menos 3 piezas que Angular trae integradas."
        hints={["HttpClient", "Router", "FormsModule", "DI"]}
        expectedKeywords={["routing", "HTTP", "forms", "framework"]}
        successMessage="Correcto. Angular incluye routing, HTTP, forms, DI y testing integrados."
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué no se debe mutar un @Input() en el componente hijo? ¿Cómo se comunica un cambio al padre?"
          hints={["Solo lectura", "@Output EventEmitter", "Flujo unidireccional"]}
          expectedKeywords={["Input", "Output", "emit", "padre"]}
          successMessage="Correcto. Los inputs son de solo lectura; emites eventos con @Output al padre."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un componente suscribe getProductos() en ngOnInit pero nunca hace unsubscribe. ¿Qué problema causa y cómo lo solucionas?"
          hints={["Memory leak", "ngOnDestroy", "async pipe", "takeUntilDestroyed"]}
          expectedKeywords={["memory", "ngOnDestroy", "unsubscribe", "async"]}
          successMessage="Correcto. Suscripciones sin limpiar acumulan memoria; usa ngOnDestroy o async pipe."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué sintaxis se usaría para: mostrar precio formateado en COP, cargar lista con *ngFor y manejar click en botón agregar?"
          hints={["currency pipe", "*ngFor", "(click)"]}
          expectedKeywords={["currency", "ngFor", "click"]}
          successMessage="Correcto. currency:'COP' para precio, *ngFor para lista, (click) para evento."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Herramientas de desarrollo"}</h3>
      <CodeChallenge
        title="Completar el mapeo de puertos"
        template={"docker run -d -p {{blank1}}:80 --name web nginx:alpine"}
        blanks={[{ id: "blank1", answer: "8080", placeholder: "puerto host" }]}
      />
      <PracticeExercise
        prompt="¿Por qué Docker tiene mayor reproducibilidad que XAMPP si ambos corren en un laptop?"
        hints={["Imagen fija", "Versiones declaradas", "Mismo Dockerfile en todo el equipo"]}
        expectedKeywords={["imagen", "reproducible", "versión", "contenedor"]}
        successMessage="Correcto. Docker fija versiones en la imagen; XAMPP depende de lo instalado en cada máquina."
      />
      <CodeChallenge
        title="Ordenar el build React en Docker"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}
5. {{blank5}}`}
        blanks={[
          { id: "blank1", answer: "FROM node:20-alpine AS build", placeholder: "paso a" },
          { id: "blank2", answer: "COPY package*.json", placeholder: "paso b" },
          { id: "blank3", answer: "npm run build", placeholder: "paso c" },
          { id: "blank4", answer: "copiar dist/ a imagen Nginx", placeholder: "paso d" },
          { id: "blank5", answer: "docker build -t app .", placeholder: "paso e" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Dónde debe ir index.php para que Apache en XAMPP lo sirva por defecto? ¿Qué pasa si se guarda en la carpeta home?"
          hints={["Document root", "htdocs"]}
          expectedKeywords={["htdocs", "document root"]}
          successMessage="Correcto. Solo htdocs es el document root; fuera de ahí Apache no sirve el archivo."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Principios SOLID"}</h3>
      <PracticeExercise
        prompt="Enumera tres razones para cambiar en un PedidoService que calcula totales, envía emails y escribe en PostgreSQL. ¿Cómo aplicarías SRP?"
        hints={["Cambio de reglas de descuento", "Cambio de proveedor SMTP", "Cambio de motor de BD"]}
        expectedKeywords={["SRP", "repositorio", "EmailService", "razón"]}
        successMessage="Correcto. Cada motivo de cambio va en su propia clase: entidad/servicio de negocio, repositorio, notificador."
      />
      <CodeChallenge
        title="Añade PagoPSE sin modificar ProcesadorPago"
        template={`interface MetodoPago {
  procesar(monto: number): void;
}

class PagoPSE implements {{blank1}} {
  procesar(monto: number): void {
    console.log(\`PSE: $\${monto}\`);
  }
}`}
        blanks={[{ id: "blank1", answer: "MetodoPago", placeholder: "interface a implementar" }]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Un AuthService hace new JwtTokenGenerator() hardcodeado. ¿Qué principio viola y cómo lo corregirías?"
          hints={["Abstracción", "Inyección en constructor", "DIP"]}
          expectedKeywords={["DIP", "ITokenGenerator", "inyectar"]}
          successMessage="Correcto. Define ITokenGenerator, inyéctalo en AuthService y elige la implementación al componer la app."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un Notificador tiene if (canal === 'email' | 'sms' | 'push'). ¿Qué principio se aplica al añadir WhatsApp sin editar el if central?"
          hints={["Interface por canal", "Nueva clase implementa contrato", "OCP"]}
          expectedKeywords={["OCP", "interface", "CanalNotificacion"]}
          successMessage="Correcto. OCP extiende con nuevas clases; el procesador central solo delega."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Una clase Usuario valida email, ejecuta INSERT y envía SMTP. Nombra al menos dos clases del refactor SRP."
          hints={["Entidad vs persistencia", "Servicio de notificaciones", "Repositorio"]}
          expectedKeywords={["SRP", "UsuarioRepository", "EmailService"]}
          successMessage="Correcto. SRP separa entidad, repositorio y servicio de notificaciones por motivo de cambio."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Convenciones de nomenclatura"}</h3>
      <PracticeExercise
        prompt="Renombra según convenciones TS: class usr_svc { getPr(id) {} } → clase, método y parámetro correctos."
        hints={["PascalCase para clase", "camelCase para método", "nombre de dominio expresivo"]}
        expectedKeywords={["UsuarioService", "getProducto", "productoId"]}
        successMessage="Correcto. class UsuarioService { getProducto(productoId: number) {} }"
      />
      <div className="my-8">
        <CodeChallenge
          title="Elige la convención correcta"
          template={`Componente React → {{blank1}}
Columna SQL → {{blank2}}
URL de API → {{blank3}}
Constante global → {{blank4}}`}
          blanks={[
            { id: "blank1", answer: "PascalCase", placeholder: "React" },
            { id: "blank2", answer: "snake_case", placeholder: "SQL" },
            { id: "blank3", answer: "kebab-case", placeholder: "URL" },
            { id: "blank4", answer: "UPPER_SNAKE_CASE", placeholder: "constante" },
          ]}
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Una columna SQL se llama precio_unitario y el JSON de la API precioUnitario. ¿Es inconsistencia? Justifica."
          hints={["Convención por capa", "Mapeo en repositorio/DTO", "README del equipo"]}
          expectedKeywords={["capa", "camelCase", "snake_case", "mapeo"]}
          successMessage="Correcto. precio_unitario en BD y precioUnitario en JSON no es inconsistencia: es convención por capa."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Corrige el endpoint GET /getAllProducts y el campo JSON product_name según convenciones REST."
          hints={["Sustantivos plurales", "kebab-case en URL", "camelCase en JSON"]}
          expectedKeywords={["productos", "nombreProducto", "kebab-case", "camelCase"]}
          successMessage="Correcto. GET /api/v1/productos y nombreProducto en JSON — REST idiomático y camelCase coherente."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"IA en el desarrollo web"}</h3>
      <PracticeExercise
        prompt="¿Por qué 'no entiendo el código pero compila' es deuda técnica? Da un ejemplo de bug oculto en código generado por IA."
        hints={["Condición de borde", "Null sin validar", "API inventada"]}
        expectedKeywords={["deuda", "bug", "entender", "test"]}
        successMessage="Correcto. Sin comprensión no se puede depurar ni extender; los tests y la lectura línea por línea son obligatorios."
      />
      <PracticeExercise
        prompt="Ordena mentalmente el flujo: prompt → código → entender → tests → lint → review → merge. ¿Qué paso saltarías NUNCA?"
        hints={["Entender antes de integrar", "Review humano"]}
        expectedKeywords={["entender", "review", "tests"]}
        successMessage="Correcto. Nunca saltar entender el código ni el code review humano."
      />
    </section>
  );
}
