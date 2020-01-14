<template>
  <div class="portfolioProject" :style="cssProps">
    <div class="portfolioProject__inner container">
      <div class="portfolioProject__date">{{ year }}</div>

      <div class="portfolioProject__descWrapper">
        <h3 class="portfolioProject__title">{{ title }}</h3>
        <p class="portfolioProject__desc">{{ desc }}</p>
      </div>

      <div class="portfolioProject__btns">
        <BaseLinkLikeButton :to="repoUrl" blank>
          <font-awesome :icon="['fab', 'github']" />
          GitHub
        </BaseLinkLikeButton>
        <BaseLinkLikeButton :to="projectUrl" blank>View Project</BaseLinkLikeButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLinkLikeButton from "@/components/BaseLinkLikeButton.vue"

export default {
  components: {
    BaseLinkLikeButton
  },
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    title: {
      type: String,
      default: "Project Name"
    },
    desc: {
      type: String,
      default: "Web Design / Development"
    },
    repoUrl: {
      type: String,
      default: "https://github.com/OziOcb/pozyzniewski-portfolio"
    },
    projectUrl: {
      type: String,
      default: "https://github.com/OziOcb/pozyzniewski-portfolio"
    },
    colorGradientPrimary: {
      type: String,
      default: "#ef6f6c"
    },
    colorGradientSecondary: {
      type: String,
      default: "rgba(235, 193, 141, 0.6)"
    },
    bgImageSrc: {
      type: String,
      default: "default"
    }
  },

  computed: {
    bgImagePath() {
      return "/assets/img/jpg/projects-bgs/" + this.bgImageSrc
    },
    bgImage() {
      return {
        sm: `${this.bgImagePath}.jpg`,
        md: `${this.bgImagePath}--md.jpg`,
        lg: `${this.bgImagePath}--lg.jpg`,
        xl: `${this.bgImagePath}--xl.jpg`
      }
    },
    cssProps() {
      return {
        "--color-gradient-primary": this.colorGradientPrimary,
        "--color-gradient-secondary": this.colorGradientSecondary,
        "--bg-image-src": `url(${JSON.stringify(this.bgImage.sm)})`,
        "--bg-image-src--md": `url(${JSON.stringify(this.bgImage.md)})`,
        "--bg-image-src--lg": `url(${JSON.stringify(this.bgImage.lg)})`,
        "--bg-image-src--xl": `url(${JSON.stringify(this.bgImage.xl)})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolioProject {
  position: relative;
  overflow: hidden;
  //prettier-ignore
  background-image: linear-gradient( 45deg, var(--color-gradient-primary) 0%, var(--color-gradient-secondary) 100% ),
                    var(--bg-image-src);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: $breakpoint-sm) {
    // prettier-ignore
    background-image: linear-gradient( 45deg, var(--color-gradient-primary) 0%, var(--color-gradient-secondary) 100% ),
                      var(--bg-image-src--md);
  }
  @media (min-width: $breakpoint-xl) {
    // prettier-ignore
    background-image: linear-gradient( 45deg, var(--color-gradient-primary) 0%, var(--color-gradient-secondary) 100% ),
                      var(--bg-image-src--lg);
  }
  @media (min-width: $breakpoint-xxl) {
    // prettier-ignore
    background-image: linear-gradient( 45deg, var(--color-gradient-primary) 0%, var(--color-gradient-secondary) 100% ),
                      var(--bg-image-src--xl);
  }

  &__inner {
    padding-top: 5.125rem;
    padding-bottom: 5.125rem;
    @media (min-width: $breakpoint-xl) {
      display: flex;
      align-items: center;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      background-color: $color-body-bg;
      transition: transform ($duration-animation-portfolio-project-base * 2)
        cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__date {
    @extend %typography-large;
    position: relative;
    margin-left: 5.125rem;
    color: $color-text-light;
    transition: color $duration-animation-portfolio-project-base ease-in-out;

    &:before {
      position: absolute;
      top: 50%;
      right: calc(100% + 0.4375rem);
      width: 50vw;
      height: 2px;
      content: "";
      background-color: $color-text-light;
      transition: background-color $duration-animation-portfolio-project-base ease-in-out;
      transform: translateY(-2px);
    }
  }

  &__descWrapper {
    @media (min-width: $breakpoint-xl) {
      margin-left: 50px;
    }
  }

  &__title,
  &__desc,
  &__btns {
    position: relative;
    transition: transform $duration-animation-portfolio-project-base
      $duration-animation-portfolio-project-delay ease;
    transform-origin: left;
    @media (min-width: $breakpoint-xl) {
      transform-origin: center;
    }
  }
  &__title {
    @extend %typography-xlarge;
    margin-top: 0.4375em;
    margin-bottom: 0;
  }
  &__desc {
    margin-top: -0.3rem;
    transition-delay: ($duration-animation-portfolio-project-delay * 1.5);
  }
  &__btns {
    margin-left: auto;
    min-width: 280px;
    transition-delay: ($duration-animation-portfolio-project-delay * 2);
    @media (min-width: $breakpoint-xl) {
      transition-delay: ($duration-animation-portfolio-project-delay * 1.5);
    }

    a {
      margin-right: 1em;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .portfolioProject__inner {
    &:hover,
    &:focus-within {
      &:before {
        transform: translateX(100%);
      }
      .portfolioProject {
        &__date {
          color: $color-text-primary;
          &:before {
            background-color: $color-text-primary;
          }
        }
        &__title,
        &__desc {
          transform: scale(1.12);
        }
        &__btns {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
