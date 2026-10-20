# ParamLab site plan

ParamLab (paramlab.dev): home for two series. Built with Astro 7 and MDX, and deployed on Cloudflare Pages.

| Series | Path | What | Code |
|---|---|---|---|
| Post-Mortem Lab | `/lab` | Engineering failures you can break yourself | `../postmortem-lab` (plan in `docs/PLAN.md`) |
| Show Me Why | `/explore` | Science and maths explained visually with code | Demos live in this repo |

## Show Me Why

**Is there room?** Yes, if it’s positioned carefully. Great work already exists: 3Blue1Brown (video), Bartosz
Ciechanowski and Nicky Case (one-off interactive essays), PhET (simulations), Brilliant (paid courses). The gaps:

1. **The code is hidden.** Almost no one shows *the code that makes the visual*, so students can’t change the rules and
   see what happens. Here, every explainer has an editable code panel.
2. **They don’t map to what students study.** Each explainer is tagged to a syllabus topic (GCSE/A-level, CBSE,
   AP/IB), so a student can find “the one for tomorrow’s exam”.
3. **One-offs rather than a series.** Here, a regular cadence builds on shared tools (plotting, vectors, a physics
   step loop).

**Format:** The question → poke the visual → see the code → change one line → “now you know why”.

**Candidate first explainers:**

- Why does a ball thrown at 45° go furthest? (projectile motion, editable gravity)
- What is a derivative, *really*? (zoom into any curve until it’s a straight line)
- Why are there seasons? (axial tilt, not distance from the Sun)
- Monty Hall: simulate 10,000 games and watch intuition lose
- Fourier: draw anything with spinning circles
- Why does π show up in a needle drop? (Buffon’s needle)

**Cadence:** Alternate with Lab episodes once Lab Ep 01 ships, or run both weekly once the pipeline is smooth.

## Site to-do

- [x] GitHub username in `src/data/site.ts`
- [ ] Add the YouTube channel link
- [ ] Newsletter signup (Buttondown)
- [ ] Comments (Giscus, backed by GitHub Discussions)
- [ ] Social share images per post (generated at build time)
- [ ] Interactive code-panel component for Show Me Why (live editing, sandboxed)
