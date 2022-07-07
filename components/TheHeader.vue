<template>
  <v-header logo="images/arcana-logo-vertical.svg" :menu-items="menuItems" class="sticky-header"
    :class="{ 'sticky-header-background': !isScrollAtTop }" />
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      menuItems: [
        {
          name: 'Overview',
          link: '#overview',
        },
        {
          name: `What's New`,
          link: '#whats-new',
        },
        {
          name: 'Features',
          link: '#features',
        },
        {
          name: 'Get Started',
          link: '#get-started',
        },
        {
          name: 'Build',
          link: '#build',
        },
      ],
      isScrollAtTop: true
    }
  },
  mounted() {
    const headerInstance = this;
    headerInstance.checkIsScrollAtTop()

    window.onscroll = function (ev) {
      headerInstance.checkIsScrollAtTop()
    }
  },
  methods: {
    checkIsScrollAtTop() {
      this.isScrollAtTop = window.scrollY < 50
    }
  },
}
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  transition: background-color 0.3s;
}

.sticky-header-background {
  background-color: var(--color-black);
}
</style>
