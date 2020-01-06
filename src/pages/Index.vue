<template>
  <layout>
    <section class="container">
      <h1>Home Page</h1>
      <div style="height:50px"></div>

      <TheSkillsGrid />

      <div style="height:400px"></div>
    </section>
  </layout>
</template>

<script>
import TheSkillsGrid from "@/components/TheSkillsGrid.vue"

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    TheSkillsGrid
  }
}
</script>
