<template>
  <section id="get-started">
    <v-container>
      <v-stack align="start" direction="column" gap="3.75rem">
        <div>
          <v-stack
            align="start"
            direction="column"
            sm-direction="column"
            gap="1.875rem"
            sm-gap="1.25rem"
          >
            <v-heading
              class="get-started-heading"
              :level="2"
              line-height="1.2"
              :weight="700"
            >
              Get Started
            </v-heading>
            <v-text
              class="get-started-description"
              color="secondary"
              :weight="400"
              line-height="1.4"
            >
              Resources to help you build apps with Arcana or find bugs.
            </v-text>
          </v-stack>
        </div>
        <quick-links />
      </v-stack>
    </v-container>
    <div class="get-started-illustration">
      <img
        src="@/assets/images/testnet-top-gradient.png"
        class="gradient-top"
      />
      <img
        src="@/assets/images/get-started-illustration.png"
        class="mobile-remove"
      />
      <img
        src="@/assets/images/get-started-illustration-mobile.png"
        class="tablet-remove laptop-remove mobile-show"
      />
      <img
        src="@/assets/images/testnet-bottom-gradient.png"
        class="gradient-bottom"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'GetStartedSection',
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

section {
  scroll-margin-top: 2rem;
}

.get-started-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}

.get-started-description {
  max-width: 52ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.get-started-illustration {
  position: relative;
  margin-top: -8rem;
  margin-bottom: -8rem;
  z-index: -1;

  @media (--viewport-large) {
    margin-top: -18rem;
    margin-bottom: -18rem;
  }
}

.gradient-top {
  position: relative;
  margin-bottom: -25%;
}

.gradient-bottom {
  position: relative;
  margin-top: -25%;
}

.get-started-illustration img {
  width: 100%;
}
</style>
