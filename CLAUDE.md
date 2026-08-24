# CLAUDE.md — elaheh-dastan.github.io

Elaheh Dastan's personal homepage. Astro 7 + TypeScript, statically built and
served from GitHub Pages. Migrated from Next.js; anything describing
`pages/*.tsx`, `components/*.tsx`, or ESLint is pre-migration and stale.

## Build

```sh
just dev      # astro dev
just build    # astro build
just check    # astro check — type-checks .astro files
just lint     # biome check .
just format   # biome check --write .
```

pnpm is the package manager. Linting/formatting is **Biome**, not ESLint or
Prettier.

## Layout

- `src/pages/index.astro` — "Who am I?": headline, summary, interests, key
  skills, and the CV download button.
- `src/pages/experience.astro` — work history.
- `src/pages/projects.astro` — open-source projects; mirrors the resume's
  Projects section (`src/sections/projects.typ`).
- `src/pages/education.astro` — degrees, plus the Publications & Research
  section.
- `src/pages/contact.astro` — full contact details (the layout sidebar carries a
  short version on every page).
- `src/layouts/Layout.astro`, `src/components/` — shared shell and UI.

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
professional facts. Its Typst sources under `src/sections/*.typ` state the same
information this site does publicly, and the two must agree:

| Repo | What it states |
|---|---|
| `elaheh-dastan.pdf` | Full resume — authoritative (`src/resume.typ`, `src/sections/*.typ`) |
| `elaheh-dastan.github.io` (here) | `src/pages/index.astro`, `experience.astro`, `projects.astro`, `education.astro` |
| `elaheh-dastan` | GitHub profile README |

Before editing any employer, title, date range, headline, summary, or location
here, read the corresponding `.typ` file in the resume repo and match it. This
site shows a **curated subset** — not every bullet needs an entry — but nothing
it shows may contradict the resume.

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
