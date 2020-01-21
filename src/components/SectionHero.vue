<template>
  <section class="hero">
    <div class="hero__contentWrapper">
      <p class="hero__lead">Hello</p>
      <p class="hero__heading">It's John</p>
      <h1 class="hero__extraLead">The Front End Developer you need!</h1>
    </div>

    <SocialIcons class="hero__socialIcons" />

    <div class="hero__scrollBtn">
      <font-awesome :icon="['fas', 'arrow-down']" />
    </div>
  </section>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue"

export default {
  components: {
    SocialIcons
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;

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

  &__socialIcons {
    display: block;
  }
}
</style>
