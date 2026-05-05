#!/usr/bin/env python3
"""Build POO HTML pages from clases/poo/*.md (stdlib only)."""

from __future__ import annotations

import html
import re
import unicodedata
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
MD_DIR = REPO / "clases" / "poo"
OUT_DIR = REPO / "pages" / "teaching" / "poo"

LESSONS_ORDER = [
    ("01-fundamentos.md", "fundamentos.html"),
    ("02-encapsulamiento.md", "encapsulamiento.html"),
    ("03-herencia.md", "herencia.html"),
    ("04-asociacion-agregacion-composicion.md", "asociacion-agregacion-composicion.html"),
    ("05-abstraccion-clases-abstractas-interfaces.md", "abstraccion-clases-abstractas-interfaces.html"),
    ("06-polimorfismo.md", "polimorfismo.html"),
    ("07-override-y-sobrecarga.md", "override-y-sobrecarga.html"),
    ("08-diagramas-de-clases.md", "diagramas-de-clases.html"),
    ("09-solid-principios.md", "solid-principios.html"),
    ("10-modularidad-cohesion-acoplamiento.md", "modularidad-cohesion-acoplamiento.html"),
]


def slug_from_md_filename(fname: str) -> str:
    stem = fname.replace(".md", "")
    if stem == "00-indice":
        return "index.html"
    parts = stem.split("-", 1)
    if len(parts) == 2 and parts[0].isdigit():
        return parts[1] + ".html"
    return stem + ".html"


def rewrite_md_hrefs(md_text: str) -> str:
    """Replace local .md links with built .html slugs."""
    return re.sub(
        r"\]\(([^)]+\.md)\)",
        lambda m: f"]({slug_from_md_filename(m.group(1))})",
        md_text,
    )


def _slug_heading(title: str, seen: dict[str, int]) -> str:
    t = "".join(
        c
        for c in unicodedata.normalize("NFKD", title)
        if not unicodedata.combining(c)
    )
    base = re.sub(r"[^a-zA-Z0-9]+", "-", t.lower()).strip("-")[:56] or "section"
    if base in seen:
        seen[base] += 1
        return f"{base}-{seen[base]}"
    seen[base] = 0
    return base


def escape_inline_segment(seg: str) -> str:
    parts = re.split(r"(\*\*.+?\*\*)", seg)
    chunks: list[str] = []
    for p in parts:
        if len(p) >= 4 and p.startswith("**") and p.endswith("**"):
            inner = p[2:-2]
            chunks.append("<strong>" + html.escape(inner) + "</strong>")
            continue
        lparts = re.split(r"(\[[^\]]+\]\([^)]+\))", p)
        for lp in lparts:
            mm = re.match(r"\[([^\]]+)\]\(([^)]+)\)", lp)
            if mm:
                chunks.append(
                    '<a href="' + html.escape(mm.group(2)) + '">' + html.escape(mm.group(1)) + "</a>"
                )
            else:
                chunks.append(html.escape(lp))
    return "".join(chunks)


def inline_md(text: str) -> str:
    parts: list[str] = []
    rest = text
    while True:
        if "`" not in rest:
            parts.append(escape_inline_segment(rest))
            break
        pre, _, post = rest.partition("`")
        parts.append(escape_inline_segment(pre))
        if "`" not in post:
            parts.append("`" + escape_inline_segment(post))
            break
        code, _, rest = post.partition("`")
        parts.append("<code>" + html.escape(code) + "</code>")
    return "".join(parts)


def flush_paragraph(buf: list[str], out: list[str]) -> None:
    if not buf:
        return
    inner = inline_md("\n".join(buf).strip())
    if inner:
        out.append("<p>" + inner.replace("\n", "<br>\n") + "</p>")
    buf.clear()


def flush_ul(items: list[str], out: list[str]) -> None:
    if not items:
        return
    out.append("<ul>")
    for it in items:
        out.append("<li>" + inline_md(it.strip()) + "</li>")
    out.append("</ul>")


def flush_ol(items: list[str], out: list[str]) -> None:
    if not items:
        return
    out.append("<ol>")
    for it in items:
        out.append("<li>" + inline_md(it.strip()) + "</li>")
    out.append("</ol>")


def strip_first_h1(html: str) -> str:
    s = html.lstrip()
    if not s.startswith("<h1"):
        return html
    close = s.find("</h1>")
    if close == -1:
        return html
    return s[close + 5 :].lstrip()


