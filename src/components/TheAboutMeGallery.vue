<template>
  <div class="theAboutMeGallery">
    <div class="theAboutMeGallery__imagePrimary">
      <g-image quality="90" src="~/assets/img/jpg/portrait-default.jpg" />
    </div>

    <div class="theAboutMeGallery__imageSecondary">
      <g-image quality="90" src="~/assets/img/jpg/theAboutMeGallerySecondary.jpg" />
    </div>

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

<style lang="scss" scoped>
.theAboutMeGallery {
  display: flex;
  justify-content: center;

  &__imagePrimary {
    position: relative;
    overflow: hidden;
    border: 5px solid $color-white;
    box-shadow: 0px 0.6em 1.25em $color-button-shadow;
    transition: background $duration-animation-base linear,
      box-shadow $duration-animation-base linear, transform $duration-animation-base linear;
    &:focus,
    &:hover {
      box-shadow: 0px 1.25em 2.5em $color-button-shadow;
      transform: scale(1.03) rotate(1deg);
    }

    &:before {
      position: absolute;
      top: 0;
      left: -400px;
      width: 400px;
      height: 100%;
      opacity: 0.15;
      content: "";
      background: linear-gradient(
        90deg,
        transparent 0%,
        $color-white 40%,
        $color-white 90%,
        transparent 95%
      );
      transform: skewX(25deg);
      animation: imageGlare $duration-animation-about-me-gallery-base linear infinite;
    }

    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      background-color: rgba($color-primary, 0.25);
    }

    img {
      display: block;
      transition: transform $duration-animation-base * 2 ease-in-out;
      :hover > & {
        transform: scale(1.2) rotate(-5deg);
      }
    }
  }
  &__imageSecondary,
  &__bgGrid {
    display: none;
  }
}

@keyframes imageGlare {
  50%,
  100% {
    transform: skewX(0deg) translateX(800px);
  }
}
</style>
