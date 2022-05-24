<template>
  <section id="build-dapps">
    <v-container>
      <v-stack
        align="start"
        direction="column"
        sm-direction="column"
        gap="2.5rem"
        sm-gap="1.875rem"
      >
        <v-heading
          class="build-heading"
          :level="2"
          line-height="1.2"
          :weight="700"
        >
          Build dApps
        </v-heading>
        <div>
          <v-tabs :tabs-list="tabsList">
            <template #tab-0>
              <build-use-cases />
            </template>
            <template #tab-1>
              <build-support />
            </template>
          </v-tabs>
        </div>
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BuildSection',
  data() {
    return {
      tabsList: ['Use Cases', 'Support'],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

section {
  scroll-margin-top: 2rem;

  @media (--viewport-small) {
    margin-top: 4rem !important;
  }
}

.build-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}
</style>
