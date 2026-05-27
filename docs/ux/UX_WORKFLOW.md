# Tavyn UX Workflow

This workspace is a lightweight lab for exploring Tavyn onboarding and publishing UX before production implementation.

## Flow

1. Explore visually in Figma.
2. Select a promising Figma frame.
3. Use Figma MCP to expose the frame as the visual source of truth.
4. Ask Codex to implement the frame as an isolated versioned route.
5. Review the route in the browser.
6. Compare versions side by side.
7. Merge the strongest direction into `final` only when explicitly requested.
8. Later, promote final components into the real Tavyn app.

## Current Screen

Only `sign-up` exists initially.

Future screens such as website URL, company profile, GitHub access, snapshot validation, founder questions, blog preview, and full preview flow should be added only when requested.

## Versioning

New Figma imports should become the next available version:

```txt
/ux/sign-up/v001
/ux/sign-up/v002
/ux/sign-up/v003
```

Do not overwrite old versions. Do not update `final` unless the user explicitly asks to merge or promote a version.
