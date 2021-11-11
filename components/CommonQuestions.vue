<template>
  <v-stack
    class="dn"
    direction="column"
    sm-direction="column"
    gap="1.875rem"
    sm-gap="1.875rem"
  >
    <v-heading
      class="common-questions-heading"
      :level="3"
      line-height="1.2"
      :weight="600"
    >
      Got Questions? Get Answers.
    </v-heading>
    <v-text
      class="common-questions-description"
      color="secondary"
      :weight="400"
      line-height="1.4"
    >
      Take a look at the questions below to learn more. If you don’t find them
      here, look for other ways to get in touch with us below:
    </v-text>
    <v-accordion :items="questionItems" />
  </v-stack>
</template>

<script>
export default {
  name: 'CommonQuestions',
  data() {
    return {
      questionItems: [
        {
          title: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit cursus purus nisl amet, eros, volutpat, accumsan sem. Rhoncus est, hendrerit amet lobortis tristique quisque. Lorem in in posuere feugiat mauris. Faucibus scelerisque mauris elit amet diam tristique at cursus sit.',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit cursus purus nisl amet, eros, volutpat, accumsan sem. Rhoncus est, hendrerit amet lobortis tristique quisque. Lorem in in posuere feugiat mauris. Faucibus scelerisque mauris elit amet diam tristique at cursus sit.',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit cursus purus nisl amet, eros, volutpat, accumsan sem. Rhoncus est, hendrerit amet lobortis tristique quisque. Lorem in in posuere feugiat mauris. Faucibus scelerisque mauris elit amet diam tristique at cursus sit.',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit cursus purus nisl amet, eros, volutpat, accumsan sem. Rhoncus est, hendrerit amet lobortis tristique quisque. Lorem in in posuere feugiat mauris. Faucibus scelerisque mauris elit amet diam tristique at cursus sit.',
        },
        {
          title: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit cursus purus nisl amet, eros, volutpat, accumsan sem. Rhoncus est, hendrerit amet lobortis tristique quisque. Lorem in in posuere feugiat mauris. Faucibus scelerisque mauris elit amet diam tristique at cursus sit.',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.common-questions-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.875rem;
  }
}

.common-questions-description {
  max-width: 50ch;
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}
</style>
