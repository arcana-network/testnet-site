<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VContainer',
}
</script>

<style lang="postcss" scoped>
@import url('./media-query-helper.css');

.container {
  max-width: 96rem;
  width: 80%;
  margin: 0 auto;

  @media (--viewport-small) {
    width: 90% !important;
  }
}
</style>
