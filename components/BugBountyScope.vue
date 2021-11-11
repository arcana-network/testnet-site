<template>
  <v-stack
    align="start"
    sm-align="start"
    direction="row"
    sm-direction="column"
    justify="start"
    sm-justify="baseline"
    gap="3.75rem"
    sm-gap="3.75rem"
    class="bug-bounty-scope"
  >
    <v-chip class="bug-bounty-scope-in">
      <v-stack direction="column" gap="2.25rem">
        <v-heading
          class="bug-bounty-scope-heading"
          :level="3"
          line-height="1.2"
        >
          In Scope
        </v-heading>
        <v-list :list-items="inScopeItems" variant="positive" />
      </v-stack>
    </v-chip>
    <v-chip class="bug-bounty-scope-out">
      <v-stack direction="column" gap="2.25rem">
        <v-heading
          class="bug-bounty-scope-heading"
          :level="3"
          line-height="1.2"
        >
          Out of Scope
        </v-heading>
        <v-list :list-items="outOfScopeItems" variant="negative" />
      </v-stack>
    </v-chip>
  </v-stack>
</template>

<script>
export default {
  name: 'BugBountyScope',
  data() {
    return {
      inScopeItems: [
        { description: 'Non-technical and UI bugs' },
        { description: 'Developer Dashboard' },
        { description: 'Developer Signup and Login' },
        { description: 'SDK configuration and app creation' },
      ],
      outOfScopeItems: [
        { description: 'Vulnerabilities in Codebase' },
        { description: 'Bugs in Codebase' },
        { description: 'Resistance to DDoS attacks' },
        { description: 'Scalability and performance of the network' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.bug-bounty-scope-in,
.bug-bounty-scope-out {
  max-width: 36rem !important;
  padding: 2rem !important;

  @media (--viewport-small) {
    background: transparent !important;
    padding: inherit !important;
  }
}

.bug-bounty-scope-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
