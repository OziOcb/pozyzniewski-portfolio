<template>
  <layout>
    <section>
      <div class="container">
        <h3>Home Page</h3>
        <div style="height:50px"></div>

        <TheAboutMeGallery />

        <div style="height:800px"></div>
      </div>
    </section>
  </layout>
</template>

<script>
import TheAboutMeGallery from "@/components/TheAboutMeGallery.vue"
export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    TheAboutMeGallery
  }
}
</script>
