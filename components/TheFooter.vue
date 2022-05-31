<template>
  <footer>
    <v-container>
      <v-stack
        class="footer-container"
        align="start"
        direction="column"
        gap="3rem"
      >
        <v-heading
          class="footer-heading"
          :level="2"
          :weight="700"
          line-height="1.2"
        >
          Disclaimer
        </v-heading>
        <v-text class="footer-text" line-height="1.4" :weight="400">
          Participating in Arcana's Testnet: Quantum Ascent does not constitute
          any guarantees of performance, reliability, or availability. Any loss
          arising from the use of our SDK will be the developer's sole
          responsibility.
        </v-text>
        <v-text class="footer-text" line-height="1.4" :weight="400">
          Arcana's Testnet is only meant for experimentation and not for running
          apps in production. We expect participating bounty hunters to
          cooperate in sharing logs, metrics, and other data related to
          bugs/feature suggestions, in order to help improve the Arcana Network.
        </v-text>
      </v-stack>
    </v-container>
    <div class="section-gradient" />
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

footer {
  position: relative;
  background: url('~assets/images/testnet-footer-bg.png') no-repeat;
  background-size: cover;

  @media (--viewport-small) {
    background: url('~assets/images/testnet-footer-bg-mobile.png') no-repeat;
    background-size: cover;
  }
}

.footer-container {
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media (--viewport-small) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

.footer-heading {
  font-size: 4rem;
  margin-bottom: 0;
  margin-top: 0;

  @media (--viewport-small) {
    font-size: 2.25rem;
  }
}

.footer-text {
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.section-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background: linear-gradient(0deg, #0f0908 30%, rgba(15, 9, 8, 0) 100%);

  @media (--viewport-small) {
    height: 3rem;
  }
}
</style>
