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
        <v-text
          class="features-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          Check out release notes here for all the new updates since previous
          testnet.
        </v-text>
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
          class="features-blurb"
        />
      </v-stack>
    </v-container>
    <div class="features-illustration">
      <img
        src="@/assets/images/features-gradient-top.png"
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
        src="@/assets/images/features-gradient-bottom.png"
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
          description:
            'No longer do users have to remember passwords to login to a dApp. Send users a one time link to their emails which they can then use to authenticate themselves.',
        },
        {
          icon: 'images/wallet.svg',
          title: 'Wallet',
          description:
            'Store keys securely with the Arcana Wallet in order to safely sign transactions for any actions performed on the Arcana platform.',
        },
        {
          icon: 'images/private-nft.svg',
          title: 'Private NFTs',
          description:
            'Users can now mint private NFTs powered by the Arcana platform and thus control who can actually access the underlying asset.',
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
}

.gradient-top {
  position: relative;
  margin-bottom: -7.5%;
}

.gradient-bottom {
  position: relative;
  margin-top: -30%;
}

.features-illustration img {
  width: 100%;
}
</style>
