"""Extrae las entregas de estudiantes a texto plano para calificarlas.

Uso: python3 -I extraer.py <carpeta_trabajos> <carpeta_salida>

Por cada entrega (.zip/.pdf/.docx) crea <salida>/<nombre>/ con los archivos
descomprimidos (zips anidados incluidos) y un .txt junto a cada PDF/DOCX.
Descomprime SIEMPRE cualquier zip, aunque tenga otra extension (p. ej. un
.cs que en realidad es un zip, detectado por su firma), extrae las imagenes de
los DOCX a <archivo>.docx_media/ y marca cada archivo de codigo como
legible/ilegible. Imprime un inventario por entrega.
"""
import re
import subprocess
import sys
import zipfile
from pathlib import Path

SKIP = ("__MACOSX", "/bin/", "/obj/", ".vs/", ".DS_Store")
OFFICE = (".docx", ".xlsx", ".pptx", ".odt")
CODE = (".cs", ".csproj", ".sln", ".slnx", ".js", ".ts", ".py", ".java", ".cpp",
        ".c", ".h", ".php", ".json", ".txt", ".vb", ".kt", ".go", ".rb")


def is_zip(path):
    try:
        with open(path, "rb") as f:
            return f.read(4) == b"PK\x03\x04"
    except OSError:
        return False


def legible(path):
    """Devuelve (ok, motivo): texto UTF-8/latin-1 sin bytes nulos y no vacio."""
    data = path.read_bytes()
    if not data.strip(b"\xef\xbb\xbf \r\n\t"):
        return False, "vacio"
    if b"\x00" in data:
        return False, "binario (no es texto)"
    try:
        data.decode("utf8")
    except UnicodeDecodeError:
        return True, "legible (no UTF-8; probable latin-1)"
    return True, "legible"


def docx_text(path):
    xml = zipfile.ZipFile(path).read("word/document.xml").decode("utf8", "ignore")
    txt = re.sub(r"<[^>]+>", "", xml.replace("</w:p>", "\n"))
    n_img = sum(1 for n in zipfile.ZipFile(path).namelist() if n.startswith("word/media/"))
    return txt + f"\n[imagenes incrustadas: {n_img}]\n"


def convert(path):
    try:
        if path.suffix.lower() == ".pdf":
            txt = subprocess.run(["pdftotext", "-layout", str(path), "-"],
                                 capture_output=True, text=True).stdout
            n = subprocess.run(["pdfimages", "-list", str(path)],
                               capture_output=True, text=True).stdout.count("\n") - 2
            txt += f"\n[imagenes en pdf: {max(n, 0)}]\n"
        elif path.suffix.lower() == ".docx":
            txt = docx_text(path)
            media = path.with_name(path.name + "_media")
            with zipfile.ZipFile(path) as z:
                for n in z.namelist():
                    if n.startswith("word/media/"):
                        media.mkdir(exist_ok=True)
                        (media / Path(n).name).write_bytes(z.read(n))
        else:
            return
        path.with_name(path.name + ".txt").write_text(txt, encoding="utf8")
    except Exception as e:  # archivo corrupto: se reporta, no se aborta
        print(f"  ! no se pudo convertir {path.name}: {e}")


def unpack(zpath, dest):
    dest.mkdir(parents=True, exist_ok=True)
    try:
        with zipfile.ZipFile(zpath) as z:
            for info in z.infolist():
                if any(s in "/" + info.filename for s in SKIP):
                    continue
                z.extract(info, dest)  # zipfile neutraliza rutas '..'
    except zipfile.BadZipFile:
        print(f"  ! zip corrupto: {zpath.name}")
        return
    # zips anidados o disfrazados (cualquier extension salvo Office), a profundidad
    for inner in list(dest.rglob("*")):
        if (inner.is_file() and inner.suffix.lower() not in OFFICE
                and is_zip(inner)):
            target = inner.with_name(inner.name + "_descomprimido")
            unpack(inner, target)
            inner.unlink()


def main(src, out):
    src, out = Path(src), Path(out)
    for item in sorted(src.iterdir()):
        if item.is_dir() or item.name.startswith(("_", ".")):
            continue
        if item.suffix.lower() not in (".zip", ".pdf", ".docx") and not is_zip(item):
            continue
        dest = out / item.stem
        if item.suffix.lower() == ".zip" or (
                item.suffix.lower() not in OFFICE + (".pdf",) and is_zip(item)):
            unpack(item, dest)
        else:
            dest.mkdir(parents=True, exist_ok=True)
            (dest / item.name).write_bytes(item.read_bytes())
        for f in list(dest.rglob("*")):
            if f.is_file():
                convert(f)
        print(f"\n== {item.name}  ->  {dest}")
        for f in sorted(dest.rglob("*")):
            if f.is_file():
                extra = ""
                if f.suffix.lower() in CODE:
                    ok, why = legible(f)
                    extra = f"  [{'OK' if ok else 'PROBLEMA'}: {why}]"
                print(f"  {f.relative_to(dest)}  ({f.stat().st_size} B){extra}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(*sys.argv[1:])
