<template>
  <section id="bug-bounty">
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="2.5rem"
        sm-gap="1.875rem"
      >
        <v-heading
          class="bug-bounty-heading"
          :level="2"
          line-height="1.2"
          :weight="700"
        >
          Bug Bounty
        </v-heading>
        <div>
          <v-tabs :tabs-list="tabsList">
            <template #tab-0>
              <bug-bounty-overview />
            </template>
            <template #tab-1>
              <bug-bounty-rules />
            </template>
            <template #tab-2>
              <bug-bounty-scope />
            </template>
            <template #tab-3>
              <bug-bounty-prizes />
            </template>
          </v-tabs>
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BugBountySection',
  data() {
    return {
      tabsList: ['Hunt Bugs', 'Rules', 'Scope', 'Prizes'],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

section {
  margin-top: -5rem !important;

  @media (--viewport-small) {
    margin-top: 2rem !important;
  }
}

.bug-bounty-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}
</style>
