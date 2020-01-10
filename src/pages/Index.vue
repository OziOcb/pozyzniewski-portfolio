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

        <div class="theSkillsGridTest__column theSkillsGridTest__column--quote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga accusamus debitis
          nobis excepturi aliquid, laboriosam, iusto nisi maiores deleniti illum? Fugiat pariatur
          officia consequatur nesciunt odio provident nostrum accusantium. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Possimus dolores non repellendus velit qui laudantium
          fuga libero officiis delectus laboriosam, veritatis odio distinctio illum. Omnis libero
          dolorum voluptatum accusamus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis cum fugit consectetur eligendi fuga non vero accusantium optio dolore
          temporibus, ipsa et aperiam voluptates ducimus suscipit dolor, minus quam ullam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Odit esse, ratione labore natus
          deleniti pariatur tempore hic facilis, earum quisquam doloremque voluptate provident minus
          sed distinctio, excepturi eveniet. Veritatis, sit.
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
      padding-bottom: 35px;
      display: flex;
      overflow: hidden;
      justify-content: center;
      @media (min-width: $breakpoint-lg) {
        margin-left: 0;
        height: $size-skills-grid-width * 6.7;
      }
      @media (min-width: $breakpoint-xl) {
        height: $size-skills-grid-width * 6;
      }
    }
    &--quote {
      display: flex;
      align-items: flex-end;
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
