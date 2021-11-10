<template>
  <section>
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="30px"
        sm-gap="20px"
      >
        <v-heading
          class="bug-bounty-heading"
          :level="2"
          line-height="1.2"
          :weight="700"
        >
          Bug Bounty
        </v-heading>
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

.bug-bounty-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 4rem;

  @media (--viewport-small) {
    font-size: 2.25rem;
  }
}
</style>
