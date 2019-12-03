<template>
  <g-link class="baseButton" :to="to" :target="handleTarget">
    <slot />
  </g-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/"
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    handleTarget() {
      return this.blank ? "_blank" : "_self"
    }
  }
}
</script>

<style lang="scss" scoped>
.baseButton {
  @extend %typography-button;
  padding: $size-button-padding;
  display: inline-block;
  text-decoration: none;
  color: $color-button-text;
  background: $color-button-bg;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0px 0.6em 1.25em $color-button-shadow;
  transition: background $duration-animation-base linear, box-shadow $duration-animation-base linear,
    transform $duration-animation-base linear;

  &:hover,
  &:focus {
    background: $color-button-hover-bg;
    box-shadow: 0px 1.25em 2.5em $color-button-shadow;
    transform: scale(1.03);
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 1.25em 2.5em $color-button-shadow, 0 0 2px 4px $color-outline;
  }

  &--outline {
    @extend %typography-button-sm;
    padding: $size-button-sm-padding;
    font-weight: bold;
    color: $color-button-sm-text;
    background: $color-button-sm-bg;
    border: 2px solid $color-button-sm-border;

    &:hover,
    &:focus {
      background: $color-button-sm-bg-hover;
    }
  }
}
</style>
