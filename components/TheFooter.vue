<template>
  <footer>
    <v-container>
      <v-stack
        class="footer-container"
        align="start"
        direction="column"
        gap="20px"
      >
        <v-heading
          class="footer-heading"
          :level="2"
          :weight="700"
          line-height="1.2"
        >
          Disclaimers
        </v-heading>
        <v-text class="footer-text" line-height="1.4" :weight="400">
          Participating in Arcana's Testnet: Quantum Descent does not constitute
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
  background: url('~assets/images/testnet-footer-bg.png') repeat;
  background-size: cover;

  @media (--viewport-small) {
    background: url('~assets/images/testnet-footer-bg-mobile.png') repeat;
    background-size: 100%;
  }
}

.footer-container {
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;

  @media (--viewport-small) {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
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
</style>
