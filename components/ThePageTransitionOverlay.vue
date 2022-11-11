<template>
  <div class="pageTransitionOverlay">
    <LogoComponent
      class="pageTransitionOverlay__logo"
      version="simple"
      desc="Page transition overlay's logo"
    />
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  components: {
    LogoComponent,
  },
};
</script>

<style lang="scss" scoped>
.pageTransitionOverlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $layer-negative-z-index;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-menu-gradient;
  opacity: 0;

  &__logo {
    width: 250px;
    pointer-events: none;
  }
}
</style>
