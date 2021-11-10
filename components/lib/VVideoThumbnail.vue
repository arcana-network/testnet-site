<template>
  <div class="video-thumbnail-container">
    <v-image :path="src" :dimension="dimension" class="video-thumbnail" />
    <div
      class="video-controls absolute-center cursor-pointer"
      @click.stop="onPlay"
    >
      <v-image
        path="icons/play.svg"
        :dimension="[64, 64]"
        class="video-play-button absolute-center"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VVideoThumbnail',
  props: {
    src: {
      type: String,
      default: null,
    },
    dimension: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    onPlay(ev) {
      this.$emit('play', ev)
    },
  },
}
</script>

<style lang="postcss" scoped>
.video-thumbnail-container {
  position: relative;
  overflow: hidden;
}
.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-controls {
  z-index: 1;
  width: 30%;
  height: 30%;
  background-color: #f0f0f3;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(174, 174, 192, 0.2),
    inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #fff;
}
.video-play-button {
  width: 30%;
  height: 30%;
  margin-left: 5%;
}
</style>
