import { defineNuxtPlugin } from "#app";
import { Vue3Mq } from "vue3-mq";
import breakpoints from "@/utils/breakpoints";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints,
    defaultBreakpoint: "xs",
  });
});
