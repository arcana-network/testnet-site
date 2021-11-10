<template>
  <div class="accordion-container">
    <dl v-for="(item, index) in mutableItems" :key="'accordion-item-' + index">
      <div class="accordion-item">
        <v-stack justify="space-between" align="center" class="accordion-title">
          <dt>
            <v-text font="sans" size="1.375rem" :weight="600">
              {{ item.title }}
            </v-text>
          </dt>
          <img
            :src="iconImageSrc(item)"
            class="cursor-pointer"
            @click.stop="handleIconClick(index)"
          />
        </v-stack>
        <dd :class="item.selected ? 'expanded' : ''">
          <v-text
            font="serif"
            line-height="1.375rem"
            color="secondary"
            :weight="400"
          >
            {{ item.description }}
          </v-text>
        </dd>
      </div>
      <hr />
    </dl>
  </div>
</template>

<script>
export default {
  name: 'VAccordion',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    multiple: {
      type: Boolean,
    },
  },
  data() {
    return {
      mutableItems: [...this.items],
    }
  },
  methods: {
    iconImageSrc(item) {
      return item.selected
        ? require(`~/assets/icons/minus-circle.svg`)
        : require(`~/assets/icons/plus-circle.svg`)
    },
    handleIconClick(i) {
      if (!this.multiple) {
        // Check if any item is expanded and collapse it
        const expandedItemIndex = this.mutableItems.findIndex(
          (item) => item.selected
        )
        // Collapse if item is not same as selected
        if (expandedItemIndex > -1 && expandedItemIndex !== i) {
          this.$set(this.mutableItems, expandedItemIndex, {
            ...this.mutableItems[i],
            selected: false,
          })
        }
      }
      const selectedItem = this.mutableItems[i]
      selectedItem.selected = !selectedItem.selected
      this.$set(this.mutableItems, i, selectedItem)
    },
  },
}
</script>

<style lang="postcss" scoped>
.accordion-container {
  margin: 1rem;
}
.accordion-item {
  padding: 1.5rem 0;
}

dl,
dd,
dt {
  margin: 0;
  padding: 0;
}
hr {
  border-color: var(--color-white);
  margin: 0;
}

/* Need to fix transition for expansion and collapse */
dd {
  max-height: 0;
  will-change: all;
  transition: all;
  overflow: hidden;
  margin-right: 3rem;
}
dd.expanded {
  margin-top: 0.5rem;
  max-height: 100vh;
}
</style>
