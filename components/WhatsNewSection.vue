<template>
  <section id="whats-new">
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="1.875rem"
        sm-gap="1.25rem"
      >
        <v-heading
          class="features-heading"
          :level="2"
          line-height="1.2"
          :weight="700"
        >
          What's New
        </v-heading>
      </v-stack>
      <v-stack
        justify="space-between"
        :grow="1"
        sm-direction="column"
        class="features-list"
      >
        <v-blurb
          v-for="feature in features"
          :key="`feature-${feature.title}`"
          :image="feature.icon"
          :alt="feature.title"
          :title="feature.title"
          :description="feature.description"
          :caption="feature.caption"
          class="features-blurb"
        />
      </v-stack>
      <div class="release-notes-container">
        <v-text
          class="features-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          For a complete list of what's new in our beta release, check our
          product
          <a
            href="https://docs.beta.arcana.network/docs/rn_beta"
            target="_blank"
            >release notes</a
          >.
        </v-text>
      </div>
    </v-container>
    <div class="features-illustration">
      <img
        src="@/assets/images/section-gradient-top.svg"
        class="gradient-top"
      />
      <img
        src="@/assets/images/features-illustration.png"
        class="mobile-remove"
      />
      <img
        src="@/assets/images/features-illustration-mobile.png"
        class="tablet-remove laptop-remove mobile-show"
      />
      <img
        src="@/assets/images/section-gradient-bottom.svg"
        class="gradient-bottom"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatsNewSection',
  data() {
    return {
      features: [
        {
          icon: 'images/passwordless.svg',
          title: 'Passwordless Auth',
          caption: 'Your dApp users no longer need to remember passwords!',
          description:
            'The passwordless auth feature enables dApp to send users a login link at a specified email ID of their choice. Upon clicking the link, user is automatically authenticated and logged in your dApp.',
        },
        {
          icon: 'images/wallet.svg',
          title: 'Wallet',
          caption:
            'Your dApp users no longer need to manage blockchain keys for signing transactions!',
          description:
            'Arcana Auth securely manages distributed private key for every authenticated user and never exposes it. It provides standard Ethereum provider interface to safely sign transactions for storage operations.',
        },
        {
          icon: 'images/private-nft.svg',
          title: 'Private NFTs',
          caption:
            'Your dApp users no longer need to worry about unauthorized data copies!',
          description:
            'Enable users to mint private NFTs powered by Arcana Storage and Auth. Users control who can actually view or access an NFT asset. They can list and sell NFT easily and securely by transferring NFT ownership.',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.features-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}

.features-description {
  max-width: 52ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.features-list {
  margin-top: 2rem;
}

.features-blurb {
  max-width: 24rem;

  @media (--viewport-small) {
    max-width: 100%;
    padding: 1rem 0 2rem;
  }
}

.features-list > * + * {
  @media (--viewport-small) {
    border-top: 1px solid #353535;
  }
}

.features-illustration {
  position: relative;
  margin-top: 2rem;

  @media (--viewport-large) {
    margin-top: -2rem;
    margin-bottom: -14rem;
    z-index: -1;
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

.features-illustration img {
  width: 100%;
}

.release-notes-container {
  margin-top: 3rem;
  text-align: center;
}
</style>
