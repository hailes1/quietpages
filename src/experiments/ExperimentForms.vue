<template>
  <div :class="surfaceClass" class="experiment-forms">
    <div class="page-content">
      <h1 :class="headingClass">007 - Form Design as Conversation</h1>
      <cv-breadcrumb :class="['intro-copy', bodyClass]">
        A form can feel like an interrogation, or it can feel like a guided exchange.
        The difference is often not the fields themselves, but the tone, sequencing,
        and feedback around them. What changes when a form starts acting like a careful
        conversation instead of a checklist?
      </cv-breadcrumb>

      <section class="section-block">
        <h2 class="section-title">Tone Shapes Willingness</h2>
        <cv-breadcrumb :class="['support-copy', bodyClass]">
          The same request can be framed as extraction or guidance. Switch the tone and
          watch the preview adjust its labels, helper copy, and error language.
        </cv-breadcrumb>

        <div class="tone-switcher">
          <button
            type="button"
            class="mode-chip"
            :class="{ selected: previewMode === 'abrupt' }"
            @click="previewMode = 'abrupt'"
          >
            abrupt
          </button>
          <button
            type="button"
            class="mode-chip"
            :class="{ selected: previewMode === 'guided' }"
            @click="previewMode = 'guided'"
          >
            guided
          </button>
        </div>

        <div class="comparison-grid">
          <article :class="['comparison-card', panelClass, previewMode === 'abrupt' ? 'is-selected' : '']">
            <p class="card-label">Questionnaire</p>
            <h3 :class="headingClass">Just collect the answer</h3>
            <ul :class="['pattern-list', bodyClass]">
              <li>Short labels with no framing.</li>
              <li>Errors appear only after failure.</li>
              <li>The user has to guess what “good” looks like.</li>
            </ul>
            <div class="mini-form">
              <label>
                EMAIL
                <input type="text" value="dagmawe" readonly>
              </label>
              <p class="error-copy">Invalid input.</p>
            </div>
          </article>

          <article :class="['comparison-card', panelClass, previewMode === 'guided' ? 'is-selected' : '']">
            <p class="card-label">Conversation</p>
            <h3 :class="headingClass">Explain the ask before the answer</h3>
            <ul :class="['pattern-list', bodyClass]">
              <li>Every field signals why it matters.</li>
              <li>Validation helps the user recover, not feel wrong.</li>
              <li>Follow-up questions appear only when they become relevant.</li>
            </ul>
            <div class="mini-form guided-mini-form">
              <label>
                Where should a reply go?
                <input type="text" value="name@example.com" readonly>
              </label>
              <p class="hint-copy">A working email is enough. No formatting ceremony required.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Validation as Guidance</h2>
        <cv-breadcrumb :class="['support-copy', bodyClass]">
          This demo delays friction until it is useful, then responds with concrete repair
          advice. The goal is not to prove the user wrong. The goal is to help the next
          action become obvious.
        </cv-breadcrumb>

        <form class="conversation-form" @submit.prevent="submitForm" novalidate>
          <div class="field-grid">
            <label class="form-field" :class="fieldClass('name')">
              <span class="field-label">What should we call you?</span>
              <span class="field-helper">A first name is enough. This keeps the reply human.</span>
              <input
                v-model.trim="form.name"
                type="text"
                name="name"
                autocomplete="name"
                @focus="activeField = 'name'"
                @blur="validateField('name')"
              >
              <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
            </label>

            <label class="form-field" :class="fieldClass('email')">
              <span class="field-label">Where should a reply go?</span>
              <span class="field-helper">Use any address that can receive a response.</span>
              <input
                v-model.trim="form.email"
                type="email"
                name="email"
                autocomplete="email"
                @focus="activeField = 'email'"
                @blur="validateField('email')"
              >
              <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
            </label>
          </div>

          <label class="form-field form-field--full" :class="fieldClass('brief')">
            <span class="field-label">What decision are you trying to make?</span>
            <span class="field-helper">One sentence is enough. Name the product, feature, or tension.</span>
            <textarea
              v-model.trim="form.brief"
              name="brief"
              rows="4"
              @focus="activeField = 'brief'"
              @blur="validateField('brief')"
            ></textarea>
            <span v-if="errors.brief" class="field-error">{{ errors.brief }}</span>
          </label>

          <div class="context-panel" :class="panelClass" aria-live="polite">
            <p class="card-label">Current guidance</p>
            <p :class="['context-copy', bodyClass]">{{ activePrompt }}</p>
          </div>

          <cv-button kind="primary" size="lg" type="submit">Continue</cv-button>

          <div v-if="submitted" class="success-panel" :class="panelClass" aria-live="polite">
            <p class="card-label">Enough to continue</p>
            <p :class="['context-copy', bodyClass]">
              The form now has enough signal to move into a real conversation. No extra fields were
              required just to make the user prove they are serious.
            </p>
          </div>
        </form>
      </section>

      <section class="section-block">
        <h2 class="section-title">Progressive Disclosure</h2>
        <cv-breadcrumb :class="['support-copy', bodyClass]">
          Not every user needs every question. Start with the broad shape of the request,
          then reveal only the follow-up that helps the conversation continue.
        </cv-breadcrumb>

        <div class="disclosure-shell" :class="panelClass">
          <div class="project-type-switcher">
            <button
              v-for="option in projectTypes"
              :key="option.id"
              type="button"
              class="mode-chip"
              :class="{ selected: selectedProjectType === option.id }"
              @click="selectedProjectType = option.id"
            >
              {{ option.label }}
            </button>
          </div>

          <div class="follow-up-panel">
            <p class="card-label">Follow-up question</p>
            <h3 :class="headingClass">{{ activeProjectType.heading }}</h3>
            <p :class="['context-copy', bodyClass]">{{ activeProjectType.prompt }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { CvBreadcrumb, CvButton } from '@carbon/vue'

export default {
  name: 'ExperimentForms',
  components: {
    CvBreadcrumb,
    CvButton,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      previewMode: 'guided',
      activeField: 'name',
      submitted: false,
      selectedProjectType: 'landing',
      form: {
        name: '',
        email: '',
        brief: '',
      },
      errors: {
        name: '',
        email: '',
        brief: '',
      },
      projectTypes: [
        {
          id: 'landing',
          label: 'landing page',
          heading: 'What action should the page make easier?',
          prompt:
            'A landing page rarely fails because it lacks sections. It fails when the next action is unclear. Ask what single decision this page needs to support.',
        },
        {
          id: 'dashboard',
          label: 'dashboard',
          heading: 'Which signal deserves attention first?',
          prompt:
            'Dashboards often overwhelm because every metric arrives with the same weight. A better follow-up asks what should become visible first when the page opens.',
        },
        {
          id: 'system',
          label: 'design system',
          heading: 'Where is inconsistency creating friction today?',
          prompt:
            'A system request is usually a coordination problem before it is a component problem. Ask where teams are losing time or trust so the conversation starts with pain, not inventory.',
        },
      ],
    }
  },
  computed: {
    surfaceClass() {
      return this.isSwitchOn ? 'experiment-forms active' : 'experiment-forms'
    },
    headingClass() {
      return this.isSwitchOn ? 'text-primary active' : 'text-primary'
    },
    bodyClass() {
      return this.isSwitchOn ? 'text-subtle active' : 'text-subtle'
    },
    panelClass() {
      return this.isSwitchOn ? 'panel-surface active' : 'panel-surface'
    },
    activePrompt() {
      if (this.errors[this.activeField]) {
        return this.errors[this.activeField]
      }

      if (this.activeField === 'email') {
        return 'A reply address is enough. The form should ask for certainty only when certainty matters.'
      }

      if (this.activeField === 'brief') {
        return 'A short brief should name the decision, not summarize the whole project. Good forms narrow the next step.'
      }

      return 'Names make follow-up feel personal. This opening field should lower pressure, not announce bureaucracy.'
    },
    activeProjectType() {
      return this.projectTypes.find((option) => option.id === this.selectedProjectType) || this.projectTypes[0]
    },
  },
  methods: {
    fieldClass(fieldName) {
      return {
        'has-error': Boolean(this.errors[fieldName]),
        'is-active': this.activeField === fieldName,
      }
    },
    validateField(fieldName) {
      this.activeField = fieldName

      if (fieldName === 'name') {
        this.errors.name = this.form.name
          ? ''
          : 'Tell us what to call you so the reply feels addressed to a person.'
        return !this.errors.name
      }

      if (fieldName === 'email') {
        this.errors.email = /.+@.+\..+/.test(this.form.email)
          ? ''
          : 'Use an address with an @ and a domain so a response has somewhere real to go.'
        return !this.errors.email
      }

      if (fieldName === 'brief') {
        this.errors.brief = this.form.brief.length >= 20
          ? ''
          : 'Give one sentence about the product, feature, or decision. Twenty characters is enough to be specific.'
        return !this.errors.brief
      }

      return true
    },
    submitForm() {
      const fields = ['name', 'email', 'brief']
      const isValid = fields.every((field) => this.validateField(field))
      this.submitted = isValid
    },
  },
}
</script>

