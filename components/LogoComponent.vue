<template>
  <NuxtLink to="/" :class="['logo', disabled && 'logo--disabled']">
    <span class="sr-only">{{ desc }}</span>
    <Icon :name="showCorrectLogo" size="100%" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      default: "SvgTheLogo",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  computed: {
    showCorrectLogo() {
      let theLogo = this.version;
      if (this.version === "simple") theLogo = "SvgTheLogoSimple";
      if (this.version === "fullWhite") theLogo = "SvgTheLogoFullWhite";
      return theLogo;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  @extend %svg-color-change-hover;
  padding: 2px;
  line-height: 0;
  border-radius: 5px;
  &--disabled {
    pointer-events: none;
  }
}
</style>
