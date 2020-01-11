<template>
  <div class="portfolioProject">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolioProject {
  padding-top: 5.125rem;
  padding-bottom: 5.125rem;
  overflow: hidden;
  border: 1px dashed #aaa;

  &__date {
    @extend %typography-large;
    position: relative;
    margin-left: 5.125rem;
    color: $color-text-light;

    &:before {
      position: absolute;
      top: 50%;
      right: calc(100% + 0.4375rem);
      width: 50vw;
      height: 2px;
      content: "";
      background-color: $color-text-light;
      transform: translateY(-2px);
    }
  }

  &__title {
    @extend %typography-xlarge;
    margin-top: 0.4375em;
    margin-bottom: 0;
  }

  &__desc {
    margin-top: -0.3rem;
  }

  &__btns {
    margin-left: auto;
    a:first-child {
      margin-right: 1em;
    }
  }
}
</style>
