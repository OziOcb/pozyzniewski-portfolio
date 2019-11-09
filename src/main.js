// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/sass/main.scss"

import DefaultLayout from "~/layouts/Default.vue"

// import { TweenMax } from "gsap/TweenMax" // this seems to be unnecessary
import ScrollMagic from "scrollmagic"
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
// TODO: make the inport link below be loaded only on .env.develop
import "imports-loader?define=>true!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"
// any extra plugins from GreenSock
// import SplitText from "../static/SplitText"

const GSAPScrollMagic = {
  install(Vue, options) {
    // GSAP
    Vue.prototype.$GSAP = {
      TweenMax,
      TimelineMax,
      Linear,
      Power1,
      Power2,
      Power3,
      Back
    }
    // ScrollMagic
    Vue.prototype.$ScrollMagic = {
      Controller: new ScrollMagic.Controller(),
      Scene: ScrollMagic.Scene
    }
  }
}

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // Add GSAP & ScrollMagic to the project
  Vue.use(GSAPScrollMagic)
}
