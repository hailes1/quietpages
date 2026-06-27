# Existing Pages — The Quiet Pages

A summary of what each current experiment covers, so new experiments
don't duplicate and can build on what exists.

This file reflects the current Vue app in `src/experiments/` and the active
routes in `src/router/index.js`, not an older standalone HTML version.

---

## 001 - Charting Systems
**Component**: `src/experiments/ExperimentCharting.vue`
**Route**: `/charting`
**Tags**: data, charts
**Status**: done

Explores charts built to match the sketchbook's visual language — dark surfaces,
clear hierarchy, theme-aware contrast. Includes bar charts and line charts displayed
in a two-column grid layout. Each chart is in a labelled panel with a subtle header.

**What it covers**: Basic chart types (bar, line), dark-mode data visualization,
chart labelling and legend placement, Carbon Charts theme switching.

**What it doesn't cover**: Interactivity, animation, real-time data, alternative
chart types (scatter, area, heatmap, sparkline).

---

## 002 - Tone Adjustments and Negative Space
**Component**: `src/experiments/ExperimentTone.vue`
**Route**: `/experiment-tone`
**Tags**: layout, visual, color
**Status**: done

Explores how negative space and tonal variation create visual rhythm and hierarchy.
Introduces a four-level tonal system: Background → Surface → Interactive → Accent.
Includes a data table demonstrating tonal hierarchy in structured content, showing
light and dark mode values side by side.

**What it covers**: Tonal hierarchy system, contrast relationships, dark mode surface
values, how spacing and tone work together.

**What it doesn't cover**: Hue-based color systems, semantic color (that's 005),
motion, or layout grids.

---

## 003 - Scroll as Narrative Motion
**Component**: `src/experiments/ExperimentScroll.vue`
**Route**: `/experiment-scroll`
**Tags**: motion, scroll
**Status**: refining

A scroll-driven experiment built around a sticky full-screen panel. Scroll progress
drives sequential chapter fades, moving from title to introduction to narrative beats.

**What it covers**: Scroll as primary navigation metaphor, cinematic pacing.

**What it doesn't cover**: Scroll-linked CSS transforms, parallax, reduced-motion
alternatives, or richer affordances for first-time users.

---

## 004 - Shadows as Hierarchy (Not Decoration)
**Component**: `src/experiments/ExperimentShadows.vue`
**Route**: not currently registered
**Tags**: elevation, depth, hierarchy
**Status**: dormant

This experiment component exists in the repo but is commented out of the router and
The Lab navigation. It appears to have been intended as the missing fourth experiment
in the sequence.

**What it covers**: Elevation as hierarchy, the role of shadow and depth cues.

**What it doesn't cover**: Current production behavior, since it is not wired into
the app right now.

---

## 005 - Color Palette Exploration
**Component**: `src/experiments/ExperimentColors.vue`
**Route**: `/color-palette`
**Tags**: color, semantics
**Status**: done

Explores color as communication — state, intent, and hierarchy — rather than decoration.
Demonstrates semantic color tokens: Success (green), Warning (amber), Error (red), Info (blue).
Designed to adapt between light and dark themes while maintaining semantic intent.

**What it covers**: Semantic color system, four standard states, theme adaptation.

**What it doesn't cover**: Full palette generation, perceptual uniformity, colorblind
simulation, tonal relationships (covered more in 002).

---

## 006 - State Transitions (Continuity over Jumps)
**Component**: `src/experiments/ExperimentingTransitions.vue`
**Route**: `/state-transitions`
**Tags**: motion, interaction, ux
**Status**: refining

Explores making state changes feel spatial and logical. Nothing should just appear
or disappear — transitions should honor the relationship between states and guide
attention naturally.

Includes five sub-experiments in a list-to-detail split-panel layout:
- UI Transitions: List → Detail
- Progressive Disclosure: Collapsed → Expanded
- Perceived Performance: Loading → Loaded
- Data Transformation: Filter → Result
- Spatial Navigation: Navigation → Context Shift

Also introduces "Ethical Nudges as Context Shift" (partially visible in screenshot).

**What it covers**: State transition philosophy, list/detail pattern, progressive
disclosure, filtered data transitions, ethical framing through comparison.

**What it doesn't cover**: Page-level transitions, exit animations, spring physics,
scroll-triggered state changes.

---

## 007 - Form Design as Conversation
**Component**: `src/experiments/ExperimentForms.vue`
**Route**: `/form-design`
**Tags**: forms, validation, interaction
**Status**: done

Explores form design as tone, sequencing, and guidance rather than mere input capture.
The page contrasts extractive copy with supportive framing, demonstrates validation as
repair guidance, and uses progressive disclosure to reveal follow-up questions only when
they become relevant.

**What it covers**: form tone, supportive validation copy, progressive disclosure,
friction reduction, conversational framing.

**What it doesn't cover**: multi-step flows, file uploads, password creation, or
assistive-technology-specific form semantics.

---

## Timeline / About
**Component**: `src/experiments/ExperimentTimeline.vue`
**Route**: `/timeline` with alias `/about`
**Tags**: profile, portfolio, biography
**Status**: active

This page is not a numbered experiment but an about/profile surface. It presents
experience, education, tools, languages, contact information, and personal media
signals in a structured editorial grid.

**What it covers**: Personal context, credibility, and portfolio identity.

**What it doesn't cover**: Experiment-specific interaction studies or design-principle demos.

---

## Home And Lab Surfaces

These are not numbered experiments, but they shape discovery and framing:

- `src/experiments/Home.vue`: hero statement and top-level CTA entry points
- `src/experiments/TheLab.vue`: collection index for experiment discovery

---

## Patterns Across the Collection

**Consistent**:
- IBM Plex Sans headings paired with IBM Plex Mono support copy
- Theme-aware dark/light experiments driven by an `isSwitchOn` prop
- Editorial framing paragraph near the top of each experiment
- Carbon Vue primitives used in non-standard but recognizable ways
- Neutral layered surfaces with blue accent links/titles
- Numbered experiment titles for the main collection

**Gaps not yet covered**:
- Typography as explicit subject
- Motion easing and physics
- Accessibility
- Grid and layout systems as the primary subject
- Elevation and layering as an active routed experiment
- Real-time / live data
- Keyboard interaction and focus

## Collection Notes

- The visible numbering in the current app is inconsistent because `ExperimentShadows.vue`
	exists but is not routed.
- If you add a new experiment, decide first whether to restore the dormant 004 slot or
	continue after 006.
- Any new experiment should update both routing and The Lab discoverability unless it is
	intentionally hidden or in progress.