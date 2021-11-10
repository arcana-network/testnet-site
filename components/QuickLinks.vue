<template>
  <v-stack
    direction="column"
    gap="1.875rem"
    sm-direction="column"
    sm-gap="2.5rem"
  >
    <div class="quicklinks-cards">
      <v-card
        v-for="(link, linkIndex) in quickLinks"
        :key="link.name"
        class="quicklinks-card"
      >
        <v-stack
          align="start"
          sm-align="center"
          direction="row"
          sm-direction="row"
          justify="space-between"
        >
          <v-stack
            direction="column"
            sm-direction="row"
            align="start"
            sm-align="center"
            gap="1.25rem"
            sm-gap="0"
          >
            <div class="position-relative">
              <v-image class="quicklinks-crater" path="images/crater.svg" />
              <v-text
                font="serif"
                :weight="700"
                line-height="1.2"
                class="quicklinks-count"
              >
                {{ linkIndex + 1 }}
              </v-text>
            </div>
            <v-text
              class="quicklinks-description"
              :weight="400"
              line-height="1.5"
            >
              {{ link.description }}
            </v-text>
          </v-stack>
          <v-image class="quicklinks-arrow" path="images/arrow-right.svg" />
        </v-stack>
      </v-card>
    </div>
    <v-button
      class="btn-submit-bugs"
      label="Submit Bugs"
      type="button"
      label-transform="uppercase"
      label-size="1rem"
      :label-weight="600"
    />
  </v-stack>
</template>

<script>
export default {
  name: 'QuickLinks',
  data() {
    return {
      quickLinks: [
        { name: 'docs', description: 'View Docs' },
        { name: 'demo', description: 'Reference Tutorial App' },
        { name: 'discord', description: 'Get Started' },
        { name: 'discourse', description: 'Get Support' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.quicklinks-cards {
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

.quicklinks-crater {
  width: 7.5rem;

  @media (--viewport-small) {
    width: 3.75rem;
  }
}

.quicklinks-count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;

  @media (--viewport-small) {
    font-size: 1.25rem;
  }
}

.quicklinks-description {
  font-size: 1.375rem;

  @media (--viewport-small) {
    font-size: 1.125rem;
  }
}

.quicklinks-arrow {
  @media (--viewport-small) {
    padding: 1rem;
  }
}

.btn-submit-bugs {
  align-self: end;
  flex-grow: 0;
  flex-shrink: 0;
  width: 16rem;

  @media (--viewport-small) {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }
}
</style>
