<template>
  <section class="hero">
    <div
      ref="hero__contentWrapper"
      class="hero__contentWrapper"
      :style="cssProps"
      @mousemove="onMouseMove"
      @mouseout="onMouseOut"
    >
      <div class="hero__backgroundText">
        <p>{{ content.backgroundText }}</p>
      </div>
      <div class="hero__backgroundText hero__backgroundText--clone">
        <p>{{ content.backgroundText }}</p>
      </div>
      <div>
        <p class="hero__lead">{{ content.lead }}</p>
        <p class="hero__heading">{{ content.heading }}</p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 class="hero__extraLead" v-html="content.extraLead" />
      </div>
    </div>

    <PlatformIcons class="hero__platformIcons" parent-component="the Hero" />

    <div class="hero__scrollBtn">
      <!-- <font-awesome :icon="['fas', 'arrow-down']" /> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cursorPosition: {
        x: 0,
        y: 50,
      },
    };
  },
  computed: {
    cssProps() {
      const { x, y } = this.cursorPosition;

      return {
        "--maskX": x,
        "--maskY": y,
      };
    },
  },
  methods: {
    onMouseMove(e) {
      const width = this.$refs.hero__contentWrapper.clientWidth;
      const height = this.$refs.hero__contentWrapper.clientHeight;
      const oX = (e.layerX / width) * 100;
      const oY = (e.layerY / height) * 100;

      this.cursorPosition = {
        x: oX,
        y: oY,
      };
    },
    onMouseOut() {
      this.cursorPosition = {
        x: 0,
        y: 50,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-areas:
    ". . ."
    "contentWrapper contentWrapper contentWrapper"
    "platformIcons scrollBtn .";
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 1fr 60px 1fr;
  height: 100vh;
  overflow: hidden;
  @media (min-width: $breakpoint-lg) {
    grid-template-areas:
      ". . . ."
      ". contentWrapper contentWrapper contentWrapper"
      "platformIcons . scrollBtn .";
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 4fr 60px 5fr;
  }
  @media (min-width: $breakpoint-xl) {
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: $layer-negative-z-index;
      width: 100%;
      height: 100%;
      content: "";
      background: url("/assets/img/png/mbp.png") 60vw center no-repeat;
      opacity: 0.15;
      @media (min-width: $breakpoint-xxl) {
        background-position: 53vw;
      }
      @media (min-width: 1441px) {
        background-position: 47vw;
        transform: scale(1.2);
      }
      @media (min-width: 1900px) {
        background-position: 42vw;
        transform: scale(1.2);
      }
      @media (min-width: 2200px) {
        background-position: 42vw 11%;
        transform: scale(1.6);
      }
    }
  }

  &__contentWrapper {
    position: relative;
    display: flex;
    grid-area: contentWrapper;
    align-items: center;
    width: 650px;
    height: 100%;
    margin-left: 1rem;

    --maskX: 0;
    --maskY: 50;
  }

  &__backgroundText {
    display: none;
    @media (min-width: $breakpoint-lg) {
      position: absolute;
      top: 50%;
      left: 10px;
      z-index: $layer-negative-z-index;
      display: block;
      font-size: 360px;
      line-height: 0;
      color: $color-text-lightest;
      transition: color $duration-animation-base ease;
      transform: translateY(-50%);

      &--clone {
        clip-path: polygon(
          0 0,
          calc(var(--maskX) * 1% + (var(--maskY) - 50) * 1%) 0,
          calc(var(--maskX) * 1% + (var(--maskY) - 50) * -1%) 100%,
          0 100%
        );
        color: rgba($color-secondary, 0.3);
        transition: clip-path 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }
  }

  &__lead {
    @extend %typography-hero-lead;
    margin: 0 0 -0.2em -0.06em;
  }
  &__heading {
    @extend %typography-hero;
    margin: 0 0 0 -0.07em;
  }
  &__extraLead {
    @extend %typography-small;
    margin-top: 0;
  }

  &__platformIcons {
    display: flex;
    grid-area: platformIcons;
    align-self: end;
    justify-content: flex-start;
    margin-bottom: 13vh;
    @media (min-width: $breakpoint-lg) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__scrollBtn {
    display: none; // TODO: #043 - Create a scroll down button for the Hero Section
    grid-area: scrollBtn;
    align-self: end;
    justify-self: center;
    margin-bottom: 13vh;
  }
}
</style>
