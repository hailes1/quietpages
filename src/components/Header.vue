<template>
  <div class="header-shell">
    <cv-header :style="headerStyle">
    <template #header-global>
      <cv-header-global-action aria-label="Home" @click="navigateTo('/')" :style="headerItemStyle">
        <Home20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="Switch" @click="onSwitch" :style="headerItemStyle">
        <Sun20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-controls="side-nav-panel"
        :aria-expanded="isSideNavOpen"
        :style="headerItemStyle"
        @click="toggleSideNav"
      >
        <Sprout20 />
      </cv-header-global-action>
    </template>
    </cv-header>

    <cv-side-nav id="side-nav-panel" fixed :expanded="isSideNavOpen" @update:expanded="setSideNavOpen">
      <cv-side-nav-items>
      </cv-side-nav-items>
    </cv-side-nav>
  </div>
</template>

<script>
import {
  CvHeader,
  CvHeaderGlobalAction,
  CvSideNav,
  CvSideNavItems,
  CvSideNavLink,
} from '@carbon/vue'
import { Sun20, Home20, Sprout20 } from '@carbon/icons-vue'

export default {
  name: 'HeaderComponent',
  components: {
    CvHeader,
    CvHeaderGlobalAction,
    Sun20,
    Home20,
    Sprout20,
    CvSideNav,
    CvSideNavItems,
    CvSideNavLink,
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
        backgroundColor: this.isSwitchOn ? '#d3d3d3' : '#000000',
      }
    },
    headerItemStyle() {
      return {
        color: this.isSwitchOn ? '#000000' : '#d3d3d3',
      }
    },
  },
  methods: {
    onSwitch() {
      this.isSwitchOn = !this.isSwitchOn
      this.$emit('update:switch-state', this.isSwitchOn)
    },
    navigateTo(route) {
      this.$router.push(route)
    },
    toggleSideNav() {
      this.isSideNavOpen = !this.isSideNavOpen
      this.$emit('update:left-rail-open', this.isSideNavOpen)
    },
    setSideNavOpen(value) {
      this.isSideNavOpen = value
      this.$emit('update:left-rail-open', this.isSideNavOpen)
    },
    onNavLinkClick() {
      this.setSideNavOpen(false)
    },
  },
}
</script>

<style scoped>
.header-shell {
  position: relative;
}

.cv-header-name {
  font-family: 'Garamond', 'code-saver', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
}

.cv-header-global-action {
  font-family: 'code-saver', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
}

#side-nav-panel {
  top: 3rem;
  height: calc(100vh - 3rem);
  z-index: 9000;
  border-right: 1px solid #393939;
}

#side-nav-panel :deep(.cv-side-nav-item-link) {
  font-family: 'code-saver', sans-serif;
}

@media (max-width: 672px) {
  #side-nav-panel {
    width: min(200vw, 20rem);
  }
}
</style>
