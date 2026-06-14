<template>
  <svg viewBox="0 0 500 500" class="sketch-svg" :class="{ active }">

    <!-- PRIMARY STRUCTURE -->
    <path
      d="M90 320 C150 120, 350 120, 410 320"
      fill="none"
      stroke="currentColor"
      stroke-width="2.6"
      opacity="0.55"
    />

    <!-- SECONDARY STRUCTURE -->
    <path
      d="M120 340 C180 180, 320 180, 380 340"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      opacity="0.35"
    />

    <!-- CORE FORM -->
    <circle
      cx="250"
      cy="250"
      r="95"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      opacity="0.3"
    />

    <!-- ROTATED FRAME -->
    <rect
      x="165"
      y="165"
      width="170"
      height="170"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
      opacity="0.22"
      transform="rotate(10 250 250)"
    />

    <!-- GESTURE LINE -->
    <path
      d="M100 250 C180 230, 240 280, 320 250 C370 230, 400 260, 430 300"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
      opacity="0.45"
    />

    <!-- DETAIL LINE -->
    <path
      d="M140 200 C210 230, 270 180, 330 210"
      fill="none"
      stroke="currentColor"
      stroke-width="0.9"
      opacity="0.3"
    />

    <!-- MICRO MARKS -->
    <circle cx="200" cy="215" r="2.2" fill="currentColor" opacity="0.45"/>
    <circle cx="310" cy="295" r="2" fill="currentColor" opacity="0.3"/>

  </svg>
</template>

<script>
export default {
  name: 'HeroSketch',
  props: {
    active: Boolean,
  },
}
</script>

<style scoped>
.sketch-svg {
  width: 100%;
  max-width: 420px;

  color: #d3d3d3;
  opacity: 0.75;

  transition: color 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
}

.sketch-svg.active {
  color: #333;
  opacity: 1;
  transform: translateX(12px) scale(1.02);
}
</style>
