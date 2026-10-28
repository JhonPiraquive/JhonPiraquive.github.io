import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosClase01Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la parte 1</h2>
      <p className="my-4">
        Los ejercicios siguen el orden de las páginas de la clase. Cada uno ofrece pistas y una validación que indica si
        la respuesta va por buen camino. Se recomienda intentarlos sin volver al contenido y consultarlo solo cuando una
        pista lo sugiera.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Entorno y librerías</h3>
      <PracticeExercise
        title="Ejercicio 1. Elegir una librería"
        prompt="Se necesita mostrar gráficas de ventas en una página. Explicar con palabras propias por qué conviene usar una librería de gráficas y qué dos aspectos se revisan antes de instalarla."
        hints={["Pensar en el tiempo que se ahorra", "Recordar los criterios: mantenimiento, comunidad, documentación"]}
        expectedKeywords={["tiempo", "mantenimiento", "comunidad", "documentación", "descargas", "actualiz"]}
      />
      <CodeChallenge
        title="Ejercicio 2. Completar los comandos de npm"
        template={`# Se descargó un proyecto y se quieren instalar sus librerías:
npm {{a}}

# Ahora se quiere iniciar en modo desarrollo (script llamado dev):
npm {{b}} dev`}
        blanks={[
          { id: "a", answer: "install", placeholder: "comando" },
          { id: "b", answer: "run", placeholder: "comando" },
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Variables y funciones</h3>
      <CodeChallenge
        title="Ejercicio 3. Completar el código"
        template={`{{a}} ciudad = "Manizales";
{{b}} visitas = 0;
visitas = visitas + 1;
console.log({{c}}Hola desde \${ciudad}, visitas: \${visitas}{{c}});`}
        blanks={[
          { id: "a", answer: "const", placeholder: "palabra" },
          { id: "b", answer: "let", placeholder: "palabra" },
          { id: "c", answer: "`", placeholder: "símbolo" },
        ]}
      />
      <PracticeExercise
        title="Ejercicio 4. Escribir una función flecha"
        prompt="Escribir una función flecha llamada esAgotado que reciba la cantidad disponible de un producto y devuelva true si es 0. Debe usar retorno implícito."
        hints={["const nombre = (parametro) => expresión", "La expresión puede comparar con ===", "Una posible respuesta: const esAgotado = (cantidad) => cantidad === 0;"]}
        expectedKeywords={["=>", "=== 0", "==0"]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Objetos, arreglos y módulos</h3>
      <CodeChallenge
        title="Ejercicio 5. Completar la desestructuración"
        template={`const estudiante = { nombre: "Laura", edad: 20, ciudad: "Manizales" };

const { {{a}}, edad } = estudiante;
const [{{b}}, segundo] = ["uno", "dos"];
console.log(nombre, edad, primero);`}
        blanks={[
          { id: "a", answer: "nombre", placeholder: "propiedad" },
          { id: "b", answer: "primero", placeholder: "variable" },
        ]}
      />
      <PracticeExercise
        title="Ejercicio 6. Consultar el menú"
        prompt="Dado el arreglo menu de la cafetería (con las propiedades nombre, precio y agotado), escribir una expresión que devuelva los nombres de los productos disponibles que cuestan menos de 10000. Se necesitan dos métodos combinados."
        hints={["Primero se filtra por las dos condiciones", "Después se transforma con map para conservar solo el nombre", "menu.filter((p) => !p.agotado && p.precio < 10000).map((p) => p.nombre)"]}
        expectedKeywords={["filter", "map"]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Primer componente</h3>
      <PracticeExercise
        title="Ejercicio 7. Leer código de React"
        prompt="Dada la línea <Etiqueta texto='Nuevo' color={colorElegido} />, explicar qué valor recibe cada prop y por qué texto va entre comillas mientras que color va entre llaves."
        hints={["Las comillas son para texto fijo", "Las llaves abren JavaScript: ahí va una variable o cualquier expresión"]}
        expectedKeywords={["variable", "javascript", "expresión", "llaves"]}
      />
    </section>
  );
}
