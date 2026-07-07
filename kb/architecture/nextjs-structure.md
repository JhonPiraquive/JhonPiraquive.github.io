# Next.js structure

```
src/
  app/[locale]/layout.tsx
  app/[locale]/page.tsx
  app/[locale]/teaching/page.tsx
  app/[locale]/teaching/[track]/[...slug]/page.tsx
  components/{brand,clay,layout,portfolio,teaching}/
    teaching/lessons/{track}/{slug}/
  content/portfolio/{es,en}.json
  lib/{i18n,profile-stats,teaching,teaching-lessons-registry}.ts
  styles/{tokens,clay,globals}.css
  i18n/{routing,request}.ts
  messages/{es,en}.json
public/assets/
```

## Convenciones
- Static export only
- `trailingSlash: true`
- Teaching lessons resolved via `teaching-lessons-registry.ts`
