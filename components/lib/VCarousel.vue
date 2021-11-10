<template>
  <div class="slider">
    <transition-group :name="'slide-' + transitionName" tag="div">
      <div :key="currentSlide" ref="carousel" class="slide">
        <slot />
      </div>
    </transition-group>
    <v-stack class="icons" justify="center">
      <v-image path="icons/arrow-left.svg" @click.stop="changeSlide(-1)" />
      <v-image path="icons/arrow-right.svg" @click.stop="changeSlide(1)" />
    </v-stack>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  data() {
    return {
      currentSlide: 0,
      transitionName: '',
    }
  },
  computed: {
    totalSlides() {
      return this.$refs.carousel.children.length
    },
  },
  mounted() {
    this.setupSlides()
  },
  methods: {
    enterPreviousSlide() {
      this.transitionName = 'prev'
      if (this.currentSlide - 1 >= 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.totalSlides - 1
      }
    },
    enterNextSlide() {
      this.transitionName = 'next'
      if (this.currentSlide + 1 < this.totalSlides) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
    changeSlide(position) {
      if (position === 1) {
        this.enterNextSlide()
      } else {
        this.enterPreviousSlide()
      }
      // Using nextTick to update classes after transition event is fired
      // Updating carousel classes before transition event does nothing
      this.$nextTick(() => {
        this.setActiveSlide()
      })
    },
    setupSlides() {
      this.$refs.carousel.children.forEach((child, index) => {
        child.classList.add('carousel-item')
        if (index !== 0) {
          child.classList.add('inactive-item')
        }
      })
    },
    setActiveSlide() {
      this.$refs.carousel.children.forEach((child, index) => {
        child.classList.add('carousel-item') // Added this because it was getting removed on update. Not sure why
        if (index === this.currentSlide) {
          child.classList.remove('inactive-item')
        } else {
          child.classList.add('inactive-item')
        }
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider * {
  width: max-content;
  height: max-content;
}

.slide {
  width: 100%;
  top: 0;
  position: absolute;
}

.icons {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 1rem;
}

.icons > * {
  object-fit: cover;
  cursor: pointer;
}

.icons > * + * {
  margin-left: 2rem;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}
</style>

<style lang="postcss">
/* Scoped styles don't work for dynamic classes added to DOM */
.carousel-item {
  position: absolute;
  top: 0;
  color: white;
}

.carousel-item.inactive-item {
  display: none;
}
</style>
