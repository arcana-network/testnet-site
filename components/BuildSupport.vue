<template>
  <v-stack
    class="build-support"
    direction="column"
    sm-direction="column"
    gap="1.875rem"
    sm-gap="1.875rem"
  >
    <v-heading
      class="build-support-heading"
      :level="3"
      line-height="1.2"
      :weight="600"
    >
      Get in Touch
    </v-heading>
    <v-text
      class="build-support-description"
      color="secondary"
      :weight="400"
      line-height="1.4"
    >
      Join our #developer or #testnet channel on Discord to receive immediate
      support, troubleshoot, or share ideas.
    </v-text>
    <v-stack
      style="margin-top: 1.875rem"
      direction="column"
      sm-direction="column"
      align="start"
      sm-align="center"
      gap="1rem"
    >
      <a href="https://discord.gg/w6ej4FtqYS" target="__blank">
        <v-image
          path="images/discord-white.svg"
          class="build-support-social-link"
          alt="Arcana discord channel"
        />
      </a>
      <a href="mailto:support@arcana.network">
        <v-text
          font="sans"
          :weight="700"
          class="build-support-mailing"
          color="secondary"
        >
          support@arcana.network
        </v-text>
      </a>
    </v-stack>
  </v-stack>
</template>

<script>
export default {
  name: 'BuildSupport',
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.build-support {
  margin-top: 1.875rem;
}

.build-support-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.875rem;
  }
}

.build-support-description {
  font-size: 1.25rem;
  max-width: 50ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

a {
  text-decoration: none;
}

.build-support-mailing {
  font-size: 1.25rem;
  line-height: 2.25rem;

  @media (--viewport-medium) {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.build-support-social-link {
  width: 3rem;
}
</style>
