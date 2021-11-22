<template>
  <v-stack direction="column" gap="2.45rem">
    <div>
      <v-stack direction="column" gap="1.25rem">
        <v-text
          class="bug-bounty-overview-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          We're looking for Bounty Hunters to find bugs in our user interface,
          and test the functionalities of our SDK.
        </v-text>
        <v-text
          class="bug-bounty-overview-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          If you're a developer with a knack for testing SDKs and APIs -
          participate in our Bug Bounty Program, from anywhere in the world. Win
          from a pool of 25,000 USDT in rewards.
        </v-text>
        <v-text
          class="bug-bounty-overview-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          The bug bounty will begin on the 17th of November, and last for a 4
          week timeframe. Signup on the Developer Dashboard, check out our
          documentation and get going!
        </v-text>
        <v-text
          class="bug-bounty-overview-description"
          color="secondary"
          :weight="400"
          line-height="1.4"
        >
          Before submitting your bug, you'll need to prepare the following:
        </v-text>
        <v-list :list-items="stepsList" />
      </v-stack>
    </div>
    <v-button
      class="cta-button"
      :action="() => scrollToSection('#get-started')"
      type="button"
      label="Get Started"
      label-transform="uppercase"
      label-size="1rem"
      :label-weight="600"
    />
  </v-stack>
</template>

<script>
import scrollToSectionMixin from '~/mixins/scrollToSection'

export default {
  name: 'BugBountyOverview',
  mixins: [scrollToSectionMixin],
  data() {
    return {
      stepsList: [
        { description: 'Description of the bug' },
        { description: 'Steps to reproduce' },
        { description: 'Supporting material or references' },
        { description: 'Your Email ID, Telegram and Twitter handles' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.bug-bounty-overview-heading {
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

.bug-bounty-overview-description {
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

.build-feature-card-text {
  font-size: 1.375rem;
  max-width: 30ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.build-quicklinks {
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(4, 1fr);

  @media (--viewport-medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-small) {
    grid-gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}

.build-quicklinks-crater {
  width: 7.5rem;

  @media (--viewport-small) {
    width: 3.75rem;
  }
}

.build-quicklinks-count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;

  @media (--viewport-small) {
    font-size: 1.25rem;
  }
}

.build-quicklinks-description {
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1.125rem;
  }
}

.build-quicklinks-arrow {
  @media (--viewport-small) {
    padding: 1rem;
  }
}

.cta-button {
  width: 15rem;
  padding: 1rem 3.75rem;

  @media (--viewport-small) {
    width: 100%;
  }
}
</style>
