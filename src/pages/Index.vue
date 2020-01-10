<template>
  <layout>
    <section>
      <div class="container">
        <h3>Home Page</h3>
      </div>
      <div style="height:50px"></div>

      <PortfolioProject />

      <div style="height:800px"></div>
    </section>
  </layout>
</template>

<script>
import PortfolioProject from "@/components/PortfolioProject.vue"
export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    PortfolioProject
  }
}
</script>
