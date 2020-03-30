<template>
  <Layout>
    <h1>Error: 404</h1>
    <div style="height:500px"></div>
  </Layout>
</template>

<script>
import { basicPageTransitionEnter, basicPageTransitionLeave } from "@/mixins/pageTransitions"

export default {
  metaInfo: {
    title: "FAQ",
    meta: [{ name: "robots", content: "noindex,nofollow,disallow" }] // Remove when this page is ready
  },
  mixins: [basicPageTransitionEnter, basicPageTransitionLeave]
}
</script>
