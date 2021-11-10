<template>
  <v-stack class="build-support" direction="column" gap="6rem">
    <v-stack
      class="dn"
      direction="column"
      sm-direction="column"
      gap="1.875rem"
      sm-gap="1.875rem"
    >
      <v-heading
        class="build-support-heading"
        :level="3"
        line-height="1.2"
        :weight="600"
      >
        Got Questions? Get Answers.
      </v-heading>
      <v-text
        class="build-support-description"
        color="secondary"
        :weight="400"
        line-height="1.5"
      >
        Take a look at the questions below to learn more. If you don’t find them
        here, look for other ways to get in touch with us below:
      </v-text>
      <v-accordion :items="questionItems" />
    </v-stack>
    <v-stack
      direction="column"
      sm-direction="column"
      gap="1.875rem"
      sm-gap="1.875rem"
    >
      <v-heading
        class="build-support-heading"
        :level="3"
        line-height="1.2"
        :weight="600"
      >
        Get in Touch
      </v-heading>
      <v-text
        class="build-support-description"
        color="secondary"
        :weight="400"
        line-height="1.5"
      >
        Use any of the modes below to get in touch with us and get the help you
        need:
      </v-text>
      <v-stack
        style="margin-top: 1.875rem"
        direction="column"
        sm-direction="column"
        align="start"
        sm-align="center"
      >
        <a href="mailto:hello@arcana.network">
          <v-text font="sans" :weight="700" class="build-support-mailing">
            hello@arcana.network
          </v-text>
        </a>
        <v-stack style="margin-top: 3rem" md-justify="space-evenly">
          <a href="https://twitter.com/arcananetwork" target="__blank">
            <v-image
              path="images/twitter-white.svg"
              class="build-support-social-link"
              alt="Arcana twitter page"
            />
          </a>
          <a
            style="margin-left: 3rem"
            href="https://t.me/ArcanaNetwork"
            target="__blank"
          >
            <v-image
              path="images/telegram-white.svg"
              class="build-support-social-link"
              alt="Arcana telegram channel"
            />
          </a>
          <a
            style="margin-left: 3rem"
            href="https://discord.gg/w6ej4FtqYS"
            target="__blank"
          >
            <v-image
              path="images/discord-white.svg"
              class="build-support-social-link"
              alt="Arcana discord channel"
            />
          </a>
        </v-stack>
      </v-stack>
    </v-stack>
  </v-stack>
</template>

<script>
export default {
  name: 'BuildSupport',
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

.build-support {
  margin-top: 1.875rem;
}

.build-support-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.875rem;
  }
}

.build-support-description {
  max-width: 42ch;
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

a {
  text-decoration: none;
}

.build-support-mailing {
  font-size: 1.75rem;
  line-height: 2.25rem;

  @media (--viewport-medium) {
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
}

.build-support-social-link {
  width: 3rem;
}

.dn {
  display: none;
}
</style>
