<template>
  <layout>
    <main role="main">
      <SectionHero />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />

      <!-- dummy box -->
      <div style="height: 400px"></div>
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import SectionAbout from "@/components/SectionAbout.vue"
import SectionSkills from "@/components/SectionSkills.vue"
import SectionPortfolio from "@/components/SectionPortfolio.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero,
    SectionAbout,
    SectionSkills,
    SectionPortfolio
  }
}
</script>
