---
name: quiet-pages-experiments
description: >
  Use this skill whenever the user wants to create, extend, review, or improve
  experiments for The Quiet Pages in this repo. Trigger when the user mentions
  "quiet pages", "the lab", "new experiment", "new page", "add a component",
  "improve the sketchbook", or asks to explore UI concepts like typography,
  motion, color, layout, state transitions, scroll behavior, accessibility,
  forms, navigation, or data visualization in the context of this Vue app.
  Also trigger when the user wants to refine experiment copy, route structure,
  Carbon Vue usage, or the portfolio/experiment concept without naming the
  project explicitly, since this is the active project in context.
---

# The Quiet Pages — Experiment Skill

A skill for generating and improving experiment routes, components, and concept
copy for The Quiet Pages. In this repo, experiments are Vue single-file
components under `src/experiments/`, routed through `src/router/index.js`, and
rendered inside the shell defined by `src/App.vue` and `src/components/Header.vue`.

Do not assume a standalone HTML page architecture. Work with the existing Vue 3
+ Vite + Carbon Vue setup first.

## What Exists In This Repo

- App shell: `src/App.vue`
- Global header / side panel: `src/components/Header.vue`
- Route registry: `src/router/index.js`
- Experiment pages: `src/experiments/*.vue`
- Shared experiment/support components: `src/components/*.vue`
- Charting components and data: `src/components/charts/**`

Current routed experiment surfaces include:
- Home landing page
- The Lab experiment index
- 001 Charting Systems
- 002 Tone Adjustments and Negative Space
- 003 Scroll as Narrative Motion
- 005 Color Palette Exploration
- 006 State Transitions (Continuity over Jumps)
- Timeline / About page

There is also a dormant `ExperimentShadows.vue` file that is not currently wired
into the router.

## Project Identity

**The Quiet Pages** is a portfolio-sketchbook hybrid. It presents design and UX
experiments as quiet studies rather than polished case-study marketing.

Most experiment pages currently:
- Use a numbered title in the hero or first heading
- Open with short explanatory copy in IBM Plex Mono
- Explore one concept through a few live, interactive sections
- Use IBM Plex Sans for headings and Carbon/IBM-flavored visual language
- Support a light/dark theme toggle via `isSwitchOn`
- Sit inside the persistent global header rather than defining their own nav bar

**Tone**: Thoughtful, exploratory, slightly academic. The writing feels like
a designer's notebook — curious, precise, not performative.

## Visual Language

Prefer the repo's actual visual language instead of inventing a parallel system.
The current codebase leans on IBM Plex typography, Carbon spacing sensibilities,
neutral dark surfaces, and blue accents.

Use existing patterns before introducing new ones:

```css
/* Common dark theme values already present in experiments */
--cds-background: #000000;
--cds-layer-01: #262626;
--cds-layer-02: #393939;
--cds-text-primary: #f4f4f4;
--cds-text-secondary: #8d8d8d;
--cds-link-primary: #78a9ff;

/* Common light theme values already present in experiments */
--cds-background: #d3d3d3;
--cds-layer-01: #f4f4f4;
--cds-layer-02: #ffffff;
--cds-text-primary: #161616;
--cds-text-secondary: #525252;
--cds-link-primary: #0f62fe;
```

Typography in the current app:
- Headings: `IBM Plex Sans`
- Monospace/supporting copy: `IBM Plex Mono`
- Headline weight is generally light to regular, not heavy or ornamental

When proposing new visuals:
- Match the current restrained editorial tone
- Reuse experiment spacing and surface conventions where possible
- Prefer CSS variables or computed theme classes over repeated inline styles
- Keep dark and light modes both working unless the user explicitly asks otherwise

## Architecture Rules For This Repo

When adding or changing experiments here:

1. Add or update a Vue component in `src/experiments/`.
2. Register the route in `src/router/index.js`.
3. Ensure the page receives `isSwitchOn` as a prop if it needs theme-aware styling.
4. Reuse Carbon Vue components when they fit the interaction.
5. If the experiment should be discoverable from The Lab, update `src/experiments/TheLab.vue`.
6. If the experiment changes broader navigation or positioning, check `src/components/Header.vue` and `src/App.vue`.

Do not default to raw HTML mockups unless the user explicitly wants a standalone prototype.

## Experiment Structure Template

Most experiment components in this repo follow a shape close to this:

```vue
<template>
  <div :class="surfaceClass" class="experiment-name">
    <div class="page-content">
      <h1 :class="headingClass">00N - Concept Name</h1>
      <cv-breadcrumb :class="['intro-copy', bodyClass]">
        Short reflective framing copy. Explain what is being tested and why it matters.
      </cv-breadcrumb>

      <section class="section-block">
        <h2 class="section-title">Sub-concept</h2>
        <cv-breadcrumb :class="['support-copy', bodyClass]">
          Supporting explanation and the design question behind the interaction.
        </cv-breadcrumb>
        <div class="demo-surface">
          <!-- live demo -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'ExperimentExample',
  components: {
    CvBreadcrumb,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-name active' : 'experiment-name'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    bodyClass() {
      return this.isSwitchOn ? 'text-subtle active' : 'text-subtle'
    },
  },
}
</script>
```

