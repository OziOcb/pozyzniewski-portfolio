<template>
  <button :class="['baseButton', rounded && 'baseButton--rounded']">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.baseButton {
  @extend %typography-button;
  display: inline-block;
  padding: $size-button-padding;
  color: $color-button-text;
  cursor: pointer;
  background: $color-button-bg;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0 0.6em 1.25em $color-button-shadow;
  transition: background $duration-animation-base linear,
    box-shadow $duration-animation-base linear,
    transform $duration-animation-base linear;
  &--rounded {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    padding: 0;
    border-radius: 50%;
  }
  &:hover,
  &:focus {
    background: $color-button-bg-hover;
    box-shadow: 0 1.25em 2.5em $color-button-shadow;
    transform: scale(1.03);
  }
  &:focus {
    outline: 0;
    box-shadow: 0 1.25em 2.5em $color-button-shadow, 0 0 2px 4px $color-outline;
  }
  &:disabled {
    cursor: not-allowed;
    background: $color-button-bg-disabled;
    box-shadow: 0 0.3em 0.6em $color-button-shadow;
    &:hover,
    &:focus {
      transform: none;
    }
  }
}
</style>
