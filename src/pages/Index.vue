<template>
  <layout>
    <main role="main">
      <SectionHero />
      <SectionAbout />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import SectionAbout from "@/components/SectionAbout.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero,
    SectionAbout
  }
}
</script>
