import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada bloque corresponde a una página de la clase. Se responde con palabras propias y las pistas se piden solo si hacen falta."}</p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Modelo cliente-servidor"}</h3>
      <PracticeExercise
        prompt="Explica la analogía banco/ventanilla aplicada a GET /api/cuenta/saldo. ¿Quién es cliente, servidor y qué sería la base de datos?"
        hints={[
          "El usuario inicia la petición",
          "El API procesa",
          "La BD almacena saldos",
        ]}
        expectedKeywords={["cliente", "servidor", "base de datos", "petición"]}
        successMessage="Correcto. El cliente solicita; el servidor procesa y consulta la BD; la respuesta vuelve al cliente."
      />
      <CodeChallenge
        title="Ordenar el flujo al cargar una página"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}
5. {{blank5}}
6. {{blank6}}`}
        blanks={[
          { id: "blank1", answer: "resolución DNS", placeholder: "paso a" },
          { id: "blank2", answer: "TCP a puerto 443", placeholder: "paso b" },
          { id: "blank3", answer: "TLS handshake", placeholder: "paso c" },
          { id: "blank4", answer: "GET /productos", placeholder: "paso d" },
          { id: "blank5", answer: "consulta SQL en servidor", placeholder: "paso e" },
          { id: "blank6", answer: "renderizado en navegador", placeholder: "paso f" },
        ]}
      />
      <PracticeExercise
        prompt="Dibuja (o describe) una arquitectura 3 capas para una app de pedidos: React, API Spring Boot, PostgreSQL. ¿Qué capa no debe ser accesible desde internet?"
        hints={[
          "Capa de datos",
          "Solo HTTPS al frontend",
          "API como intermediaria",
        ]}
        expectedKeywords={["PostgreSQL", "datos", "API", "no expuesta"]}
        successMessage="Correcto. La capa de datos (PostgreSQL) nunca debe quedar expuesta directamente a internet."
      />
      <PracticeExercise
        prompt="Al abrir una tienda online en el navegador, ¿cuántos tipos de cliente-servidor distintos intervienen además del HTML inicial? Nombra al menos tres recursos o servicios."
        hints={["Assets estáticos", "API de productos", "Pasarela de pago"]}
        expectedKeywords={["API", "CDN", "imágenes", "JavaScript"]}
        successMessage="Bien. Una página moderna combina HTML, assets, APIs y servicios externos en múltiples requests."
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué es un error de diseño que la app móvil se conecte directo a PostgreSQL en producción?"
          hints={["Credenciales", "Capa de API", "Seguridad"]}
          expectedKeywords={["credenciales", "expuesta", "API", "seguridad"]}
          successMessage="Correcto. Expone credenciales y la BD; la API centraliza lógica y protege los datos."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Enumera en orden los primeros cuatro pasos al escribir https://ejemplo.com/productos en el navegador, desde DNS hasta la petición HTTP."
          hints={["DNS resuelve IP", "TCP puerto 443", "TLS cifra", "GET /productos"]}
          expectedKeywords={["DNS", "TCP", "TLS", "HTTP"]}
          successMessage="Correcto. Sin resolución DNS no hay IP; sin TCP/TLS no hay canal; el renderizado ocurre al final."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuál es la ventaja principal de 3 capas frente a 2 capas cuando el cliente accedía directo a MySQL?"
          hints={["BD detrás de API", "Pool de conexiones", "Credenciales"]}
          expectedKeywords={["API", "BD", "expuesta", "seguridad"]}
          successMessage="Correcto. La API intermedia protege la BD, centraliza lógica y evita exponer credenciales al cliente."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Servicios web"}</h3>
      <PracticeExercise
        prompt="Explica la analogía del ATM: ¿qué parte es el cliente, qué parte es la interfaz estandarizada y qué parte es el sistema interno del banco?"
        hints={[
          "Cliente = quien consume",
          "Interfaz = protocolo del cajero",
          "Interno = validación y persistencia",
        ]}
        expectedKeywords={["cliente", "interfaz", "banco", "ATM"]}
        successMessage="Correcto. El cliente consume la interfaz; el servicio interno ejecuta reglas y accede a datos."
      />
      <PracticeExercise
        prompt="Para el principio D (Dependency Inversion), ¿por qué el servicio no debería importar directamente MySQLRepositorio en su controlador?"
        hints={[
          "Piensa en pruebas con mock",
          "Cambiar de motor de BD sin tocar lógica de negocio",
        ]}
        expectedKeywords={[
          "abstracción",
          "IRepositorio",
          "acoplamiento",
          "test",
        ]}
        successMessage="Correcto. Depender de abstracciones desacopla la lógica de la implementación concreta y facilita pruebas y cambios de persistencia."
      />
      <p className="my-4">{"Antes de pasar a la siguiente clase, comprobar que se pueden aplicar los conceptos del tema."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Enumera dos razones por las que un banco legacy en Java y una app móvil en Kotlin deberían integrarse vía servicio web en lugar de compartir librería nativa."
          hints={[
            "Piensa en plataformas distintas",
            "Interoperabilidad y contrato HTTP",
          ]}
          expectedKeywords={["interoperabilidad", "HTTP", "lenguaje", "contrato"]}
          successMessage="Correcto. La interoperabilidad depende de protocolo y formato, no de compartir el mismo stack o librería nativa."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el flujo: (a) servicio responde con JSON, (b) cliente envía petición HTTP, (c) servicio persiste o consulta datos, (d) servicio valida y ejecuta lógica, (e) cliente muestra resultado. Indica el orden correcto."
          hints={[
            "Empieza con la petición del cliente",
            "Termina con la presentación en el cliente",
          ]}
          expectedKeywords={["b", "d", "c", "a", "e"]}
          successMessage="Correcto. Orden: (b) petición → (d) validar/ejecutar → (c) persistir/consultar → (a) responder JSON → (e) mostrar."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Identifica qué principio SOLID se viola si /usuarios/registro también procesa pagos y envía emails de marketing."
          hints={["Un módulo, una razón para cambiar", "Letra S del acrónimo"]}
          expectedKeywords={["SRP", "Single", "Responsabilidad"]}
          successMessage="Correcto. Viola Single Responsibility: un endpoint con demasiadas responsabilidades distintas."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Tipos de servicios web"}</h3>
      <PracticeExercise
        prompt="Para una API pública de e-commerce consumida por web y Android, ¿SOAP o REST? Justifica con formato, contrato y curva de aprendizaje."
        hints={[
          "JSON es ligero",
          "OpenAPI documenta REST",
          "SOAP es verboso para móvil",
        ]}
        expectedKeywords={["REST", "JSON", "OpenAPI"]}
        successMessage="Correcto. REST+JSON con OpenAPI es el estándar de facto para APIs públicas web y móvil."
      />
      <PracticeExercise
        prompt="¿Por qué gRPC es preferible entre microservicios en el mismo datacenter pero no se expone directo al navegador del usuario?"
        hints={["Protobuf binario", "HTTP/2", "Browsers no hablan gRPC nativo"]}
        expectedKeywords={["protobuf", "HTTP/2", "navegador", "gRPC-Web"]}
        successMessage="Correcto. gRPC brilla servidor-a-servidor; el browser necesita gRPC-Web o un gateway REST/GraphQL."
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Describe un caso de over-fetching con REST y cómo GraphQL lo resolvería con una query de solo 3 campos concretos."
          hints={["GET devuelve más de lo necesario", "GraphQL pide solo nombre, email, avatar"]}
          expectedKeywords={["over-fetching", "GraphQL", "campos"]}
          successMessage="Correcto. REST devuelve forma fija; GraphQL permite pedir exactamente los campos requeridos."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué anti-patrón ocurre si se expone gRPC directamente a la app móvil sin gateway? ¿Qué alternativas existen?"
          hints={["Browsers y muchas apps no hablan gRPC nativo", "gRPC-Web, REST gateway"]}
          expectedKeywords={["gRPC", "gateway", "gRPC-Web", "REST"]}
          successMessage="Correcto. El cliente no consume gRPC nativo; usa gateway REST/GraphQL o gRPC-Web."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un sistema de trading necesita precios en tiempo real en el dashboard. ¿REST polling cada 5 s, GraphQL o WebSockets? Justifica."
          hints={["Latencia y carga del servidor", "Conexión persistente push"]}
          expectedKeywords={["WebSockets", "tiempo real", "polling"]}
          successMessage="Correcto. WebSockets evita polling repetitivo; el servidor empuja actualizaciones al instante."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"APIs: qué son, tipos y herramientas"}</h3>
      <PracticeExercise
        prompt="Explica la analogía del menú de restaurante aplicada a GET /api/clima?ciudad=Bogota. ¿Quién es el cliente, el mesero, la cocina y el menú?"
        hints={[
          "Cliente = quien pide",
          "Mesero = API",
          "Cocina = backend",
          "Menú = endpoints documentados",
        ]}
        expectedKeywords={["cliente", "API", "backend", "endpoint", "menú"]}
        successMessage="Correcto. El cliente es la app; la API traduce el pedido; el backend procesa; el menú es el contrato de endpoints."
      />
      <CodeChallenge
        title="Ordenar el flujo de prueba de un endpoint nuevo"
        template={`1. {{blank1}} (definir URI y método)
