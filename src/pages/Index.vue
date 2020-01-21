<template>
  <layout>
    <SectionHero />

    <!-- dummy div -->
    <div style="height:800px;background:#acacac"></div>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero
  }
}
</script>
