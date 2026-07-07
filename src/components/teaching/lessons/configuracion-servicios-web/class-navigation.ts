import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-fundamentos-web",
  classTitle: "Clase 1: Fundamentos web",
  hubOrder: 2,
  pages: [
    {
      slug: "navegadores-web",
      title: "Navegadores web y objetivos",
      description: "Motores de renderizado, DevTools, cookies y caché.",
      readMinutes: 18,
    },
    {
      slug: "direcciones-ip",
      title: "Direcciones IP: IPv4 e IPv6",
      description: "Octetos, hexadecimal, IP pública vs privada y consultas básicas.",
      readMinutes: 18,
    },
    {
      slug: "dns-y-dominios",
      title: "DNS y estructura de dominios",
      description: "Flujo DNS, dominios, subdominios y tipos de registro (A, AAAA, CNAME, MX, TXT, NS, SOA y más).",
      readMinutes: 22,
    },
    {
      slug: "configuracion-dns",
      title: "Configuración y herramientas DNS",
      description: "Panel de registros, nameservers y diagnóstico con dig/nslookup.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Comprueba tu comprensión, reto integrador y miniquiz.",
      readMinutes: 20,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-hosting-correo-https",
  classTitle: "Clase 2: Hosting, correo y HTTPS",
  hubOrder: 8,
  pages: [
    {
      slug: "hosting-y-publicacion",
      title: "Hosting y publicación de sitios",
      description: "Tipos de hosting, despliegue, logs Nginx y permisos.",
      readMinutes: 20,
    },
    {
      slug: "https-y-tls",
      title: "HTTP, HTTPS y TLS",
      description: "Certificados, Let's Encrypt y protocolos seguros.",
      readMinutes: 18,
    },
    {
      slug: "correo-corporativo",
      title: "Correo corporativo",
      description: "Registros MX, SPF, DKIM y cuentas corporativas.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Ejercicios de comprensión, reto integrador y miniquiz.",
      readMinutes: 20,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-administracion-remota",
  classTitle: "Clase 3: Administración remota",
  hubOrder: 13,
  pages: [
    {
      slug: "computacion-en-nube",
      title: "Computación en la nube",
      description: "IaaS/PaaS/SaaS y modelo cliente-servidor remoto.",
      readMinutes: 18,
    },
    {
      slug: "transferencia-archivos",
      title: "Transferencia de archivos",
      description: "FTP, vsftpd, clientes, integridad y comparativa de protocolos.",
      readMinutes: 20,
    },
    {
      slug: "ssh-y-admin-remota",
      title: "SSH y administración remota",
      description: "SFTP, claves SSH, herramientas gráficas, paneles y casos LATAM.",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Reto integrador, comprueba tu comprensión y cierre de clase.",
      readMinutes: 18,
    },
  ],
};

export const CLASE_04: ClassNavConfig = {
  classSlug: "clase-04-virtualizacion-diagnostico",
  classTitle: "Clase 4: Virtualización y diagnóstico",
  hubOrder: 18,
  pages: [
    {
      slug: "contenedores-docker",
      title: "Contenedores Docker",
      description: "Conceptos, pull/run/ps y despliegue básico de contenedores.",
      readMinutes: 18,
    },
    {
      slug: "virtualizacion",
      title: "Virtualización",
      description: "VMs vs contenedores, hipervisores y cuándo usar cada enfoque.",
      readMinutes: 15,
    },
    {
      slug: "diagnostico-troubleshooting",
      title: "Diagnóstico y troubleshooting",
      description: "Resolución por capas, Nginx, validación post-corrección e informe técnico.",
      readMinutes: 20,
    },
    {
      slug: "flujo-integrado",
      title: "Flujo integrado y validación",
      description: "Resolución local, checklist de pruebas y validación de servicios FTP.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Reto integrador, comprueba tu comprensión, cierre y miniquiz final.",
      readMinutes: 20,
    },
  ],
};

export const ALL_CLASSES = [CLASE_01, CLASE_02, CLASE_03, CLASE_04] as const;

export function buildPageSlug(classSlug: string, pageSlug: string): string {
  return `${classSlug}/${pageSlug}`;
}

export function getPageNavChain(): { slug: string; prev: string | null; next: string | null; order: number }[] {
  const chain: { slug: string; prev: string | null; next: string | null; order: number }[] = [
    { slug: "index", prev: null, next: CLASE_01.classSlug, order: 1 },
  ];

  let order = 2;

  ALL_CLASSES.forEach((config, classIndex) => {
    chain.push({
      slug: config.classSlug,
      prev: classIndex === 0 ? "index" : `${ALL_CLASSES[classIndex - 1]!.classSlug}/practica-y-cierre`,
      next: buildPageSlug(config.classSlug, config.pages[0]!.slug),
      order: order++,
    });

    config.pages.forEach((page, pageIndex) => {
      const fullSlug = buildPageSlug(config.classSlug, page.slug);
      const prevSlug =
        pageIndex === 0 ? config.classSlug : buildPageSlug(config.classSlug, config.pages[pageIndex - 1]!.slug);
      const nextSlug =
        pageIndex === config.pages.length - 1
          ? classIndex === ALL_CLASSES.length - 1
            ? null
            : ALL_CLASSES[classIndex + 1]!.classSlug
          : buildPageSlug(config.classSlug, config.pages[pageIndex + 1]!.slug);

      chain.push({ slug: fullSlug, prev: prevSlug, next: nextSlug, order: order++ });
    });
  });

  return chain;
}

export function getNavForSlug(slug: string) {
  const entry = getPageNavChain().find((item) => item.slug === slug);
  if (!entry) {
    throw new Error(`Unknown slug in class navigation: ${slug}`);
  }
  return entry;
}

export function getPageMetaBase(config: ClassNavConfig, pageSlug: string): Pick<
  LessonMeta,
  "slug" | "prev" | "next" | "order" | "pageNumber" | "totalPages" | "classTitle"
> {
  const fullSlug = buildPageSlug(config.classSlug, pageSlug);
  const nav = getNavForSlug(fullSlug);
  const pageIndex = config.pages.findIndex((p) => p.slug === pageSlug);
  return {
    slug: fullSlug,
    prev: nav.prev,
    next: nav.next,
    order: nav.order,
    pageNumber: pageIndex + 1,
    totalPages: config.pages.length,
    classTitle: config.classTitle,
  };
}

// Avoid circular import — type-only shape for helper return
type LessonMeta = {
  slug: string;
  prev?: string | null;
  next?: string | null;
  order: number;
  pageNumber?: number;
  totalPages?: number;
  classTitle?: string;
};
