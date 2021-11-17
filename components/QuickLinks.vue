<template>
  <div class="quicklinks-cards">
    <v-card v-for="link in quickLinks" :key="link.name" class="quicklinks-card">
      <v-stack
        align="start"
        sm-align="center"
        direction="row"
        sm-direction="row"
        justify="space-between"
      >
        <a :href="link.link" target="_blank">
          <v-stack
            direction="column"
            sm-direction="column"
            align="start"
            gap="1.25rem"
            sm-gap="1rem"
          >
            <v-text class="quicklinks-title" :weight="700" line-height="1.5">
              {{ link.title }}
            </v-text>
            <v-text
              class="quicklinks-link-text"
              :weight="400"
              line-height="1.4"
              color="secondary"
            >
              {{ link.linkText }}
            </v-text>
          </v-stack>
        </a>
        <v-image class="quicklinks-arrow" path="images/arrow-right.svg" />
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
          title: 'Developer SDK Documentation',
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
          name: 'discord',
          title: 'Get Support on Integration',
          link: 'https://discord.gg/w6ej4FtqYS',
          linkText: 'Join Discord',
        },
        {
          name: 'discord',
          title: 'Get Started with our SDK',
          link: 'https://dashboard.arcana.network',
          linkText: 'Signup',
        },
        {
          name: 'discourse',
          title: 'Report Bugs and Get Rewarded',
          link: 'https://forum.arcana.network',
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
  grid-gap: 1.875rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (--viewport-medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.quicklinks-card {
  opacity: 1;
  transition: opacity 0.15s ease-in;

  @media (--viewport-small) {
    padding: 2rem;
  }
}

.quicklinks-card:hover,
.quicklinks-card:focus {
  opacity: 0.8;
  transition: opacity 0.15s ease-in;
}

.quicklinks-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 12ch;

  @media (--viewport-small) {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    max-width: unset;
  }
}

.quicklinks-arrow {
  margin-top: 0.2rem;
}

.btn-submit-bugs {
  align-self: end;
  flex-grow: 0;
  flex-shrink: 0;
  width: 16rem;

  @media (--viewport-small) {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }
}
</style>
