# CSE Job Fair 2026 Frontend

React + TypeScript + Vite frontend for the public event website.

## Commands

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`

## Routing

- `/`: Home page
- `/register`: Register page

## Structure

- `src/pages/home`: Home page and its page-only components
- `src/pages/register`: Register page and its local styles
- `src/components/layout`: Shared layout components used by multiple pages
- `src/index.css`: Global base styles only

## Styling Rules

- Tailwind was removed.
- Use plain CSS files placed near each page or component.
- Use prefixed class names per page/component scope.
- Keep only truly global styles in `src/index.css`.
