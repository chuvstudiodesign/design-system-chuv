<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Workflow

## Preview and Validation

- Use temporary tunnel previews only for visual review.
- Tunnel previews are meant to validate layout, spacing, colors, typography, hierarchy, and general visual direction.
- Do not treat tunnel previews as the source of truth for interactive behavior.
- Interactive behavior such as checkboxes, carousels, and similar UI controls must still be implemented correctly in code, preferably following the shadcn/ui component structure and MCP guidance when relevant.
- Final functional validation should happen on Vercel after the code is pushed to GitHub.

## Default Collaboration Flow

When the user asks for design or component changes, follow this order:

1. Implement the requested code changes.
2. Preserve or improve interactions using the project's shadcn/ui patterns.
3. If useful, open a temporary tunnel for visual-only review.
4. Run a production build check with `npm run build`.
5. Push the approved changes to GitHub.
6. Let the user validate real interactions in Vercel.

## Important Notes

- A tunnel preview may look correct visually while interactive behavior differs from production.
- Do not skip interaction work just because the tunnel is being used for visual review only.
- Prefer consistency with the project's existing design system and documented card/section patterns.
