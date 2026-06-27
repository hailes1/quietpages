<template>
  <div class="main">
    <div class="main-content">

      <div class="main-left">

        <div class="header-subtitle" :class="titleClass">
          DAGMAWE A. HAILESLASSIE · SOFTWARE ENGINEER · CHICAGO
        </div>

        <h1 class="main-title" :class="titleClass">
          A sketchbook for things not yet
          <span class="title-accent">ready to be loud.</span>
        </h1>

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
</style>