2. {{blank2}} (probar con curl)
3. {{blank3}} (documentar en OpenAPI)
4. {{blank4}} (crear colección en Postman)
5. {{blank5}} (agregar test en CI)`}
        blanks={[
          {
            id: "blank1",
            answer: "definir URI y método HTTP",
            placeholder: "paso a",
          },
          { id: "blank2", answer: "probar con curl", placeholder: "paso b" },
          {
            id: "blank3",
            answer: "documentar en OpenAPI",
            placeholder: "paso c",
          },
          {
            id: "blank4",
            answer: "crear colección en Postman",
            placeholder: "paso d",
          },
          {
            id: "blank5",
            answer: "agregar test automatizado en CI",
            placeholder: "paso e",
          },
        ]}
      />
      <CodeChallenge
        title="Completar el mapping de endpoints"
        template={`Listar usuarios → GET {{blank1}}
Crear producto → POST {{blank2}}
Nunca usar → GET {{blank3}}`}
        blanks={[
          { id: "blank1", answer: "/api/v1/usuarios", placeholder: "URI" },
          { id: "blank2", answer: "/api/v1/productos", placeholder: "URI" },
          {
            id: "blank3",
            answer: "/eliminarProducto/42",
            placeholder: "anti-patrón",
          },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="¿En qué se diferencia una API pública de una API privada? Da un ejemplo de cada una y un riesgo si se confunden."
          hints={["Pública = desarrolladores externos", "Privada = solo organización", "Riesgo = exposición accidental"]}
          expectedKeywords={["pública", "privada", "API key", "interna"]}
          successMessage="Correcto. Pública es accesible con registro/key (Stripe); privada solo interna (microservicios). Exponer una privada al público es un riesgo grave."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un partner reporta que su integración dejó de funcionar tras un cambio en el formato JSON de POST /api/pagos. ¿Qué buena práctica de diseño faltaba desde el inicio?"
          hints={["Cambios breaking sin aviso", "Prefijo en la ruta", "v1 vs v2"]}
          expectedKeywords={["versionado", "v1", "v2", "deprecación"]}
          successMessage="Correcto. Versionar desde el lanzamiento (/api/v1/pagos) permite publicar cambios breaking en /api/v2/ sin romper clientes existentes."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué herramienta se usaría para probar un endpoint en un script de CI/CD y cuál para que un nuevo desarrollador explore la API visualmente?"
          hints={["CLI vs GUI", "Automatización vs exploración"]}
          expectedKeywords={["curl", "Postman", "Swagger"]}
          successMessage="Correcto. curl en CI/CD; Postman o Swagger UI para exploración manual y documentación interactiva."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Métodos HTTP y códigos de estado"}</h3>
      <PracticeExercise
        prompt="Para cada método indica Safe e Idempotente: GET, POST, PUT, DELETE. Explica por qué POST no es idempotente con un ejemplo de pago."
        hints={[
          "Safe = no modifica estado",
          "POST crea efectos nuevos en cada envío",
          "Piensa en doble cobro",
        ]}
        expectedKeywords={["GET", "Safe", "POST", "idempotente", "pago"]}
        successMessage="Correcto. GET es Safe e idempotente; POST no es idempotente porque cada envío puede crear un nuevo efecto (p. ej. otro cargo)."
      />
      <CodeChallenge
        title="Completar el mapping CRUD"
        template={`Listar todos los productos → {{blank1}} \`/api/productos\`
Eliminar producto 42 → {{blank2}} \`/api/productos/42\``}
        blanks={[
          { id: "blank1", answer: "GET", placeholder: "método" },
          { id: "blank2", answer: "DELETE", placeholder: "método" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Un cliente recibe 401 en GET /api/perfil. ¿Debe reintentar la misma petición sin cambios? ¿Y si recibe 403? Justifica con la diferencia entre ambos códigos."
          hints={["401 = no autenticado", "403 = autenticado sin permiso", "¿Cambiar credenciales ayuda?"]}
          expectedKeywords={["401", "403", "token", "permiso"]}
          successMessage="Correcto. Con 401 debe autenticarse (token); con 403 ya está autenticado pero no tiene permiso — reintentar igual no sirve."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué es peligroso usar GET /api/usuarios/5/eliminar para borrar un usuario? Menciona Safe e idempotencia/caché."
          hints={["GET es Safe en teoría pero esta URL modifica", "Los proxies y navegadores pueden cachear GET"]}
          expectedKeywords={["GET", "DELETE", "cache", "Safe"]}
          successMessage="Correcto. GET no debe modificar estado; además puede cachearse y ejecutarse sin intención. Usa DELETE."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un POST crea un usuario y el servidor responde 200 OK sin header Location. ¿Qué código y header debería usar en su lugar?"
          hints={["Código para recurso creado", "Header que indica la URI del nuevo recurso"]}
          expectedKeywords={["201", "Location", "Created"]}
          successMessage="Correcto. 201 Created con header Location apunta al recurso recién creado."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"HTTP headers"}</h3>
      <PracticeExercise
        prompt="En un POST /api/usuarios con body JSON, lista cinco headers que el cliente debería enviar y explica el propósito de cada uno."
        hints={[
          "Host es obligatorio",
          "Content-Type para JSON",
          "Authorization si requiere auth",
        ]}
        expectedKeywords={["Host", "Content-Type", "Authorization", "Accept"]}
        successMessage="Correcto. Mínimo: Host, Content-Type, Accept; más Authorization si la ruta es protegida."
      />
      <CodeChallenge
        title="Headers según operación"
        template={`POST exitoso que crea recurso → código {{blank1}} y header {{blank2}}
DELETE exitoso sin cuerpo → código {{blank3}}`}
        blanks={[
          { id: "blank1", answer: "201", placeholder: "código" },
          { id: "blank2", answer: "Location", placeholder: "header" },
          { id: "blank3", answer: "204", placeholder: "código" },
        ]}
      />
      <div className="my-8">
        <PracticeExercise
          prompt="Dibuja o describe el flujo preflight CORS para PUT /api/perfil desde https://app.frontend.com hacia https://api.backend.com. Incluye headers clave en OPTIONS y en la respuesta."
          hints={[
            "OPTIONS primero",
            "Origin y Access-Control-Request-Method",
            "Allow-Origin, Allow-Methods, Allow-Headers",
          ]}
          expectedKeywords={["OPTIONS", "Origin", "Access-Control", "PUT"]}
          successMessage="Correcto. OPTIONS con Origin y Request-Method; servidor responde Allow-Origin, Allow-Methods y Allow-Headers; luego PUT real."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué una app móvil nativa no sufre bloqueo CORS pero sí necesita Authorization y Content-Type en POST?"
          hints={[
            "CORS es política del navegador",
            "El servidor sigue necesitando saber formato y credenciales",
          ]}
          expectedKeywords={["CORS", "navegador", "Content-Type", "Authorization"]}
          successMessage="Correcto. CORS no aplica fuera del navegador; pero el servidor requiere Content-Type para parsear JSON y Authorization para autenticar."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué header de respuesta mitiga clickjacking y qué valor se recomendaría para una app que no debe embeberse en iframes externos?"
          hints={["Empieza con X-Frame", "Valores: DENY o SAMEORIGIN"]}
          expectedKeywords={["X-Frame-Options", "DENY"]}
          successMessage="Correcto. X-Frame-Options: DENY impide que otras páginas enmarquen la aplicación."
        />
      </div>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Formatos de datos: XML y JSON"}</h3>
      <PracticeExercise
        prompt="Parsea un XML mínimo con DOMParser y lee un atributo del elemento raíz. ¿Qué método se usa para obtener el valor del atributo id?"
        hints={[
          "DOMParser con application/xml",
          "getAttribute en documentElement",
        ]}
        expectedKeywords={["DOMParser", "getAttribute", "documentElement"]}
        successMessage="Correcto. DOMParser construye el árbol; getAttribute lee atributos de un elemento."
      />
      <CodeChallenge
        title="Completar los tipos nativos de JSON"
        template="JSON soporta tipos nativos como ___, ___, ___ y ___ (además de array y object)."
        blanks={[
          { id: "blank1", answer: "string", placeholder: "texto" },
          { id: "blank2", answer: "number", placeholder: "numérico" },
          { id: "blank3", answer: "boolean", placeholder: "true/false" },
          { id: "blank4", answer: "null", placeholder: "ausencia de valor" },
        ]}
      />
      <PracticeExercise
        prompt="La API nueva expone catálogo de productos para app móvil y web. ¿XML o JSON? Justifica con interoperabilidad y tamaño."
        hints={["API REST moderna", "Ecosistema web y parsing nativo"]}
        expectedKeywords={["JSON", "compacto", "REST", "parse"]}
        successMessage="Correcto. JSON es el predeterminado en APIs REST nuevas: compacto, tipos nativos y parsing trivial en clientes web y móviles."
      />
      <p className="my-4">{"Antes de pasar a la siguiente clase, comprobar que se pueden aplicar los conceptos del tema."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué el mismo pedido ocupa ~520 bytes en XML y ~320 en JSON? Menciona al menos dos causas."
          hints={["Etiquetas de cierre", "Atributos vs objetos anidados"]}
          expectedKeywords={["etiquetas", "cierre", "verbos", "atributo"]}
          successMessage="Correcto. Las etiquetas de apertura/cierre y la sintaxis más verbosa de XML aumentan el tamaño frente a JSON."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena partes de un documento XML válido: (a) elemento raíz, (b) declaración <?xml?>, (c) elementos hijos anidados, (d) atributos en apertura. ¿Cuál va primero?"
          hints={["La declaración precede al contenido", "Un solo raíz envuelve hijos"]}
          expectedKeywords={["b", "a", "c", "d"]}
          successMessage="Correcto. Orden: (b) declaración → (a) raíz → (c) hijos anidados; (d) atributos van en la etiqueta de apertura del elemento."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Nombra dos casos de uso reales donde XML sigue siendo la opción correcta aunque JSON sea más popular."
          hints={["Piensa en SOAP bancario", "Regulación o facturación"]}
          expectedKeywords={["SOAP", "facturación", "WSDL", "legado"]}
          successMessage="Correcto. SOAP bancario, facturación DIAN, WSDL y configs Maven/Spring son casos donde XML sigue siendo obligatorio o convencional."
        />
      </div>
    </section>
  );
}
