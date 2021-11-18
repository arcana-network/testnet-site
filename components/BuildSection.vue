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
              <build-overview />
            </template>
            <template #tab-1>
              <build-use-cases />
            </template>
            <template #tab-2>
              <build-support />
            </template>
          </v-tabs>
        </div>
        <div class="build-illustration full-bleed" />
      </v-stack>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BuildSection',
  data() {
    return {
      tabsList: ['Overview', 'Use Cases', 'Support'],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

section {
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

.full-bleed {
  margin-left: -10vw;
  max-width: none;
  width: 100vw;

  @media (--viewport-small) {
    margin-left: -5%;
  }
}

.build-illustration {
  margin-top: -10rem;
  z-index: -1;
  background-image: url('~assets/images/testnet-build-top-gradient.png'),
    url('~assets/images/testnet-build-bottom-gradient.png'),
    url('~assets/images/testnet-build.png');
  background-size: contain, contain, cover;
  background-position: top, bottom, top;
  background-repeat: no-repeat;
  width: 100vw;
  height: clamp(420px, calc((1155 / 1440) * 80vw), 900px);

  @media (--viewport-small) {
    margin-top: -5rem;
  }
}
</style>
