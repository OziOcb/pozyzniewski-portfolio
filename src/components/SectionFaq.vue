<template>
  <section class="faq">
    <div class="faq__inner container">
      <AccordionBase :content="faqContent" />
    </div>
  </section>
</template>

<script>
import AccordionBase from "@/components/AccordionBase.vue"
import faqQuestions from "@/assets/content/faqQuestions"

export default {
  components: { AccordionBase },
  data() {
    return {
      faqContent: faqQuestions
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  position: relative;
  padding-top: 45px;
  padding-bottom: 45px;
  overflow: hidden;
  background-color: $color-body-bg-light;
  @media (min-width: $breakpoint-xxl) {
    padding-top: 0;
    padding-bottom: 0;
  }

  &:before,
  &:after {
    position: absolute;
    left: 0;
    content: "";
    border-right: 100vw solid transparent;
  }
  &:before {
    top: 0;
    border-top: 45px solid $color-body-bg;
    @media (min-width: $breakpoint-xxl) {
      border-top-width: 90px;
    }
  }
  &:after {
    bottom: 0;
    border-bottom: 45px solid $color-body-bg;
    @media (min-width: $breakpoint-xxl) {
      border-bottom-width: 90px;
    }
  }

  &__inner {
    position: relative;
    z-index: $layer-page-z-index;
    padding: 150px $size-gutter-width 90px;
    background-color: $color-body-bg-light;
    border-radius: 15px;
  }
}
</style>
