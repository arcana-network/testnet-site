<template>
  <div>
    <div class="overlay"></div>
    <div class="overlay-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VOverlay',
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(4px);
  overflow-y: hidden;
}
.overlay-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
}
@supports (not (backdrop-filter: blur(3px))) {
  .overlay {
    filter: blur(32px);
  }
}
</style>
