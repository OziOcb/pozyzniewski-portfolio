import { defineNuxtPlugin } from "#app";
import { Vue3Mq } from "vue3-mq";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints: {
      xxs: 0,
      xs: 320, // smartphones, portrait iPhone, portrait 480x320 phones (Android)
      sm: 480, // smartphones, Android phones, landscape iPhone
      md: 600, // portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android),
      lg: 801, //tablet, landscape iPad, lo-res laptops ands desktops
      xl: 1025, //big landscape tablets, laptops, and desktops
      xxl: 1281, //hi-res laptops and desktops
    },
    defaultBreakpoint: "xs",
  });
});
