import type { QuizQuestion } from "@/components/teaching/Quiz";

export const CONFIGURACION_SISTEMAS_OPERATIVOS_QUIZZES: Record<string, QuizQuestion[]> = {
  "clase-01-arquitectura-computador": [
    {
      question: "¿Qué etapa del ciclo de instrucción lee el opcode desde memoria?",
      options: ["Execute", "Decode", "Fetch", "Write-back"],
      correctIndex: 2,
      feedback: "Fetch (captación) trae la instrucción desde la dirección apuntada por el PC.",
    },
    {
      question: "¿Qué nivel de caché es el más pequeño y está más cerca del núcleo del CPU?",
      options: ["L3", "L2", "L1", "RAM DDR"],
      correctIndex: 2,
      feedback: "L1 es por núcleo, ultrarrápida y de poca capacidad; L2 y L3 son más grandes y lentas.",
    },
    {
      question: "En ASCII, ¿cuántos bits representan el carácter «A» (código 65)?",
      options: ["4 bits", "8 bits", "16 bits", "32 bits"],
      correctIndex: 1,
      feedback: "ASCII clásico usa 7 u 8 bits por carácter; «A» = 65 decimal = 01000001 en binario.",
    },
    {
      question: "¿Qué bus es típico para conectar una GPU de alto rendimiento a la placa madre?",
      options: ["USB 2.0", "PCIe x16", "SATA III", "PS/2"],
      correctIndex: 1,
      feedback: "PCIe ofrece ancho de banda serial alto; las GPUs usan ranuras x16.",
    },
    {
      question: "Un técnico monta un CPU de 125 W con disipador de stock de 65 W. ¿Qué riesgo principal hay?",
      options: [
        "La RAM no reconocerá el CPU",
        "Throttling térmico, apagado o daño por sobrecalentamiento",
        "El BIOS no arrancará",
        "Solo afecta al disco duro",
      ],
      correctIndex: 1,
      feedback: "La refrigeración debe disipar el TDP sostenido; insuficiente → temperaturas críticas.",
    },
  ],
  "clase-02-dispositivos-almacenamiento": [
    {
      question: "¿Qué tecnología de almacenamiento usa platillos magnéticos giratorios y cabezales de lectura?",
      options: ["SSD NVMe", "HDD", "SAS solo flash", "CD-ROM"],
      correctIndex: 1,
      feedback: "El HDD (disco duro mecánico) almacena datos en superficies magnéticas con partes móviles.",
    },
    {
      question: "¿Cuál es la resolución estándar Full HD en píxeles?",
      options: ["1280 × 720", "1920 × 1080", "2560 × 1440", "3840 × 2160"],
      correctIndex: 1,
      feedback: "Full HD = 1920 × 1080 píxeles (1080p).",
    },
    {
      question: "¿Qué interfaz es típica de discos empresariales en servidores con bahías hot-swap y RAID?",
      options: ["SATA III de consumo", "SAS", "Solo USB 2.0", "IDE paralelo"],
      correctIndex: 1,
      feedback: "SAS (Serial Attached SCSI) se usa en entornos servidor con mayor fiabilidad y canales duales.",
    },
    {
      question: "¿Qué tipo de licencia permite ver y modificar el código fuente según términos como GPL?",
      options: ["Freeware cerrado", "Software libre (open source)", "Shareware de prueba", "Dominio público sin licencia"],
      correctIndex: 1,
      feedback: "El software libre/open source otorga libertades de uso y modificación del código según su licencia.",
    },
    {
      question: "¿Qué campo es indispensable en la hoja de vida de un PC institucional?",
      options: ["Color del mouse", "Número de serie o identificador de activo", "Marca del teclado únicamente", "Foto del usuario"],
      correctIndex: 1,
      feedback: "Serial o código de activo fijo permite garantía, soporte y trazabilidad del equipo.",
    },
  ],
  "clase-03-sistemas-operativos": [
    {
      question: "¿Qué componente del SO decide qué proceso usa la CPU en cada instante?",
      options: ["Gestor de archivos", "Planificador (scheduler)", "Driver de red", "Shell gráfica"],
      correctIndex: 1,
      feedback: "El planificador asigna tiempo de CPU según política (round-robin, prioridades, etc.).",
    },
    {
      question: "En Linux, ¿qué permiso otorga la «x» en chmod 754 para el propietario?",
      options: ["Solo lectura", "Lectura y escritura", "Ejecución", "Lectura y ejecución sin escritura"],
      correctIndex: 2,
      feedback: "7 = rwx (4+2+1); la x permite ejecutar archivos o entrar en directorios.",
    },
    {
      question: "¿Cuál es la diferencia entre ruta absoluta y relativa?",
      options: [
        "La absoluta empieza desde / o C:\\; la relativa desde el directorio actual",
        "Son sinónimos en Windows",
        "Solo Linux usa rutas absolutas",
        "La relativa siempre es más larga",
      ],
      correctIndex: 0,
      feedback: "/home/user/docs es absoluta; ../docs es relativa al cwd.",
    },
    {
      question: "¿Qué nivel de respaldo (1–4) implica copia en la nube con réplica en otra región geográfica?",
      options: ["Nivel 1 — espejo local", "Nivel 2 — NAS en LAN", "Nivel 3 — cloud", "Nivel 4 — geo-redundante"],
      correctIndex: 3,
      feedback: "Nivel 4 añade redundancia geográfica ante desastres regionales.",
    },
    {
      question: "Antes de instalar un SO dual-boot, ¿qué debe hacerse en el disco?",
      options: [
        "Formatear toda la red",
        "Planificar particiones y respaldar datos críticos",
        "Desinstalar el BIOS",
        "Cambiar la RAM a ROM",
      ],
      correctIndex: 1,
      feedback: "Particionar sin respaldo puede borrar datos; UEFI/BIOS debe reconocer el medio de arranque.",
    },
  ],
};
