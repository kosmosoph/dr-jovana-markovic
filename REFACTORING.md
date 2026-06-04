**Project Refactoring & Optimization Report

Date: 2026-06-03
Repository: dr-jovana-markovic

Summary
- I performed an automated inspection and some runtime checks. I fixed a blocking CSS import order issue so Tailwind's `--spacing(...)` function can resolve (see `src/styles/index.css`). The app now serves pages (HTTP 200) but there are several opportunities for structural, quality, and performance improvements.

What to keep (strengths)
- Clear component structure: UI components live under `src/app/components` and a dedicated `ui` folder with small primitives (good modularity).
- Tailwind + CSS variables approach: `src/styles/theme.css` centralizes theme tokens — good for theming and maintainability.
- Lightweight app: no heavy data-fetching or large runtime dependencies in the client codebase.

High-level issues found
- Mixed tooling & dependencies: `package.json` contains both Next.js production deps and Vite dev deps (`vite`, `@tailwindcss/vite`) which is confusing and can increase maintenance burden. (See [package.json](package.json)).
- Non-strict TypeScript config: `strict` is `false` in `tsconfig.json`. Lack of strictness risks type bugs. (See [tsconfig.json](tsconfig.json)).
- Direct DOM / window usage in Client components: `document.getElementById`, `window.*` used in `src/app/components/Navigation.tsx`, `src/app/components/HomePage.tsx`, `src/app/components/ui/use-mobile.ts`. This can cause SSR/hydration mismatches and makes components harder to test. (See [Navigation.tsx](src/app/components/Navigation.tsx), [HomePage.tsx](src/app/components/HomePage.tsx), [use-mobile.ts](src/app/components/ui/use-mobile.ts)).
- Image handling: native `<img>` elements are used rather than `next/image`, preventing automatic image optimization and responsive delivery (see [Navigation.tsx] and `ImageWithFallback`).
- CSS post-processing warnings in editor: `@custom-variant`, `@theme`, and certain `@apply` usages in `src/styles/theme.css` are unknown to the editor's parser and reported as errors — configure PostCSS/Tailwind plugin integration for the IDE or avoid non-standard at-rules.
- Hydration mismatch warnings in the dev server logs: likely due to client-only code executing differently server vs client.

Maintainability & clean code issues
- Missing strict types for some state and props (e.g., optional prop types, some state initializations). Prefer explicit prop interfaces and avoid implicit `any` behavior.
- Repeated DOM lookup logic for scrolling; extract into a utility hook to follow DRY.
- Magic numbers and breakpoints duplicated in multiple places (e.g., `MOBILE_BREAKPOINT`); centralize constants.
- Some UI logic mixes concerns (DOM + routing + state). Separate concerns: navigation/routing, UI state, and DOM interactions.

Performance & UX opportunities
- Use `next/image` to optimize images (lazy load, srcset, modern formats).
- Defer or lazy-load non-critical UI (carousels, heavy charts, maps) with dynamic imports.
- Reduce client bundle: audit dependencies (e.g., `moment`/`date-fns` usage is OK but verify actual usage), remove unused packages.
- Add HTTP caching and asset headers in production (Next config). Use preconnect/prefetch where appropriate.
- Use CSS containment and avoid global heavy selectors where possible.

Accessibility & SEO
- Ensure interactive elements use semantic elements and accessible attributes (buttons vs links, aria-labels when needed).
- Ensure images include descriptive alt text (most already do).
- Add server-side meta tags and structured data in `app/layout.tsx` for SEO.

Testing, CI & DX
- Add ESLint + Prettier + relevant plugins (React, JSX-a11y, Tailwind plugin).
- Enable TypeScript `strict` mode and fix resulting type errors incrementally.
- Add unit tests for critical components (navigation, booking modal) and E2E smoke tests for main flows.
- Add a CI pipeline (GitHub Actions) to run `pnpm build`, tests, and lint on PRs.

Concrete refactor plan (prioritized, step-by-step)

Phase 0 — Immediate (blocking/low-effort)
1. Commit the `src/styles/index.css` import-order fix (already done).
2. Add an IDE PostCSS/Tailwind configuration or update `.vscode/settings.json` so editor recognizes Tailwind at-rules (reduces false positive errors).
3. Replace direct `document.getElementById(...)` calls with a shared `useScrollToId` hook (client-safe) or use Next's anchor navigation for same-page links. Files: [src/app/components/Navigation.tsx](src/app/components/Navigation.tsx), [src/app/components/HomePage.tsx](src/app/components/HomePage.tsx).

