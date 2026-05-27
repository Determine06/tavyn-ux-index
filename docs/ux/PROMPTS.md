# Tavyn UX Prompt Templates

## Implement a New Sign-up Variation From a Figma MCP Frame

```txt
Use the selected Figma MCP frame as the visual source of truth.

Implement it as the next available Tavyn sign-up UX route under `/ux/sign-up/v###`.

Rules:
- Inspect existing `/ux/sign-up/v###` routes first.
- Do not modify existing versions.
- Do not modify `/ux/sign-up/final`.
- Keep the new component isolated in `components/ux/experimental/sign-up`.
- Use shared UX components only when they help preserve the design accurately.
- Do not force the Figma design into shared components if that makes it less accurate.
- Match layout, spacing, typography, hierarchy, density, and interaction tone as closely as possible.
- Keep the UX premium, calm, technical, trustworthy, founder-controlled, minimal, and GitHub-native.
- Do not connect real auth, real APIs, real GitHub logic, or backend calls.
- Add subtle animation only when useful.
```

## Create a New Version Without Touching Previous Versions

```txt
Create a new sign-up UX variation.

Rules:
- Inspect existing `/ux/sign-up/v###` routes first.
- Use the next available version number.
- Do not edit, delete, rename, or refactor any existing version.
- Do not modify `/ux/sign-up/final`.
- If editing a shared component would unintentionally alter older versions, create a version-specific component instead.
- Keep the variation isolated.
- Use realistic Tavyn founder, GitHub, and blog workflow content.
```

## Merge Multiple Sign-up Versions Into Final

```txt
Review these sign-up UX variations:

- `/ux/sign-up/v001`
- `/ux/sign-up/v002`
- `/ux/sign-up/v003`

Create or update:

- `/ux/sign-up/final`

Rules:
- Do not delete or overwrite the original versions.
- Pull the strongest interaction, layout, copy, and visual ideas from the listed versions.
- Make `final` feel cohesive, not stitched together.
- Keep the tone premium, calm, technical, trustworthy, founder-controlled, minimal, and GitHub-native.
- Keep mock data local to the UX layer.
- Do not promote components into the production app yet.
- Summarize which ideas came from which versions.
```

## Add Animation States

```txt
Add interaction and animation states to `/ux/sign-up/v###`.

Rules:
- Only modify this specific version.
- Do not modify other versions or `/ux/sign-up/final`.
- Keep motion subtle, fast, and product-grade.
- Avoid playful or flashy AI-product animation.
- Add states that clarify workflow: loading, selected, connected, preview ready, revision pending, and PR ready.
- Preserve layout stability.
- Respect reduced-motion preferences where applicable.
- Summarize the added states.
```

## Do a Responsive Pass

```txt
Do a responsive pass for `/ux/sign-up/v###`.

Rules:
- Only modify this specific version.
- Do not modify other versions or `/ux/sign-up/final`.
- Check desktop, tablet, and mobile layouts.
- Preserve the premium, calm, technical feel.
- Ensure text does not overflow.
- Ensure controls remain usable.
- Ensure dense GitHub-native UI does not collapse into clutter on mobile.
- Do not introduce unrelated design changes.
- Summarize the responsive adjustments.
```

## Promote Final UX Into the Real Tavyn App Later

```txt
Promote `/ux/sign-up/final` into production-ready Tavyn app components.

Rules:
- First inspect the existing production app structure.
- Do not move prototype assumptions directly into production.
- Separate visual components from data and stateful components.
- Replace mock data with typed props or real app data contracts.
- Preserve the approved UX as closely as possible.
- Add loading, error, empty, permission, and success states where needed.
- Keep GitHub-native behavior explicit.
- Do not delete the UX prototype.
- Summarize what was promoted, what remains prototype-only, and what production wiring is still needed.
```
