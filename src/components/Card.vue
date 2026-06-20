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
      <div class="nav-card-title">
        {{ title }}
      </div>

      <div class="nav-card-description">
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
};
</script>

<style scoped>
.nav-card {
  background: #d3d3d3;
  border-radius: 12px;
  padding: 12px 14px;
  margin: 10px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.nav-card-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
}

.nav-card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nav-card-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.nav-card-title {
  font-family: "IBM Plex Sans", Helvetica, Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 300; /* matches your hero title */
  letter-spacing: -0.2px;
  color: #333333;
}

.nav-card-description {
  font-family: "IBM Plex Mono", Menlo, Monaco, monospace;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  opacity: 0.65;
  margin-top: 2px;
  color: #333333;
}

.nav-card-badge {
  font-family: "IBM Plex Mono", Menlo, Monaco, monospace;
  font-size: 0.65rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.12);
  color: #333333;
  white-space: nowrap;
}
</style>
