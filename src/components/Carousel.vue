<template>
  <div class="carousel">

    <!-- Image Area -->
    <div class="carousel-image-container">

      <!-- Previous Click Zone -->
      <div
        class="carousel-zone carousel-zone--left"
        @click="previous"
      />

      <!-- Current Image -->
      <transition name="fade" mode="out-in">
        <img
          :key="currentIndex"
          :src="images[currentIndex]"
          class="carousel-image"
          :alt="`Photo ${currentIndex + 1}`"
        />
      </transition>

      <!-- Next Click Zone -->
      <div
        class="carousel-zone carousel-zone--right"
        @click="next"
      />

      <!-- Arrow Buttons -->
      <button
        v-if="images.length > 1"
        class="carousel-arrow carousel-arrow--left"
        @click.stop="previous"
      >
        ←
      </button>

      <button
        v-if="images.length > 1"
        class="carousel-arrow carousel-arrow--right"
        @click.stop="next"
      >
        →
      </button>

    </div>

    <!-- Dots -->
    <div
      v-if="images.length > 1"
      class="carousel-dots"
    >
      <button
        v-for="(image, index) in images"
        :key="index"
        class="carousel-dot"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'PhotoCarousel',

  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      currentIndex: 0,
    }
  },

  methods: {
    next() {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length
    },

    previous() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) %
        this.images.length
    },

    goTo(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style scoped lang="scss">
.carousel {
  width: 100%;
}

.carousel-image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-image {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 5;
}

/* Click Areas */
.carousel-zone {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 2;
  cursor: pointer;
}

.carousel-zone--left {
  left: 0;
}

.carousel-zone--right {
  right: 0;
}

/* Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 42px;
  height: 42px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.45);
  color: white;

  cursor: pointer;
  z-index: 3;

  transition: background 0.2s ease;
}

.carousel-arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.carousel-arrow--left {
  left: 12px;
}

.carousel-arrow--right {
  right: 12px;
}

/* Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;

  margin-top: 16px;
}

.carousel-dot {
  width: 8px;
  height: 8px;

  border: none;
  border-radius: 50%;

  background: #4a4a4a;
  cursor: pointer;

  transition: all 0.2s ease;
}

.carousel-dot.active {
  background: #ffffff;
  transform: scale(1.25);
}

/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
