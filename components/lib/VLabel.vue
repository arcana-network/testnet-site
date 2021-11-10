<template>
  <label v-bind="$attrs" class="color-primary" :class="{ strong }">
    {{ value }}
  </label>
</template>

<script>
export default {
  name: 'VLabel',
  props: {
    value: {
      type: String,
      default: '',
    },
    strong: {
      type: Boolean,
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('./media-query-helper.css');

label {
  font-size: 0.85rem;
  font-weight: 400;
  font-family: var(--font-serif);
}
label.strong {
  font-family: var(--font-sans);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin-bottom: 0.625rem;

  @media (--viewport-small) {
    font-size: 0.9rem;
  }
}
</style>
