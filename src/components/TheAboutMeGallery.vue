<template>
  <div class="theAboutMeGallery">
    <g-image quality="90" src="~/assets/img/jpg/portrait-fake.jpg" width="500" />
    <g-image quality="90" src="~/assets/img/jpg/theAboutMeGallerySecondary.jpg" width="500" />
    <SvgAboutMeBackgroundGrid />
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