The exact markup can vary. Follow the nearest good local pattern instead of forcing
all pages into one rigid template.

## Component And API Guidance

- Prefer Carbon Vue components already used in the repo: `CvBreadcrumb`, `CvButton`,
  `CvTile`, `CvTag`, `CvDataTable`, and related primitives.
- Imported Carbon icons should be passed as components, not as string names.
- Keep interactions genuinely interactive, not just illustrative.
- Favor small focused demos over large overloaded pages.
- Use Vue state/computed methods for interactions; do not recreate imperative DOM
  code patterns unless there is a clear reason.

## Experiment Content Guidelines

### What makes a good experiment in this repo

Each experiment should:
1. Be anchored in one clear concept, not five weak ones.
2. Open with concise framing copy that says what is being explored and why.
3. Use 1 to 3 focused interactive sections.
4. Keep demos understandable without outside explanation.
5. Respect current theme behavior and mobile constraints.
6. Clarify the design principle, not just show a component.

### Interactive demos

- Use Vue patterns already present in the app.
- Demos should be genuinely interactive: hover, click, filter, select, scroll, input.
- Show contrast between naive and considered interaction where useful.
- Prefer CSS transitions and Vue transitions over timer-heavy JavaScript.
- Support both dark and light themes if the page is theme-aware.
- Consider keyboard and focus behavior; accessibility is a current gap in the collection.

### Experiment categories and ideas

Read `src/skills/experiment-ideas.md` for categorized experiment ideas.
Use `src/skills/existing-pages.md` before proposing new work so you do not duplicate
what already exists or ignore known numbering gaps.

### Writing the experiment description

Intro copy should:
- Name the core design principle being explored
- Be 2–4 sentences in monospace voice
- End with an implicit or explicit design question
- NOT be a tutorial — it's a thinking prompt, not an explanation

**Example (good):**
> Typography is not decoration. The choices made here — weight, size, spacing,
> rhythm — shape how information is received before a single word is processed.
> How much can letterforms alone communicate hierarchy and intent?

**Example (bad):**
> In this experiment we will learn about typography. Typography includes fonts,
> sizes, and spacing. These are important for good design.

## Useful Local Experiment Patterns

### Type 1: Comparison
Show two approaches side by side: naive vs. considered, hidden vs. revealed,
coercive vs. ethical, before vs. after.

### Type 2: Live control
Use Vue state and Carbon controls to let the user change the demo in real time.

### Type 3: Scroll-driven
Use scroll progress, sticky panels, or reveal sequences when the concept is about
pace, continuity, or sequencing. Follow the `ExperimentScroll.vue` pattern rather
than inventing a disconnected effect.

### Type 4: State machine
Use explicit states and transitions when exploring disclosure, loading, navigation,
filters, or ethical nudges. `ExperimentingTransitions.vue` is the nearest reference.

## Quality checklist

Before finalizing any experiment or experiment update:
- [ ] Route/component naming aligns with `src/router/index.js`
- [ ] Numbering aligns with the current collection and any known gaps are handled deliberately
- [ ] Intro copy is reflective, not tutorial-style filler
- [ ] Theme-aware classes work in both dark and light modes where relevant
- [ ] Carbon components are used correctly for this repo
- [ ] Imported icons are passed as components, not string names
- [ ] Each demo is interactive and conceptually clear
- [ ] Mobile layout is acceptable; no fixed desktop-only assumptions unless intentional
- [ ] Accessibility basics are covered: keyboard, focus, readable contrast, semantics
- [ ] The Lab navigation is updated if this experiment should be discoverable there

## Naming And Routing

Current experiment files are Vue SFCs with names like:

- `ExperimentCharting.vue`
- `ExperimentTone.vue`
- `ExperimentScroll.vue`
- `ExperimentColors.vue`
- `ExperimentingTransitions.vue`

Routes are short slugs such as `/charting`, `/experiment-tone`, `/experiment-scroll`,
`/color-palette`, and `/state-transitions`.

When adding a new experiment:
- choose a Vue component name consistent with local patterns
- add a route slug that reads clearly
- update The Lab buttons if appropriate
- verify the visible page number matches the collection order

Note: the current codebase has a numbering mismatch between the routed pages,
the dormant shadows experiment, and some historical references. Check before you increment.

## When to read references

- User asks for experiment ideas or "what should I build next" → read `src/skills/experiment-ideas.md`
- User wants to understand the existing pages → read `src/skills/existing-pages.md`
- User asks to improve, add, or refactor an experiment → inspect the nearest existing experiment component first
- User asks about the global shell, theme, or navigation → inspect `src/App.vue`, `src/components/Header.vue`, and `src/router/index.js`