<template>
  <v-stack direction="column" gap="3.75rem">
    <v-stack direction="column" gap="1.25rem">
      <v-text
        class="bug-bounty-overview-description"
        color="secondary"
        :weight="400"
        line-height="1.5"
      >
        We're looking for Bounty Hunters to find bugs in our User Interface, and
        test the functionalities of our SDK.
      </v-text>
      <v-text
        class="bug-bounty-overview-description"
        color="secondary"
        :weight="400"
        line-height="1.5"
      >
        If you're a developer with a knack for testing SDKs and APIs -
        participate in our Bug Bounty Program, from anywhere in the world. Win
        from a pool of 50,000 USD or 25,000 USD in XAR token rewards.
      </v-text>
      <v-text
        class="bug-bounty-overview-description"
        color="secondary"
        :weight="400"
        line-height="1.5"
      >
        The bug bounty will begin on the 17th of November, and last for a 4 week
        timeframe. Signup on the Developer Dashboard, checkout our documentation
        and get going!
      </v-text>
    </v-stack>
    <div>
      <v-stack direction="column" gap="1.25rem">
        <v-heading
          class="bug-bounty-overview-heading"
          :level="3"
          line-height="1.2"
        >
          Next Steps
        </v-heading>
        <v-text
          class="bug-bounty-overview-description"
          color="secondary"
          :weight="400"
          line-height="1.5"
        >
          The bug bounty will start on 17th November and last for four weeks.
          The main scope of the program is to find bugs in UI and
          functionalities of SDK's APIs. Before submitting your bug to the
          typeform/google form, prepare the following details.
        </v-text>
        <v-list :list-items="stepsList" />
      </v-stack>
    </div>
  </v-stack>
</template>

<script>
export default {
  name: 'BugBountyOverview',
  data() {
    return {
      stepsList: [
        { description: 'Feature the bug belongs to' },
        { description: 'Description of the bug' },
        { description: 'Steps to reproduce' },
        { description: 'Supporting material or references' },
        { description: 'Severity of the bug' },
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
  max-width: 46ch;
  font-size: 1.375rem;

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

.dn {
  display: none;
}
</style>
