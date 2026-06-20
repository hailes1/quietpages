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
          aria-label="Menu"
          @click="toggleSideNav"
          :style="headerItemStyle"
        >
          <Sprout20 />
        </cv-header-global-action>
      </template>
    </cv-header>

    <transition name="slide-right">
      <aside
        v-if="isSideNavOpen"
        class="side-panel"
        :class="{
          'light-panel': isSwitchOn,
          'dark-panel': !isSwitchOn
        }"
      >
        <nav class="panel-nav">
          <Card
            title="HOME"
            description="Go to the homepage"
            :isSwitchOn="isSwitchOn"
            @click="navigateTo('/')"
          >
              <template #image>
                <img decoding="async" sizes="25px" src="https://framerusercontent.com/images/25ozRUj8UvgIufO1O7xJ2ScoU.png" alt="Global Citizen Logo &quot;O&quot;" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover;">
              </template>
          </Card>
          <Card
            title="ABOUT"
            description="Learn more about us"
            :isSwitchOn="isSwitchOn"
            @click="navigateTo('/about')"
          >
              <template #image>
                <img decoding="async" sizes="40px" src="https://framerusercontent.com/images/4tR2kkcmNDwWLyCTL6UKBxtGk.png" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover;">
              </template>
          </Card>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script>
import {
  CvHeader,
  CvHeaderGlobalAction,
  CvSideNav,
  CvSideNavItems,
  CvSideNavLink,
  CvSideNavMenu,
  CvSideNavMenuItem,
} from '@carbon/vue'

import Card from './Card.vue'

import {
  Home20,
  Sun20,
  Sprout20,
} from '@carbon/icons-vue'

export default {
  name: 'HeaderComponent',

  components: {
    CvHeader,
    CvHeaderGlobalAction,
    CvSideNav,
    CvSideNavItems,
    CvSideNavLink,
    CvSideNavMenu,
    CvSideNavMenuItem,
    Home20,
    Sun20,
    Sprout20,
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
  },

  methods: {
    onSwitch() {
      this.isSwitchOn = !this.isSwitchOn
      this.$emit('update:switch-state', this.isSwitchOn)
    },

    toggleSideNav() {
      this.isSideNavOpen = !this.isSideNavOpen
      console.log('Side Nav:', this.isSideNavOpen)
      this.$emit('update:left-rail-open', this.isSideNavOpen)
    },

    navigateTo(route) {
      this.$router.push(route)

      // close nav after navigation
      this.isSideNavOpen = false
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
  padding: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.panel-nav {
  display: flex;
  flex-direction: column;
}

.panel-nav button {
  padding: 1rem 1.5rem;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background .2s;
}

.panel-nav button:hover {
  background: rgba(127,127,127,.15);
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

