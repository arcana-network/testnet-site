<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VCard',
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.card {
  border-radius: 1.25rem;
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    rgba(26, 26, 26, 0.86293) 31.41%,
    rgba(32, 32, 32, 0.49) 100%
  );
  padding: 1.875rem;

  @media (--viewport-small) {
    border-radius: 0.625rem;
    padding: 0.625rem;
  }
}
</style>
