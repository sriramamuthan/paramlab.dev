# sriramamuthan.dev

Personal site and home of two series:

- **Post-Mortem Lab** (`/lab`): engineering failures rebuilt so you can break them yourself
- **Show Me Why** (`/explore`): science and maths explained visually with code

Built with [Astro](https://astro.build) and MDX. Deployed on Cloudflare Pages.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Write a post

Add `src/content/posts/<series>/<slug>.mdx`, where `<series>` is `lab` or `explore`. The frontmatter schema is in
`src/content.config.ts`. Set `draft: true` to hide a post from production builds.

Components for posts: `Callout`, `YouTube` and anything in `src/components/demos/`.
