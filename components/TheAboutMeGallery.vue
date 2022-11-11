<template>
  <div class="theAboutMeGallery" :style="cssProps">
    <Icon
      name="SvgAboutMeBackgroundGrid"
      class="theAboutMeGallery__backgroundFigure"
      size="100%"
    />

    <div class="theAboutMeGallery__secondaryFigure">
      <!-- FIXME: Switch back to the dynamic :src when this bug is fixed - https://github.com/nuxt/image/issues/638   -->
      <!-- <NuxtImg
        class="theAboutMeGallery__secondaryImg"
        :src="secondaryImgSrc(galleryDetails.secondaryImg)"
        :alt="secondaryAlt()"
      /> -->
      <NuxtImg
        class="theAboutMeGallery__secondaryImg"
        src="https://res.cloudinary.com/oziocb/image/upload/v1667469666/theAboutMeGallerySecondary.jpg"
        :alt="secondaryAlt()"
      />
    </div>

    <div class="theAboutMeGallery__primaryFigure">
      <!-- FIXME: Switch back to the dynamic :src when this bug is fixed - https://github.com/nuxt/image/issues/638   -->
      <!-- <NuxtImg
        class="theAboutMeGallery__primaryImg"
        :src="primaryImgSrc(galleryDetails.primaryImg)"
        :alt="primaryAlt()"
      /> -->
      <NuxtImg
        class="theAboutMeGallery__primaryImg"
        src="https://res.cloudinary.com/oziocb/image/upload/v1667469381/portrait.jpg"
        :alt="primaryAlt()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    galleryDetails: {
      type: Object,
      default: () => ({
        primaryImg: "portrait-default",
        primaryAlt: "",
        primaryOverlayColor: "",
        secondaryImg: "theAboutMeGallerySecondary",
        secondaryAlt: "",
        secondaryOverlayColor: "",
      }),
    },
  },
  computed: {
    cssProps() {
      const { primaryOverlayColor, secondaryOverlayColor } =
        this.galleryDetails;
      return {
        "--color-overlay-primary": primaryOverlayColor,
        "--color-overlay-secondary": secondaryOverlayColor,
      };
    },
  },
  methods: {
    primaryImgSrc(imgName = "portrait-default") {
      return `/assets/img/jpg/${imgName}.jpg`;
    },
    secondaryImgSrc(imgName = "theAboutMeGallerySecondary") {
      return `/assets/img/jpg/${imgName}.jpg`;
    },
    primaryAlt() {
      return this.galleryDetails.primaryAlt
        ? this.galleryDetails.primaryAlt
        : "";
    },
    secondaryAlt() {
      return this.galleryDetails.secondaryAlt
        ? this.galleryDetails.secondaryAlt
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.theAboutMeGallery {
  display: flex;
  justify-content: center;

  &__primaryFigure,
  &__secondaryFigure {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
    }
    &:before {
      left: -400px;
      width: 400px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        $color-white 40%,
        $color-white 90%,
        transparent 95%
      );
      opacity: 0.15;
      transform: skewX(25deg);
      animation: imageGlare $duration-animation-about-me-gallery-base linear
        infinite;
    }
  }

  &__primaryFigure {
    position: relative;
    width: 250px;
    height: 290px;
    overflow: hidden;
    border: 5px solid $color-white;
    box-shadow: 0 0.6em 1.25em $color-button-shadow;
    transition: background $duration-animation-base linear,
      box-shadow $duration-animation-base linear,
      transform $duration-animation-base linear;
    &:hover {
      box-shadow: 0 1.25em 2.5em $color-button-shadow;
      transform: scale(1.03) rotate(1deg);
    }
    &:before {
      animation-delay: 1.25s;
    }
    &:after {
      background-color: var(
        --color-overlay-primary,
        rgba($color-primary, 0.25)
      );
    }
  }

  &__secondaryFigure {
    position: relative;
    display: none;
    width: 380px;
    height: 380px;
    overflow: hidden;
    box-shadow: 0 0.3em 0.6em $color-button-shadow;
    transition: box-shadow $duration-animation-base linear,
      transform $duration-animation-base linear;
    &:hover {
      box-shadow: 0 0.6em 1.2em $color-button-shadow;
      transform: scale(1.03) rotate(1deg);
    }
    &:after {
      background-color: var(
        --color-overlay-secondary,
        rgba($color-secondary, 0.75)
      );
      transition: opacity $duration-animation-base linear;
    }
    &:hover:after {
      opacity: 0.75;
    }
  }

  &__backgroundFigure {
    display: none;
    transition: transform $duration-animation-base linear;
    &:hover {
      transform: scale(1.05) rotate(-1deg);
    }
  }

  &__primaryImg,
  &__secondaryImg {
    transition: transform $duration-animation-base * 2 ease-in-out;
    :hover > & {
      transform: scale(1.2) rotate(-5deg);
    }
  }

  // GRID
  @media (min-width: $breakpoint-md) {
    display: grid;
    grid-template-rows: 20px 30px;
    grid-template-columns: 1fr 1fr 30px;
    max-width: 450px;
    margin: 0 auto;
    &__primaryFigure {
      grid-row: 2;
      grid-column: 2;
      justify-self: end;
    }
    &__secondaryFigure {
      display: block;
      grid-row: 1 / span 3;
      grid-column: 1 / span 2;
    }
    &__backgroundFigure {
      display: block;
      grid-row: 3;
      grid-column: 3;
      justify-self: end;
    }
  }

  @media (min-width: $breakpoint-xl) {
    grid-template-rows: 110px 160px;
    grid-template-columns: 1fr 1fr;
    max-width: 515px;
    &__primaryFigure {
      grid-row: 1;
      grid-column: 2;
      justify-self: start;
    }
    &__secondaryFigure {
      grid-row: 2;
      grid-column: 1 / span 2;
    }
    &__backgroundFigure {
      grid-row: 3;
      grid-column: 2;
    }
  }
}

// ANIMATIONS
@keyframes imageGlare {
  50%,
  100% {
    transform: skewX(0deg) translateX(800px);
  }
}
</style>
