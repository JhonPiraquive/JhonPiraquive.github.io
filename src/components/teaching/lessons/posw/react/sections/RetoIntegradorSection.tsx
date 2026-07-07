import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: catálogo React consumiendo API REST"}
      </h2>
      <p className="my-4 font-semibold">{"Catálogo React consumiendo API REST"}</p>
      <p className="my-4">
        {"Implementa una vista que liste productos desde "}
        <code>{"GET /api/v1/productos"}</code>
        {"."}
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Crea proyecto con npm create vite@latest -- --template react-ts."}</li>
        <li>{"Define TarjetaProducto con props tipadas y botón que llame onAgregar."}</li>
        <li>{"En Catalogo, usa useState para productos, cargando y error."}</li>
        <li>{"En useEffect, fetch a la API con limpieza al desmontar o al cambiar filtros."}</li>
        <li>{"Renderiza lista con key={p.id}; muestra estados vacío, carga y error."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: sin mutar props/estado directamente, useEffect con dependencias correctas, manejo de race conditions, tipos TypeScript en props y respuesta API."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Catalogo con useState y useEffect"
        code={`function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);
    setError(null);

    fetch("/api/v1/productos")
      .then(r => {
        if (!r.ok) throw new Error("Error al cargar productos");
        return r.json();
      })
      .then(datos => {
        if (!cancelado) {
          setProductos(datos);
          setCargando(false);
        }
      })
      .catch(err => {
        if (!cancelado) {
          setError(err.message);
          setCargando(false);
        }
      });

    return () => { cancelado = true; };
  }, []);

  if (cargando) return <div>Cargando productos...</div>;
  if (error) return <div className="error">{error}</div>;
  if (productos.length === 0) return <div>No hay productos.</div>;

  return (
    <section className="catalogo">
      {productos.map(p => (
        <TarjetaProducto
          key={p.id}
          nombre={p.nombre}
          precio={p.precio}
          imagen={p.imagen}
          onAgregar={nombre => console.log(nombre)}
        />
      ))}
    </section>
  );
}`}
      />
      <PracticeExercise
        prompt="Implementa el catálogo React: useState para productos/cargando/error, useEffect con cleanup y lista con key={p.id}."
        hints={[
          "react-ts template con Vite",
          "flag cancelado en cleanup",
          "manejar r.ok en fetch",
          "props tipadas en TarjetaProducto",
        ]}
        expectedKeywords={["useState", "useEffect", "key", "fetch"]}
        successMessage="Excelente. Has construido un catálogo React con manejo correcto de estado y efectos."
        rows={6}
      />
    </section>
  );
}
