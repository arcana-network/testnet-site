<template>
  <section id="overview">
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="1.875rem"
        sm-gap="1.25rem"
      >
        <v-heading
          class="overview-heading"
          :level="2"
          line-height="1.2"
          :weight="700"
        >
          Overview
        </v-heading>
        <v-text
          class="overview-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          Welcome to our Testnet Ascent.
          <br />
          Traverse our alpha, get access to the SDK, explore new Use Cases - and
          improve the Arcana Network.
        </v-text>
      </v-stack>
      <div class="overview-features">
        <v-stack
          justify="space-between"
          align="center"
          sm-align="start"
          gap="2rem"
        >
          <div class="icon-container">
            <v-image path="images/arcana-overview-auth.svg" alt="Arcana Auth" />
          </div>
          <div class="overview-feature">
            <v-heading :level="2" class="overview-feature-title">
              Arcana Auth
            </v-heading>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Provide frictionless onboarding for web3 users using social auth
                or passwordless logins. Arcana handles all aspects of key
                management from key pair generation to secure non-custodial
                handling through the arcana wallet so that your users don't have
                to.
              </v-text>
            </div>
          </div>
        </v-stack>
        <v-stack
          justify="space-between"
          align="center"
          sm-align="start"
          gap="2rem"
        >
          <div class="overview-feature">
            <div>
              <v-heading :level="2" class="overview-feature-title">
                Auth Storage
              </v-heading>
            </div>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Store user data securely on Arcana's decentralised storage
                network. Every asset uploaded to the arcana network is split up
                and stored across our nodes so that there is no single point of
                failure & your assets are protected against geo-specific
                disasters and hacks.
              </v-text>
            </div>
          </div>
          <div class="icon-container">
            <v-image
              path="images/arcana-overview-storage.svg"
              alt="Arcana Storage"
            />
          </div>
        </v-stack>
        <v-stack
          justify="space-between"
          align="center"
          sm-align="start"
          gap="2rem"
        >
          <div class="icon-container">
            <v-image
              path="images/arcana-overview-access.svg"
              alt="Arcana Access"
            />
          </div>
          <div class="overview-feature">
            <div>
              <v-heading :level="2" class="overview-feature-title">
                Arcana Access
              </v-heading>
            </div>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Let your code or users decide who gets access to data. Arcana
                Access uses DIDs for identification of data and to store,
                on-chain, who is the owner of the data and who has access to it.
              </v-text>
            </div>
          </div>
        </v-stack>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'OverviewSection',
  data() {
    return {
      tabsList: ['Features', 'Capabilities'],
      featureOverviewPoints: [
        {
          icon: 'images/login.svg',
          title: 'Login',
          description:
            'Allow users to sign up with social auth, frictionless UX',
        },
        {
          icon: 'images/share.svg',
          title: 'Share',
          description:
            'Define permissions and share data with others on-chain with just an email ID or public address',
        },
        {
          icon: 'images/revoke.svg',
          title: 'Revoke',
          description:
            'Remove access to shared data so they can no longer be downloaded and decrypted',
        },
        {
          icon: 'images/upload.svg',
          title: 'Upload',
          description:
            'Upload data with unique DIDs and add one or more users who can access it',
        },
        {
          icon: 'images/download.svg',
          title: 'Download',
          description:
            'Download data from DID links, verify permission, and decrypt data',
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

.overview-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}

.overview-description {
  max-width: 52ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.overview-feature {
  max-width: 36rem;
  text-align: left;
}

.overview-features > * {
  margin-top: 6rem;
}

.overview-feature-title {
  margin: 0;

  @media (--viewport-small) {
    font-size: 1.5rem;
  }
}

.overview-feature-description {
  margin-top: 1.25rem;
}

.icon-container {
  position: relative;
  overflow: visible;
}

.icon-container::before {
  content: '';
  position: absolute;
  top: -40%;
  left: -40%;
  right: -40%;
  bottom: -40%;
  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(11, 132, 201, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.icon-container > * {
  @media (--viewport-medium) {
    width: 10rem;
    margin-top: 1rem;
  }

  @media (--viewport-small) {
    width: 6rem;
  }
}
</style>
