<template>
  <div class="main">
    <div class="main-content">
      <div class="main-left">
        <div class="ca-logo">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="20"
              r="10"
              fill="none"
              stroke="#3d6fd4"
              stroke-width="1"
            />
            <path
              d="M24 30 Q18 38 24 44 Q30 38 24 30Z"
              fill="#3d6fd4"
              opacity="0.6"
            />
            <circle cx="24" cy="20" r="3" fill="#3d6fd4" />
            <line
              x1="14"
              y1="20"
              x2="8"
              y2="20"
              stroke="#1a1a1a"
              stroke-width="1"
            />
            <line
              x1="34"
              y1="20"
              x2="40"
              y2="20"
              stroke="#1a1a1a"
              stroke-width="1"
            />
            <line
              x1="24"
              y1="10"
              x2="24"
              y2="4"
              stroke="#1a1a1a"
              stroke-width="1"
            />
          </svg>
        </div>

        <div class="header-subtitle" :class="titleClass">
          DAGMAWE A. HAILESLASSIE · SOFTWARE ENGINEER · CHICAGO
        </div>

        <h1 class="main-title" :class="titleClass">
          {{ displayedLine1 }}
          <span class="title-accent">
            {{ displayedLine2 }}
          </span>
          <span class="ce-cursor"></span>
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

  data() {
    return {
      line1: 'A sketchbook for things not yet ',
      line2: 'ready to be loud.',

      displayedLine1: '',
      displayedLine2: '',
    }
  },

  computed: {
    titleClass() {
      return this.isSwitchOn ? 'active' : ''
    },
  },

  mounted() {
    this.typeTitle()
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },

    async typeTitle() {
      // Type first line
      for (let i = 0; i < this.line1.length; i++) {
        this.displayedLine1 += this.line1[i]

        const delay =
          this.line1[i] === ' '
            ? 35
            : Math.random() * 35 + 20

        await this.sleep(delay)
      }

      // Small pause before accent text
      await this.sleep(175)

      // Type blue text
      for (let i = 0; i < this.line2.length; i++) {
        this.displayedLine2 += this.line2[i]

        const char = this.line2[i]

        let delay = Math.random() * 35 + 20

        if (char === ' ') delay = 35
        if (char === '.') delay = 250

        await this.sleep(delay)
      }
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
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

.ca-logo {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
}

.ca-logo svg {
  width: 100%;
  height: 100%;
}

.ce-cursor {
  display: inline-block;
  position: relative;
  width: 3px;
  height: 0.9em;
  background: #3d6fd4;

  top: 0.08em; // adjusts with the font size
  margin-left: 2px;

  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
