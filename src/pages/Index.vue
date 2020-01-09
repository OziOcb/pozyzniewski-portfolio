<template>
  <layout>
    <section>
      <div class="container">
        <h1>Home Page</h1>
      </div>
      <div style="height:50px"></div>

      <div class="theSkillsGridTest">
        <div class="theSkillsGridTest__column theSkillsGridTest__column--grid">
          <TheSkillsGrid class="theSkillsGridTest__skillsGrid" />
        </div>

        <div class="theSkillsGridTest__column">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga accusamus debitis
          nobis excepturi aliquid, laboriosam, iusto nisi maiores deleniti illum? Fugiat pariatur
          officia consequatur nesciunt odio provident nostrum accusantium.
        </div>
      </div>

      <div style="height:100px"></div>
    </section>
  </layout>
</template>

<script>
import TheSkillsGrid from "@/components/TheSkillsGrid.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    TheSkillsGrid
  }
}
</script>

<style lang="scss" scoped>
.theSkillsGridTest {
  @media (min-width: $breakpoint-lg) {
    display: flex;
  }

  &__column {
    flex: 1;

    &--grid {
      position: relative;
      margin-left: -($size-skills-grid-width / 2 + $size-skills-grid-gap / 2) / 2;
      padding-top: 10px;
      padding-bottom: 30px;
      display: flex;
      overflow: hidden;
      justify-content: center;
      @media (min-width: $breakpoint-lg) {
        margin-left: 0;
        height: 90vh;
      }
    }
  }
  &__skillsGrid {
    @media (min-width: $breakpoint-lg) {
      position: absolute;
      right: 100px;
    }
  }
}
</style>
