<template>
  <div class="videoPlayer">
    <div
      v-if="!isVideoActive"
      class="videoPlayer__cover cover"
      @click="activateVideoHandler()"
    >
      <NuxtImg
        class="cover__background"
        :src="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`"
      />

      <Icon class="cover__youtubeLogo" name="logos:youtube-icon" size="80" />
    </div>

    <iframe
      v-else
      class="videoPlayer__frame"
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${videoId}`"
      :title="`Youtube video player - ${title}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
});

const isVideoActive = ref(false);

function activateVideoHandler() {
  isVideoActive.value = true;
}
</script>

<style lang="scss" scoped>
.videoPlayer {
  background-color: #ada; // REMOVE_ME: remove when done!
}

.cover {
  position: relative;
  cursor: pointer;

  &__background {
    display: block;
    width: 100%;
  }

  &__youtubeLogo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
