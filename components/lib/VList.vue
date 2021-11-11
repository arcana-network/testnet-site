<template>
  <ul class="list" :data-variant="variant">
    <li
      v-for="(listItem, listItemIndex) in listItems"
      :key="listItemIndex"
      class="list-item"
    >
      <v-stack class="list-item-content" direction="column" gap="10px">
        <v-text
          v-if="listItem.title"
          class="list-item-title"
          color="primary"
          line-height="1.5"
          :weight="600"
        >
          {{ listItem.title }}
        </v-text>
        <v-text
          v-if="
            listItem.description && typeof listItem.description === 'string'
          "
          class="list-item-description"
          color="secondary"
          :data-variant="listItem.variant"
          line-height="1.4"
          :weight="400"
        >
          {{ listItem.description }}
        </v-text>
        <v-stack
          v-if="listItem.description && Array.isArray(listItem.description)"
          direction="column"
          gap="1.25rem"
        >
          <v-text
            v-for="(descriptionLine, index) in listItem.description"
            :key="index"
            class="list-item-description"
            color="secondary"
            :data-variant="listItem.variant"
            line-height="1.4"
            :weight="400"
          >
            {{ descriptionLine }}
          </v-text>
        </v-stack>
      </v-stack>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VList',
  props: {
    listItems: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      default: 'neutral',
      validator: (value) => ['positive', 'neutral', 'negative'].includes(value),
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('../lib/media-query-helper.css');

.list {
  list-style: none;
  padding-left: 10px;
}

.list-item {
  position: relative;
  padding-left: 30px;
  padding-bottom: 1.875rem;
}

.list-item:last-child {
  padding-bottom: 0;
}

.list-item::before {
  content: '';
  position: absolute;
  left: -1px;
  height: 100%;
  width: 2px;
}

.list-item:last-child::before {
  height: 0;
}

.list[data-variant='positive'] .list-item::before {
  background: linear-gradient(
    180deg,
    #5cf5ff 0%,
    rgba(92, 245, 255, 0) 127.32%
  );
}
.list[data-variant='neutral'] .list-item::before {
  background: linear-gradient(
    179.97deg,
    #ffc839 26.87%,
    rgba(255, 200, 57, 0) 116.48%
  );
}
.list[data-variant='negative'] .list-item::before {
  background: linear-gradient(
    180deg,
    #ff395d 26.87%,
    rgba(255, 57, 93, 0) 120.48%
  );
}

.list-item::after {
  position: absolute;
  left: -10px;
  top: 0;
}
.list[data-variant='positive'] .list-item::after {
  content: url('~/assets/images/list-bullet-positive.png');
}
.list[data-variant='neutral'] .list-item::after {
  content: url('~/assets/images/list-bullet-neutral.png');
}
.list[data-variant='negative'] .list-item::after {
  content: url('~/assets/images/list-bullet-negative.png');
}

.list-item-content > *:first-child {
  margin-top: -0.3rem;
}

.list-item-title,
.list-item-description {
  font-size: 1.25rem;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}

.list-item-description {
  max-width: 50ch;
}

.list-item-description[data-variant='outlined'] {
  border: 1px solid var(--color-white);
  border-radius: 10px;
  padding: 20px 30px;
}
</style>
