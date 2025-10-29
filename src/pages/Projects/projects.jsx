import { useMemo, useRef, useState, useEffect } from "react";
import { FiExternalLink, FiGithub, FiInfo, FiX, FiChevronLeft, FiChevronRight, FiSearch, FiMaximize } from "react-icons/fi";
import styles from "./styles.module.css";

/** Modelo de datos
 * id: string
 * title: string
 * category: "web" | "forms" | "sheets" | "powerbi" | "cards" | "otros"
 * thumbnail: string
 * images?: string[] // para galería (primera se usa como principal)
 * short: string
 * description: string
 * tech: string[]
 * tags: string[]
 * links: { live?: string; repo?: string; detail?: string }
 * interactive?: { type: "iframe" | "image"; src: string }
 * featured?: boolean
 */
const BASE = import.meta.env.BASE_URL;
const FALLBACK = `${BASE}/fallback.webp`;

/* 👇 Handler global reutilizable para fallback de imágenes */
const applyFallback = (e) => {
  if (e.currentTarget.dataset.fallbackApplied) return;
  e.currentTarget.dataset.fallbackApplied = "1";
  e.currentTarget.src = FALLBACK;
};

const seed = [
  {
    id: "nutrimas-web",
    title: "Nutrimás (Caneviandas + Feliviandas)",
    category: "web",
    thumbnail: `${BASE}projects/nutrimas/thumb.webp`,
    images: [
      `${BASE}projects/nutrimas/thumb.webp`,
      `${BASE}projects/nutrimas/1.webp`,
      `${BASE}projects/nutrimas/2.webp`
    ],
    short: "Sitio con catálogo de Caneviandas/Feliviandas y armado de pedido.",
    description:
      "Sitio web para el emprendimiento Nutrimas con secciones Caneviandas y Feliviandas, recetas, ingredientes, preparación, contacto y un sistema de armado de pedido con redirección a WhatsApp. Incluye carrusel hero, bloques de producto, y detalle de envíos en CABA/GBA.",
    tech: ["HTML", "SCSS", "JavaScript", "GitHub Pages"],
    tags: ["Catálogo interactivo", "Diseño adaptable", "Integración WhatsApp", "Optimización SEO"],
    links: {
      live: "https://nico4400.github.io/Nutrimas/",
      repo: "https://github.com/Nico4400/Nutrimas"
    },  
    featured: true,
  },
  {
    id: "curso-js-proyecto-final",
    title: "Proyecto JS – E-commerce (Vanilla)",
    category: "web",
    thumbnail: `${BASE}projects/js-final/thumb.webp`,
    images: [
      `${BASE}projects/js-final/thumb.webp`,
      `${BASE}projects/js-final/1.webp`,
      `${BASE}projects/js-final/2.webp`
    ],
    short: "Catálogo y carrito construidos con JavaScript puro.",
    description:
      "Proyecto final del curso de JavaScript: sitio tipo e-commerce con grilla de productos, interacción de compra y flujo de carrito. Manipulación del DOM, manejo de estados y persistencia con localStorage. Build y publicación en GitHub Pages.",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage", "GitHub Pages"],
    tags: ["Catálogo interactivo", "Carrito", "UI Responsive", "Persistencia"],
    links: {
      live: "https://nico4400.github.io/Curso_Coder_Js/ProyectoFinal-Fern%C3%A1ndez_Castillo_Nicol%C3%A1s/",
      repo: "https://github.com/Nico4400/Curso_Coder_Js"
    },
    featured: false
  },
  {
  id: "react-proyecto-final",
  title: "E-commerce React – Proyecto Final",
  category: "web",
  thumbnail: `${BASE}projects/react-final/thumb.webp`,
  images: [
    `${BASE}projects/react-final/thumb.webp`,
    `${BASE}projects/react-final/1.webp`,
    `${BASE}projects/react-final/2.webp`
  ],
  short: "SPA de e-commerce con catálogo y carrito en React.",
  description:
    "Aplicación web de e-commerce en React con catálogo, detalle de productos y flujo de carrito. Gestión de estado en frontend y build para GitHub Pages.",
  tech: ["React", "Vite", "JavaScript", "CSS", "GitHub Pages"],
  tags: ["SPA", "Catálogo interactivo", "Carrito", "UI Responsive"],
  links: {
    live: "https://nico4400.github.io/React-ProyectoFinal/",
    repo: "https://github.com/Nico4400/React-ProyectoFinal"
  },
  featured: false
  },
  {
    id: "backend-proyecto-final",
    title: "API Backend – Proyecto Final (Node/Express)",
    category: "web", // si preferís, podés moverlo a "otros"
    thumbnail: `${BASE}projects/backend-final/thumb.webp`,
    images: [
      `${BASE}projects/backend-final/thumb.webp`,
      `${BASE}projects/backend-final/1.webp`,
      `${BASE}projects/backend-final/2.webp`
    ],
    short: "API REST con autenticación y persistencia; deploy en Render.",
    description:
      "Servidor Node/Express con endpoints REST y autenticación para usuarios (login en /login). Persistencia en base de datos, middlewares de seguridad y manejo de sesiones/tokens. Incluye ejemplo de consumo vía Postman/Insomnia y deploy en Render.",
    tech: ["Node.js", "Express", "MongoDB", "Render"],
    tags: ["Autenticación", "REST API", "Persistencia", "Deploy"],
    links: {
      live: "https://proyectofinal-backend-qjzc.onrender.com/login",
      repo: "https://github.com/Nico4400/ProyectoFinal-Backend"
    },
    featured: false
  },


  {
    id: "factura-smart-form",
    title: "Formulario inteligente de Facturas",
    category: "forms",
    thumbnail:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552960366-b330a2f838b0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop",
    ],
    short: "Generación automática de PDF/Excel con validaciones.",
    description:
      "Formulario React con lógica de negocio: cálculo de impuestos, validaciones, auto‑completado y exportación a PDF/Excel.",
    tech: ["React", "Hook Form", "Zod", "xlsx", "pdf-lib"],
    tags: ["Automatización", "Validaciones"],
    links: { live: "#", repo: "#" },
    interactive: { type: "iframe", src: "https://example.com/demo-form" },
  },
  {
    id: "gsheets-tools",
    title: "Suite de herramientas en Google Sheets",
    category: "sheets",
    thumbnail:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    ],
    short: "QUERY/FILTER/ARRAY con panel de control.",
    description:
      "Plantillas avanzadas de Google Sheets: consultas dinamizadas (QUERY/FILTER), consolidación IMPORTRANGE, métricas y botones Apps Script.",
    tech: ["Google Sheets", "Apps Script"],
    tags: ["ETL", "Dashboards", "Plantillas"],
    links: { detail: "#" },
  },
  {
    id: "powerbi-obras",
    title: "Power BI – Obras Municipales",
    category: "powerbi",
    thumbnail:
      "https://images.unsplash.com/photo-1551281044-8d8d0d8b7ae2?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551281044-8d8d0d8b7ae2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    ],
    short: "Tablero con KPIs, filtros y mapa.",
    description:
      "Modelo estrella + DAX básico para seguimiento de avance físico/financiero por municipio, con segmentaciones y bookmarks.",
    tech: ["Power BI", "Power Query", "DAX"],
    tags: ["KPIs", "Mapas", "Bookmarks"],
    links: { live: "#" },
  },
  {
    id: "tarjeta-qr",
    title: "Tarjeta de presentación digital (QR)",
    category: "cards",
    thumbnail:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec0b438?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162618071-b39a2ec0b438?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162618071-195b42dfb3f5?q=80&w=1600&auto=format&fit=crop",
    ],
    short: "Tarjeta web con enlaces, CV y CTA.",
    description:
      "Landing minimalista con QR, enlaces a LinkedIn, GitHub y CV multi‑idioma en PDF. Opcional: modo offline como PWA.",
    tech: ["React", "Vite", "PWA"],
    tags: ["Portfolio", "QR"],
    links: { live: "#", repo: "#" },
  },
];

