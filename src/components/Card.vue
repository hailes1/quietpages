<template>
  <div class="card">
    <div v-if="$slots.thumbnail" class="card-thumbnail">
      <slot name="thumbnail"></slot>
    </div>
    <div class="card-body">
      <div v-if="$slots.title" class="card-title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots.description" class="card-description">
        <slot name="description"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--card-border-color, #e0e0e0);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--card-box-shadow, none);
}

.card-thumbnail {
  flex-shrink: 0;
  width: 84px;
  height: 84px;
  border-radius: 6px;
  overflow: hidden;
}

.card-thumbnail :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--card-title-color, inherit);
}

.card-description {
  font-size: 0.875rem;
  color: var(--card-description-color, #6b6b6b);
}
</style>
