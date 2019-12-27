// props: alignRight
<template>
  <blockquote
    class="blockquote "
    :class="{ right: alignRight }"
    cite="https://www.huxley.net/bnw/four.html"
  >
    <p class="blockquote__paragraph">
      "Tell me and I forget,
      <br />
      teach me and I may premember,
      <br />
      involve me and I learn"
    </p>
    <cite class="blockquote__cite">Benjamin Franklin</cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    alignRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.blockquote {
  text-align: center;
  @media (min-width: $breakpoint-md) {
    text-align: left;

    &.right {
      text-align: right;
    }
  }

  &__paragraph {
    @extend %typography-blockquote;
    margin-bottom: 0;
    font-style: italic;
  }
  &__cite {
    @extend %typography-blockquote-cite;
  }
}
</style>
