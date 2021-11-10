<template>
  <v-stack :direction="layout" v-bind="$attrs">
    <v-stack
      v-for="(option, index) in options"
      :key="'option-' + index"
      align="center"
      class="radio-padding"
    >
      <input
        :id="name + index"
        type="radio"
        :value="option"
        :name="name"
        :checked="option === value"
        @change="onChange"
      />
      <v-label
        :for="name + index"
        :value="option"
        class="radio-label cursor-pointer"
      />
    </v-stack>
  </v-stack>
</template>

<script>
export default {
  name: 'VRadioGroup',
  props: {
    layout: {
      type: String,
      default: 'column',
    },
    name: {
      type: String,
      default:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15), // Generates random name if name is not passed
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
    value: {
      type: String,
      default: null,
    },
  },
  methods: {
    onChange(ev) {
      this.$emit('input', ev.target.value)
    },
  },
}
</script>

<style scoped>
.radio-padding {
  padding: 1rem;
}

.radio-label {
  padding-left: 1rem;
}

input[type='radio'] {
  background: linear-gradient(143.36deg, #c6c6c6 -4.7%, #000 115.05%);
  box-shadow: inset -2px -2px 4px rgba(80, 80, 80, 0.1),
    inset 5px 5px 5px rgba(0, 0, 0, 0.21),
    inset -10px -26px 33px -28px rgba(255, 255, 255, 0.1),
    inset -50px 49px 29px 22px rgba(28, 28, 28, 0.84);
  cursor: pointer;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 1.25rem;
  appearance: none;
}

input[type='radio']::after {
  background-color: transparent;
  content: '';
  display: block;
  height: 0.85rem;
  width: 0.85rem;
  top: 0.2rem;
  left: 0.2rem;
  border-radius: 0.85rem;
  position: relative;
  appearance: none;
}

input[type='radio']:checked::after {
  background: linear-gradient(220.53deg, #9bf763 0%, #26ab5b 76.95%);
}
</style>