Phase 1 — Short term (days)
1. Convert critical images to Next.js Image component: `Navigation` logo and `ImageWithFallback`. Replace `<img>` with `next/image` where appropriate. (Files: [src/app/components/Navigation.tsx](src/app/components/Navigation.tsx), [src/app/components/figma/ImageWithFallback.tsx](src/app/components/figma/ImageWithFallback.tsx)).
2. Centralize constants: create `src/lib/constants.ts` with `MOBILE_BREAKPOINT`, cookie names, SIDEBAR_COOKIE_MAX_AGE, etc. Replace local definitions.
3. Extract repeated UI logic into reusable hooks/utilities: `useIsMobile` (improve to check window safely), `useScrollToId`, `useCookie` (for sidebar open state), and UI primitives where duplication exists (buttons, cards).
4. Add ESLint and Prettier, with rules that match Clean Code and Tailwind usage.

Phase 2 — Medium term (weeks)
1. Turn on TypeScript `strict` in `tsconfig.json` and fix compilation errors incrementally. Prefer `noImplicitAny`, `strictNullChecks`, `forceConsistentCasingInFileNames`.
2. Add unit tests using `vitest` or `jest` + `@testing-library/react` and write tests for navigation, booking modal, and one major flow.
3. Audit and remove unused dependencies. Consider replacing heavy libraries with lighter alternatives where possible.
4. Implement dynamic imports for non-critical components (carousel, charts) using `next/dynamic`.

Phase 3 — Long term (months)
1. Introduce a more formal state management pattern if app scales (context + reducers or small store like Zustand) — avoid global mutable state.
2. Add performance monitoring and analytics (Lighthouse CI, Sentry for errors, Web Vitals reporting).
3. Implement SSR caching, image CDN and advanced Next optimizations: ISR/SSG where applicable.

Recommended coding guidelines (SOLID, KISS, DRY, Clean Code)
- Single Responsibility: Each component should do one thing. Split presentation vs logic. Prefer small pure components.
- Open/Closed: Favor composition and props rather than modifying existing components.
- Liskov: Ensure components accept props that don't surprise callers; keep contracts stable.
- Interface Segregation: Avoid monolithic prop objects; prefer focused props or grouped props interfaces.
- Dependency Inversion: Depend on abstractions (hooks/utilities) instead of concrete browser globals.
- KISS: Prefer simple, readable solutions. Avoid premature generalization.
- DRY: Extract repeated logic to hooks/helpers. Avoid copy/paste.
- Clean code: meaningful names, small functions, explicit types, limit nesting.

Quick actionable checklist (first 10 tasks)
- [ ] Add `.vscode` settings to recognize Tailwind/PostCSS or add `postcss.config.js` to IDE settings. (small)
- [ ] Replace `document.getElementById` usages with `useScrollToId` hook. (small)
- [ ] Convert top-nav logo to `next/image`. (small)
- [ ] Centralize constants in `src/lib/constants.ts`. (small)
- [ ] Add ESLint + Prettier config and run autofix. (small)
- [ ] Turn on `strict` in `tsconfig.json` and address first set of type errors. (medium)
- [ ] Add basic unit tests for `Navigation` and `BookingModal`. (medium)
- [ ] Audit `package.json` and remove Vite-related dev deps if using Next in production. (small)
- [ ] Replace global `window` usage with safe checks or hooks. (small)
- [ ] Use dynamic imports for `carousel` and `chart` components. (medium)

Files / spots to review explicitly (links)
- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [src/styles/index.css](src/styles/index.css)
- [src/styles/theme.css](src/styles/theme.css)
- [src/app/layout.tsx](src/app/layout.tsx)
- [src/main.tsx](src/main.tsx)
- [src/app/components/Navigation.tsx](src/app/components/Navigation.tsx)
- [src/app/components/HomePage.tsx](src/app/components/HomePage.tsx)
- [src/app/components/figma/ImageWithFallback.tsx](src/app/components/figma/ImageWithFallback.tsx)
- [src/app/components/ui/use-mobile.ts](src/app/components/ui/use-mobile.ts)

Estimated effort & prioritization
- Immediate fixes: 1-3 hours (imports, CSS/Tailwind IDE config, small hook extractions).
- Short term refactors and linting + image updates: 1-3 days.
- TypeScript strict migration and tests: 1-2 weeks (depends on code size and how many typing errors appear).
- Performance & architectural changes: 2+ weeks depending on scope.

Next steps I can take now (choose one or more):
- Implement the `useScrollToId` hook and replace `document.getElementById` usages.
- Convert the logo and fallback image component to `next/image`.
- Add ESLint + Prettier config and run autofix.
- Start enabling TypeScript `strict` and fix type errors incrementally.

If you want, I can start implementing the first short ticket (`useScrollToId` + replace usages) now and update the TODOs accordingly.

---
Generated by GitHub Copilot assistant while analyzing repo on 2026-06-03.
