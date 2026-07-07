import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: mini carrito con clases y contexto"}
      </h2>
      <p className="my-4">
        {
          "Modela un carrito de compras mínimo con clases ES6, herencia y un callback flecha que no pierda el contexto del carrito."
        }
      </p>
      <p className="my-4 font-semibold">{"“Mini carrito con clases y contexto”"}</p>
      <p className="my-4">{"Implementa en un solo archivo (consola o `<script>`):"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "`class Producto` con `constructor(nombre, precio)`, propiedades `this.nombre`, `this.precio` y método `resumen()` que devuelva `` `${this.nombre}: $${this.precio}` ``."
          }
        </li>
        <li>
          {
            "`class ProductoConDescuento extends Producto` con constructor `(nombre, precio, porcentaje)` que llame `super(nombre, precio)` y guarde `this.porcentaje`. Sobrescribe `resumen()` para devolver el texto del padre más ` (desc. ${this.porcentaje}%)` — usa `super.resumen()` dentro del método hijo."
          }
        </li>
        <li>
          {
            "`class Carrito` con `constructor()` que inicialice `this.items = []`, método `agregar(producto)` que haga `push`, y `total()` que sume `producto.precio` de cada item con un bucle `for` (lección 5)."
          }
        </li>
        <li>{"Crea instancias, agrega al carrito y muestra `carrito.total()` y cada `item.resumen()`."}</li>
        <li>
          {
            "Simula un botón: función `registrarAgregar(carrito, producto)` que devuelve una flecha `() => carrito.agregar(producto)` para usar como callback sin perder `this` del carrito."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa `class`, `extends`, `super` en constructor y método, `this` coherente en métodos de instancia, ámbito local con `let`/`const`, callback flecha que no pierde el carrito, sin variables globales sueltas."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Esqueleto — completa las clases y las pruebas"
        code={`// Esqueleto de partida — completa las clases y las pruebas
class Producto {
  constructor(nombre, precio) {
    // tu código
  }
  resumen() {
    // tu código
  }
}

class ProductoConDescuento extends Producto {
  constructor(nombre, precio, porcentaje) {
    // super(...) y this.porcentaje
  }
  resumen() {
    // super.resumen() + descuento
  }
}

class Carrito {
  constructor() {
    this.items = [];
  }
  agregar(producto) {
    // push
  }
  total() {
    // bucle for sumando precios
  }
}

function registrarAgregar(carrito, producto) {
  return () => carrito.agregar(producto);
}

// Pruebas esperadas:
// const carrito = new Carrito();
// const p = new ProductoConDescuento("Libro", 20, 10);
// carrito.agregar(p);
// console.log(carrito.total()); // 20
// console.log(p.resumen());     // "Libro: $20 (desc. 10%)"`}
      />
      <PracticeExercise
        prompt="Implementa el mini carrito según el reto. Pega tu código o describe cómo usas super en constructor y en resumen(), y por qué registrarAgregar devuelve una flecha."
        hints={[
          "super(nombre, precio) antes de this.porcentaje",
          "super.resumen() en el método hijo",
          "total() con for y let acumulador",
          "La flecha cierra sobre carrito y producto sin perder this",
        ]}
        expectedKeywords={["extends", "super", "this", "flecha", "carrito"]}
        successMessage="Excelente. Has integrado clases, herencia, super, this y callbacks flecha en un caso real de inventario."
        rows={8}
      />
    </section>
  );
}
