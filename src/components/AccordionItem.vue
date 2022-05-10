<template>
  <li :class="['accordionItem', isDropdownOpen && 'accordionItem--active']">
    <div class="accordionItem__top" @click="handleClickOnTop()">
      <div class="accordionItem__toggleIcon"></div>

      <h4 class="accordionItem__question">
        {{ questionObj.question }}
      </h4>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="accordionItem__dropdown" v-html="questionObj.answerHtml"></div>
  </li>
</template>

<script>
export default {
  props: {
    questionObj: {
      type: Object,
      required: true
    },
    isDropdownOpen: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    handleClickOnTop() {
      this.$emit("changeActiveItemId", this.questionObj.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.accordionItem {
  &__top {
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    background: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba($color-secondary, 0.1) 60%,
      rgba(255, 255, 255, 0.6) 95%
    );
    cursor: pointer;

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      background-color: $color-body-bg-light;
      transition: transform ($duration-animation-portfolio-project-base * 2)
        cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover,
    &:focus-within,
    .accordionItem--active & {
      &:before {
        transform: translateX(100%);
      }
    }
  }

  &__toggleIcon {
    z-index: $layer-page-z-index;
    margin-right: 1rem;

    &:before,
    &:after {
      display: block;
      width: 0.75rem;
      content: "";
      border-top: 2px solid $color-text-secondary;
      transition: $duration-animation-base * 2;
    }
    &:before {
      .accordionItem--active & {
        transform: rotate(180deg);
      }
    }
    &:after {
      margin-top: -2px;
      transform: rotate(90deg);
      .accordionItem--active & {
        transform: rotate(0deg);
      }
    }
  }

  &__question {
    z-index: $layer-page-z-index;
    margin: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    @media (min-width: $breakpoint-sm) {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  &__dropdown {
    overflow: hidden;
    max-height: 0;
    border-bottom: 2px solid transparent;
    transition: max-height $duration-animation-base * 4,
      border-bottom-color $duration-animation-base * 4;
    .accordionItem--active & {
      max-height: 400px;
      border-bottom-color: $color-text-light;
    }
  }
}
</style>