def parse_markdown(md: str) -> str:
    lines = md.split("\n")
    out: list[str] = []
    i = 0
    para: list[str] = []
    ul_items: list[str] = []
    ol_items: list[str] = []
    bq_lines: list[str] = []
    slug_seen: dict[str, int] = {}

    def close_lists() -> None:
        nonlocal ul_items, ol_items
        flush_ul(ul_items, out)
        ul_items = []
        flush_ol(ol_items, out)
        ol_items = []

    def flush_bq() -> None:
        nonlocal bq_lines
        if not bq_lines:
            return
        inner = "\n".join(bq_lines).strip()
        out.append("<blockquote><p>" + inline_md(inner).replace("\n", "<br>\n") + "</p></blockquote>")
        bq_lines = []

    while i < len(lines):
        raw = lines[i]
        line = raw.rstrip("\r")

        if line.strip() == "":
            flush_paragraph(para, out)
            close_lists()
            flush_bq()
            i += 1
            continue

        if bq_lines and not line.startswith(">"):
            flush_paragraph(para, out)
            close_lists()
            flush_bq()

        if line.startswith("```"):
            flush_paragraph(para, out)
            close_lists()
            flush_bq()
            lang = line[3:].strip()
            block: list[str] = []
            i += 1
            while i < len(lines) and not lines[i].startswith("```"):
                block.append(lines[i])
                i += 1
            body = "\n".join(block)
            i += 1  # closing fence
            if lang == "mermaid":
                out.append('<div class="mermaid-wrap"><div class="mermaid">' + html.escape(body) + "</div></div>")
            else:
                hl = "csharp" if lang == "csharp" else (lang or "text")
                out.append(
                    f'<pre><code class="language-{html.escape(hl)}">{html.escape(body)}</code></pre>'
                )
            continue

        if line.startswith("#"):
            flush_paragraph(para, out)
            close_lists()
            flush_bq()
            level = len(line) - len(line.lstrip("#"))
            title = line.lstrip("#").strip()
            hid = ""
            if level in (2, 3):
                hid = f' id="{html.escape(_slug_heading(title, slug_seen))}"'
            out.append(f"<h{level}{hid}>{inline_md(title)}</h{level}>")
            i += 1
            continue

        if line.strip() == "---":
            flush_paragraph(para, out)
            close_lists()
            flush_bq()
            out.append("<hr>")
            i += 1
            continue

        if line.startswith(">"):
            flush_paragraph(para, out)
            close_lists()
            bq_lines.append(line.lstrip(">").lstrip())
            i += 1
            continue

        stripped = line.lstrip()
        ol_m = re.match(r"(\d+)\.\s+(.*)", stripped)
        ul_m = re.match(r"[-*]\s+(.*)", stripped)

        if ol_m:
            flush_paragraph(para, out)
            flush_ul(ul_items, out)
            ul_items = []
            flush_bq()
            ol_items.append(ol_m.group(2))
            i += 1
            continue

        if ul_m:
            flush_paragraph(para, out)
            flush_ol(ol_items, out)
            ol_items = []
            flush_bq()
            ul_items.append(ul_m.group(1))
            i += 1
            continue

        if ul_items:
            flush_ul(ul_items, out)
            ul_items = []
        if ol_items:
            flush_ol(ol_items, out)
            ol_items = []

        flush_bq()
        para.append(line)
        i += 1

    flush_paragraph(para, out)
    close_lists()
    flush_bq()
    return "\n".join(out)


HEAD_ASSETS = """    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Raleway:wght@700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
    <link rel="stylesheet" href="poo-theme.css" />"""


SCRIPTS_CORE = """  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script src="poo-common.js"></script>"""


def shell_index(main_html: str, page_title: str, hero_title: str, hero_sub: str, badge: str) -> str:
    return f"""<!doctype html>
<html lang="es">
<head>
{HEAD_ASSETS.format(title=html.escape(page_title))}
</head>
<body>
  <header class="site-header">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span class="logo"><a href="index.html">POO</a>
      <span>Programación Orientada a Objetos</span></span>
    </div>
    <nav class="site-nav">
      <a href="#estructura-del-curso-mapa">Mapa del curso</a>
      <a href="#prerrequisitos">Prerrequisitos</a>
      <a href="#convenciones-del-curso">Convenciones</a>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-inner">
      <span class="badge-tema">{html.escape(badge)}</span>
      <h1 class="hero-title">{html.escape(hero_title)}</h1>
      <p class="hero-sub">{html.escape(hero_sub)}</p>
      <a href="#estructura-del-curso-mapa" class="btn-primary-custom">Ver temas</a>
    </div>
  </section>

  <article class="poo-content section-alt" id="articulo">
    {main_html}
  </article>

  <footer class="site-footer">
    Programación Orientada a Objetos · Material académico · 2026
  </footer>

{SCRIPTS_CORE}
</body>
</html>
"""


