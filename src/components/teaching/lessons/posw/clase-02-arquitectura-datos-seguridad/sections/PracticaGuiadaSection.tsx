import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada bloque corresponde a una página de la clase. Se responde con palabras propias y las pistas se piden solo si hacen falta."}</p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Principios REST"}</h3>
      <PracticeExercise
        prompt="¿Por qué POST /login que guarda sesión en memoria del servidor viola Stateless? ¿Qué alternativa RESTful se usaría?"
        hints={[
          "Servidor recuerda estado",
          "JWT en cada request",
          "Sin sticky sessions",
        ]}
        expectedKeywords={["stateless", "JWT", "token", "sesión"]}
        successMessage="Correcto. Stateless exige que cada request sea autosuficiente; JWT en Authorization evita sesión server-side."
      />
      <CodeChallenge
        title="Ordenar los niveles de Richardson (menor a mayor RESTfulness)"
        template={`Nivel más bajo: {{blank1}}
Siguiente: {{blank2}}
Siguiente: {{blank3}}
Nivel más alto: {{blank4}}`}
        blanks={[
          {
            id: "blank1",
            answer: "un solo URI con POST para todo",
            placeholder: "nivel 0",
          },
          {
            id: "blank2",
            answer: "múltiples URIs por recurso",
            placeholder: "nivel 1",
          },
          {
            id: "blank3",
            answer: "verbos HTTP y códigos de estado correctos",
            placeholder: "nivel 2",
          },
          {
            id: "blank4",
            answer: "HATEOAS con _links",
            placeholder: "nivel 3",
          },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Una API usa GET /api/getLibros y POST /api/reservarLibro. ¿Qué constraints de Uniform Interface viola y cómo los corregirías?"
          hints={["URIs con sustantivos", "Identificación de recursos", "Verbos HTTP"]}
          expectedKeywords={["recurso", "GET", "POST", "libros", "reservas"]}
          successMessage="Correcto. Usar GET /api/v1/libros y POST /api/v1/reservas identifica recursos, no acciones en la URI."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué hardcodear 15 URLs en una app móvil contradice HATEOAS? ¿Qué incluirías en la respuesta JSON para evitarlo?"
          hints={["_links", "href", "Cambios de ruta sin actualizar app"]}
          expectedKeywords={["HATEOAS", "_links", "href", "hypermedia"]}
          successMessage="Correcto. _links guían al cliente a acciones disponibles; cambios de ruta no rompen clientes que navegan hypermedia."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Clasifica esta API en Richardson: usa GET/POST/PUT con códigos 200/404/422 correctos pero sin _links en ninguna respuesta. ¿Qué falta para nivel 3?"
          hints={["Verbos + status = nivel 2", "HATEOAS = nivel 3"]}
          expectedKeywords={["nivel 2", "HATEOAS", "_links", "nivel 3"]}
          successMessage="Correcto. Es nivel 2; falta HATEOAS con _links en respuestas para alcanzar nivel 3."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Arquitectura de APIs: REST, GraphQL y gRPC"}</h3>
      <CodeChallenge
        title="Completar las capas REST"
        template={`{{blank1}} recibe HTTP y traduce a llamadas
{{blank2}} contiene la lógica de negocio
{{blank3}} accede a la base de datos`}
        blanks={[
          { id: "blank1", answer: "Controller", placeholder: "capa HTTP" },
          { id: "blank2", answer: "Service", placeholder: "negocio" },
          { id: "blank3", answer: "Repository", placeholder: "persistencia" },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué GraphQL puede sufrir N+1 y cómo ayuda DataLoader? Responde en 2–3 frases."
        hints={["Resolvers anidados", "Batch de IDs", "Una query por tipo"]}
        expectedKeywords={["N+1", "DataLoader", "batch", "resolver"]}
        successMessage="Correcto. DataLoader agrupa y deduplica cargas de entidades relacionadas en una sola consulta por tipo."
      />
      <PracticeExercise
        prompt="Dibuja mentalmente el flujo Cliente → Gateway → Controller → Service → Repository → BD para POST /pedidos. ¿Qué capa valida stock y qué capa ejecuta SQL?"
        hints={["Negocio en Service", "SQL en Repository"]}
        expectedKeywords={["Service", "Repository", "stock"]}
        successMessage="Correcto. El servicio valida stock y reglas de negocio; el repositorio ejecuta persistencia."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Backend: tecnologías y frameworks"}</h3>
      <PracticeExercise
        prompt="Explica la analogía del restaurante para una app de reservas de hotel. ¿Qué hace el frontend, qué hace el backend y qué papel tiene la API?"
        hints={[
          "Frontend = salón/UX",
          "Backend = cocina/lógica",
          "API = mesero/contrato",
        ]}
        expectedKeywords={[
          "frontend",
          "backend",
          "API",
          "lógica",
          "persistencia",
        ]}
        successMessage="Correcto. El frontend muestra la UI; la API traduce pedidos HTTP; el backend procesa reglas y datos."
      />
      <CodeChallenge
        title="Ordenar el flujo de GET /api/v1/habitaciones"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}
5. {{blank5}}`}
        blanks={[
          {
            id: "blank1",
            answer: "request HTTP del navegador",
            placeholder: "paso a",
          },
          {
            id: "blank2",
            answer: "controlador recibe request",
            placeholder: "paso b",
          },
          {
            id: "blank3",
            answer: "servicio aplica reglas de disponibilidad",
            placeholder: "paso c",
          },
          {
            id: "blank4",
            answer: "consulta SQL en modelo",
            placeholder: "paso d",
          },
          {
            id: "blank5",
            answer: "respuesta JSON al cliente",
            placeholder: "paso e",
          },
        ]}
      />
      <CodeChallenge
        title="Completar el árbol de decisión de stack"
        template={`Equipo solo conoce Python + proyecto ML → {{blank1}}
Banca regulada + Java en el equipo → {{blank2}}
CMS con e-commerce → {{blank3}}`}
        blanks={[
          { id: "blank1", answer: "Python + FastAPI", placeholder: "stack" },
          { id: "blank2", answer: "Spring Boot", placeholder: "stack" },
          { id: "blank3", answer: "PHP Laravel", placeholder: "stack" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué el backend debe validar datos aunque el frontend ya los validó? Da un ejemplo de ataque si omites validación en servidor."
          hints={["Cliente manipulable", "curl/Postman directo", "Precio negativo en POST"]}
          expectedKeywords={["servidor", "validación", "manipulable", "cliente"]}
          successMessage="Correcto. Cualquier usuario puede enviar requests directos al API; el servidor es la fuente de verdad."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un equipo solo conoce JavaScript y necesita lanzar una API REST en 6 semanas. ¿Qué stack se recomendaría y por qué NO se elegiría Go desde cero?"
          hints={["Productividad del equipo", "Curva de aprendizaje", "NestJS o Express"]}
          expectedKeywords={["Node.js", "NestJS", "Express", "experiencia", "equipo"]}
          successMessage="Correcto. La experiencia del equipo suele pesar más que benchmarks teóricos de otro lenguaje."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="En la arquitectura en capas, ¿qué hace un controlador y qué NO debería hacer? ¿Dónde va la lógica de negocio?"
          hints={["Orquesta HTTP", "No SQL directo", "Capa de servicio"]}
          expectedKeywords={["controlador", "servicio", "delega", "HTTP"]}
          successMessage="Correcto. El controlador recibe el request y delega; la lógica de negocio vive en la capa de servicio."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Bases de datos: SQL, NoSQL y modelado relacional"}</h3>
      <CodeChallenge
        title="¿A qué familia pertenece cada comando?"
        template={`CREATE TABLE → {{blank1}}
SELECT → {{blank2}}
GRANT → {{blank3}}
COMMIT → {{blank4}}`}
        blanks={[
          { id: "blank1", answer: "DDL", placeholder: "CREATE" },
          { id: "blank2", answer: "DML", placeholder: "SELECT" },
          { id: "blank3", answer: "DCL", placeholder: "GRANT" },
          { id: "blank4", answer: "TCL", placeholder: "COMMIT" },
        ]}
      />
      <CodeChallenge
        title="Completar la consulta GROUP BY"
        template={`SELECT {{blank1}}, AVG(precio) FROM productos GROUP BY categoria_id HAVING {{blank2}} > 3`}
        blanks={[
          { id: "blank1", answer: "categoria_id", placeholder: "columnas SELECT" },
          { id: "blank2", answer: "COUNT(*)", placeholder: "condición HAVING" },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué una transferencia bancaria necesita TCL y las propiedades ACID? Da un escenario de fallo sin transacción."
        hints={["Dos UPDATE", "Timeout entre ellos", "ROLLBACK"]}
        expectedKeywords={["transacción", "ROLLBACK", "atomicidad", "COMMIT"]}
        successMessage="Correcto. Sin transacción, un débito sin crédito deja datos inconsistentes; ACID garantiza todo-o-nada."
      />
      <PracticeExercise
        prompt="Modela usuarios, pedidos y detalle_pedido indicando PK y FK entre tablas. ¿Por qué detalle_pedido suele tener clave compuesta o surrogate id?"
        hints={[
          "pedido_id FK",
          "producto_id FK",
          "Un pedido tiene varios ítems",
        ]}
        expectedKeywords={["FK", "PK", "pedido", "detalle"]}
        successMessage="Correcto. detalle_pedido enlaza pedidos con productos; la FK garantiza integridad referencial."
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Un equipo quiere guardar logs de clics con campos que cambian cada semana. ¿SQL o NoSQL? ¿Qué motor del caso e-commerce políglota se usaría?"
          hints={["Esquema variable", "MongoDB en el brief", "PostgreSQL para pedidos"]}
          expectedKeywords={["NoSQL", "MongoDB", "logs"]}
          successMessage="Correcto. Logs variables encajan en documentos; pedidos y stock siguen en SQL con ACID."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Caché en aplicaciones web"}</h3>
      <PracticeExercise
        prompt="De 10 000 requests, 9 200 fueron HIT y 800 MISS. Calcula el Cache Hit Rate. ¿Cumple el objetivo de > 90%? ¿Qué implica para la base de datos?"
        hints={["Hits / Total × 100", "9200/10000", "Menos consultas a BD"]}
        expectedKeywords={["92%", "90%", "HIT", "base de datos"]}
        successMessage="Correcto. Hit Rate = 92%; cumple > 90% y reduce drásticamente consultas a la fuente original."
      />
      <CodeChallenge
        title="Completar las directivas Cache-Control"
        template={`Asset con hash en nombre → Cache-Control: max-age=31536000, public, {{blank1}}
Token de sesión → Cache-Control: {{blank2}}
Catálogo en Redis → TTL {{blank3}} segundos (5 min)`}
        blanks={[
          { id: "blank1", answer: "immutable", placeholder: "directiva" },
          { id: "blank2", answer: "no-store", placeholder: "directiva" },
          { id: "blank3", answer: "300", placeholder: "segundos" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué header HTTP se usaría para un token de sesión en GET /api/v1/usuario/me y por qué?"
          hints={["no-store", "Datos sensibles", "No compartir entre usuarios"]}
          expectedKeywords={["no-store", "private", "sensible", "token"]}
          successMessage="Correcto. no-store (y private) evita que proxies o navegador persistan datos de sesión."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Actualizas el precio de un producto en BD pero los usuarios siguen viendo el precio viejo. ¿Qué falló en la estrategia de caché y cómo lo corriges?"
          hints={["Clave Redis producto:42", "Invalidación event-based", "del al UPDATE"]}
          expectedKeywords={["invalidar", "Redis", "del", "TTL"]}
          successMessage="Correcto. Falta invalidar la clave al actualizar; await client.del(`producto:${id}`) tras el UPDATE."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo se elegiría CDN vs Redis server-side para acelerar GET /api/v1/articulos con 50k req/hora?"
          hints={["CDN = assets estáticos cerca del usuario", "Redis = respuestas API dinámicas", "80% mismos artículos"]}
          expectedKeywords={["Redis", "servidor", "API", "CDN", "estático"]}
          successMessage="Correcto. Redis cache-aside para la API dinámica; CDN para imágenes/assets; navegador con headers para estáticos."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Protocolos de seguridad web"}</h3>
      <PracticeExercise
        prompt="¿Por qué HTTP se llama stateless y cómo se mantiene entonces una sesión de usuario en una web?"
        hints={[
          "Cada petición es independiente",
          "Cookies, tokens o sesiones en aplicación",
        ]}
        expectedKeywords={["stateless", "cookie", "token", "aplicación"]}
        successMessage="Correcto. HTTP no guarda estado entre peticiones; la aplicación simula sesión con cookies, JWT u otros mecanismos."
      />
      <CodeChallenge
        title="Completar puertos y protocolos"
        template="HTTPS usa puerto {{blank1}} y cifra con {{blank2}}; HTTP usa puerto {{blank3}} sin cifrado."
        blanks={[
          { id: "blank1", answer: "443", placeholder: "puerto HTTPS" },
          { id: "blank2", answer: "TLS", placeholder: "protocolo de cifrado" },
          { id: "blank3", answer: "80", placeholder: "puerto HTTP" },
        ]}
      />
      <PracticeExercise
        prompt="Nombra los tres beneficios de HTTPS (confidencialidad, integridad, autenticación) con un ejemplo de ataque que cada uno mitiga."
        hints={["Sniffing → confidencialidad", "MITM alteración → integridad", "Impostor → autenticación"]}
        expectedKeywords={["confidencialidad", "integridad", "autenticación", "MITM"]}
        successMessage="Correcto. Confidencialidad evita lectura; integridad detecta alteración; autenticación verifica identidad del servidor."
      />
      <p className="my-4">{"Antes de pasar a la siguiente clase, comprobar que se pueden aplicar los conceptos del tema."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el handshake TLS 1.3: (a) Finished cliente, (b) ClientHello, (c) canal cifrado activo, (d) ServerHello + Certificate, (e) Finished servidor. Indica el orden correcto."
          hints={["Empieza con ClientHello", "Canal cifrado es el último estado"]}
          expectedKeywords={["b", "d", "e", "a", "c"]}
          successMessage="Correcto. Orden: (b) ClientHello → (d) ServerHello+Certificate → (e) Finished servidor → (a) Finished cliente → (c) canal cifrado."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué SSL 3.0 y TLS 1.0 no deben usarse en 2025 aunque todavía funcionen?"
          hints={["Vulnerabilidades conocidas", "POODLE, obsolescencia desde 2020"]}
          expectedKeywords={["obsoleto", "vulnerabilidad", "POODLE", "TLS 1.2"]}
          successMessage="Correcto. Versiones antiguas tienen vulnerabilidades conocidas y están oficialmente obsoletas; usa TLS 1.2 o 1.3."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo es aceptable HTTP sin TLS y cuándo es obligatorio HTTPS?"
          hints={["localhost vs internet", "staging público vs desarrollo local"]}
          expectedKeywords={["localhost", "producción", "staging", "HTTPS"]}
          successMessage="Correcto. HTTP solo en localhost o redes aisladas; HTTPS obligatorio en producción y cualquier entorno accesible desde internet."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Tokens y autenticación"}</h3>
      <CodeChallenge
        title="Completar el mecanismo de envío"
        template={`JWT en SPA → Authorization: {{blank1}} eyJ...
API Key → {{blank2}}: sk_live_abc
Sesión web → header {{blank3}}: sid=abc123`}
        blanks={[
          { id: "blank1", answer: "Bearer", placeholder: "esquema" },
          { id: "blank2", answer: "X-API-Key", placeholder: "header" },
          { id: "blank3", answer: "Cookie", placeholder: "header" },
        ]}
      />
      <PracticeExercise
        prompt="Una app necesita 'Login con Google' y acceso al calendario del usuario. ¿Qué mecanismo se usaría? ¿Qué roles intervienen y qué scopes pedirías?"
        hints={["No es JWT solo", "OAuth Authorization Code", "Scopes limitan permisos"]}
        expectedKeywords={["OAuth", "Authorization Server", "scope", "calendar"]}
        successMessage="Correcto. OAuth 2.0 con scopes como calendar.readonly; roles: usuario (Resource Owner), la app (Client), Google (Auth Server), Calendar API (Resource Server)."
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Decodifica mentalmente un JWT sin la secret key: ¿qué se vería en header y payload? ¿Por qué no se debe guardar la contraseña del usuario ahí?"
          hints={["Base64URL no es cifrado", "jwt.io decodifica sin secret", "Solo claims no sensibles"]}
          expectedKeywords={["Base64", "decodificar", "no cifrado", "contraseña"]}
          successMessage="Correcto. Header y payload son legibles sin la secret; la firma solo prueba integridad. Nunca PII ni contraseñas en claims."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué el refresh token no debe guardarse en localStorage accesible desde JavaScript?"
          hints={["XSS roba tokens del DOM/storage", "HttpOnly cookie", "Duración larga del refresh"]}
          expectedKeywords={["XSS", "localStorage", "HttpOnly", "refresh"]}
          successMessage="Correcto. localStorage es accesible por scripts maliciosos (XSS). Refresh token debe ir en cookie HttpOnly o almacenamiento seguro del SO."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un partner server-to-server consume la API con cuota mensual. ¿JWT, OAuth, API Key o sesión? ¿Dónde envías la credencial?"
          hints={["Identifica la app, no el usuario", "Header, no query string"]}
          expectedKeywords={["API Key", "X-API-Key", "header"]}
          successMessage="Correcto. API Key en header X-API-Key identifica la aplicación partner; combinar con rate limiting por key."
        />
      </div>
    </section>
  );
}
