<template>
  <span :class="classes" :style="styles">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'VText',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'link'].includes(value),
    },
    size: {
      type: String,
      default: null,
    },
    weight: {
      type: Number,
      default: null,
      validator: (value) =>
        [200, 300, 400, 500, 600, 700, 800, 900].includes(value),
    },
    font: {
      type: String,
      default: 'serif',
      validator: (value) => ['sans', 'serif'].includes(value),
    },
    lineHeight: {
      type: String,
      default: null,
    },
    letterSpacing: {
      type: String,
      default: null,
    },
    gradient: {
      type: String,
      default: null,
    },
    transform: {
      type: String,
      default: null,
      validator: (value) =>
        ['uppercase', 'lowercase', 'capitalize'].includes(value),
    },
  },
  data() {
    return {
      classes: {},
      styles: {},
    }
  },
  created() {
    // Classes referenced from global css assets/css/styles.css
    this.classes['color-' + this.color] = true
    this.classes['font-' + this.font] = true
    if (this.weight > 0) {
      this.styles['font-weight'] = this.weight
    }
    if (this.size?.trim()) {
      this.styles['font-size'] = this.size
    }
    if (this.lineHeight?.trim()) {
      this.styles['line-height'] = this.lineHeight
    }
    if (this.letterSpacing?.trim()) {
      this.styles['letter-spacing'] = this.letterSpacing
    }
    if (this.transform?.trim()) {
      this.styles['text-transform'] = this.transform
    }
    if (this.gradient?.trim()) {
      this.classes.gradient = true
      this.styles.background = this.gradient
    }
  },
}
</script>

<style lang="postcss" scoped>
/* Defaults */
span {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.125rem;
}
.gradient {
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
