# URL mapping legacy → nuevo

| Legacy | Nueva |
|--------|-------|
| `/pages/index-es.html` | `/es/` |
| `/pages/index-en.html` | `/en/` |
| `/pages/teaching/index.html` | `/es/teaching/` |
| `/pages/teaching/pbpew/*.html` | `/es/teaching/pbpew/{slug}/` |
| `/pages/teaching/sea/*.html` | `/es/teaching/sea/{slug}/` |
| `/pages/teaching/poo/*.html` | `/es/teaching/poo/{slug}/` |
| `/pages/teaching/posw/*.html` | `/es/teaching/posw/{slug}/` |

Legacy HTML archivado en `kb/archive/legacy-pages/`. Mapa de redirects en `kb/content/legacy-redirects.json`; stubs generados en `out/pages/` post-build.
