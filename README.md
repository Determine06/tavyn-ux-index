# Tavyn UX

A lightweight Next.js App Router lab for isolated Tavyn UX prototypes.

This workspace is intentionally separate from the production Tavyn app. It is used to implement selected Figma MCP frames as versioned routes, compare variations, and promote the strongest direction into a `final` prototype before any production work begins.

## Run

```bash
npm install
npm run dev
```

## Initial Routes

- `/`
- `/ux`
- `/ux/sign-up`
- `/ux/sign-up/v001`
- `/ux/sign-up/final`

## Versioning Rule

Do not overwrite existing `v###` routes. New Figma imports should become the next available version, such as `v002` or `v003`.
