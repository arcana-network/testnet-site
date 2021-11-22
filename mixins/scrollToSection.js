const scrollToSectionMixin = {
  methods: {
    scrollToSection(selector) {
      if (process.client) {
        document.querySelector(selector).scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
}

export default scrollToSectionMixin
