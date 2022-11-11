<template>
  <footer class="footer">
    <div class="footer__inner container">
      <LogoComponent
        class="footer__logo"
        version="fullWhite"
        desc="Footer Logo"
      />

      <div class="footer__platformIcons">
        <PlatformIcons parent-component="the Footer" />
      </div>

      <p class="footer__copyright">
        &copy; {{ thisYear }}
        <NuxtLink to="/">Paul Ozyzniewski</NuxtLink>
        . All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      thisYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  @extend %skewBorderBeforeFlip;
  display: flex;
  justify-content: center;
  padding-top: 85px;
  color: $color-text-light;
  background-color: $color-bg-dark;

  &__logo {
    display: block;
    width: 160px;
    margin: 0 auto 17px;
  }

  &__copyright {
    text-align: center;

    a {
      color: $color-text-light;
      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>
