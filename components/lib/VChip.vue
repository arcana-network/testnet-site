<template>
  <div
    class="chip"
    :data-variant="variant"
    @click.stop="(e) => $emit('click', e)"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VChip',
  props: {
    variant: {
      type: String,
      default: 'regular',
      validator: (value) => ['regular', 'highlight'].includes(value),
    },
  },
}
</script>

<style scoped>
.chip {
  position: relative;
  border-radius: 10px;
  padding: 1rem;
  max-width: 18rem;
}

.chip[data-variant='regular'] {
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    rgba(26, 26, 26, 0.86293) 31.41%,
    rgba(32, 32, 32, 0.49) 100%
  );
  color: white;
}

.chip[data-variant='highlight'] {
  background: linear-gradient(
      33.18deg,
      rgba(255, 181, 38, 0.6) 8.78%,
      rgba(255, 175, 55, 0) 44.97%
    ),
    radial-gradient(
      71.51% 71.51% at 88.17% 103.23%,
      rgba(255, 219, 92, 0.6) 0%,
      rgba(255, 219, 92, 0.496875) 32.29%,
      rgba(255, 219, 92, 0) 100%
    ),
    radial-gradient(
      50% 50% at 63.98% 28.49%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 23.44%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      32.26% 32.26% at 62.37% 28.49%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.216) 100%
    ),
    linear-gradient(326.58deg, #ffe177 -3.92%, #ff975c 112.32%);
  box-shadow: inset 0 -7px 66px rgba(255, 111, 66, 0.37);
  color: black;
}
</style>
