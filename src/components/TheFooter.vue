<template>
  <footer class="footer">
    <div class="footer__inner container">
      <LogoComponent class="footer__logo" version="fullWhite" />

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
import LogoComponent from "@/components/LogoComponent.vue"
import SocialIcons from "@/components/SocialIcons.vue"

export default {
  components: {
    LogoComponent,
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
</style>
