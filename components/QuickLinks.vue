<template>
  <div class="quicklinks-cards">
    <v-card v-for="quickLink in quickLinks" :key="quickLink.name" class="quicklinks-card">
      <v-stack direction="column" sm-direction="column" align="start" gap="1.25rem" sm-gap="1rem"
        class="quicklinks-content-container">
        <v-text class="quicklinks-title" :weight="700" line-height="1.5">
          {{ quickLink.title }}
        </v-text>
        <v-text class="quicklinks-description" line-height="1.5" v-html="quickLink.description" />
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
          title: 'Get SDKs',
          description:
            'Use <a href="https://www.npmjs.com/org/arcana" target="_blank">npm</a> or yarn to install Arcana SDKs. Check our <a href="https://github.com/arcana-network" target="_blank">GitHub repositories</a>.',
        },
        {
          name: 'docs',
          title: 'Developer Docs',
          description:
            'See <a href="https://docs.beta.arcana.network/docs/quick-start/" target="_blank">Arcana Quick Start</a> Guide to begin integrating your dApp with Arcana SDKs. <a href="https://docs.beta.arcana.network/docs/whyan/" target="_blank">Understand Arcana Network</a> concepts and how it works.',
        },
        {
          name: 'demo',
          title: 'Sample dApp',
          description:
            'Refer to <a href="https://docs.beta.arcana.network/docs/demo-app/" target="_blank">code samples</a> and <a href="https://github.com/arcana-network/demo-app" target="_blank">tutorials on GitHub</a> on how to integrate and use Arcana SDKs. Check out <a href="https://demo.beta.arcana.network" target="_blank">deployed sample dApp</a>.',
        },
        {
          name: 'dashboard',
          title: 'Dashboard',
          description:
            'Go to the <a href="https://dashboard.beta.arcana.network/" target="_blank">Developer Dashboard</a> and register your dApp, configure storage region, user authentication, and wallet experience settings.',
        },
        {
          name: 'discord',
          title: 'Get Support',
          description:
            'Reach out to the Arcana team through our social channels or write to us at <a href="mailto:support@arcana.network">support@arcana.network</a>.',
        },
        {
          name: 'report-bugs',
          title: 'Report Bugs',
          description:
            'Participate in our bug-bounty program. Click here to <a href="https://forum.beta.arcana.network" target="_blank">report bugs</a>.',
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
  max-width: 12ch;

  @media (--viewport-small) {
    font-size: 1.25rem;
    max-width: unset;
  }
}

.quicklinks-description {
  font-size: 1rem;

  @media (--viewport-small) {
    font-size: 0.875rem;
  }
}
</style>
