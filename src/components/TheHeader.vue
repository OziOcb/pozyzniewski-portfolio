<template>
  <header class="header">
    <div class="header__inner container">
      <g-link to="/" class="header__logo logo">
        <SvgTheLogoSimple />
      </g-link>

      <div class="header__hamburger">
        <button
          ref="hamburger"
          class="hamburger"
          aria-controls="dropdowMenuContent"
          :aria-expanded="ariaExpanded.toString()"
          aria-label="Toggle navigation"
          @click="handleAriaExpanded"
        >
          <span class="hamburger__line line01"></span>
          <span class="hamburger__line line02"></span>
          <span class="hamburger__line line03"></span>
          <span class="hamburger__line line04"></span>
        </button>
      </div>

      <div id="dropdowMenuContent" class="header__menu">
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
        <div class="socialIcons socialIcons--mobile">
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
      </div>
    </div>
  </header>
</template>

<script>
import SvgTheLogoSimple from "~/assets/img/svg/theLogo--simple.svg"
import SvgLinkedIn from "~/assets/img/svg/linkedIn.svg"
import SvgGitHub from "~/assets/img/svg/gitHub.svg"

import { gsap, Sine, Power1 } from "gsap"

export default {
  components: {
    SvgTheLogoSimple,
    SvgLinkedIn,
    SvgGitHub
  },
  data() {
    return {
      ariaExpanded: false
    }
  },
  mounted() {
    const { hamburger } = this.$refs
    const hamburgerMotion = gsap.timeline()

    gsap.set(".nav", { xPercent: -50, yPercent: -50 })
    gsap.set(".nav li", { translateX: -200 })
    gsap.set(".socialIcons--mobile", { translateX: 110 })

    hamburgerMotion
      .addLabel("step1")
      .to(".hamburger", 0.4, { backgroundColor: "transparent" }, "step1")
      .to(".line01", 0.4, { translateX: "+=40" }, "step1")
      .to(".line04", 0.4, { translateX: "-=40" }, "step1")
      .to(".header__menu", 0.4, { autoAlpha: 1 }, "step1")
      .addLabel("step2")
      .staggerTo(".nav li", 0.4, { translateX: 0, ease: Sine.easeOut }, 0.2, 0.5)
      .to(".socialIcons--mobile", 0.4, { translateX: 0, ease: Sine.easeOut }, "step2")
      .to(".line02", 0.4, { translateY: "+=5" }, "step2")
      .to(".line03", 0.4, { translateY: "-=4" }, "step2")
      .addLabel("step3")
      .to(".nav li", 1, { marginBottom: "40px", ease: Power1.easeOut }, "step3")
      .to(".line02", 1, { rotation: 45, transformOrigin: "center" }, "step3")
      .to(".line03", 1, { rotation: -45, transformOrigin: "center" }, "step3")
      .reverse()

    hamburger.addEventListener("click", function() {
      hamburgerMotion.reversed(!hamburgerMotion.reversed())
    })
  },
  methods: {
    handleAriaExpanded() {
      this.ariaExpanded = !this.ariaExpanded
    }
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

.logo,
.socialIcons__link {
  svg {
    path {
      transition: fill $duration-animation-base linear;
    }
    &:hover {
      path {
        fill: $color-primary;
      }
    }
  }
}

.logo {
  padding: 2px;
  line-height: 0;
  border-radius: 5px;
  transition: box-shadow $duration-animation-base linear;
  &:focus {
    @extend %custom-outline;
  }
}

.hamburger {
  padding: 2px;
  display: flex;
  overflow: hidden;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: space-around;
  background-color: $color-body-bg;
  border: none;
  border-radius: 5px;
  transition: box-shadow $duration-animation-base linear;
  cursor: pointer;

  &__line {
    display: block;
    width: 36px;
    height: 2px;
    background-color: $color-black;
    transition: background-color $duration-animation-base linear;

    &.line01,
    &.line04 {
      width: 18px;
    }
    &.line01 {
      align-self: flex-end;
    }
  }
  &:hover {
    .hamburger__line {
      background-color: $color-primary;
    }
  }
  &:focus {
    @extend %custom-outline;
  }
}

.nav {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;

  &__list {
    margin: 0;
    padding: 1em;
  }

  &__item {
    list-style-type: none;
    @extend %typography-xxlarge;
  }

  &__link {
    padding: 0.5em;
    text-decoration: none;
    border-radius: 5px;
    transition: color $duration-animation-base linear, box-shadow $duration-animation-base linear;
    &:focus {
      @extend %custom-outline;
    }
  }
}

.socialIcons {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;

  &__link {
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
