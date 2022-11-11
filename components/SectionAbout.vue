<template>
  <section class="aboutMe">
    <div class="aboutMe__inner container">
      <div class="aboutMe__column aboutMe__column--gallery">
        <TheAboutMeGallery
          class="aboutMe__gallery"
          :gallery-details="galleryDetails"
        />
      </div>

      <div class="aboutMe__column">
        <h2 class="aboutMe__title fixedSize">who am I?</h2>
        <ul class="aboutMe__detailsList">
          <li>
            A
            <strong>Senior Frontend Developer</strong>
            at
            <a
              href="https://www.evri.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Evri (old Hermes)
            </a>
            .
          </li>
          <li>
            Huge
            <strong>Vue.js</strong>
            enthusiast and advocate.
          </li>
        </ul>

        <h2 class="aboutMe__title fixedSize">in more details</h2>
        <p>
          In 2017 I chose to follow my passion and become a programmer. After a
          rough start - coding late at night while still working full time -
          I've decided to dedicate myself to programming.

          <br />
          <br />

          Since then, I have strived to perfect my coding skills by educating
          myself towards creating
          <strong>clean, easy to enlargement code.</strong>
          I gathered enough
          <strong>experience in front end development</strong>
          to be a valuable employee and make the web a beautiful place with
          every line of code.
        </p>

        <ul class="aboutMe__detailsList">
          <li>Name: Paul Ozyzniewski</li>
          <li>Town: Barnsley</li>
        </ul>
        <div class="aboutMe__btn">
          <BaseLinkLikeButton class="btn" to="#contactMe">
            CONTACT ME
          </BaseLinkLikeButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheAboutMeGallery from "@/components/TheAboutMeGallery.vue";

export default {
  components: {
    TheAboutMeGallery,
  },
  data() {
    return {
      galleryDetails: {
        primaryImg: "portrait",
        primaryAlt:
          "Portrait of Paul Ozyzniewski the author and the owner of this website",
        secondaryAlt: "Well maintained office desk",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.aboutMe {
  position: relative;
  padding-top: 45px;
  padding-bottom: 45px;
  overflow: hidden;
  background-color: $color-body-bg-light;
  @media (min-width: $breakpoint-xxl) {
    padding-top: 0;
    padding-bottom: 0;
  }
  &:before,
  &:after {
    position: absolute;
    left: 0;
    content: "";
    border-right: 100vw solid transparent;
  }
  &:before {
    top: 0;
    border-top: 45px solid $color-body-bg;
    @media (min-width: $breakpoint-xxl) {
      border-top-width: 90px;
    }
  }
  &:after {
    bottom: 0;
    border-bottom: 45px solid $color-body-bg;
    @media (min-width: $breakpoint-xxl) {
      border-bottom-width: 90px;
    }
  }

  &__inner {
    position: relative;
    z-index: $layer-page-z-index;
    padding: 150px $size-gutter-width 90px;
    background-color: $color-body-bg-light;
    border-radius: 15px;
    @media (min-width: $breakpoint-xl) {
      display: flex;
    }
  }

  &__column {
    flex: 1;
    &--gallery {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__gallery {
    margin-bottom: $size-gutter-width;
    @media (min-width: $breakpoint-xl) {
      margin-right: $size-gutter-width;
    }
  }

  &__title {
    text-align: center;
    @media (min-width: $breakpoint-xl) {
      text-align: left;
    }
  }

  &__description {
    @media (min-width: $breakpoint-xl) {
      margin-bottom: 8.125em;
    }
  }

  &__detailsList {
    padding-left: 0;
    margin-bottom: 3.125em;
    list-style: none;
  }

  &__btn {
    display: flex;
    justify-content: center;
    @media (min-width: $breakpoint-xl) {
      justify-content: flex-start;
    }
  }
}

.btn {
  @extend %typography-button;
  display: inline-block;
  padding: $size-button-padding;
  color: $color-button-text;
  background: $color-button-bg;
  border: none;
  &:hover,
  &:focus {
    background: $color-button-bg-hover;
  }
}
</style>