<style scoped lang="scss">
.experiment-forms {
  --cds-background: #000000;
  --cds-layer-01: #262626;
  --cds-layer-02: #393939;
  --cds-border-subtle: #393939;
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #8d8d8d;
  --cds-link-primary: #78a9ff;
  --field-bg: #161616;
  --field-border: #393939;
  --field-border-strong: #78a9ff;
  --field-text: #f4f4f4;
  --field-helper: #a8a8a8;
  --field-error: #ff8389;

  position: fixed;
  inset: 0;
  overflow-y: auto;
  z-index: 10;
  background: var(--cds-background);
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.experiment-forms.active {
  --cds-background: #d3d3d3;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #ffffff;
  --cds-border-subtle: #c6c6c6;
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-link-primary: #0f62fe;
  --field-bg: #ffffff;
  --field-border: #c6c6c6;
  --field-border-strong: #0f62fe;
  --field-text: #161616;
  --field-helper: #525252;
  --field-error: #b81921;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1,
h2,
h3 {
  font-family: 'IBM Plex Sans', sans-serif;
}

h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1rem;
}

.text-primary {
  color: var(--cds-text-primary);
}

.text-subtle {
  color: var(--cds-text-secondary);
}

.intro-copy,
.support-copy,
.context-copy,
.pattern-list,
.field-label,
.field-helper,
.field-error,
.card-label,
.mode-chip,
.mini-form label,
.mini-form input {
  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Courier', monospace;
}

.intro-copy {
  display: block;
  max-width: 720px;
  font-size: 1rem;
  line-height: 1.55;
  margin-bottom: 3rem;
}

.support-copy {
  display: block;
  max-width: 680px;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.section-block {
  margin-bottom: 3rem;
}

.section-title {
  color: var(--cds-link-primary);
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.tone-switcher,
.project-type-switcher {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.mode-chip {
  border: 1px solid var(--cds-border-subtle);
  background: transparent;
  color: var(--cds-text-secondary);
  padding: 0.55rem 0.85rem;
  text-transform: lowercase;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    color 180ms ease,
    background-color 180ms ease;
}

.mode-chip.selected,
.mode-chip:hover {
  border-color: var(--cds-link-primary);
  color: var(--cds-text-primary);
  background: rgba(120, 169, 255, 0.08);
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.comparison-card,
.context-panel,
.success-panel,
.disclosure-shell {
  border: 1px solid var(--cds-border-subtle);
  background: var(--cds-layer-01);
  padding: 1.5rem;
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    transform 180ms ease;
}

.comparison-card.is-selected {
  border-color: var(--cds-link-primary);
  transform: translateY(-2px);
}

.card-label {
  color: var(--cds-link-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  margin: 0 0 0.75rem;
}

.comparison-card h3,
.follow-up-panel h3 {
  margin: 0 0 1rem;
}

.pattern-list {
  color: var(--cds-text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
  padding-left: 1.1rem;
  margin: 0 0 1.25rem;
}

.mini-form {
  border: 1px solid var(--cds-border-subtle);
  background: var(--cds-layer-02);
  padding: 1rem;
}

.mini-form label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--cds-text-secondary);
}

.mini-form input {
  border: 1px solid var(--field-border);
  background: var(--field-bg);
  color: var(--field-text);
  padding: 0.85rem 1rem;
}

.error-copy,
.hint-copy {
  margin: 0.75rem 0 0;
  font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Courier', monospace;
  font-size: 0.75rem;
}

.error-copy {
  color: var(--field-error);
}

.hint-copy {
  color: var(--field-helper);
}

.conversation-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  border: 1px solid var(--field-border);
  background: var(--field-bg);
  padding: 1rem;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;
}

.form-field--full {
  width: 100%;
}

.form-field.is-active {
  border-color: var(--field-border-strong);
  box-shadow: 0 0 0 1px var(--field-border-strong);
}

.form-field.has-error {
  border-color: var(--field-error);
}

.field-label {
  color: var(--cds-text-primary);
  font-size: 0.82rem;
}

.field-helper {
  color: var(--field-helper);
  font-size: 0.75rem;
  line-height: 1.5;
}

.form-field input,
.form-field textarea {
  border: 1px solid var(--field-border);
  background: transparent;
  color: var(--field-text);
  padding: 0.85rem 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--field-border-strong);
}

.field-error {
  color: var(--field-error);
  font-size: 0.75rem;
  line-height: 1.45;
}

.follow-up-panel {
  margin-top: 1rem;
}

@media (max-width: 900px) {
  .comparison-grid,
  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
