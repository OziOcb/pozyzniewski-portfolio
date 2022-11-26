<template>
  <div class="youtubePlayer">
    <iframe
      width="100%"
      height="100%"
      :src="`https://www.youtube.com/embed/${videoId}`"
      :title="`Youtube video player - ${title}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  videoId: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.youtubePlayer {
  height: 52vw;
  max-height: 655px;
}
</style>
