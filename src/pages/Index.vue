<template>
  <Layout>
    <div class="dummyDiv"></div>
    <div class="smElement">scroll magic test</div>
    <div class="dummyDiv"></div>
  </Layout>
</template>

<script>
import ScrollMagic from "scrollmagic"
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  mounted() {
    // init controller
    var controller = new ScrollMagic.Controller()

    // create a scene
    new ScrollMagic.Scene({
      triggerElement: ".smElement",
      triggerHook: 0.5,
      duration: "100%" // the scene should last for a scroll distance of 100px
    })
      .setClassToggle(".smElement", "smElement--modified")
      .addTo(controller) // assign the scene to the controller
  }
}
</script>

<style lang="scss" scoped>
.dummyDiv {
  background-color: #aaa;
  height: 700px;
}
.smElement--modified {
  color: #900;
  font-weight: bold;
}
</style>
