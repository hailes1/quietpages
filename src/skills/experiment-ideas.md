# Experiment Ideas for The Quiet Pages

A categorized list of potential experiments. Each is a focused exploration of
one UI/design concept. Ordered roughly by complexity within each category.

These ideas should be implemented against the current Vue + Carbon Vue app in this
repo, not as disconnected standalone mockups.

---

## Typography & Text

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| T1 | Fluid Type Scale | Proportion Without Breakpoints | How does type feel when it grows continuously with the viewport? |
| T2 | Optical Sizing | Letters That Know Their Size | At what sizes do letterforms need to change shape, not just scale? |
| T3 | Variable Fonts | One File, Infinite Expression | How much personality lives between the weights? |
| T4 | Line Length & Measure | The Column That Fits the Eye | What is the relationship between measure and reading speed? |
| T5 | Typographic Hierarchy | Weight, Size, Space | Can you establish hierarchy without color or font change? |
| T6 | Text on Texture | Legibility Under Pressure | When does background complexity start to erode readability? |
| T7 | Kerning & Spacing | The Air Between Letters | How much does micro-spacing change the perceived quality of type? |
| T8 | Numerals in Context | Tabular vs Proportional | When do numbers need to align, and when does alignment hurt them? |

---

## Layout & Space

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| L1 | Negative Space | The Shape of Nothing | How does empty space direct attention as powerfully as content? |
| L2 | Intrinsic Sizing | Let Content Lead | When should layout grow from content rather than constrain it? |
| L3 | Grid as Expression | Columns with Character | What does the underlying grid communicate before anything is placed in it? |
| L4 | Subgrid | Alignment Across Components | How does CSS subgrid change the relationship between parent and child? |
| L5 | Container Queries | Components That Know Where They Live | How does component-level context change layout decisions? |
| L6 | Aspect Ratios | Holding Shape Under Pressure | When does a fixed ratio serve the design, and when does it fight it? |
| L7 | Reading Order vs Visual Order | What the Eye Does vs What the DOM Says | When do visual and logical order diverge, and what breaks? |
| L8 | Density Spectrum | Compact to Comfortable | What changes about a design when you move from information-dense to spacious? |

---

## Motion & Animation

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| M1 | Easing Curves | The Character of Movement | How does the shape of a timing function change what motion means? |
| M2 | Duration Spectrum | Too Fast, Too Slow, Just Right | What is the threshold where animation stops feeling responsive and starts feeling slow? |
| M3 | Staggered Reveals | Sequence as Narrative | How does the order and delay of reveals create a sense of priority? |
| M4 | Reduced Motion | Designing for Stillness | What survives when you strip animation entirely — what must? |
| M5 | Physics-Based Motion | Springs and Inertia | How does simulated physics change the feel of an interface? |
| M6 | Scroll-Linked Animation | Time as Distance | What can scroll drive that time-based animation cannot? |
| M7 | Page Transitions | Between Here and There | What does the transition between pages communicate about their relationship? |
| M8 | Micro-interactions | The Small Acknowledgments | At what scale does feedback become meaningful vs invisible? |
| M9 | Loading States | The Art of the Wait | How do you design the experience of nothing happening? |

---

## Color & Light

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| C1 | Simultaneous Contrast | Colors That Change Each Other | How does a color shift when you change what surrounds it? |
| C2 | Perceptual Uniformity | Equal Steps, Equal Distance | Why do mathematically equal color steps look unequal? |
| C3 | Dark Mode Color System | Surfaces in Low Light | Which color decisions survive the transition to dark, and which must change entirely? |
| C4 | Color and Emotion | The Feeling Before the Meaning | What emotional associations do colors carry, and how culturally fragile are they? |
| C5 | Accessible Contrast | Legibility for Everyone | What is the actual perceptual difference between AA and AAA contrast? |
| C6 | Colorblind Simulation | Designing Without Assumptions | What does your palette look like when hue ceases to be a signal? |
| C7 | Chromatic Aberration | The Error That Became Aesthetic | How does intentional optical distortion communicate energy or urgency? |
| C8 | Tonal Relationships | Value Before Hue | Can you design a complete UI in greyscale and then add color as an accent? |

---

## Interaction & Feedback

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| I1 | Hover States | The Moment Before | What should happen in the gap between intent and action? |
| I2 | Focus Management | Where Attention Goes | When keyboard focus is explicit, what is revealed about your hierarchy? |
| I3 | Drag and Drop | Objects with Weight | How does simulated physicality change the experience of moving things? |
| I4 | Gesture Vocabulary | Swipe, Pinch, Hold | Which gestures are learnable vs which require discovery? |
| I5 | Error States | Failure as Information | What does a well-designed error actually communicate? |
| I6 | Form Design | Fields as Conversation | How does a form change when it's designed as a dialogue rather than a questionnaire? |
| I7 | Confirmation Patterns | Are You Sure? | When does confirmation help and when does it erode trust? |
| I8 | Progressive Disclosure | Revealing on Need | What is the right moment to show more? |
| I9 | Skeleton Screens | Anticipating the Load | Does showing structure before content reduce or increase perceived wait? |
| I10 | Cursor as Character | The Pointer Has Personality | How much can a custom cursor communicate before it becomes noise? |

