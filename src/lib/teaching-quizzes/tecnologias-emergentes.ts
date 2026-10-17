import type { QuizQuestion } from "@/components/teaching/Quiz";

export const TECNOLOGIAS_EMERGENTES_QUIZZES: Record<string, QuizQuestion[]> = {
  "clase-01-fundamentos": [
    {
      question: "¿Cuál de estas descripciones define mejor una tecnología emergente?",
      options: [
        "Cualquier tecnología publicada en el último año",
        "Una tecnología en crecimiento que aún no se usa en todas partes, pero que ya demostró que puede transformar una actividad",
        "Una tecnología que ya fue reemplazada por otra",
        "Una tecnología que solo existe en laboratorios",
      ],
      correctIndex: 1,
      feedback: "El término no depende de la edad sino del impacto: la inteligencia artificial se estudia desde hace décadas y sigue siendo emergente porque su impacto completo todavía no se materializa.",
    },
    {
      question: "Una tecnología aparece en todos los titulares, pero casi nadie ha logrado resultados medibles. ¿En qué etapa del ciclo de sobreexpectación se encuentra?",
      options: [
        "Productividad",
        "Pico de expectativas",
        "Comprensión",
        "Obsolescencia",
      ],
      correctIndex: 1,
      feedback: "En el pico de expectativas el entusiasmo supera a los resultados. Lo prudente es probar en pequeño antes de comprometer recursos.",
    },
    {
      question: "Un compañero propone usar una librería recién publicada, en versión alfa y con un solo tutorial. ¿Qué debe hacerse primero?",
      options: [
        "Usarla, porque lo más nuevo siempre es mejor",
        "Revisar madurez, comunidad, documentación y si resuelve una necesidad real",
        "Descartarla sin mirar, porque todo lo nuevo es malo",
        "Preguntar cuántas estrellas tiene en redes sociales",
      ],
      correctIndex: 1,
      feedback: "Ni lo nuevo ni lo viejo son buenos por sí solos. Se evalúa con criterios: madurez, comunidad, documentación, mantenimiento, costo de cambiar y necesidad real.",
    },
    {
      question: "En un proyecto descargado, ¿qué comando instala las librerías que pide el package.json?",
      options: ["npm run dev", "npm install", "npm build", "node package.json"],
      correctIndex: 1,
      feedback: "npm install lee el package.json y descarga todo en node_modules. npm run dev solo inicia el servidor y falla si antes no se instaló.",
    },
    {
      question: "¿Por qué no se incluye la carpeta node_modules al comprimir un proyecto para entregarlo?",
      options: [
        "Porque contiene contraseñas",
        "Porque se puede regenerar con npm install y pesa cientos de megabytes",
        "Porque Vite la elimina al arrancar",
        "Porque solo sirve en el computador donde se creó",
      ],
      correctIndex: 1,
      feedback: "node_modules se vuelve a crear con npm install a partir del package.json y el package-lock.json; incluirla solo vuelve enorme el archivo.",
    },
    {
      question: "¿Qué imprime este código? const descuento = 0; console.log(descuento || 10, descuento ?? 10);",
      options: ["0 0", "10 10", "10 0", "0 10"],
      correctIndex: 2,
      feedback: "|| reemplaza cualquier valor falso (incluido el 0), pero ?? solo reemplaza null y undefined. Por eso ?? respeta un descuento real de cero.",
    },
    {
      question: "¿Cuál es la forma correcta de crear una función flecha que devuelve un objeto con retorno implícito?",
      options: [
        "const crear = (n) => { nombre: n }",
        "const crear = (n) => ({ nombre: n })",
        "const crear = (n) -> { nombre: n }",
        "const crear = n => return { nombre: n }",
      ],
      correctIndex: 1,
      feedback: "Sin paréntesis, las llaves se interpretan como el cuerpo de la función y devuelve undefined. Los paréntesis indican a JavaScript que se trata de un objeto.",
    },
    {
      question: "¿Qué hace este código? const nombres = menu.filter((p) => !p.agotado).map((p) => p.nombre);",
      options: [
        "Cambia el menú original quitando los agotados",
        "Devuelve un arreglo nuevo con los nombres de los productos disponibles",
        "Devuelve un solo valor con la suma de los precios",
        "Genera un error porque no se pueden encadenar métodos",
      ],
      correctIndex: 1,
      feedback: "filter y map no modifican el arreglo original: devuelven arreglos nuevos y se pueden encadenar.",
    },
    {
      question: "¿Por qué cada elemento de una lista dibujada con map necesita una key estable, como el id del dato?",
      options: [
        "Para que el elemento se vea más rápido en el navegador",
        "Para que React identifique cuál elemento es cuál cuando la lista cambia",
        "Porque HTML lo exige",
        "Para poder darle estilos CSS",
      ],
      correctIndex: 1,
      feedback: "La key es la identidad del elemento. Con ella React actualiza solo lo que cambió; usar el índice puede mezclar datos si la lista se reordena.",
    },
    {
      question: "Un diseño exige 2 columnas en celular, 3 en tableta y 4 en pantalla grande. ¿Qué enfoque de CSS corresponde?",
      options: [
        "Tres archivos HTML distintos",
        "CSS Grid con columnas por defecto y media queries con min-width",
        "Solo JavaScript que mide la pantalla",
        "Tablas HTML con ancho fijo en píxeles",
      ],
      correctIndex: 1,
      feedback: "Mobile first: se definen 2 columnas y, con @media (min-width: …), se aumenta a 3 y a 4 a medida que la pantalla crece.",
    },
  ],

  "clase-02-interfaces-con-react-y-mui": [
    {
      question: "¿Por qué cambiar una variable normal (let cantidad = 0) dentro de un manejador de clic no actualiza la pantalla?",
      options: [
        "Porque let no se puede modificar",
        "Porque React no se entera del cambio y, además, la variable se reinicia en cada ejecución del componente",
        "Porque los clics no funcionan en React",
        "Porque hay que recargar la página",
      ],
      correctIndex: 1,
      feedback: "El estado (useState) avisa a React que debe volver a dibujar y conserva su valor entre dibujos. Una variable normal no hace ninguna de las dos cosas.",
    },
    {
      question: "Dado const [cursos, setCursos] = useState([]), ¿cuál es la forma correcta de agregar un curso?",
      options: [
        "cursos.push(nuevo); setCursos(cursos)",
        "setCursos([...cursos, nuevo])",
        "cursos = [...cursos, nuevo]",
        "setCursos(cursos.push(nuevo))",
      ],
      correctIndex: 1,
      feedback: "React compara referencias. Si el arreglo se muta, la referencia es la misma y no redibuja. Hay que entregar una copia nueva con el cambio.",
    },
    {
      question: "Se debe mostrar «Hay N cursos activos» a partir de la lista que ya está en el estado. ¿Qué corresponde hacer?",
      options: [
        "Un useEffect que calcule N y lo guarde en otro estado",
        "Calcular N directamente al dibujar con filter y length",
        "Pedir el dato otra vez a la API",
        "Guardar N en localStorage",
      ],
      correctIndex: 1,
      feedback: "Es un dato derivado: se calcula al dibujar. Un efecto para esto causa un redibujo extra y complica el código.",
    },
    {
      question: "Las plantillas antiguas de Material UI usan <Grid item xs={12} md={6}>. ¿Qué cambió en la versión actual?",
      options: [
        "Nada, sigue funcionando igual",
        "Ya no existe la propiedad item; los tamaños van en size, por ejemplo <Grid size={{ xs: 12, md: 6 }}>",
        "Grid fue reemplazado por Table",
        "Ahora solo acepta tamaños en píxeles",
      ],
      correctIndex: 1,
      feedback: "El Grid anterior se eliminó en la versión actual. Si un código viejo no se ve bien, esta es la primera revisión.",
    },
    {
      question: "Un botón de solo icono para eliminar debe incluir:",
      options: [
        "Un color rojo, y con eso basta",
        "Un aria-label que describa la acción, como «Eliminar a Ana»",
        "Un tamaño más grande",
        "Nada: los iconos se leen solos",
      ],
      correctIndex: 1,
      feedback: "Un lector de pantalla no puede leer un icono. El aria-label le da un nombre accesible al botón.",
    },
    {
      question: "En React Router, ¿qué hace el componente Outlet dentro de un layout?",
      options: [
        "Cierra la sesión del usuario",
        "Marca el lugar donde se dibuja la ruta hija que corresponde a la URL",
        "Crea una ruta nueva",
        "Redirige a la página principal",
      ],
      correctIndex: 1,
      feedback: "El layout dibuja el marco (menú y barra) y deja el Outlet como hueco; allí aparece la pantalla de la ruta actual.",
    },
    {
      question: "Un tutorial antiguo importa { Link } desde 'react-router-dom'. ¿Qué debe saberse al usar la versión actual de la librería?",
      options: [
        "Funciona igual: react-router-dom sigue siendo el paquete recomendado",
        "react-router-dom fue eliminado; los mismos componentes se importan desde react-router",
        "Link ya no existe",
        "Hay que importarlo desde @mui/material",
      ],
      correctIndex: 1,
      feedback: "Los componentes son los mismos; solo cambió el origen del import. Es un ejemplo de cómo una tecnología madura y reorganiza su paquete.",
    },
    {
      question: "¿Cuál de estas es una buena práctica de UX en un formulario administrativo?",
      options: [
        "Poner el botón Eliminar pegado al botón Guardar, sin confirmar",
        "Mostrar mensajes de error que explican cómo corregir, y confirmar antes de acciones destructivas",
        "Usar solo el placeholder en lugar de etiqueta",
        "Mostrar el error técnico del servidor tal cual",
      ],
      correctIndex: 1,
      feedback: "Prevenir errores, dar control al usuario y ayudar a recuperarse son reglas básicas de usabilidad.",
    },
    {
      question: "Un equipo duda entre construir sus propios componentes visuales o adoptar una librería como Material UI. ¿Qué criterio justifica adoptarla?",
      options: [
        "Que es la más popular en redes sociales",
        "Que tiene madurez, documentación, mantenimiento y ahorra tiempo en un problema que el equipo realmente tiene",
        "Que obliga a no escribir nada de CSS",
        "Que nunca cambia de versión",
      ],
      correctIndex: 1,
      feedback: "Adoptar una tecnología se justifica con criterios, no con popularidad. También hay que considerar el costo de cambiar y la necesidad real.",
    },
  ],

  "clase-03-datos-reales-y-crud": [
    {
      question: "Un fetch a una API recibe un 404. ¿Qué ocurre con la promesa que devuelve fetch?",
      options: [
        "Se rechaza y va al catch",
        "Se cumple normalmente; hay que revisar respuesta.ok y lanzar el error manualmente",
        "Se queda pendiente para siempre",
        "fetch reintenta automáticamente",
      ],
      correctIndex: 1,
      feedback: "fetch solo rechaza ante fallos de red. Un 404 o 500 es una respuesta válida del servidor, por eso se comprueba response.ok.",
    },
    {
      question: "¿Cuál es el método HTTP para crear un registro nuevo?",
      options: ["GET", "POST", "DELETE", "PATCH"],
      correctIndex: 1,
      feedback: "POST crea, GET lee, PUT/PATCH actualizan y DELETE elimina.",
    },
    {
      question: "El navegador muestra «blocked by CORS policy», pero la misma petición funciona en Postman. ¿Dónde se corrige?",
      options: [
        "En React, cambiando el fetch",
        "En el servidor de la API, que debe permitir el origen de la página",
        "Desinstalando el navegador",
        "Cambiando el método a GET",
      ],
      correctIndex: 1,
      feedback: "CORS es una regla del navegador. La API debe enviar la cabecera que autoriza el origen. En desarrollo, un proxy de Vite también lo evita.",
    },
    {
      question: "¿Qué hace await dentro de una función async?",
      options: [
        "Detiene todo el programa hasta que termine",
        "Pausa esa función hasta que la promesa se resuelva, sin bloquear el resto del programa",
        "Convierte la función en síncrona",
        "Cancela la promesa",
      ],
      correctIndex: 1,
      feedback: "await pausa solo la función donde está. Mientras tanto, JavaScript puede seguir atendiendo otras tareas.",
    },
    {
      question: "¿Por qué useEffect no debe recibir directamente una función async?",
      options: [
        "Porque async está prohibido en React",
        "Porque useEffect espera que se devuelva una función de limpieza o nada, y una función async devuelve una promesa",
        "Porque las peticiones no se pueden hacer en efectos",
        "Porque haría que la página no cargue",
      ],
      correctIndex: 1,
      feedback: "Se define una función async dentro del efecto y se llama, de modo que el efecto pueda devolver la función de limpieza.",
    },
    {
      question: "En la pantalla de eliminar, ¿cuándo debe quitarse la fila de la tabla?",
      options: [
        "Antes de enviar el DELETE, para que se sienta rápido",
        "Después de que la API confirme que se eliminó",
        "Nunca; basta con recargar la página",
        "Al abrir el diálogo de confirmación",
      ],
      correctIndex: 1,
      feedback: "Si la fila se quita antes y la API falla, la pantalla muestra algo que la base de datos no tiene. Se actualiza tras la confirmación (o con una actualización optimista bien manejada).",
    },
    {
      question: "Todos los campos ya se validan en el formulario de React. ¿Sigue haciendo falta validar en el servidor?",
      options: [
        "No, el navegador ya garantiza que los datos son correctos",
        "Sí, porque cualquiera puede saltarse el frontend y enviar peticiones directamente",
        "Solo si se usa MongoDB",
        "Solo en producción",
      ],
      correctIndex: 1,
      feedback: "La validación del frontend mejora la experiencia; la del servidor protege el sistema. Con curl o las herramientas de desarrollo se evita el formulario.",
    },
    {
      question: "Se escribe VITE_API_KEY=clave-secreta en el archivo .env. ¿Qué pasa con esa clave?",
      options: [
        "Queda oculta y solo la ve el servidor",
        "Se incluye en el código que descarga el navegador, así que cualquiera puede verla",
        "Vite la cifra automáticamente",
        "Solo se ve en desarrollo",
      ],
      correctIndex: 1,
      feedback: "Todo lo que empieza con VITE_ es público. Las claves secretas se guardan y usan en el servidor.",
    },
    {
      question: "Un equipo quiere incorporar una tecnología emergente (por ejemplo, un servicio de inteligencia artificial) a su aplicación. ¿Cuál es el enfoque más prudente?",
      options: [
        "Reescribir toda la aplicación para usarla",
        "Hacer una prueba pequeña sobre un caso real, aplicar los criterios de evaluación y decidir con evidencia",
        "Esperar a que todos los competidores la adopten",
        "Adoptarla solo porque aparece en los titulares",
      ],
      correctIndex: 1,
      feedback: "Una prueba pequeña con un problema real permite comprobar madurez, costo de cambiar y necesidad antes de comprometer el proyecto.",
    },
  ],
};
