<template>
  <div class="accordion">
    <section v-for="section in content" :key="section.id">
      <h2>{{ section.title }}</h2>

      <ul class="accordion__list">
        <AccordionItem
          v-for="question in section.questions"
          :key="question.id"
          :question-obj="question"
          :is-dropdown-open="question.id === activeItemId"
          @changeActiveItemId="handleChangeActiveItemId($event)"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import AccordionItem from "@/components/AccordionItem.vue";

export default {
  components: { AccordionItem },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeItemId: "",
    };
  },

  methods: {
    handleChangeActiveItemId(id) {
      this.activeItemId !== id
        ? (this.activeItemId = id)
        : (this.activeItemId = "");
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  &__list {
    padding: 0;
    list-style: none;
  }
}
</style>
