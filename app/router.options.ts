import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
    };
  },
};
