<template>
  <div class="hero">
    <div class="hero-content">

      <div class="header-subtitle" :class="titleClass">
        DAGMAWE A. HAILESLASSIE · SOFTWARE ENGINEER · CHICAGO
      </div>

      <h1 class="main-title" :class="titleClass">
        Building for how people actually think.
      </h1>

      <div class="cta-container">
        <cv-button
          @click="navigateTo('/the-lab')"
          size="extra-large"
          class="button"
        >
          001 - Lab
        </cv-button>

        <cv-button
          @click="navigateTo('/timeline')"
          size="extra-large"
          class="button"
        >
          002 - About Me
        </cv-button>
      </div>

    </div>
  </div>
</template>

<script>
import { CvButton } from '@carbon/vue'

export default {
  name: 'HomeComponent',

  components: {
    CvButton,
  },

  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    titleClass() {
      return this.isSwitchOn ? 'active' : ''
    },
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped lang="scss">
@import 'carbon-components/scss/globals/scss/styles.scss';

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
}

.hero-content {
  max-width: 900px;
  width: 100%;
}

.header-subtitle {
  font-family: 'IBM Plex Mono', Menlo, Monaco, monospace;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #d3d3d3;

  margin-bottom: 1rem;

  &.active {
    color: #333333;
  }
}

.main-title {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.5px;

  color: #d3d3d3;

  margin: 0;

  &.active {
    color: #333333;
  }
}

.cta-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;

  flex-wrap: wrap;
}


.button {
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }
}

/* Carbon internal override */
::v-deep .button .cds--btn {
  letter-spacing: 0.5px;
  padding: 0.75rem 1.25rem;
}
</style>
