<template>
  <section id="features">
    <v-container>
      <v-heading
        class="features-heading"
        :level="2"
        line-height="1.2"
        :weight="700"
      >
        Features & Capabilities
      </v-heading>
      <v-tabs :tabs-list="tabsList" class="features-tabs">
        <template #tab-0>
          <v-stack
            direction="column"
            sm-direction="column"
            gap="2.5rem"
            sm-gap="1.875rem"
          >
            <v-text
              class="feature-overview-description"
              color="secondary"
              :weight="400"
              line-height="1.4"
            >
              A feature-packed SDK for secure storage, access, and
              authentication.
            </v-text>
          </v-stack>
          <div class="feature-overviews">
            <feature-description
              v-for="feature in features"
              :key="feature.title"
              :icon="feature.icon"
              :title="feature.title"
              :description-list="feature.description"
            />
          </div>
        </template>
        <template #tab-1>
          <v-stack
            align="start"
            sm-align="start"
            direction="row"
            sm-direction="column"
            justify="start"
            sm-justify="baseline"
            gap="3rem"
            sm-gap="1.875rem"
            class="feature-capabilities"
          >
            <v-chip class="feature-capabilities-dos">
              <v-stack direction="column" gap="2.25rem">
                <v-heading
                  class="feature-capabilities-heading"
                  :level="3"
                  line-height="1.2"
                >
                  Do&rsquo;s
                </v-heading>
                <v-list
                  :list-items="featureCapabilitiesDoItems"
                  variant="positive"
                />
              </v-stack>
            </v-chip>
            <v-chip class="feature-capabilities-donts">
              <v-stack direction="column" gap="2.25rem">
                <v-heading
                  class="feature-capabilities-heading"
                  :level="3"
                  line-height="1.2"
                >
                  Don&rsquo;ts
                </v-heading>
                <v-list
                  :list-items="featureCapabilitiesDontItems"
                  variant="negative"
                />
              </v-stack>
            </v-chip>
          </v-stack>
        </template>
      </v-tabs>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'WhatsNewSection',
  data() {
    return {
      tabsList: ['Features', 'Capabilities'],
      features: [
        {
          icon: 'images/arcana-auth.svg',
          title: 'Auth',
          description: [
            '<strong>Social Auth:</strong> Login using social accounts',
            '<strong>Passwordless Auth:</strong> Login using a link sent to your email',
            'Auth also supported by Arcana web wallet',
            '<strong>3rd Party wallet auth:</strong> Support for authentication through third party wallets (MetaMask, WalletConnect)',
          ],
        },
        {
          icon: 'images/arcana-storage.svg',
          title: 'Storage',
          description: [
            'Encrypt & Upload files',
            'Download & Decrypt files',
            'Associate metadata with each file',
            'Pick your geographic region to store data',
          ],
        },
        {
          icon: 'images/arcana-access.svg',
          title: 'Access',
          description: [
            'Share/revoke access to files & private NFTs',
            'Transfer ownership of files & private NFTs',
          ],
        },
        {
          icon: 'images/arcana-wallet.svg',
          title: 'Wallet',
          description: [
            'Configure the Arcana wallet to sign transactions in your dApp',
          ],
        },
      ],
      featureCapabilitiesDoItems: [
        { description: 'Create test accounts.' },
        { description: 'Develop new use cases.' },
        { description: 'Test access control and data integrity.' },
        { description: 'Report bugs and share feedback.' },
      ],
      featureCapabilitiesDontItems: [
        { description: 'Performance and stress testing.' },
        { description: 'Testing high-availability or reliability of nodes.' },
        {
          description:
            'Long term storage of data. The network might reset and also go through breaking changes or upgrades.',
        },
        { description: 'Transfer of token assets.' },
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

.feature-overview-description {
  font-size: 1.25rem;
  max-width: 50ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.features-tabs {
  margin-top: 2.5rem;
}

.feature-overviews {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;

  @media (--viewport-medium) {
    grid-gap: 1.25rem;
    grid-template-columns: repeat(1, 1fr);
  }
}

.feature-capabilities-dos,
.feature-capabilities-donts {
  max-width: unset !important;
  width: 50%;
  min-height: 25rem;
  padding: 2rem !important;

  @media (--viewport-small) {
    padding: 1rem !important;
    min-height: unset;
    width: calc(100% - 2rem) !important;
  }
}

.feature-capabilities-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.1875rem;
  font-weight: 700;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
