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
              class="get-started-heading"
              :level="2"
              line-height="1.2"
              :weight="700"
            >
              Get Started
            </v-heading>
            <v-text
              class="get-started-description"
              color="secondary"
              :weight="400"
              line-height="1.4"
            >
              Resources to help you build apps with Arcana or find bugs.
            </v-text>
          </v-stack>
        </div>
        <quick-links />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'GetStartedSection',
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

.get-started-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.125rem;

  @media (--viewport-small) {
    font-size: 2.1875rem;
  }
}

.get-started-description {
  max-width: 52ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}
</style>
