# Delaware Cross Country Archive

**Preserving the stories, places, and history of Delaware cross country.**

The first production-ready beta for a long-term digital humanities and community history initiative. The site is a static Astro project: fast, portable, accessible, and deployable to Cloudflare Pages without a database or paid API.

All sample interviews, trails, collection objects, statistics, and updates are explicitly marked as placeholders. They must be replaced with researched and reviewed content before public use.

## Local development

Requirements: Node.js 20 or newer and pnpm (npm also works).

```sh
pnpm install
pnpm dev
```

Astro will print a local development URL. To verify the production build:

```sh
pnpm build
pnpm preview
```

The deployable static output is written to `dist/`.

## Editing content

Initial records are simple TypeScript data files:

- `src/data/interviews.ts`
- `src/data/trails.ts`
- `src/data/collections.ts`
- `src/data/updates.ts`

Each file exports a typed array. Copy an existing item, replace placeholder values with verified information, and set `placeholder` to `false` only after editorial review. Neutral placeholder graphics are in `public/assets/`.

## Cloudflare Pages deployment

1. In Cloudflare, create a Pages project and connect this GitHub repository.
2. Select the production branch: `main`.
3. Use framework preset: **Astro**.
4. Set build command: `pnpm build` (or `npm run build`).
5. Set build output directory: `dist`.
6. Use Node.js 20 or newer. If needed, add `NODE_VERSION=20` as an environment variable.
7. Deploy. No runtime environment variables, database, or paid API keys are required.

Pull requests can use Cloudflare preview deployments. Production deployments should be made only after content, rights, accessibility, and attribution review.

## Project structure

```text
public/assets/       Neutral placeholder graphics, favicon, social image
src/components/      Shared layout, navigation, footer, page header, labels
src/data/            Editable typed content records
src/pages/           Home, primary pages, and 404
src/styles/          Global visual system and responsive styles
astro.config.mjs     Static Astro configuration
```

## Content and rights

Do not publish historical claims, personal information, oral histories, or collection materials without review. Record provenance, rights, attribution, consent, and uncertainty. Inclusion in the archive does not imply unrestricted reuse.

## License

See [LICENSE](LICENSE). Content contributions and third-party archival materials may carry separate rights statements even when site code is licensed for reuse.
