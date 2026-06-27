<template>
  <button
    type="button"
    class="nav-card"
    :class="{
      'dark-text': !isSwitchOn,
      'light-text': isSwitchOn,
      'is-active': active
    }"
    @click="$emit('click')"
  >
    <div class="nav-card-content">
      <div v-if="eyebrow" class="nav-card-eyebrow">
        {{ eyebrow }}
      </div>

      <div class="nav-card-title" :class="titleClass">
        {{ title }}
      </div>

      <div class="nav-card-description" :class="titleClass">
        {{ description }}
      </div>
    </div>

    <div v-if="active" class="nav-card-indicator" aria-hidden="true"></div>
  </button>
</template>

<script>
export default {
  name: "Card",

  props: {
    title: String,
    description: String,
    eyebrow: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
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
  border: 1px solid rgba(15, 98, 254, 0.45);
  border-radius: 12px;
  padding: 12px 14px;
  margin: 10px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  width: calc(100% - 24px);
  text-align: left;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.nav-card.is-active {
  border-color: #0f62fe;
  background: rgba(15, 98, 254, 0.08);
}

.nav-card:hover {
  transform: translateY(-2px);
  border-color: #0f62fe;
  background: rgba(0, 0, 0, 0.04);
}

.nav-card:focus-visible {
  outline: 2px solid #0f62fe;
  outline-offset: 2px;
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

.nav-card-eyebrow {
  font-family: "IBM Plex Mono", Menlo, Monaco, monospace;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0f62fe;
  margin-bottom: 0.35rem;
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

  .nav-card-indicator {
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 999px;
    background: #0f62fe;
    flex-shrink: 0;
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
