export function SoapArquitecturaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SOAP y contrato WSDL"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Características"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"XML + WSDL obligatorio como contrato formal."}</li>
        <li>{"WS-Security, WS-ReliableMessaging."}</li>
        <li>{"Común en banca y sistemas legados."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo elegir SOAP"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Integraciones enterprise con contratos estrictos y seguridad WS-*."}</li>
        <li>{"Legado que ya expone WSDL; migración costosa."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Elegir SOAP para un CRUD JSON nuevo sin requisito de legado."}</li>
        <li>{"Ignorar el overhead XML frente a JSON/Protobuf."}</li>
      </ul>
    </section>
  );
}
