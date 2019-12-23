<template>
  <header class="header">
    <div class="header__inner container">
      <g-link to="/" class="header__logo">
        <SvgTheLogoSimple />
      </g-link>

      <svg class="header__hamburger hamburger" viewBox="0 0 80 80">
        <line class="hamburger__line line01" x1="0" y1="3" x2="80" y2="3" />
        <line class="hamburger__line line02a" x1="0" y1="40" x2="80" y2="40" />
        <line class="hamburger__line line02b" x1="0" y1="40" x2="80" y2="40" />
        <line class="hamburger__line line03" x1="0" y1="77" x2="80" y2="77" />
      </svg>

      <div class="header__menu">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <g-link class="nav__link" to="/">Home</g-link>
            </li>
            <li class="nav__item">
              <g-link class="nav__link" to="/faq/">FAQ</g-link>
            </li>
            <li class="nav__item">
              <g-link class="nav__link" to="/blog/">Blog</g-link>
            </li>
          </ul>
        </nav>
        <div class="socialIcons">
          Lorem, ipsum dolor.
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SvgTheLogoSimple from "~/assets/img/svg/theLogo--simple.svg"
import { gsap, Sine, Power1 } from "gsap"

export default {
  components: {
    SvgTheLogoSimple
  },
  mounted() {
    const hamburger = document.querySelector(".hamburger")

    gsap.set(".line01", { translateX: 40 })
    gsap.set(".line03", { translateX: -40 })
    gsap.set(".nav", { xPercent: -50, yPercent: -50 })
    gsap.set(".nav li", { translateX: -200 })

    const hamburgerMotion = gsap.timeline()
    hamburgerMotion
      .addLabel("step1")
      .to(".line01", 0.4, { translateX: "+=40" }, "step1")
      .to(".line03", 0.4, { translateX: "-=40" }, "step1")
      .to(".header__menu", 0.4, { autoAlpha: 1 }, "step1")
      .staggerTo(".nav li", 0.4, { translateX: 0, ease: Sine.easeOut }, 0.2, 0.5)
      .addLabel("step2")
      .to(".nav li", 1, { marginBottom: "40px", ease: Power1.easeOut }, "step2")
      .to(".line02a", 1, { rotation: 45, transformOrigin: "center" }, "step2")
      .to(".line02b", 1, { rotation: -45, transformOrigin: "center" }, "step2")
      .reverse()

    hamburger.addEventListener("click", function() {
      hamburgerMotion.reversed(!hamburgerMotion.reversed())
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: $layer-page-z-index;
  top: 0;
  right: 0;
  left: 0;

  &__inner {
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    z-index: $layer-hamburger-z-index;
    width: 50px;
  }

  &__hamburger {
    z-index: $layer-hamburger-z-index;
    width: 32px;
  }

  &__menu {
    position: absolute;
    z-index: $layer-dropdown-z-index;
    top: 0;
    left: 0;
    visibility: hidden;
    width: 100vw;
    height: 100vh;
    background: $color-menu-gradient;
  }
}

.hamburger {
  cursor: pointer;

  &__line {
    stroke: $color-black;
    stroke-width: 6px;
  }
}
.nav {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;

  &__list {
    margin: 0;
    padding: 0;
  }

  &__item {
    list-style-type: none;
    @extend %typography-xxlarge;
  }

  &__link {
    text-decoration: none;
  }
}
</style>
