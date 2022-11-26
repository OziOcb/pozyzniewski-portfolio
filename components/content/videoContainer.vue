<template>
  <div class="videoPlayer">
    <iframe
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

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.videoPlayer {
  background-color: #ada; // REMOVE_ME: remove when done!
}
</style>
