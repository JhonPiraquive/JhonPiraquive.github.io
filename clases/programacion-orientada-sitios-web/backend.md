# Instrucciones para frontend-developer: backend.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/backend.html`

---

1. Crear `clases/programacion-orientada-sitios-web/backend.html`. `<html lang="es">`. Título: "Backend: Tecnologías y Frameworks | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "Responsabilidades", "Tecnologías", "Cómo elegir", "Ejemplos".
4. Hero: badge "Tema 9", `<h1>` "Backend", subtítulo "El motor invisible: lógica de negocio, bases de datos, autenticación y APIs." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es el Backend?".
   - Párrafo: "El backend (server-side) es la parte de una aplicación que se ejecuta en el servidor, invisible para el usuario final. Gestiona la lógica de negocio, el acceso a bases de datos, la autenticación, las integraciones con servicios externos y expone APIs que el frontend consume."
   - Analogía: "Si el frontend es la fachada y el salón de un restaurante, el backend es la cocina. El cliente no la ve, pero es donde se prepara realmente todo lo que se sirve. Los chefs (servicios) siguen recetas (lógica de negocio) y usan ingredientes del almacén (base de datos)."
   - Diagrama capas de una aplicación web completa:
     ```
     ┌────────────────────────────────────────────────┐
     │               CLIENTE (Navegador / App)        │ ← Frontend
     └─────────────────────────┬──────────────────────┘
                               │  HTTP / WebSocket
     ┌─────────────────────────▼──────────────────────┐
     │             API Gateway / Load Balancer         │
     └─────────────────────────┬──────────────────────┘
                               │
     ┌─────────────────────────▼──────────────────────┐
     │              BACKEND (Servidor de Aplicación)   │ ← Backend
     │  Rutas → Controladores → Servicios → Modelos   │
     └──────────┬──────────────┬─────────────┬────────┘
                │              │             │
          ┌─────▼────┐  ┌──────▼───┐  ┌─────▼────────┐
          │   DB     │  │  Cache   │  │  Servicios   │
          │(Postgres)│  │ (Redis)  │  │  externos    │
          └──────────┘  └──────────┘  └──────────────┘
     ```
6. Crear `<section id="responsabilidades">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Responsabilidades del Backend".
   - Grid de 6 tarjetas con ícono y descripción:
     - `bi-database` "Persistencia de datos": diseñar el modelo de datos, ejecutar consultas, gestionar transacciones.
     - `bi-shield-check` "Autenticación y autorización": verificar identidad (JWT, OAuth), controlar permisos por rol.
     - `bi-diagram-2` "Lógica de negocio": implementar las reglas del dominio (cálculo de precios, validaciones complejas, flujos de estado).
     - `bi-arrow-left-right` "Exposición de APIs": definir y servir endpoints REST, GraphQL o gRPC que el frontend consume.
     - `bi-cpu` "Procesamiento en background": colas de trabajos, emails, reportes, procesamiento de imágenes.
     - `bi-envelope-at` "Integraciones externas": pasarelas de pago, servicios de email, SMS, mapas, IA.
7. Crear `<section id="tecnologias">` padding 80px 0. Contiene:
   - `<h2>` "Tecnologías y Frameworks Populares".
   - Subsección "Por lenguaje" con tarjetas agrupadas:
     - JavaScript/TypeScript:
       - Node.js + Express: minimalista, enorme ecosistema, ideal para APIs REST.
       - Node.js + NestJS: framework opinionado con decoradores y arquitectura modular. Muy usado en enterprise.
       - Bun: runtime alternativo más rápido, compatible con Node.js.
     - Python:
       - Django: framework full-stack con ORM, admin panel y autenticación incluidos.
       - FastAPI: moderno, async, documentación automática con OpenAPI. El más rápido en Python.
       - Flask: microframework minimalista para APIs simples.
     - Java / Kotlin:
       - Spring Boot: el estándar en entornos empresariales. Inyección de dependencias, seguridad, ORM.
       - Quarkus: optimizado para contenedores (GraalVM, startup < 1s).
     - PHP:
       - Laravel: el framework PHP más popular. Eloquent ORM, Artisan CLI, ecosistema maduro.
     - Go:
       - Gin / Fiber: microframeworks de alto rendimiento. Muy usados en microservicios.
     - C# / .NET:
       - ASP.NET Core: framework cross-platform de Microsoft. Altamente performante.
   - Tabla de popularidad y uso: Framework | Lenguaje | Velocidad | Curva | Uso típico. Datos:
     - Express.js | Node.js | Alta | Baja | APIs REST, startups
     - NestJS | TypeScript | Alta | Media | Enterprise, microservicios
     - FastAPI | Python | Muy alta | Baja | APIs ML/AI, modernización
     - Django | Python | Media | Media | Apps completas, admin panels
     - Spring Boot | Java | Alta | Alta | Banca, gobierno, enterprise
     - Laravel | PHP | Media | Baja | Apps web, CMS, e-commerce
     - ASP.NET Core | C# | Muy alta | Media | Enterprise Microsoft
8. Crear `<section id="elegir">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "¿Cómo elegir tecnología Backend?".
   - Árbol de decisión en diagrama ASCII:
     ```
     ¿El equipo ya tiene experiencia en algún lenguaje?
            ├── Sí → Usar ese lenguaje (productividad > velocidad teórica)
            └── No → Evaluar:
                        ¿Proyecto de IA/ML? → Python + FastAPI
                        ¿Sistema bancario/enterprise? → Java Spring Boot o C# ASP.NET
                        ¿Startup/API rápida? → Node.js NestJS o Go
                        ¿CMS/e-commerce? → PHP Laravel
     ```
   - Criterios a evaluar en tabla: Criterio | Descripción. Datos:
     - Rendimiento | ¿Cuántas requests/segundo necesitas? Go/Rust lideran; Node.js y Python son suficientes para la mayoría.
     - Ecosistema | ¿Hay librerías para tus integraciones? Node.js y Java tienen los ecosistemas más amplios.
     - Equipo | El lenguaje que el equipo ya conoce siempre gana en velocidad de entrega.
     - Mercado laboral | Node.js, Python y Java tienen la mayor demanda en Colombia.
     - Escalabilidad | Todos los frameworks modernos escalan bien con diseño correcto.
