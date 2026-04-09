# Instrucciones para frontend-developer: principios-solid.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/principios-solid.html`

---

1. Crear `clases/programacion-orientada-sitios-web/principios-solid.html`. `<html lang="es">`. Título: "Principios SOLID | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "SRP", "OCP", "LSP", "ISP", "DIP", "Resumen".
4. Hero: badge "Tema 20", `<h1>` "Principios SOLID", subtítulo "Los cinco principios de diseño orientado a objetos de Robert C. Martin para código mantenible y extensible." Botón scroll a `#srp`.
5. Panel introductorio (fondo `--surface`, padding 40px): "SOLID es un acrónimo mnemotécnico para cinco principios de diseño de software orientado a objetos formulados por Robert C. Martin ('Uncle Bob') y popularizados en su libro 'Clean Architecture' (2017). Aplicarlos reduce el acoplamiento, aumenta la cohesión y hace el código más fácil de testear, mantener y extender."
6. Para cada principio (SRP, OCP, LSP, ISP, DIP), crear una `<section>` con la misma estructura:
   - `<h2>` con la letra y nombre completo.
   - Regla en tarjeta destacada (borde `--accent`, fondo `--surface`).
   - Analogía en tarjeta (borde `--accent2`).
   - Dos bloques de código lado a lado: columna izquierda "Incorrecto" (borde rojo), columna derecha "Correcto" (borde verde).
   - Consecuencias de violar el principio en lista roja.
   - Beneficios de aplicarlo en lista verde.

7. `<section id="srp">` — SRP: Single Responsibility Principle:
   - Regla: "Una clase debe tener una, y solo una, razón para cambiar. Cada clase debe encargarse de una única responsabilidad dentro del sistema."
   - Analogía: "Un médico se encarga de diagnosticar y recetar. La farmacia dispensa los medicamentos. El hospital gestiona las citas. Si el médico también gestionara el inventario de la farmacia, tendría dos razones para cambiar."
   - Incorrecto:
     ```typescript
     // ❌ Violación SRP: la clase hace demasiado
     class Usuario {
       nombre: string;
       email: string;

       constructor(nombre: string, email: string) {
         this.nombre = nombre;
         this.email = email;
       }

       // Responsabilidad 1: lógica de negocio
       validarEmail(): boolean {
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
       }

       // Responsabilidad 2: persistencia
       guardarEnBaseDeDatos(): void {
         // INSERT INTO usuarios...
         console.log('Guardando usuario en BD');
       }

       // Responsabilidad 3: notificación
       enviarEmailBienvenida(): void {
         // SMTP.send(this.email, ...)
         console.log('Enviando email de bienvenida');
       }
     }
     ```
   - Correcto:
     ```typescript
     // ✅ Aplicando SRP: cada clase tiene una responsabilidad
     class Usuario {
       constructor(
         public readonly nombre: string,
         public readonly email: string
       ) {}

       validarEmail(): boolean {
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
       }
     }

     class UsuarioRepository {
       guardar(usuario: Usuario): void {
         console.log(`Guardando ${usuario.nombre} en BD`);
       }
     }

     class EmailService {
       enviarBienvenida(usuario: Usuario): void {
         console.log(`Enviando email a ${usuario.email}`);
       }
     }
     ```

8. `<section id="ocp">` — OCP: Open/Closed Principle:
   - Regla: "Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación. Para agregar nueva funcionalidad, extiende; no modifiques el código existente."
   - Analogía: "Un enchufe eléctrico está 'cerrado' a modificación (no modificas el tomacorriente de la pared), pero 'abierto' para extensión (conectas cualquier dispositivo nuevo que cumpla el estándar del enchufe)."
   - Incorrecto:
     ```typescript
     // ❌ Cada vez que se agrega un método de pago, se modifica esta clase
     class ProcesadorPago {
       procesar(tipo: string, monto: number): void {
         if (tipo === 'tarjeta') {
           console.log(`Cobrar $${monto} con tarjeta de crédito`);
         } else if (tipo === 'paypal') {
           console.log(`Cobrar $${monto} con PayPal`);
         } else if (tipo === 'nequi') {
           console.log(`Cobrar $${monto} con Nequi`);
           // ← Modificación constante: viola OCP
         }
       }
     }
     ```
   - Correcto:
     ```typescript
     // ✅ Extender sin modificar
     interface MetodoPago {
       procesar(monto: number): void;
     }

     class PagoTarjeta implements MetodoPago {
       procesar(monto: number): void {
         console.log(`Cobrar $${monto} con tarjeta`);
       }
     }

     class PagoPayPal implements MetodoPago {
       procesar(monto: number): void {
         console.log(`Cobrar $${monto} con PayPal`);
       }
     }

     // Agregar Nequi sin tocar nada existente
     class PagoNequi implements MetodoPago {
       procesar(monto: number): void {
         console.log(`Cobrar $${monto} con Nequi`);
       }
     }

     class ProcesadorPago {
       constructor(private metodo: MetodoPago) {}

       procesar(monto: number): void {
         this.metodo.procesar(monto);
       }
     }
     ```

