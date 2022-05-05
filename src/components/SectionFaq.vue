<template>
  <section class="faq">
    <div class="faq__inner container">
      <AccordionBase :content="faqContent" />
    </div>
  </section>
</template>

<script>
import AccordionBase from "@/components/AccordionBase.vue"
import { v4 as uuidv4 } from "uuid"

export default {
  components: { AccordionBase },
  data() {
    return {
      faqContent: [
        {
          id: uuidv4(),
          title: "Title 1",
          questions: [
            {
              id: uuidv4(),
              question: "Question 1",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos earum magni deleniti ratione maxime optio eveniet. Magnam dolorem velit impedit quam libero minus deleniti, qui reiciendis, voluptas ut veritatis!"
            },
            {
              id: uuidv4(),
              question: "Question 2",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos earum magni deleniti ratione maxime optio eveniet. Magnam dolorem velit impedit quam libero minus deleniti, qui reiciendis, voluptas ut veritatis!"
            }
          ]
        },
        {
          id: uuidv4(),
          title: "Title 2",
          questions: [
            {
              id: uuidv4(),
              question: "Question 3",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos earum magni deleniti ratione maxime optio eveniet. Magnam dolorem velit impedit quam libero minus deleniti, qui reiciendis, voluptas ut veritatis!"
            },
            {
              id: uuidv4(),
              question: "Question 4",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos earum magni deleniti ratione maxime optio eveniet. Magnam dolorem velit impedit quam libero minus deleniti, qui reiciendis, voluptas ut veritatis!"
            }
          ]
        }
      ]
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
