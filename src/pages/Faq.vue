<template>
  <Layout>
    <h1>FAQ (comming soon)</h1>
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
