<template>
  <footer class="footer">
    <div class="footer__inner container">
      <g-link to="/" class="footer__logo logo">
        <SvgTheLogoFullWhite />
      </g-link>

      <div class="footer__socialIcons socialIcons">
        <a
          class="socialIcons__link"
          href="https://www.linkedin.com/in/paul-ozyzniewski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgLinkedIn />
        </a>
        <a
          class="socialIcons__link"
          href="https://github.com/OziOcb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgGitHub />
        </a>
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
import SvgLinkedIn from "~/assets/img/svg/linkedIn.svg"
import SvgGitHub from "~/assets/img/svg/gitHub.svg"

export default {
  components: {
    SvgTheLogoFullWhite,
    SvgLinkedIn,
    SvgGitHub
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

.socialIcons {
  display: flex;
  justify-content: center;

  &__link {
    @extend %svg-color-change-hover;
    margin: 0.2rem;
    padding: 0.5rem;
    line-height: 0;
    border-radius: 5px;
    transition: box-shadow $duration-animation-base linear;
    &:focus {
      @extend %custom-outline;
    }
  }
}
</style>
