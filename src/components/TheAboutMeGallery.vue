<template>
  <div class="theAboutMeGallery">
    <g-image
      class="theAboutMeGallery__imagePrimary"
      quality="90"
      src="~/assets/img/jpg/portrait-fake.jpg"
    />
    <g-image
      class="theAboutMeGallery__imageSecondary"
      quality="90"
      src="~/assets/img/jpg/theAboutMeGallerySecondary.jpg"
    />
    <SvgAboutMeBackgroundGrid class="theAboutMeGallery__bgGrid" />
  </div>
</template>

<script>
import SvgAboutMeBackgroundGrid from "~/assets/img/svg/aboutMeBackgroundGrid.svg"

export default {
  components: {
    SvgAboutMeBackgroundGrid
  }
}
</script>
