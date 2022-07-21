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
        <v-text class="footer-text" line-height="1.4" :weight="400">
          By participating, you agree to Arcana Network's
          <a
            href="https://github.com/arcana-network/license/blob/main/PRIVACY.md"
            target="_blank"
            >Privacy Policy</a
          >
          &
          <a
            href="https://github.com/arcana-network/license/blob/main/TERMS.md"
            target="_blank"
            >Terms of Use</a
          >.
        </v-text>
      </v-stack>
    </v-container>
    <div class="footer-illustration">
      <img
        src="@/assets/images/section-gradient-top.svg"
        class="gradient-top"
      />
      <img src="@/assets/images/testnet-footer-bg.png" class="mobile-remove" />
      <img
        src="@/assets/images/testnet-footer-bg-mobile.png"
        class="tablet-remove laptop-remove mobile-show"
      />
      <img
        src="@/assets/images/section-gradient-bottom.svg"
        class="gradient-bottom"
      />
    </div>
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

.footer-illustration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: -8rem;
  z-index: -1;

  @media (--viewport-large) {
    margin-top: -8rem;
    margin-bottom: -16rem;
  }
}

.gradient-top {
  position: absolute;
  top: 0;
}

.gradient-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}

.footer-illustration img {
  width: 100%;
}
</style>
