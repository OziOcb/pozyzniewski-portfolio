<template>
  <Layout>
    <div class="dummyDiv"></div>
    <div class="smElement">scroll magic test</div>
    <div class="dummyDiv"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  mounted() {
    // create a Tween
    const testTween = new this.$GSAP.TimelineMax()
    testTween
      .from(".smElement", 1.5, { ease: this.$GSAP.Power2.easeOut, opacity: 0 })
      .to(".smElement", 2, { ease: this.$GSAP.Back.easeInOut.config(5.2), fontSize: "30px" })
      .to(".smElement", 2, { rotationY: 360 })

    // create a scene
    const testScene = new this.$ScrollMagic.Scene({
      triggerElement: ".smElement",
      triggerHook: 0.7,
      duration: 300
    })
      .addIndicators() // TODO: Remove this line before sending to production
      .setTween(testTween)

    // Add the scene to the controller
    this.$ScrollMagic.Controller.addScene(testScene)
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
