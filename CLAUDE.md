# Shaivya Bora — Portfolio

## Project Status: In Progress

This is Shaivya's personal portfolio site. The foundation is built and running. Start the dev server and continue from here.

## Quick Start

```bash
npm run dev -- --port 3001
# Open: http://localhost:3001
```

## What's Been Built

**Stack**: Next.js 16 + Tailwind CSS v4 + Framer Motion  
**Fonts**: Playfair Display (headings) · Cormorant Garamond (big numbers) · DM Sans (body)  
**Design**: Dark & Editorial — #0a0908 background, #c9a96e warm gold accent, film grain overlay

### Sections (all in `src/components/`)
| File | Section | Status |
|------|---------|--------|
| `Nav.tsx` | Fixed nav, SB monogram, smooth scroll links | Done |
| `Hero.tsx` | Full-viewport, huge serif name, stats panel right | Done |
| `About.tsx` | Personal story + career timeline | Done |
| `Experience.tsx` | 4 roles, chapter-number style, metrics as Cormorant type | Done |
| `Projects.tsx` | Football Face-Off, AI Quick Commerce, Zen Mode | Done |
| `Skills.tsx` | 4 categorised skill groups with pill tags | Done |
| `Blog.tsx` | 3 draft placeholder essays | Done |
| `Contact.tsx` | "Let's talk." hero + email/LinkedIn CTAs | Done |

## Design Decisions (do not change without reason)

- **Numbers are NOT in cards/boxes** — impact metrics (75K+, ₹15Cr+, 100K+) are displayed as raw Cormorant Garamond typography. This is intentional and editorial.
- **Chapter numbers in Experience** — huge faded `01 02 03 04` behind each role. Decorative, not interactive.
- **Grain overlay** — `body::before` with SVG feTurbulence at 4.5% opacity. Makes the page feel printed.
- **Font injection** — fonts are loaded via `next/font/google` with CSS variables `--font-playfair-var`, `--font-dm-var`, `--font-cormorant-var` and mapped in `globals.css` `@theme inline`.

## Key Content (Shaivya's data)
- **Current role**: PM – AI Agents at SquadStack (Sept 2025 – Present)
- **Email**: shaivya7.7bora@gmail.com
- **Key metrics**: 75K+ daily AI calling mins · 100K+ users · ₹15Cr+ ARR · +5pp conversion
- **Side projects**: Football Face-Off · AI Quick Commerce Assistant · Zen Mode Extension

## What's Left / Common Next Tasks

- Add real LinkedIn URL in `About.tsx` and `Contact.tsx` (currently `href="https://linkedin.com"`)
- Add real URLs for side projects in `Projects.tsx` (currently `href="#"`)
- Write actual blog posts (MDX setup not yet configured — set up `@next/mdx` when ready)
- Add a profile photo to the Hero or About section
- Deploy to Vercel: `npx vercel --prod`
- Mobile responsiveness polish pass
- Add Open Graph metadata for social sharing

## Install Notes

npm had a cache permission issue — always install with:
```bash
npm install --legacy-peer-deps --cache /tmp/npm-cache-portfolio
```
