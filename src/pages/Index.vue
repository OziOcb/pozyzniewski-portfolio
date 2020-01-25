<template>
  <layout>
    <main role="main">
      <SectionHero />
      <SectionAbout />
      <SectionSkills />

      <!-- dummy box -->
      <div style="height: 400px"></div>
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import SectionAbout from "@/components/SectionAbout.vue"
import SectionSkills from "@/components/SectionSkills.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero,
    SectionAbout,
    SectionSkills
  }
}
</script>
