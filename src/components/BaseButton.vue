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
  @extend %typography-small;
  padding: $size-button-padding;
  color: $color-button-text;
  background: $color-button-bg;
  border: none;
  cursor: pointer;

  &:disabled {
    background: $color-button-disabled-bg;
    cursor: not-allowed;
  }
}
</style>