const categories = [
  { key: "web", label: "Web Apps" },
  { key: "forms", label: "Formularios inteligentes" },
  { key: "sheets", label: "Google Sheets" },
  { key: "powerbi", label: "Power BI" },
  { key: "cards", label: "Tarjetas/CV" },
  { key: "otros", label: "Otros" },
];

// ✅ Genera 5 tarjetas por sección clonando ligeras variantes si faltan
function ensureFivePerCategory(items) {
  const byCat = new Map();
  for (const c of categories) byCat.set(c.key, []);
  for (const p of items) byCat.get(p.category)?.push(p);
  const out = [];
  for (const c of categories) {
    const list = byCat.get(c.key);
    if (!list) continue;
    if (list.length === 0) continue; // si no tenés nada en una cat, no forzamos
    while (list.length < 5) {
      const base = list[list.length % Math.max(1, list.length - 0)];
      const idx = list.length + 1;
      list.push({
        ...base,
        id: `${base.id}-${idx}`,
        title: `${base.title} ${idx}`,
      });
    }
    out.push(...list);
  }
  return out;
}

function useGroupedProjects(list) {
  return useMemo(() => {
    const map = new Map();
    for (const c of categories) map.set(c.key, []);
    for (const p of list) map.get(p.category)?.push(p);
    return map;
  }, [list]);
}

