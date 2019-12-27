<template>
  <footer class="footer">
    <div class="footer__inner container">
      <g-link to="/" class="footer__logo logo">
        <SvgTheLogoFullWhite />
      </g-link>

      <div class="footer__socialIcons">
        <SocialIcons />
      </div>

      <p class="footer__copyright">
        &copy; {{ thisYear }}
        <g-link to="/">Paul Ozyzniewski</g-link>
        . All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
import SvgTheLogoFullWhite from "~/assets/img/svg/theLogo--full--white.svg"
import SocialIcons from "@/components/SocialIcons.vue"

export default {
  components: {
    SvgTheLogoFullWhite,
    SocialIcons
  },
  data() {
    return {
      thisYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @extend %skewBorderBeforeFlip;
  padding-top: 85px;
  display: flex;
  justify-content: center;
  background-color: $color-bg-dark;

  &__logo {
    margin: 0 auto 17px;
    display: block;
    width: 160px;
  }

  &__copyright {
    text-align: center;
  }
}

.logo {
  @extend %svg-color-change-hover;
  padding: 2px;
  line-height: 0;
  border-radius: 5px;
  transition: box-shadow $duration-animation-base linear;
  &:focus {
    @extend %custom-outline;
  }
}
</style>
