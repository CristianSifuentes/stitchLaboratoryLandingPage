# Laboratory 2026 — Advanced React Architecture

A feature-driven React + TypeScript project inspired by your shared Laboratory design language (dark visual identity, editorial typography, CSS Grid + Flex, masonry lab cards, and modular architecture).

## Highlights

- **Feature-first architecture** (`app`, `features`, `shared`) with clear boundaries.
- **Modern routing** with `react-router-dom` and a shared layout shell.
- **Zustand state management** for UI preferences and exploration search state.
- **Responsive UX** with combined **CSS Grid**, **Flexbox**, and **masonry columns**.
- **Design language** adapted from your references: deep dark surfaces, serif-display headings, mono metadata, gradient CTA accents.

## Project Structure

```txt
src/
  app/
    hooks/
    views/
  features/
    Laboratory/
      components/
      services/
      store/
      types/
      views/
  shared/
    components/
    store/
    theme/
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
