<template>
  <div class="portfolioProject">
    <div class="portfolioProject__inner container">
      <div class="portfolioProject__date">2019</div>

      <div class="portfolioProject__descWrapper">
        <h3 class="portfolioProject__title">Project Name</h3>
        <p class="portfolioProject__desc">Web Design / Development</p>
      </div>

      <div class="portfolioProject__btns">
        <BaseLinkLikeButton>Git</BaseLinkLikeButton>
        <BaseLinkLikeButton>View Project</BaseLinkLikeButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLinkLikeButton from "@/components/BaseLinkLikeButton.vue"

export default {
  components: {
    BaseLinkLikeButton
  }
}
</script>
