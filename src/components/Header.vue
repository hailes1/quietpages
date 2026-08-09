<template>
  <div class="header-shell">
    <cv-header :style="headerStyle">
      <template #header-global>
        <cv-header-global-action
          aria-label="Home"
          @click="navigateTo('/')"
          :style="headerItemStyle"
        >
          <Home20 />
        </cv-header-global-action>

        <cv-header-global-action
          aria-label="Toggle Theme"
          @click="onSwitch"
          :style="headerItemStyle"
        >
          <Sun20 />
        </cv-header-global-action>

        <cv-header-global-action
          aria-label="The Lab"
          @click="navigateTo('/lab')"
          :style="headerItemStyle"
        >
          <Sprout20 />
        </cv-header-global-action>
        <cv-header-global-action
          aria-label="Open Side Navigation"
          @click="navigateTo('/about')"
          :style="headerItemStyle"
        >
          <HeatMap20 />
        </cv-header-global-action>
      </template>
    </cv-header>

    <transition name="slide-right">
      <aside
        v-if="isSideNavOpen"
        class="side-panel"
        aria-label="Experiment navigation"
        :class="{
          'light-panel': isSwitchOn,
          'dark-panel': !isSwitchOn
        }"
      >
        <div class="panel-header">
          <div>
            <cv-breadcrumb class="panel-eyebrow">The Quiet Pages</cv-breadcrumb>
            <h2 class="panel-title">{{ currentPanelTitle }}</h2>
            <cv-breadcrumb class="panel-description">
              Move between the sketchbook, the experiment index, and the current studies without losing context.
            </cv-breadcrumb>
          </div>

          <cv-button type="button" class="panel-close" @click="toggleSideNav">
            Close
          </cv-button>
        </div>

        <nav class="panel-nav">
          <!-- <div class="panel-tag-row">
            <cv-tag label="portfolio" :style="tagStyle('#ff832b', '#161616')" />
            <cv-tag label="experiments" :style="tagStyle('#f1c21b', '#161616')" />
            <cv-tag label="interaction" :style="tagStyle('#42be65', '#161616')" />
            <cv-tag label="systems" :style="tagStyle('#fa4d56', '#ffffff')" />
          </div> -->

          <section class="panel-section">
            <div class="panel-section-heading">Quick links</div>
            <Card
              v-for="item in quickLinks"
              :key="item.route"
              :title="item.title"
              :description="item.description"
              :eyebrow="item.eyebrow"
              :active="routeIsActive(item.route)"
              :isSwitchOn="isSwitchOn"
              @click="navigateTo(item.route)"
            />
          </section>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script>
import {
  CvHeader,
  CvHeaderGlobalAction,
  CvTag,
  CvBreadcrumb,
  CvButton
} from '@carbon/vue'

import Card from './Card.vue'

import {
  Home20,
  Sun20,
  Sprout20,
  HeatMap20
} from '@carbon/icons-vue'

export default {
  name: 'HeaderComponent',

  components: {
    CvHeader,
    CvHeaderGlobalAction,
    Home20,
    Sun20,
    Sprout20,
    HeatMap20,
    CvTag,
    CvBreadcrumb,
    CvButton,
    Card,
  },

  data() {
    return {
      isSwitchOn: false,
      isSideNavOpen: false,
    }
  },

  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isSwitchOn ? '#f4f4f4' : '#161616',
      }
    },

    headerItemStyle() {
      return {
        color: this.isSwitchOn ? '#161616' : '#f4f4f4',
      }
    },

    sideNavStyle() {
      return {
        backgroundColor: this.isSwitchOn ? '#ffffff' : '#262626',
        color: this.isSwitchOn ? '#161616' : '#f4f4f4',
        borderRight: this.isSwitchOn
          ? '1px solid #e0e0e0'
          : '1px solid #393939',
      }
    },
    quickLinks() {
      return [
        {
          title: 'HOME',
          description: 'The main thesis and entry point',
          eyebrow: 'Start here',
          route: '/',
        },
        {
          title: 'THE LAB',
          description: 'Browse the full experiment index',
          eyebrow: 'Collection',
          route: '/the-lab',
        },
      ]
    },
    currentPanelTitle() {
      const activeQuickLink = this.quickLinks.find((item) => this.routeIsActive(item.route))
      if (activeQuickLink) {
        return activeQuickLink.title
      }

      return 'Explore'
    },
  },

  methods: {
    tagStyle(backgroundColor, color) {
      return {
        backgroundColor,
        color,
      }
    },
    onSwitch() {
      this.isSwitchOn = !this.isSwitchOn
      this.$emit('update:switch-state', this.isSwitchOn)
    },

    toggleSideNav() {
      this.isSideNavOpen = !this.isSideNavOpen
      this.$emit('update:left-rail-open', this.isSideNavOpen)
    },

    routeIsActive(route) {
      return this.$route.path === route
    },

    navigateTo(route) {
      this.$router.push(route)

      // close nav after navigation
      this.isSideNavOpen = false
      this.$emit('update:left-rail-open', this.isSideNavOpen)
    },
  },
}
</script>

<style scoped>
.header-shell {
  position: relative;
}

.side-panel {
  position: fixed;

  top: 3rem;
  right: 0;

  width: 30rem;
  height: calc(100vh - 3rem);

  z-index: 9000;

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  box-shadow: -6px 0 16px rgba(0, 0, 0, 0.15);
}

.light-panel {
  background: #ffffff;
  color: #161616;
  border-left: 1px solid #e0e0e0;
}

.dark-panel {
  background: #262626;
  color: #f4f4f4;
  border-left: 1px solid #393939;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(127, 127, 127, 0.2);
}

.panel-eyebrow {
  margin: 0 0 0.4rem;
  font-family: 'IBM Plex Mono', Menlo, Monaco, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0f62fe;
}

.panel-title {
  margin: 0;
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
}

.panel-description {
  margin: 0.6rem 0 0;
  max-width: 22rem;
  font-family: 'IBM Plex Mono', Menlo, Monaco, monospace;
  font-size: 0.76rem;
  line-height: 1.5;
  opacity: 0.82;
}

.panel-close {
  align-self: flex-start;
  border: 1px solid rgba(127, 127, 127, 0.3);
  background: transparent;
  color: inherit;
  font-family: 'IBM Plex Mono', Menlo, Monaco, monospace;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.65rem 0.85rem;
  cursor: pointer;
}

.panel-close:hover,
.panel-close:focus-visible {
  border-color: #0f62fe;
  outline: none;
}

.panel-nav {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;
}

.panel-tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  padding: 1rem 1.5rem 0.5rem;
}

.panel-section {
  padding-top: 0.5rem;
}

.panel-section-heading {
  padding: 0.5rem 1.5rem;
  font-family: 'IBM Plex Mono', Menlo, Monaco, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.72;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .28s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>