---

## Data & Information

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| D1 | Sparklines | Data in Context | What is the minimum amount of visual space a trend needs to be understood? |
| D2 | Data Tables | Grids That Serve Reading | When is a table the right answer, and what makes one readable? |
| D3 | Heatmaps | Density Made Visible | How does spatial aggregation reveal patterns that rows cannot? |
| D4 | Annotation | The Story in the Chart | When does adding words to a chart help and when does it over-explain? |
| D5 | Real-time Data | Living Numbers | How do you design for data that is always changing? |
| D6 | Empty States | Zero as a Beginning | What does the absence of data communicate, and how do you design for it? |
| D7 | Progressive Summarisation | Detail on Demand | How much can you hide before the summary becomes misleading? |

---

## Composition & Patterns

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| P1 | Card Design | The Bounded Object | What is a card really — a container, a metaphor, or a navigation unit? |
| P2 | Navigation Patterns | How You Move Through a Thing | What does the structure of navigation tell you about the structure of the content? |
| P3 | Modals and Overlays | Interruption by Design | When is pulling focus the right move and when is it violence? |
| P4 | Notification Design | The Necessary Interruption | How loud should a notification be, and who decides? |
| P5 | Search Patterns | Finding Before Browsing | What does a search box communicate about the content it searches? |
| P6 | Breadcrumbs | You Are Here | When does showing your location help, and when does it just take up space? |
| P7 | Onboarding Flows | The First Encounter | What is the minimum viable introduction to a complex system? |

---

## Surface & Material

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| S1 | Elevation | Surfaces at Different Heights | When does depth communicate hierarchy vs when does it just add noise? |
| S2 | Blur as Depth | The Glass Between | What does frosted glass communicate about the relationship between layers? |
| S3 | Border Radius | The Personality of Corners | What does the sharpness or softness of a corner suggest about what it contains? |
| S4 | Texture Without Images | CSS Surface Design | How much material quality can you achieve with code alone? |
| S5 | Dark Surfaces | Not Black, Many Darks | What is the full tonal range of a dark UI, and what does each elevation communicate? |

---

## Accessibility & Inclusion

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| A1 | Screen Reader Semantics | What the Ear Hears | What does your interface sound like when the visual layer is removed? |
| A2 | Keyboard Navigation | The Tab Key as Primary Input | Is your interface usable in the order the DOM delivers it? |
| A3 | Touch Target Sizing | The Minimum Tappable Thing | How small can an interactive element be before it stops being interactive? |
| A4 | Motion Sensitivity | Designing for Vestibular Difference | What happens to your design when animation is a physical discomfort for the user? |
| A5 | Cognitive Load | Fewer Choices, Clearer Path | What is the relationship between options and decision fatigue? |

---

## Meta / Experimental

| # | Title | Subtitle | Core Question |
|---|-------|----------|---------------|
| X1 | Design Tokens | The Atom of a System | What is the smallest unit of a design decision that can be shared? |
| X2 | Component API Design | The Interface of the Interface | How does the shape of a component's API constrain or enable design? |
| X3 | Theming | One Component, Many Faces | How do you design for contexts you haven't seen yet? |
| X4 | Responsive vs Adaptive | Fluid or Stepped | When is a smooth response to screen size the right answer vs a deliberate step change? |
| X5 | Design in the Open | The Sketchbook as Artifact | What changes about your process when the experiment is the product? |

---

## Next Suggested Experiments

Based on the current collection and its current gaps, the strongest next experiments would be:

**008 - Focus Management** — Accessibility and keyboard behavior are still real gaps in the current collection and codebase.
**009 - Typography as Hierarchy** — The project already relies heavily on type, but it has not made typography itself the subject.
**010 - Easing Curves** — Motion exists in scroll and transitions work, but easing itself is still implicit rather than examined.
**011 - Design Tokens as Shared Decisions** — The repo is ready for a system-level experiment that connects visual language to implementation.

## Repo-Specific Notes

- Before proposing a new experiment number, read `src/skills/existing-pages.md` and inspect `src/router/index.js`.
- If you add an experiment, plan the route slug and The Lab button label at the same time.
- Prefer experiments that can reuse existing Carbon Vue components and the `isSwitchOn` theme contract.
- Good near-term candidates for this repo are ideas that also improve current UX weaknesses: accessibility, forms, focus, and clearer hierarchy.