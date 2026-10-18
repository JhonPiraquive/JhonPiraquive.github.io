import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ManejoDeExcepcionesPorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Manejo de excepciones por capa (PHP)"}</h2>
      <p className="my-4">{"Una excepción no debería “reventar” al usuario con detalles internos. La app debe capturar errores, devolver mensajes seguros y mantener un identificador para rastreo. En capas: la capa de aplicación traduce errores a respuestas; la capa de dominio expresa reglas; la infraestructura captura fallos técnicos (BD/red)."}</p>
      <CodeFiddle
        language="php"
        title="Manejo por capas (ejemplo conceptual)"
        code={`<?php
// Capa aplicación: mensaje seguro al usuario
try {
    $pedido = $servicio->crearPedido($input);
} catch (DominioException $e) {
    $logger->warning('pedido_rechazado', ['request_id' => $reqId, 'code' => $e->getCode()]);
    return response()->json(['error' => 'No fue posible procesar la solicitud.'], 400);
} catch (Throwable $e) {
    $logger->error('error_interno', ['request_id' => $reqId, 'msg' => $e->getMessage()]);
    return response()->json(['error' => 'Error interno. Ref: ' . $reqId], 500);
}`}
      />
    </section>
  );
}
