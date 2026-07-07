import { CompareTable } from "@/components/teaching/CompareTable";

export function ClasificacionSoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Clasificación de sistemas operativos"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Los sistemas operativos se clasifican según el entorno donde operan y las restricciones de tiempo y recursos. No es lo mismo un SO de escritorio en una oficina que uno de tiempo real en un controlador industrial."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos principales"}</h3>
      <CompareTable
        headers={["Tipo", "Características", "Ejemplos", "Uso típico"]}
        rows={[
          [
            "Escritorio",
            "Interfaz gráfica, multitarea general, drivers variados",
            "Windows 11, macOS, Ubuntu Desktop",
            "Oficina, diseño, desarrollo en PC",
          ],
          [
            "Móvil",
            "Optimizado para batería, táctil, apps en sandbox",
            "Android, iOS",
            "Smartphones y tablets",
          ],
          [
            "Servidor",
            "Sin GUI o mínima, servicios de red, alta disponibilidad",
            "Ubuntu Server, Windows Server, RHEL",
            "Web, bases de datos, correo corporativo",
          ],
          [
            "Tiempo real (RTOS)",
            "Respuesta determinista en microsegundos/milisegundos",
            "FreeRTOS, QNX, VxWorks",
            "Automoción, médico, IoT crítico",
          ],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Elegir el tipo correcto evita sobrecostos y fallos. Un RTOS en un servidor web es innecesario; Windows Home en un datacenter carece de herramientas de administración centralizada."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona la distinción"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Escritorio: prioriza experiencia de usuario y compatibilidad con periféricos."}</li>
        <li>{"Móvil: gestión agresiva de energía y permisos por aplicación."}</li>
        <li>{"Servidor: prioriza throughput, logs, redundancia y acceso remoto (SSH, RDP)."}</li>
        <li>{"Tiempo real: garantiza plazos de respuesta; puede sacrificar throughput general."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usar Windows 10 Home como controlador de dominio empresarial (falta de Active Directory completo)."}</li>
        <li>{"Desplegar Android en un quiosco público sin modo kiosk ni políticas MDM."}</li>
        <li>{"Instalar Ubuntu Desktop en un VPS de producción solo por comodidad gráfica."}</li>
        <li>{"Asumir que «Linux es Linux» y elegir una distro de escritorio para un cluster Kubernetes sin soporte LTS."}</li>
        <li>{"Usar un SO general para control de una línea de producción donde se requiere RTOS certificado."}</li>
      </ul>
    </section>
  );
}