def shell_lesson(
    main_html: str,
    page_title: str,
    hero_title: str,
    hero_sub: str,
    badge: str,
    tema_num: str,
    prev_href: str | None,
    prev_label: str | None,
    next_href: str | None,
    next_label: str | None,
    nav_anchors: list[tuple[str, str]],
) -> str:
    nav_links = "\n      ".join(
        f'<a href="{html.escape(h)}">{html.escape(t)}</a>' for h, t in nav_anchors
    )
    prev_block = ""
    if prev_href:
        prev_block = f"""<a href="{html.escape(prev_href)}" class="nav-card"><i class="bi bi-arrow-left-circle"></i><span style="flex:1">Anterior: {html.escape(prev_label or "")}</span><i class="bi bi-chevron-left"></i></a>"""
    next_block = ""
    if next_href:
        next_block = f"""<a href="{html.escape(next_href)}" class="nav-card"><i class="bi bi-arrow-right-circle"></i><span style="flex:1">Siguiente: {html.escape(next_label or "")}</span><i class="bi bi-chevron-right"></i></a>"""
    index_card = """<a href="index.html" class="nav-card"><i class="bi bi-collection"></i><span style="flex:1">Índice del curso</span><i class="bi bi-house"></i></a>"""

    return f"""<!doctype html>
<html lang="es">
<head>
{HEAD_ASSETS.format(title=html.escape(page_title))}
</head>
<body>
  <header class="site-header">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span class="logo"><a href="index.html">POO</a>
      <span>Programación Orientada a Objetos · Tema {html.escape(tema_num)}</span></span>
    </div>
    <nav class="site-nav">
      {nav_links}
      <a href="index.html">Índice</a>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-inner">
      <span class="badge-tema">{html.escape(badge)}</span>
      <h1 class="hero-title">{html.escape(hero_title)}</h1>
      <p class="hero-sub">{html.escape(hero_sub)}</p>
      <a href="#articulo" class="btn-primary-custom">Leer el tema</a>
    </div>
  </section>

  <article class="poo-content section-alt" id="articulo">
    {main_html}
  </article>

  <section class="section-alt" style="padding-top:0">
    <div class="container py-4" style="max-width:880px;margin:0 auto;padding:0 20px">
      <h2 class="section-title">Navegación</h2>
      {index_card}
      <div class="nav-row">
        {prev_block}
        {next_block}
      </div>
    </div>
  </section>

  <footer class="site-footer">
    Programación Orientada a Objetos · Material académico · 2026
  </footer>

{SCRIPTS_CORE}
</body>
</html>
"""


def first_heading_title(md: str) -> str:
    for ln in md.split("\n"):
        if ln.startswith("# ") and not ln.startswith("##"):
            return ln[2:].strip()
    return "POO"


def first_h2_slug(md: str) -> list[tuple[str, str]]:
    seen: dict[str, int] = {}
    anchors = []
    for ln in md.split("\n"):
        if ln.startswith("## ") and not ln.startswith("###"):
            title = ln[3:].strip()
            aid = _slug_heading(title, seen)
            anchors.append((f"#{aid}", title[:42] + ("…" if len(title) > 42 else "")))
            if len(anchors) >= 4:
                break
    return anchors


def lesson_meta(md_path: Path) -> tuple[str, str, list[tuple[str, str]]]:
    md = md_path.read_text(encoding="utf-8")
    title_line = first_heading_title(md)
    hero_title = title_line
    if ". " in title_line:
        hero_title = title_line.split(". ", 1)[-1].strip()
    hero_sub = "Ejemplos en C#, diagramas Mermaid y ejercicios prácticos."
    nav = first_h2_slug(md)
    return hero_title, hero_sub, nav


def build_index() -> None:
    md_path = MD_DIR / "00-indice.md"
    md = rewrite_md_hrefs(md_path.read_text(encoding="utf-8"))
    body = strip_first_h1(parse_markdown(md))
    page = shell_index(
        body,
        "POO · Índice del curso",
        "Programación Orientada a Objetos",
        "Curso práctico con C#, Mermaid y retos.",
        "Curso",
    )
    out = OUT_DIR / "index.html"
    out.write_text(page, encoding="utf-8")
    print("Wrote", out)


def fix_lesson_labels() -> None:
    """Regenerate lesson shells with correct prev/next labels."""
    for idx, (md_file, html_file) in enumerate(LESSONS_ORDER):
        md_path = MD_DIR / md_file
        md_raw = md_path.read_text(encoding="utf-8")
        md = rewrite_md_hrefs(md_raw)
        body = strip_first_h1(parse_markdown(md))
        hero_title, hero_sub, nav_extra = lesson_meta(md_path)

        def short_title(path: Path) -> str:
            t = first_heading_title(path.read_text(encoding="utf-8"))
            if ". " in t:
                return t.split(". ", 1)[-1].strip()
            return t

        prev_href = LESSONS_ORDER[idx - 1][1] if idx > 0 else None
        prev_label = short_title(MD_DIR / LESSONS_ORDER[idx - 1][0]) if idx > 0 else None
        next_href = LESSONS_ORDER[idx + 1][1] if idx + 1 < len(LESSONS_ORDER) else None
        next_label = short_title(MD_DIR / LESSONS_ORDER[idx + 1][0]) if idx + 1 < len(LESSONS_ORDER) else None

        badge = f"Tema {idx + 1}"
        tema_str = str(idx + 1)
        nav_anchors = [("#hero", "Inicio")] + nav_extra[:3]

        page = shell_lesson(
            body,
            f"{hero_title} | POO",
            hero_title,
            hero_sub,
            badge,
            tema_str,
            prev_href,
            prev_label,
            next_href,
            next_label,
            nav_anchors,
        )
        out_path = OUT_DIR / html_file
        out_path.write_text(page, encoding="utf-8")
        print("Wrote", out_path)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    build_index()
    fix_lesson_labels()


if __name__ == "__main__":
    main()
