<template>
  <h1>Error: 404</h1>
  <div style="height: 500px"></div>
</template>

<script>
import {
  basicPageTransitionEnter,
  basicPageTransitionLeave,
} from "@/mixins/pageTransitions";

export default {
  mixins: [basicPageTransitionEnter, basicPageTransitionLeave],
  setup() {
    const appConfig = useAppConfig();

    useHead({
      title: `Error Page - ${appConfig.title}`,
    });
  },
};
</script>
