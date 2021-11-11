<template>
  <section>
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
              The future of privacy is now! Quantum Descent has begun.
              <br />
              Get access to our SDK, explore use cases, and improve the Arcana
              Network.
            </v-text>
          </v-stack>
        </div>
        <div>
          <v-tabs :tabs-list="tabsList">
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
                <div class="feature-overviews">
                  <div
                    v-for="featureOverviewPoint in featureOverviewPoints"
                    :key="featureOverviewPoint.title"
                    class="feature-overview-points"
                  >
                    <v-blurb
                      :image="featureOverviewPoint.icon"
                      :alt="featureOverviewPoint.title"
                      :title="featureOverviewPoint.title"
                      :description="featureOverviewPoint.description"
                    />
                  </div>
                </div>
              </v-stack>
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
                      Dont&rsquo;s
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
        </div>
        <div class="feature-overview-illustration full-bleed" />
      </v-stack>
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

.overview-features-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.875rem;
  }
}

.feature-overview-description {
  font-size: 1.25rem;
  max-width: 50ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.feature-overviews {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(5, 1fr);

  @media (--viewport-medium) {
    grid-gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-overview-points {
  justify-content: center;
  align-items: center;
}

.feature-overview-points > * {
  margin: 0 auto;
  max-width: 24ch;
}

.feature-overview-points > .blurb-description {
  font-size: 1.125rem !important;
  line-height: 1.375rem;

  @media (--viewport-medium) {
    font-size: 1rem;
    line-height: 1.125rem;
  }
}

.full-bleed {
  margin-left: -10vw;
  max-width: none;
  width: 100vw;

  @media (--viewport-small) {
    margin-left: -5%;
  }
}

.feature-overview-illustration {
  margin-top: -10rem;
  z-index: -1;
  background-image: url('~assets/images/testnet-overview-top-gradient.png'),
    url('~assets/images/testnet-overview-bottom-gradient.png'),
    url('~assets/images/testnet-overview.png');
  background-size: contain, contain, cover;
  background-position: top, bottom, top;
  background-repeat: no-repeat;
  width: 100vw;
  height: clamp(420px, calc((1155 / 1440) * 80vw), 900px);

  @media (--viewport-small) {
    margin-top: -5rem;
  }
}

.feature-capabilities-dos,
.feature-capabilities-donts {
  max-width: unset;
  width: 50%;
  min-height: 25rem;
  padding: 2rem !important;

  @media (--viewport-small) {
    padding: 1rem !important;
    max-width: unset;
    min-height: unset;
    width: calc(100% - 2rem);
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
