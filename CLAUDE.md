# CLAUDE.md — elaheh-dastan.github.io

Elaheh Dastan's personal homepage. Astro 7 + TypeScript, statically built and
served from GitHub Pages. Migrated from Next.js; anything describing
`pages/*.tsx`, `components/*.tsx`, or ESLint is pre-migration and stale. The
2026-10 redesign dropped Bootstrap and the 2015 "SPLIT" theme CSS; anything
mentioning `base.css`, `main.css`, `Title.astro` or `Divider.astro` is stale too.

## Build

```sh
just dev      # astro dev
just build    # astro build
just check    # astro check — type-checks .astro files
just lint     # biome check .
just format   # biome check --write .
```

pnpm is the package manager. Linting/formatting is **Biome**, not ESLint or
Prettier. `just update` runs `pnpm update --latest`; TypeScript is pinned to 6.x
in `pnpm-workspace.yaml` because `astro check` cannot run on 7.x yet.

## Layout

Content lives in `src/data/*.ts` and the pages only render it:

- `src/data/profile.ts` — name, headline, contact links, summary paragraphs,
  interests, skills and languages.
- `src/data/experience.ts` — employers, roles, bullets and tags.
- `src/data/education.ts` — degrees and publications.
- `src/data/projects.ts` — open-source projects.

Pages: `index.astro` (hero with the portrait, facts strip, about, skills,
employer overview and the CV button), `experience.astro` (timeline),
`projects.astro` (card grid), `education.astro` (degrees + publications),
`contact.astro` (contact cards), `404.astro`, and `negahban/*` (a side project's
landing, privacy and login-callback pages).

Shared UI: `src/layouts/Layout.astro` (head metadata, JSON-LD, sticky header
nav, footer), `src/components/Icon.astro` (inline SVGs from
`@fortawesome/fontawesome-free/svgs`, so no icon webfont ships),
`PageHeader.astro` and `Chips.astro`. All styling is in
`src/styles/global.css`: CSS custom properties with a dark variant under
`prefers-color-scheme`, no framework. The accent `#1F3A5C` is the resume's
heading colour on purpose. The typeface is self-hosted Inter via
`@fontsource-variable/inter`.

Photos live in `src/assets/`: `elaheh-dastan.jpg` (hero portrait),
`elaheh-dastan-avatar.jpg` (header avatar) and `elaheh-dastan-og.jpg`
(1200×630 Open Graph card). They are crops of one source photo; replace all
three together.

## The CV download link

`src/pages/index.astro` fetches the latest release tag from the GitHub API and
links to

```
https://github.com/elaheh-dastan/elaheh-dastan.pdf/releases/download/<tag>/elaheh.pdf
```

That asset name is **literal**. The resume repo builds region-specific variants
(`elaheh-spain.pdf`, `elaheh-iran.pdf`) and additionally publishes the default
variant as `elaheh.pdf` purely so this link keeps resolving. If that asset stops
being published, this button silently 404s.

Note the link only resolves for releases tagged **after** the resume repo's CI
was fixed; older releases (through `2024-04-25`) carry no assets at all.

## Cross-repo alignment (important)

`elaheh-dastan/elaheh-dastan.pdf` is the **source of truth** for Elaheh's
professional facts. Its Typst sources under `src/shared/*.typ` state the same
information this site does publicly, and the two must agree:

| Repo | What it states |
|---|---|
| `elaheh-dastan.pdf` | Full resume — authoritative (`src/cv.typ`, `src/shared/*.typ`, `src/profile_spain/metadata.toml`) |
| `elaheh-dastan.github.io` (here) | `src/data/*.ts` |
| `elaheh-dastan` | GitHub profile README |

Before editing any employer, title, date range, headline, summary, or location
here, read the corresponding `.typ` file in the resume repo and match it. This
site shows a **curated subset** — not every bullet needs an entry — but nothing
it shows may contradict the resume. The publication entry has drifted before
(the site named a different paper than the resume for a long time); check
`publications.typ` whenever touching `src/data/education.ts`.

LinkedIn (`linkedin.com/in/elaheh-dastan`) cannot be fetched programmatically:
it answers HTTP 999 to every unauthenticated request, including WebFetch and
curl. Use the resume repo instead, or ask the user to paste the profile.

The failure mode to watch for: an employer left as "Since 2020" / "Present" here
after the resume has moved on. That reads as a current job that ended years ago,
and it survived the whole Next.js-to-Astro migration unnoticed.

## Identity gotchas

- The email is `elahe.dstn@gmail.com` — **one** "h" in `elahe`. The GitHub user,
  the site domain, and the resume repo all use `elaheh-dastan` with two. Medium
  (`elahe-dstn.medium.com`) and Instagram (`elahe.dstn`) follow the email
  spelling, not the GitHub one.
- The GitHub account was renamed from `elahe-dastan` to `elaheh-dastan`; old
  `elahe-dastan/...` URLs still 301 but should not be introduced in new code.
