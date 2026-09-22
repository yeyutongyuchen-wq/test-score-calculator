# Test Score Calculator

Static Next.js (App Router) site for converting raw exam scores to scaled scores.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build (static export)

```bash
npm run build
```

HTML is written to `out/`. Preview that folder with any static server, for example:

```bash
npx serve out
```

`next start` is not used when `output: "export"` is enabled.
