<template>
  <div class="layout">
    <TheHeader />

    <slot />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
// ===
// Base styles
// ===
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  @extend %typography-small;
  background-color: $color-body-bg;
}

// ===
// Base element styles
// ===
a {
  color: $color-link-text;
  transition: box-shadow $duration-animation-base linear, color $duration-animation-base linear;
  &:focus {
    @extend %custom-outline;
  }
  &:visited {
    color: $color-link-text;
  }
  &:hover {
    color: $color-link-text-hover;
  }
}

h1 {
  @extend %typography-xxlarge;
}
h2 {
  @extend %typography-xlarge;
}
h3 {
  @extend %typography-large;
}
h4 {
  @extend %typography-medium;
}
h5,
h6 {
  @extend %typography-small;
}

// ===
// Layout
// ===
.container {
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1244px;
}
</style>
