<template>
  <div class="layout">
    <TheHeader />

    <slot />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"

export default {
  components: {
    TheHeader
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
a,
a:visited {
  color: $color-link-text;
}
a:hover {
  color: $color-link-text-hover;
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
  max-width: 760px;
}
</style>
