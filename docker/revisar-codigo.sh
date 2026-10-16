#!/usr/bin/env bash
# Compila y ejecuta código C# de un estudiante dentro de un contenedor EFÍMERO.
#
# Uso: docker/revisar-codigo.sh <carpeta_proyecto> [archivo_stdin]
#
# - Trabaja sobre una COPIA temporal (la carpeta original no se toca).
# - Contenedor sin red, con límites de memoria/procesos y timeout.
# - Al terminar (o fallar) elimina el contenedor, la copia temporal y las
#   imágenes que este script descargó. Las imágenes que ya existían antes
#   se respetan.
# - Proyecto .NET Framework (csproj con TargetFrameworkVersion) -> mono/mcs.
#   Proyecto SDK (TargetFramework netX.Y) o sin csproj -> dotnet SDK.
set -uo pipefail

SRC="${1:?Uso: $0 <carpeta_proyecto> [archivo_stdin]}"
STDIN_FILE="${2:-/dev/null}"
LABEL="calificar-trabajos=efimero"
NAME="calificar-$$"
TIMEOUT="${TIMEOUT:-60}"

[ -d "$SRC" ] || { echo "no existe la carpeta: $SRC"; exit 2; }
command -v docker >/dev/null || { echo "docker no instalado"; exit 2; }
WORK="$(mktemp -d)"
PULLED=""

limpiar() {
  docker rm -f "$NAME" >/dev/null 2>&1
  for c in $(docker ps -aq --filter "label=$LABEL"); do docker rm -f "$c" >/dev/null 2>&1; done
  for img in $PULLED; do docker rmi "$img" >/dev/null 2>&1 && echo "[limpieza] imagen eliminada: $img"; done
  rm -rf "$WORK"
  echo "[limpieza] contenedor y copia temporal eliminados"
}
trap limpiar EXIT

cp -r "$SRC"/. "$WORK"/
find "$WORK" \( -name bin -o -name obj \) -type d -prune -exec rm -rf {} + 2>/dev/null

CSPROJ="$(find "$WORK" -name '*.csproj' | head -1)"
if [ -n "$CSPROJ" ] && grep -q TargetFrameworkVersion "$CSPROJ"; then
  MODO=mono; IMG="mono:6.12"
else
  MODO=dotnet
  TFM="$( [ -n "$CSPROJ" ] && grep -oE 'net[0-9]+\.[0-9]+' "$CSPROJ" | head -1 )"
  IMG="mcr.microsoft.com/dotnet/sdk:${TFM#net}"
  [ -z "$TFM" ] && IMG="mcr.microsoft.com/dotnet/sdk:10.0"
  if [ -z "$CSPROJ" ]; then
    # sin csproj: se genera uno mínimo en la copia
    cat > "$WORK/revision.csproj" <<'XML'
<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><OutputType>Exe</OutputType>
<TargetFramework>net10.0</TargetFramework><ImplicitUsings>enable</ImplicitUsings>
<Nullable>disable</Nullable></PropertyGroup></Project>
XML
    CSPROJ="$WORK/revision.csproj"
  fi
fi

if ! docker image inspect "$IMG" >/dev/null 2>&1; then
  echo "[docker] descargando $IMG (se eliminará al terminar)"
  docker pull -q "$IMG" >/dev/null || { echo "no se pudo descargar $IMG"; exit 3; }
  PULLED="$IMG"
fi

if [ "$MODO" = mono ]; then
  CMD='cd /work && mcs -out:app.exe $(find . -name "*.cs") && echo "[compilacion OK]" && timeout '"$TIMEOUT"' mono app.exe'
else
  CMD='cd /work && dotnet build "/work/'"${CSPROJ#$WORK/}"'" -nologo -v q -o /tmp/out && echo "[compilacion OK]" && timeout '"$TIMEOUT"' dotnet /tmp/out/$(basename '"$CSPROJ"' .csproj).dll'
fi

echo "[docker] modo=$MODO imagen=$IMG"
docker run --rm -i --name "$NAME" --label "$LABEL" --network none \
  --memory 512m --pids-limit 256 --user "$(id -u):$(id -g)" \
  -e HOME=/tmp -e DOTNET_CLI_HOME=/tmp -e DOTNET_SKIP_FIRST_TIME_EXPERIENCE=1 -e DOTNET_NOLOGO=1 -e DOTNET_CLI_TELEMETRY_OPTOUT=1 \
  -v "$WORK":/work "$IMG" bash -c "$CMD" < "$STDIN_FILE"
echo "[docker] código de salida: $?"