9. Crear `<section id="ejemplos">` padding 80px 0. Contiene:
   - `<h2>` "Ejemplo: API de Productos".
   - Tabs Bootstrap para Express.js, NestJS y FastAPI:
     - Tab Express.js:
       ```javascript
       const express = require('express');
       const router = express.Router();

       // GET /api/v1/productos
       router.get('/', async (req, res) => {
         try {
           const productos = await ProductoService.findAll();
           res.json(productos);
         } catch (error) {
           res.status(500).json({ error: 'Error interno del servidor' });
         }
       });

       // GET /api/v1/productos/:id
       router.get('/:id', async (req, res) => {
         const producto = await ProductoService.findById(req.params.id);
         if (!producto) return res.status(404).json({ error: 'No encontrado' });
         res.json(producto);
       });

       module.exports = router;
       ```
     - Tab NestJS:
       ```typescript
       @Controller('productos')
       export class ProductosController {
         constructor(private readonly productosService: ProductosService) {}

         @Get()
         findAll(): Promise<Producto[]> {
           return this.productosService.findAll();
         }

         @Get(':id')
         findOne(@Param('id') id: string): Promise<Producto> {
           return this.productosService.findOne(+id);
         }

         @Post()
         @HttpCode(201)
         create(@Body() createProductoDto: CreateProductoDto): Promise<Producto> {
           return this.productosService.create(createProductoDto);
         }
       }
       ```
     - Tab FastAPI:
       ```python
       from fastapi import FastAPI, HTTPException
       from pydantic import BaseModel

       app = FastAPI()

       class Producto(BaseModel):
           id: int
           nombre: str
           precio: float

       @app.get("/api/v1/productos", response_model=list[Producto])
       async def listar_productos():
           return await ProductoService.find_all()

       @app.get("/api/v1/productos/{id}", response_model=Producto)
       async def obtener_producto(id: int):
           producto = await ProductoService.find_by_id(id)
           if not producto:
               raise HTTPException(status_code=404, detail="No encontrado")
           return producto
       ```
10. Sección recursos: `frontend.html`, `bases-de-datos.html`, `cache.html`, `herramientas-desarrollo.html`, `modelo-cliente-servidor.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo.
