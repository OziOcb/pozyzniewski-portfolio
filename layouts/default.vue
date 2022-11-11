<template>
  <div class="layout">
    <TheHeader v-if="renderComponent" @forceRerender="forceRerender()" />

    <ThePageTransitionOverlay />

    <div class="pageTransitionWrapper">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    renderComponent: true,
  }),
  methods: {
    forceRerender() {
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  },
};
</script>
