<template>
  <layout>
    <section>
      <div class="container">
        <h3>Home Page</h3>
      </div>
      <div style="height:50px"></div>

      <PortfolioProject
        :year="2019"
        title="Lorem ipsum"
        desc="Test Description"
        repo-url="https://wwww.google.com"
        project-url="https://www.twitter.com"
      />
      <PortfolioProject
        :year="2018"
        title="Lorem ipsum"
        desc="Design &amp; Development"
        repo-url="https://wwww.google.com"
        project-url="https://www.twitter.com"
        color-gradient-primary="rgba(111,255,111,0.9)"
        color-gradient-secondary="rgba(255,255,255,0.5)"
        bg-image-src="design"
      />

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
