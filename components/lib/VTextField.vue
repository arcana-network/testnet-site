<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'VTextField',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(ev) {
      this.$emit('input', ev.target?.value)
    },
  },
}
</script>

<style scoped>
input {
  border: none;
  background: linear-gradient(141.48deg, #1a1a1a -4.56%, #151515 135.63%);
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  border-radius: 10px;
  outline: none;
  color: var(--color-white);
  font-family: var(--font-serif);
  font-size: 1.1rem;
  line-height: 1.25rem;
  padding: 1rem 1.25rem;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::placeholder,
input::-webkit-input-placeholder,
input::-moz-placeholder,
input:-ms-input-placeholder,
input:-moz-placeholder {
  color: var(--color-grey);
  font-family: var(--font-serif);
  font-size: 1.1rem;
  line-height: 1.25rem;
  margin: 10px 20px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  box-shadow: 0 0 0 1000px #181818 inset;
  -webkit-box-shadow: 0 0 0 1000px #181818 inset;
  -webkit-text-fill-color: var(--color-white);
}
</style>
