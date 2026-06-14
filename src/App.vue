<template>
  <div :class="{ 'side-nav-expanded': isLeftRailOpen }" class="main-container">
    <Header @update:left-rail-open="onLeftRailToggle" @update:switch-state="onSwitchToggle" />
    <div class="content">
      <div>
        <!-- <Home :isSwitchOn="isSwitchOn" /> -->
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :isSwitchOn="isSwitchOn" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HomeComponent from './experiments/Home.vue'

export default {
  name: 'MainPageLayout',
  components: {
    Header: HeaderComponent,
    Home: HomeComponent,
  },
  data() {
    return {
      isLeftRailOpen: false,
      isSwitchOn: false,
      blueprintVisible: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.blueprintVisible = true
    }, 500) // Trigger blueprint visibility
  },
  methods: {
    onLeftRailToggle(val) {
      this.isLeftRailOpen = val
      console.log('Left Rail Toggled:', this.isLeftRailOpen)
    },
    onSwitchToggle(val) {
      this.isSwitchOn = val
      if (val) {
        document.body.classList.add('light-mode')
      } else {
        document.body.classList.remove('light-mode')
      }
    },
  },
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

body {
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease;
  background-color: #000000;
  overflow: auto; /* Ensure body is scrollable */
}

body.light-mode {
  background-color: #d3d3d3;
}

/* Remove any constraints from .main */
.main {
  max-height: none;
}
</style>
