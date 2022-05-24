<template>
  <v-header logo="images/arcana-logo-vertical.svg" :menu-items="menuItems" />
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
    }
  },
}
</script>
