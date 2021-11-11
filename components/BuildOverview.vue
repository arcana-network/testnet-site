<template>
  <v-stack
    direction="column"
    sm-direction="column"
    gap="3.75rem"
    sm-gam="3.125rem"
  >
    <v-text
      class="build-overview-description"
      color="secondary"
      :weight="400"
      line-height="1.4"
    >
      Descend into the Arcana Quantum Verse. Build your Decentralised
      Applications with Arcana's Storage & Privacy Stack.
    </v-text>
    <div>
      <v-stack direction="column" gap="1.25rem">
        <v-heading class="build-overview-heading" :level="3" line-height="1.2">
          Available Functionality
        </v-heading>
        <div class="build-features">
          <v-card
            v-for="feature in featureCards"
            :key="feature.name"
            class="build-feature-card"
          >
            <v-stack
              align="start"
              md-align="center"
              direction="row"
              md-direction="column"
              sm-direction="row"
              justify="center"
              md-justify="center"
              sm-justify="center"
              gap="1.875rem"
              md-gap="1.875rem"
              sm-gap="1.25rem"
            >
              <v-image class="build-feature-card-icon" :path="feature.image" />
              <div>
                <v-stack
                  direction="column"
                  sm-direction="column"
                  gap="1rem"
                  sm-gap="0.625rem"
                >
                  <v-heading
                    class="build-feature-card-title"
                    :level="4"
                    :weight="600"
                  >
                    {{ feature.title }}
                  </v-heading>
                  <v-text
                    class="build-feature-card-text"
                    :weight="400"
                    color="secondary"
                    size="1rem"
                    line-height="1.4"
                  >
                    {{ feature.description }}
                  </v-text>
                </v-stack>
              </div>
            </v-stack>
          </v-card>
        </div>
      </v-stack>
    </div>
  </v-stack>
</template>

<script>
export default {
  name: 'BuildOverview',
  data() {
    return {
      featureCards: [
        {
          name: 'identity',
          image: 'images/identity.svg',
          title: 'Identity and Access Management',
          description:
            'Add seamless user authentication and key generation with Social Login. No metamask or wallet required.',
        },
        {
          name: 'storage',
          image: 'images/storage.svg',
          title: 'Decentralised Storage',
          description:
            'Store end-to-end encrypted data on a decentralized network.',
        },
        {
          name: 'encryption',
          image: 'images/encryption.svg',
          title: 'End-to-End Encryption',
          description:
            'Share encrypted data and define access policies through our DIDs (Access control helps share data with other apps and users, trust-free).',
        },
        {
          name: 'keys',
          image: 'images/keys.svg',
          title: 'Non-custodial Key Management',
          description:
            'Securely exchange, generate and store keys that belong to users (without having to trust a 3rd party).',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.build-overview-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

.build-overview-description {
  max-width: 50ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.build-features {
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(2, 1fr);

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.build-feature-card-icon {
  width: 7.5rem;

  @media (--viewport-small) {
    width: 3.75rem;
  }
}

.build-feature-card-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  line-height: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.125rem;
  }
}
</style>