9. `<section id="lsp">` — LSP: Liskov Substitution Principle:
   - Regla: "Los objetos de una subclase deben poder sustituir a objetos de la clase padre sin alterar la corrección del programa. Si S es subtipo de T, los objetos de tipo T pueden ser reemplazados por objetos de tipo S."
   - Analogía: "Si un vehículo de alquiler puede ser un auto, debes poder alquilar cualquier auto de la flota sin sorpresas. Si un 'auto especial' no tiene volante (viola el contrato del auto), no es realmente un auto."
   - Incorrecto:
     ```typescript
     // ❌ Violación LSP: Pato de goma no puede volar como un Pato real
     class Pato {
       volar(): void {
         console.log('Volando...');
       }
       graznar(): void {
         console.log('Cuac!');
       }
     }

     class PatoDeGoma extends Pato {
       volar(): void {
         throw new Error('Los patos de goma no vuelan'); // ← viola LSP
       }
     }
     ```
   - Correcto:
     ```typescript
     // ✅ Separar lo que no todos comparten
     interface Pato {
       graznar(): void;
     }

     interface PatoVolador extends Pato {
       volar(): void;
     }

     class PatoReal implements PatoVolador {
       graznar(): void { console.log('Cuac!'); }
       volar(): void { console.log('Volando...'); }
     }

     class PatoDeGoma implements Pato {
       graznar(): void { console.log('Cuac de goma!'); }
       // No implementa volar: no rompe ningún contrato
     }
     ```

10. `<section id="isp">` — ISP: Interface Segregation Principle:
    - Regla: "Los clientes no deben ser forzados a depender de métodos que no usan. Es mejor tener muchas interfaces específicas que una sola interfaz general."
    - Analogía: "Una impresora básica no tiene fax. Si obligas a todas las impresoras a implementar una interfaz con `imprimir()`, `escanear()`, `enviarFax()` y `copiar()`, la impresora básica tendría que implementar métodos vacíos o lanzar excepciones."
    - Incorrecto:
      ```typescript
      // ❌ Interfaz demasiado grande (fat interface)
      interface Trabajador {
        trabajar(): void;
        comer(): void;
        dormir(): void;
      }

      // Robot que no necesita comer ni dormir
      class Robot implements Trabajador {
        trabajar(): void { console.log('Trabajando...'); }
        comer(): void { throw new Error('Los robots no comen'); } // ← forzado
        dormir(): void { throw new Error('Los robots no duermen'); } // ← forzado
      }
      ```
    - Correcto:
      ```typescript
      // ✅ Interfaces específicas
      interface Trabajable {
        trabajar(): void;
      }

      interface Humano extends Trabajable {
        comer(): void;
        dormir(): void;
      }

      class Persona implements Humano {
        trabajar(): void { console.log('Trabajando...'); }
        comer(): void { console.log('Comiendo...'); }
        dormir(): void { console.log('Durmiendo...'); }
      }

      class Robot implements Trabajable {
        trabajar(): void { console.log('Procesando...'); }
        // No implementa comer ni dormir: correcto
      }
      ```

11. `<section id="dip">` — DIP: Dependency Inversion Principle:
    - Regla: "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de detalles; los detalles deben depender de abstracciones."
    - Analogía: "Tu laptop no depende de un modelo específico de enchufe de pared; depende del estándar eléctrico (abstracción). Puedes conectarla en Colombia, España o Japón (usando adaptador) sin modificar la laptop."
    - Incorrecto:
      ```typescript
      // ❌ Alto nivel (ProductoService) depende de bajo nivel (MySQLRepository)
      class MySQLRepository {
        guardar(producto: Producto): void {
          console.log('Guardando en MySQL:', producto);
        }
      }

      class ProductoService {
        private repo = new MySQLRepository(); // ← acoplamiento duro

        crearProducto(datos: Producto): void {
          this.repo.guardar(datos);
          // Si cambiamos a MongoDB, debemos modificar ProductoService
        }
      }
      ```
    - Correcto:
      ```typescript
      // ✅ Ambos dependen de la abstracción
      interface IProductoRepository {
        guardar(producto: Producto): Promise<void>;
        buscarPorId(id: number): Promise<Producto | null>;
      }

      class MySQLProductoRepository implements IProductoRepository {
        async guardar(producto: Producto): Promise<void> {
          console.log('MySQL: guardando', producto);
        }
        async buscarPorId(id: number): Promise<Producto | null> {
          return null; // implementación real
        }
      }

      class MongoProductoRepository implements IProductoRepository {
        async guardar(producto: Producto): Promise<void> {
          console.log('MongoDB: guardando', producto);
        }
        async buscarPorId(id: number): Promise<Producto | null> {
          return null;
        }
      }

      class ProductoService {
        // Depende de la abstracción, recibida por inyección
        constructor(private repo: IProductoRepository) {}

        async crearProducto(datos: Producto): Promise<void> {
          await this.repo.guardar(datos);
        }
      }

      // Composición: elegir la implementación en el punto de entrada
      const service = new ProductoService(new MySQLProductoRepository());
      // o:
      const service2 = new ProductoService(new MongoProductoRepository());
      ```

12. Crear `<section id="resumen">` padding 80px 0. Contiene:
    - `<h2>` "Resumen Visual".
    - Tabla: Principio | Letra | Regla en una frase | Señal de violación. Datos:
      - Single Responsibility | S | Una clase, una razón para cambiar | La clase se modifica por múltiples motivos distintos
      - Open/Closed | O | Extiende sin modificar | Cada nueva funcionalidad requiere editar código existente
      - Liskov Substitution | L | Sustituye hijos por padres sin sorpresas | Una subclase lanza excepciones en métodos heredados
      - Interface Segregation | I | Interfaces pequeñas y específicas | Las clases implementan métodos que no usan
      - Dependency Inversion | D | Depende de abstracciones, no de concreciones | `new ConcreteClass()` dentro de clases de alto nivel
    - Nota final: "SOLID no es una regla rígida. Es una guía. Aplicarlo dogmáticamente puede llevar a sobre-ingeniería. Aplícalo donde la complejidad y el cambio frecuente lo justifiquen."
    - Enlace: "Ver introducción a SOLID aplicada a servicios web: `servicios-web.html`."
13. Sección recursos: `servicios-web.html`, `typescript.html`, `naming-conventions.html`, `principios-solid.html`.
14. Footer estándar. Highlight.js. Animaciones. Responsivo.
