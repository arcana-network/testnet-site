<template>
  <v-stack
    align="start"
    direction="column"
    sm-direction="column"
    gap="20px"
    sm-gap="30px"
    class="tabs"
  >
    <v-stack
      align="start"
      class="tab-titles"
      direction="row"
      sm-direction="row"
      gap="3.75rem"
      sm-gap="1.875rem"
    >
      <div
        v-for="(tabTitle, tabIndex) in tabsList"
        :key="tabTitle"
        class="tab-title-wrapper"
        @click="selectTab(tabIndex)"
      >
        <v-text
          class="tab-title"
          font="sans"
          line-height="1.2"
          :class="{
            'tab-title--selected': tabIndex === selectedTabIndex,
          }"
        >
          {{ tabTitle }}
        </v-text>
      </div>
    </v-stack>
    <template v-for="(tabTitle, tabIndex) in tabsList">
      <div
        v-if="tabIndex === selectedTabIndex"
        :key="tabTitle"
        style="width: 100%"
      >
        <slot :name="`tab-${tabIndex}`" />
      </div>
    </template>
  </v-stack>
</template>

<script>
export default {
  name: 'VTabs',
  props: {
    tabsList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTabIndex: 0,
    }
  },
  methods: {
    selectTab(index) {
      this.selectedTabIndex = index
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.tab-titles {
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 80vw;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  @media (--viewport-small) {
    width: 90vw;
  }
}
.tab-titles::-webkit-scrollbar {
  display: none;
}

.tab-title-wrapper {
  cursor: pointer;
  flex: 0 0 auto;
  user-select: none;
}

.tab-title {
  display: block;
  font-size: 2.1875rem;
  color: var(--color-grey);
  border-bottom: 4px solid transparent;
  font-weight: 300;

  @media (--viewport-small) {
    font-size: 1.25rem;
  }
}

.tab-title--selected {
  color: var(--color-white);
  border-color: currentColor;
  font-weight: 700;
}
</style>
