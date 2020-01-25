<template>
  <section class="portfolio">
    <div class="portfolio__textWrapper">
      <h2 class="portfolio__title fixedSize">portfolio</h2>
      <p class="portfolio__desc">
        Collection of my recent design and development work. I am constantly working on new projects
        so this list will soon be expanded.
      </p>
    </div>

    <h3 class="portfolio__listTitle">Portfolio Projects List</h3>
    <ul class="portfolio__list">
      <li v-for="(project, index) in portfolioProjects" :key="index" class="portfolio__listItem">
        <PortfolioProject :project-info="project" />
      </li>
    </ul>
  </section>
</template>

<script>
import PortfolioProject from "@/components/PortfolioProject.vue"

export default {
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