function Row({ title, items }) {
  const scrollerRef = useRef(null);
  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  return (
    <section className={styles.rowSection}>
      <div className={styles.rowHeader}>
        <h2>{title}</h2>
        <div className={styles.rowActions}>
          <button className={styles.navBtn} aria-label="Scroll left" onClick={() => scrollByAmount(-1)}>
            <FiChevronLeft />
          </button>
          <button className={styles.navBtn} aria-label="Scroll right" onClick={() => scrollByAmount(1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className={styles.scroller} ref={scrollerRef}>
        {items.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={styles.card} id={`card-${project.id}`}>
      <button className={styles.thumbBtn} onClick={() => setOpen(true)} aria-label={`Abrir ${project.title}`}>
        <img src={project.thumbnail} alt={project.title} className={styles.thumb} loading="lazy" decoding="async" onError={applyFallback}/>
        <div className={styles.thumbOverlay}>
          <div className={styles.thumbTitle}>{project.title}</div>
          <div className={styles.pills}>
            {project.tags?.slice(0, 3).map((t) => (
              <span key={t} className={styles.pill}>{t}</span>
            ))}
          </div>
        </div>
      </button>
      <div className={styles.cardFooter}>
        <div className={styles.actions}>
          {project.links?.live && (
            <a className={styles.actionBtn} href={project.links.live} target="_blank" rel="noreferrer">
              <FiExternalLink /> <span>Ver</span>
            </a>
          )}
          {project.links?.repo && (
            <a className={styles.actionBtn} href={project.links.repo} target="_blank" rel="noreferrer">
              <FiGithub /> <span>Repo</span>
            </a>
          )}
          <button className={styles.actionBtn} onClick={() => setOpen(true)}>
            <FiInfo /> <span>Detalle</span>
          </button>
        </div>
      </div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </article>
  );
}

function Lightbox({ src, onClose }) {
  return (
    <div className={styles.lbBackdrop} onClick={onClose}>
      <img className={styles.lbImg} src={src} alt="Vista ampliada" />
      <button className={styles.lbClose} aria-label="Cerrar" onClick={onClose}><FiX/></button>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [active, setActive] = useState(project.images?.[0] || project.thumbnail);
  const [lightbox, setLightbox] = useState(null);

  // Deep link (opcional)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("project") === project.id) {
      // ya está abierto (controlado por ProjectCard)
    }
  }, [project.id]);

  const thumbs = project.images && project.images.length >= 3
    ? project.images.slice(0,3)
    : [project.thumbnail, project.images?.[1] || project.thumbnail, project.images?.[2] || project.thumbnail];

  return (
    <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
      <div className={styles.modalLarge}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          <FiX />
        </button>

        {/* Galería */}
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <img src={active} alt="" className={styles.galleryMainImg} onClick={() => setLightbox(active)} onError={(e) => { applyFallback(e); setActive(FALLBACK); }}/>
            <button className={styles.zoomBtn} onClick={() => setLightbox(active)} aria-label="Ampliar"><FiMaximize/></button>
          </div>
          <div className={styles.galleryThumbnails}>
            {thumbs.map((src, i) => (
              <button key={i} className={`${styles.thumbMini} ${active===src?styles.thumbMiniActive:""}`} onClick={() => setActive(src)}>
                <img src={src} alt="miniatura" onError={applyFallback}/>
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className={styles.modalContent}>
          <h3 className={styles.modalTitle}>{project.title}</h3>
          <p className={styles.modalShort}>{project.short}</p>
          <div className={styles.pills}>
            {project.tech?.map((t) => (
              <span key={t} className={styles.pill}>{t}</span>
            ))}
          </div>
          <p className={styles.modalDesc}>{project.description}</p>

          <div className={styles.modalActions}>
            {project.links?.live && (
              <a className={styles.primaryBtn} href={project.links.live} target="_blank" rel="noreferrer">
                <FiExternalLink /> Ir al proyecto
              </a>
            )}
            {project.links?.repo && (
              <a className={styles.secondaryBtn} href={project.links.repo} target="_blank" rel="noreferrer">
                <FiGithub /> Ver repositorio
              </a>
            )}
          </div>

          {project.interactive?.type === "iframe" && project.interactive?.src && (
            <div className={styles.embedWrap}>
              <iframe
                className={styles.embed}
                src={project.interactive.src}
                title={`${project.title} – demo`}
                loading="lazy"
                allow="clipboard-write; fullscreen"
              />
            </div>
          )}
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}

export default function Projects({ items }) {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState("all"); // filtro por secciones (categorías)

  const data = ensureFivePerCategory(items?.length ? items : seed);

  const filtered = useMemo(() => {
    return data.filter((p) => {
      const text = (
        p.title + " " + p.short + " " + (p.tech || []).join(" ") + " " + (p.tags || []).join(" ")
      ).toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesSection = section === "all" || p.category === section;
      return matchesQuery && matchesSection;
    });
  }, [data, query, section]);

  const grouped = useGroupedProjects(filtered);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("project");
    if (!id) return;
    const el = document.getElementById(`card-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Mis Proyectos</h1>
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <FiSearch />
            <input
              placeholder="Buscar por nombre o tag…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* Tabs de sección */}
          <nav className={styles.tabs} aria-label="Filtrar por sección">
            <button className={`${styles.tab} ${section==="all"?styles.tabActive:""}`} onClick={() => setSection("all")}>
              Todas
            </button>
            {categories.map((c) => (
              <button key={c.key} className={`${styles.tab} ${section===c.key?styles.tabActive:""}`} onClick={() => setSection(c.key)}>
                {c.label}
              </button>
            ))}
          </nav>
        </div>
        <p className={styles.lead}>
          Demostraciones reales: web apps, formularios inteligentes, automatizaciones con Google Sheets y tableros en Power BI.
        </p>
      </header>

      {categories.map((cat) => {
        const items = grouped.get(cat.key) || [];
        if (!items.length || (section !== "all" && cat.key !== section)) return null;
        return <Row key={cat.key} title={cat.label} items={items} />;
      })}
    </div>
  );
}

