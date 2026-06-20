<template>
  <div
    class="nav-card"
    :class="{
      'dark-text': !isSwitchOn,
      'light-text': isSwitchOn
    }"
    @click="$emit('click')"
  >
    <div class="nav-card-image">
      <slot name="image" />
    </div>

    <div class="nav-card-content">
      <div class="nav-card-title" :class="titleClass">
        {{ title }}
      </div>

      <div class="nav-card-description" :class="titleClass">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    title: String,
    description: String,
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
      titleClass() {
        return this.isSwitchOn ? 'active' : ''
    },
  }
};
</script>

<style scoped lang="scss">
@import 'carbon-components/scss/globals/scss/styles.scss';

.nav-card {
  background: transparent;
  border: 1px solid #0f62fe;
  border-radius: 12px;
  padding: 12px 14px;
  margin: 10px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.nav-card:hover {
  transform: translateY(-2px);
  border-color: #333333;
  background: rgba(0, 0, 0, 0.04);
}

.nav-card-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.nav-card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #333333;
}

.nav-card-title {
  font-family: "IBM Plex Sans", Helvetica, Arial, sans-serif;
  font-size: 0.95rem;
  letter-spacing: -0.2px;

  color: #d3d3d3;

  &.active {
    color: #333333;
  }
}

.nav-card-description {
  font-family: "IBM Plex Mono", Menlo, Monaco, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-top: 2px;
  color: #d3d3d3;


  &.active {
    color: #333333;
  }


}

.nav-card-badge {
  font-family: "IBM Plex Mono", Menlo, Monaco, monospace;
  font-size: 0.65rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  color: #000000;
  white-space: nowrap;
}
</style>
