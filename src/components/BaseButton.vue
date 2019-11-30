<template>
  <button class="baseButton" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.baseButton {
  @extend %typography-button;
  padding: $size-button-padding;
  color: $color-button-text;
  background: $color-button-bg;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0px 0.6em 1.25em $color-button-shadow;
  transition: background $duration-animation-base linear, box-shadow $duration-animation-base linear,
    transform $duration-animation-base linear;
  cursor: pointer;

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

  &:disabled {
    background: $color-button-disabled-bg;
    box-shadow: 0px 0.3em 0.6em $color-button-shadow;
    cursor: not-allowed;

    &:hover {
      box-shadow: 0px 0.3em 0.6em $color-button-shadow;
      transform: none;
    }
  }
}
</style>
