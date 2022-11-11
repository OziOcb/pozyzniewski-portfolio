<template>
  <header class="header">
    <div class="header__inner container">
      <LogoComponent
        class="header__logo"
        version="simple"
        desc="Main Logo"
        :disabled="ariaExpanded"
      />
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
            <li v-for="(page, index) in pages" :key="index" class="nav__item">
              <NuxtLink class="nav__link" :to="page.url">
                {{ page.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header__platformIcons header__platformIcons--mobile">
          <PlatformIcons parent-component="the Header" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { gsap, Sine, Power1 } from "gsap";

export default {
  emits: ["forceRerender"],
  data() {
    return {
      ariaExpanded: false,
      pages: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "FAQ",
          url: "/faq",
        },
        {
          name: "Blog",
          url: "/blog",
        },
      ],
    };
  },
  mounted() {
    const { hamburger } = this.$refs;
    const hamburgerMotion = gsap.timeline();

    gsap.set(".nav", { xPercent: -50, yPercent: -50 });
    gsap.set(".nav li", { translateX: -300 });
    gsap.set(".header__platformIcons--mobile", { translateX: 110 });

    // prettier-ignore
    hamburgerMotion
      .addLabel('step1')
      .to('.hamburger', 0.4, { backgroundColor: 'transparent' }, 'step1')
      .to('.line01', 0.4, { translateX: '+=40' }, 'step1')
      .to('.line04', 0.4, { translateX: '-=40' }, 'step1')
      .to('.header__menu', 0.4, { autoAlpha: 1 }, 'step1')
      .addLabel('step2')
      .staggerTo('.nav li', 0.45, { translateX: 0, ease: Sine.easeOut }, 0.3, 0.5)
      .to('.header__platformIcons--mobile', 0.4, {translateX: 0, ease: Sine.easeOut,})
      .to('.line02', 0.4, { translateY: '+=5' }, 'step2')
      .to('.line03', 0.4, { translateY: '-=4' }, 'step2')
      .addLabel('step3')
      .to('.nav li', 1, { marginBottom: '40px', ease: Power1.easeOut }, 'step3')
      .to('.line02', 1, { rotation: 45, transformOrigin: 'center' }, 'step3')
      .to('.line03', 1, { rotation: -45, transformOrigin: 'center' }, 'step3')
      .reverse()

    hamburger.addEventListener("click", function () {
      hamburgerMotion.reversed(!hamburgerMotion.reversed());
    });

    // Hide menu after clicking on .nav__link
    const navList = document.querySelector(".nav__list");

    const clickNavLinkHandler = gsap.timeline({ paused: true });
    // prettier-ignore
    clickNavLinkHandler
      .to('.nav', 0.3, { autoAlpha: 0 }, 0.1, 0)
      .to('.header__platformIcons--mobile', 0.4, { translateX: 110, ease: Sine.easeOut }, 0)
      .to('.pageTransitionOverlay', 0.01, { zIndex: 11 }, 0)
      .to('.pageTransitionOverlay', 0.6, { autoAlpha: 1 }, 0.5)
      .add( () => { this.$emit('forceRerender') }, 0.8 )

    navList.addEventListener("click", (e) => {
      if (!e.target.classList.contains("router-link-exact-active")) {
        clickNavLinkHandler.play();
      } else {
        hamburgerMotion.reverse(0);
      }

      this.handleAriaExpanded();
    });
  },
  methods: {
    handleAriaExpanded() {
      this.ariaExpanded = !this.ariaExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $layer-header-z-index;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1em;
    padding-bottom: 1em;
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
    top: 0;
    left: 0;
    z-index: $layer-dropdown-z-index;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    background: $color-menu-gradient;
  }

  &__platformIcons {
    &--mobile {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
    }
  }
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  padding: 2px;
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  transition: box-shadow $duration-animation-base linear;

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
    padding: 2em 0.5em;
    margin: 0;
  }

  &__item {
    list-style-type: none;
    @extend %typography-xxlarge;
  }

  &__link {
    padding: 0.5em;
    text-decoration: none;
    border-radius: 5px;
  }
}

.nav .router-link-exact-active {
  text-decoration: underline;
}
</style>
