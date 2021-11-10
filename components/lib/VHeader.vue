<template>
  <header>
    <v-container>
      <v-stack justify="space-between" align="center">
        <NuxtLink to="/">
          <v-image :path="logo" alt="logo" class="cursor-pointer logo" />
        </NuxtLink>
        <nav class="header-menu" :class="{ show }">
          <template v-for="item in menuItems">
            <a
              v-if="item.external"
              :key="item.name"
              :href="item.link"
              target="_blank"
              class="header-menu-item"
              @click="closeMenu"
            >
              <v-text :weight="600" font="sans" color="primary">{{
                item.name
              }}</v-text>
            </a>
            <NuxtLink
              v-else
              :key="item.name"
              :to="item.link"
              class="header-menu-item"
              :class="{
                'active-link':
                  (!item.external && item.link === `/${currentLocation}/`) ||
                  (item.link === '/' && currentLocation === 'index'),
              }"
              @click.native="closeMenu"
            >
              <v-text :weight="600" font="sans" color="primary">{{
                item.name
              }}</v-text>
            </NuxtLink>
          </template>
          <a
            v-if="cta && cta.label"
            class="laptop-remove header-menu-item"
            @click.stop="onCTAClick"
          >
            <v-text :weight="600" font="sans" color="primary">{{
              cta.label
            }}</v-text>
          </a>
        </nav>
        <v-button
          v-if="cta"
          :label="cta.label"
          :action="cta.action"
          label-transform="uppercase"
          class="mobile-remove tablet-remove"
          :show="show"
        />
        <v-image
          :path="`icons/${icon}.svg`"
          class="cursor-pointer laptop-remove menu-icon"
          :class="{ show }"
          @click="showClicked"
        />
      </v-stack>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  props: {
    logo: {
      type: String,
      default: null,
    },
    menuItems: {
      type: Array,
      default() {
        return []
      },
    },
    cta: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      icon: 'menu',
      show: false,
    }
  },
  computed: {
    currentLocation() {
      return this.$nuxt.$route.name
    },
  },
  methods: {
    showClicked(ev) {
      this.show = !this.show
      setTimeout(() => {
        this.icon = this.show ? 'close' : 'menu'
      }, 200)
    },
    closeMenu() {
      this.show = false
      setTimeout(() => {
        this.icon = 'menu'
      }, 200)
    },
    onCTAClick() {
      this.closeMenu()
      if (this.cta?.action?.call) {
        this.cta.action.call()
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
@import url('./media-query-helper.css');

header {
  padding: 1.5rem 0;
  z-index: 10000;
}

.header-menu-item {
  text-decoration: none;
  padding: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
}

.header-menu-item:hover {
  opacity: 0.85;
}

.header-menu-item:active {
  transform: scale(0.98);
}

.active-link {
  text-decoration: underline;
  text-decoration-color: var(--color-white);
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.25rem;
}

@media (--viewport-large) {
  .header-menu > * + * {
    margin-left: 4vw;
  }
}

@media (--viewport-medium) {
  .header-menu > * + * {
    margin-left: 2vw;
  }
}

@media (--viewport-medium) {
  .header-menu {
    position: fixed;
    max-height: 0;
    top: 4.8rem;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #1f2024;
    text-align: center;
    transition: max-height 0.4s, padding 0.6s;
    padding: 0;
    box-shadow: 0 10px 27px rgba(31, 32, 36, 0.5);
    z-index: 10000;
    overflow: hidden;
  }
  .header-menu > * {
    display: block;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  .header-menu.show {
    max-height: 100%;
    padding: 1rem;
  }
  .menu-icon {
    transition: transform 0.4s;
    width: 1.5rem;
  }
  .menu-icon.show {
    transform: rotate(-180deg);
  }
}
</style>
