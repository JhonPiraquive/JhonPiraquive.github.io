import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EjemplosBackendSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ejemplos de backend"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Separación de capas: rutas → controlador → servicio → modelo."}
        </li>
        <li>{"Validación en servidor antes de persistir."}</li>
        <li>
          {
            "Códigos HTTP semánticos: 201 creado, 404 no encontrado, 422 validación."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — EjemplosBackend"
        chart={`mindmap
  root((EjemplosBackend))
    Separación de capas
    Validación en servidor antes de persistir
    Códigos HTTP semánticos`}
      />

      <CodeFiddle
        language="javascript"
        title="Listar productos (Express)"
        code={`const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const productos = await ProductoService.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/:id", async (req, res) => {
  const producto = await ProductoService.findById(req.params.id);
  if (!producto) return res.status(404).json({ error: "No encontrado" });
  res.json(producto);
});

module.exports = router;`}
      />
      <CodeFiddle
        language="javascript"
        title="Crear producto con validación"
        code={`router.post("/", async (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || precio <= 0) {
    return res.status(422).json({
      error: "VALIDATION_ERROR",
      mensaje: "Nombre requerido y precio mayor a 0"
    });
  }
  const producto = await ProductoService.create({ nombre, precio });
  res.status(201).json(producto);
});`}
      />
      <CodeFiddle
        language="json"
        title="Respuesta JSON producto"
        code={`{
  "id": 42,
  "nombre": "Teclado mecánico",
  "precio": 150000,
  "stock": 12
}`}
      />
    </section>
  );
}
