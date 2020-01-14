<template>
  <layout>
    <section>
      <div class="container">
        <h3>Home Page</h3>
      </div>
      <div style="height:50px"></div>

      <!-- default -->
      <PortfolioProject />

      <!-- In loop -->
      <PortfolioProject
        v-for="(project, index) in portfolioProjects"
        :key="index"
        :project-info="project"
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
  },
  data() {
    return {
      portfolioProjects: [
        {
          year: 2020,
          title: "POzyzniewski Portfolio",
          desc: "Design & Development",
          repoUrl: "https://github.com/OziOcb/pozyzniewski-portfolio",
          projectUrl: "https://www.twitter.com",
          colorGradientPrimary: "rgba(111,255,111,0.9)",
          colorGradientSecondary: "rgba(255,255,255,0.5)",
          bgImage: "design"
        },
        {
          year: 2019,
          title: "Dude is this another TODO list?",
          desc: "Design & Development",
          repoUrl: "https://github.com/OziOcb/Dude-is-this-another-Todo-List",
          projectUrl: "https://dude-is-this-another-todolist3.web.app/auth",
          colorGradientPrimary: "#0091ea",
          colorGradientSecondary: "rgba(255,255,255,0.5)",
          bgImage: "default"
        }
      ]
    }
  }
}
</script>
