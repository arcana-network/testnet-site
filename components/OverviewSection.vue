<template>
  <section id="overview">
    <v-container>
      <v-stack align="start" direction="column" sm-direction="column" gap="1.875rem" sm-gap="1.25rem">
        <v-heading class="overview-heading" :level="2" line-height="1.2" :weight="700">
          Overview
        </v-heading>
        <div>
          <v-text class="overview-description" color="secondary" :weight="400" line-height="1.5">
            Be a part of our testnet ascent.
            <br />
            Get your copy of the SDKs and explore the beta release.
          </v-text>
          <ul class="list-container">
            <li v-for="description in overviewDescriptionList" :key="description" class="list">
              <v-text class="list-description">
                {{ description }}
              </v-text>
            </li>
          </ul>
        </div>
      </v-stack>
      <div class="overview-features">
        <v-stack align="center" sm-align="start" gap="12rem" sm-gap="2rem" justify="center">
          <div class="icon-container">
            <v-image path="images/arcana-overview-auth.svg" alt="Arcana Auth" />
          </div>
          <div class="overview-feature">
            <v-heading :level="2" class="overview-feature-title">
              Arcana Auth
            </v-heading>
            <div class="overview-feature-description">
              <div>
                <v-text color="secondary" line-height="1.5" size="1.125rem">
                  Easily plugin familiar, frictionless web3 user onboarding in
                  your dApp.
                </v-text>
                <ul class="list-container">
                  <li v-for="description in authFeatures" :key="description" class="list">
                    <v-text class="list-description">
                      {{ description }}
                    </v-text>
                  </li>
                </ul>
              </div>
              <div style="margin-top: 2rem">
                <v-text color="secondary" line-height="1.5" size="1.125rem">
                  Delegate intricacies of key management to secure Arcana
                  Auth.
                </v-text>
                <ul class="list-container">
                  <li v-for="description in authServices" :key="description" class="list">
                    <v-text class="list-description">
                      {{ description }}
                    </v-text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </v-stack>
        <v-stack align="center" sm-align="start" gap="12rem" sm-gap="2rem" justify="center">
          <div class="overview-feature">
            <div>
              <v-heading :level="2" class="overview-feature-title">
                Arcana Store
              </v-heading>
            </div>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Store dApp user data securely in Arcana's distributed Store for
                data sovereignty and privacy.
              </v-text>
              <ul class="list-container">
                <li v-for="description in storeServices" :key="description" class="list">
                  <v-text class="list-description">
                    {{ description }}
                  </v-text>
                </li>
              </ul>
            </div>
          </div>
          <div class="icon-container">
            <v-image path="images/arcana-overview-storage.svg" alt="Arcana Storage" />
          </div>
        </v-stack>
        <v-stack align="center" sm-align="start" gap="12rem" sm-gap="2rem" justify="center">
          <div class="icon-container">
            <v-image path="images/arcana-overview-access.svg" alt="Arcana Access" />
          </div>
          <div class="overview-feature">
            <div>
              <v-heading :level="2" class="overview-feature-title">
                Arcana Access
              </v-heading>
            </div>
            <div class="overview-feature-description">
              <v-text color="secondary" line-height="1.5" size="1.125rem">
                Let dApp users control who can access their data.
              </v-text>
              <ul class="list-container">
                <li v-for="description in accessServices" :key="description" class="list">
                  <v-text class="list-description">
                    {{ description }}
                  </v-text>
                </li>
              </ul>
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
      overviewDescriptionList: [
        'Build your dApps faster.',
        'Easily onboard users via social, passwordless authentication.',
        'Enable dApp user data sovereignty and privacy.',
      ],
      authFeatures: ['Social authentication', 'Passwordless login'],
      authServices: [
        'Distributed key generation',
        'Non-custodial key management',
        'Standard Ethereum Provider Access',
      ],
      storeServices: [
        'No single point of failure - each user data asset is split up and stored on multiple nodes.',
        'Highly available - protected from geo-specific outages, disasters and hacks.',
        'dApp developers control data storage region, storage usage and bandwidth limits per user.',
      ],
      accessServices: [
        'Each user data file is uniquely associated with a DID.',
        'File ownership and metadata access are managed on blockchain.',
        'Only file owners can share, revoke, change file ownership or delete a file.',
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
  max-width: 32rem;
  text-align: left;
}

.overview-features>* {
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
  background: radial-gradient(50% 50% at 50% 50%,
      rgba(11, 132, 201, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
}

.icon-container>* {
  @media (--viewport-medium) {
    width: 10rem;
    margin-top: 1rem;
  }

  @media (--viewport-small) {
    width: 6rem;
  }
}
</style>
