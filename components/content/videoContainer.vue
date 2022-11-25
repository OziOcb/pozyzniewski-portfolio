<template>
  <div style="background: red">
    title {{ title }}

    <!-- TODO: ENDED HERE! -->
    <!-- TODO: ENDED HERE! -->
    <!-- TODO: ENDED HERE! -->
    <!-- TODO: ENDED HERE! -->
    <!-- TODO: ENDED HERE! -->
    <!-- TODO: ENDED HERE! -->
    <!-- TODO: ENDED HERE! -->
    <iframe
      width="560"
      height="315"
      :src="link"
      :title="title"
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
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
