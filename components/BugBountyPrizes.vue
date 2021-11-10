<template>
  <div class="bug-bounty-prizes">
    <v-chip
      v-for="prize in prizes"
      :key="prize.type"
      class="bug-bounty-prize"
      :variant="prize.variant === 'best' ? 'highlight' : 'regular'"
    >
      <v-stack
        class="bug-bounty-prize-stack"
        direction="column"
        gap="1.25rem"
        :data-variant="prize.variant"
      >
        <v-text
          class="bug-bounty-prize-amount"
          size="1.875rem"
          :weight="600"
          line-height="1.2"
        >
          {{ prize.amount }}
        </v-text>
        <v-text
          class="bug-bounty-prize-type"
          size="1.375rem"
          :weight="600"
          line-height="1.2"
        >
          {{ prize.type }}
        </v-text>
      </v-stack>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'BugBountyPrizes',
  data() {
    return {
      prizes: [
        { type: 'Critical', amount: '$2000 - $4000', variant: 'best' },
        { type: 'High', amount: '$500 - $2000', variant: 'better' },
        { type: 'Medium', amount: '$100 - $500', variant: 'better' },
        { type: 'Low', amount: '$20 - $100', variant: 'good' },
        { type: 'UI', amount: '$20 - $50', variant: 'good' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.bug-bounty-prizes {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-gap: 2.5rem 3.75rem;
  grid-template-columns: repeat(3, 1fr);

  @media (--viewport-medium) {
    grid-gap: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-small) {
    justify-items: center;
    grid-gap: 2.5rem;
    grid-template-columns: 1fr;
  }
}

.bug-bounty-prize {
  padding: 1.25rem 1.75rem;

  @media (--viewport-small) {
    width: 100%;
  }
}

.bug-bounty-prize-amount {
  white-space: nowrap;
}

.bug-bounty-prize-stack[data-variant='best'] .bug-bounty-prize-amount {
  color: black;
}
.bug-bounty-prize-stack[data-variant='best'] .bug-bounty-prize-type {
  color: black;
}

.bug-bounty-prize-stack[data-variant='better'] .bug-bounty-prize-amount {
  background: linear-gradient(
      33.18deg,
      rgba(255, 181, 38, 0.6) 8.78%,
      rgba(255, 175, 55, 0) 44.97%
    ),
    radial-gradient(
      71.51% 71.51% at 88.17% 103.23%,
      rgba(255, 219, 92, 0.6) 0%,
      rgba(255, 219, 92, 0.496875) 32.29%,
      rgba(255, 219, 92, 0) 100%
    ),
    radial-gradient(
      50% 50% at 63.98% 28.49%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 23.44%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      32.26% 32.26% at 62.37% 28.49%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.216) 100%
    ),
    linear-gradient(326.58deg, #ffe177 -3.92%, #ff975c 112.32%);
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.bug-bounty-prize-stack[data-variant='better'] .bug-bounty-prize-type {
  color: white;
}

.bug-bounty-prize-stack[data-variant='good'] .bug-bounty-prize-amount {
  background: linear-gradient(
      33.18deg,
      rgba(92, 245, 255, 0.6) 8.78%,
      rgba(92, 245, 255, 0) 44.97%
    ),
    radial-gradient(
      71.51% 71.51% at 88.17% 103.23%,
      rgba(92, 245, 255, 0.6) 0%,
      rgba(92, 245, 255, 0.496875) 32.29%,
      rgba(92, 245, 255, 0) 100%
    ),
    radial-gradient(
      50% 50% at 63.98% 28.49%,
      #fff 0%,
      #fff 33.85%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      32.26% 32.26% at 62.37% 28.49%,
      #fff 13.54%,
      rgba(255, 255, 255, 0.27) 100%
    ),
    linear-gradient(326.58deg, #5cf5ff -3.92%, #5cf5ff 112.32%);
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.bug-bounty-prize-stack[data-variant='good'] .bug-bounty-prize-type {
  color: white;
}
</style>
