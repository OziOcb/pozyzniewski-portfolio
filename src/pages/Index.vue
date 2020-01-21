<template>
  <layout>
    <section>
      <div class="container">
        <h3>Home Page</h3>
        <div style="height:50px"></div>

        <TheAboutMeGallery :gallery-details="galleryDetails" />
        <!-- <TheAboutMeGallery /> -->

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
  },
  data() {
    return {
      galleryDetails: {
        primaryImg: "portrait"
        // primaryOverlayColor: "rgba(0, 0, 255, 0.25)",
        // secondaryImg: "theAboutMeGallerySecondary",
        // secondaryOverlayColor: "rgba(155, 0, 0, 0.75)"
      }
    }
  }
}
</script>
