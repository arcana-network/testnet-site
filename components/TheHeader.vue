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
          name: 'Discord',
          link: 'https://discord.gg/w6ej4FtqYS',
          external: true,
        },
        {
          name: 'Blog',
          link: 'https://medium.com/arcana-network-blog',
          external: true,
        },
      ],
    }
  },
}
</script>
