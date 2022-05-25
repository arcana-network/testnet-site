<template>
  <div class="quicklinks-cards">
    <v-card
      v-for="quickLink in quickLinks"
      :key="quickLink.name"
      class="quicklinks-card"
    >
      <v-stack
        direction="column"
        sm-direction="column"
        align="start"
        gap="1.25rem"
        sm-gap="1rem"
        justify="space-between"
        class="quicklinks-content-container"
      >
        <v-text class="quicklinks-title" :weight="700" line-height="1.5">
          {{ quickLink.title }}
        </v-text>
        <v-stack direction="row" align="center" justify="center" gap=".5rem">
          <v-button
            type="link"
            class="quicklinks-link-text"
            :weight="400"
            line-height="1.4"
            color="secondary"
            :label="quickLink.linkText"
            label-transform="uppercase"
            :href="quickLink.link"
            target="_blank"
          />
        </v-stack>
      </v-stack>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'QuickLinks',
  data() {
    return {
      quickLinks: [
        {
          name: 'docs',
          title: 'Developer Docs',
          link: 'https://docs.arcana.network',
          linkText: 'View Docs',
        },
        {
          name: 'demo',
          title: 'Reference Tutorial App',
          link: 'https://demo.arcana.network',
          linkText: 'View App',
        },
        {
          name: 'dashboard',
          title: 'Go to Dashboard',
          link: 'https://dashboard.arcana.network',
          linkText: 'Go to Dashboard',
        },
        {
          name: 'discord',
          title: 'Get Integration Support',
          link: 'https://discord.gg/w6ej4FtqYS',
          linkText: 'Join Discord',
        },
        {
          name: 'report-bugs',
          title: 'Report Bugs',
          link: '#',
          linkText: 'Submit Bug',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

a {
  text-decoration: none;
}

.quicklinks-cards {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (--viewport-medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-small) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
}

.quicklinks-card {
  @media (--viewport-small) {
    padding: 2rem !important;
  }
}

.quicklinks-content-container {
  height: 100%;
}

.quicklinks-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 12ch;

  @media (--viewport-small) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    max-width: unset;
  }
}
</style>
