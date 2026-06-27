<template>
  <div class="main">
    <div class="main-content">

      <!-- LEFT -->
      <div class="main-left">

        <div class="header-subtitle" :class="titleClass">
          DAGMAWE A. HAILESLASSIE · SOFTWARE ENGINEER · CHICAGO
        </div>

        <h1 class="main-title" :class="titleClass">
          A sketchbook for things not yet
          <span class="title-accent">ready to be loud.</span>
        </h1>

        <!-- <div class="cta-container">
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
        </div> -->

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

.main {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
}

/* GRID LAYOUT */
.main-content {
  display: grid;
  grid-template-columns: minmax(700px, 1.9fr) minmax(320px, 0.8fr);
  gap: 4rem;
  align-items: center;
}

.main-left {
  min-width: 0;
  max-width: 620px;
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

.title-accent {
  color: #0f62fe;
}

.cta-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.main-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.button {
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }
}

::v-deep .button .cds--btn {
  letter-spacing: 0.5px;
  padding: 0.75rem 1.25rem;
}

@media (max-width: 900px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .main-left {
    max-width: 100%;
  }

  .main-right {
    justify-content: center;
  }

  .main-title {
    font-size: 2.5rem;
    max-width: 100%;
  }
}
</style>
