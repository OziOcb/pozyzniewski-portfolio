<template>
  <div class="accordionItem">
    <div class="accordionItem__top" @click="handleClickOnTop()">
      <h4 class="accordionItem__question">{{ questionObj.question }}</h4>

      <div class="accordionItem__toggleIcon">+</div>
    </div>

    <div v-if="isDropdownOpen" class="accordionItem__dropdown">
      <p>{{ questionObj.answer }}</p>
    </div>
  </div>
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
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba($color-secondary, 0.1) 60%,
      rgba(255, 255, 255, 0.6) 95%
    );

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
    &:focus-within {
      &:before {
        transform: translateX(100%);
      }
    }
  }

  &__question {
    z-index: $layer-page-z-index;
    margin: 0;
  }
  &__toggleIcon {
    z-index: $layer-page-z-index;
  }

  &__dropdown {
    border-bottom: 2px solid $color-text-light;
  }
}
</style>
