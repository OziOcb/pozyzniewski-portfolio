<template>
  <ContentDoc v-slot="{ doc: post }">
    <main role="main" class="post" :style="cssProps(post)">
      <header class="post__header header">
        <div class="header__wrapper">
          <h1 class="header__title display-xl">{{ post.title_visible }}</h1>
          <hr class="header__divider" />
          <div class="header__summary">{{ post.excerpt }}</div>
        </div>
      </header>

      <article class="post__article container container--sm">
        <p class="post__details">
          {{ post.category }} / {{ post.author }} /
          {{ formatDateToDayMonthYear(post.created_at) }}
        </p>

        <ContentDoc class="post__content" />

        <BaseLinkLikeButton class="post__backBtn" to="/blog">
          Back to Blog
        </BaseLinkLikeButton>
      </article>
    </main>
  </ContentDoc>
</template>

<script setup>
import { formatDateToDayMonthYear } from "@/utils/date";
import { onBeforeRouteLeave } from "vue-router";
import { checkWindowWidth } from "@/utils/window";
import breakpoint from "@/utils/breakpoints";
import {
  durationTransitionForWrapper,
  durationTransitionForOverlay,
  enterPageWithBasicTransition,
  leavePageWithBasicTransition,
} from "@/utils/transitions";
import { gsap } from "gsap";

function cssProps(post) {
  return {
    "--background-image-url": `url('${post.image}')`,
    "--color-title": post.title_color,
  };
}

onMounted(async () => {
  if (checkWindowWidth() < breakpoint.lg) {
    enterPageWithBasicTransition();
  } else {
    setTimeout(() => {
      gsapPageTransition({ pageEnter: true });
    }, 100);
  }
});

onBeforeRouteLeave((to, from, next) => {
  if (checkWindowWidth() < breakpoint.lg) {
    leavePageWithBasicTransition(next);
  } else {
    gsapPageTransition({ onComplete: next });
  }
});

function gsapPageTransition({ onComplete, pageEnter }) {
  const tl = gsap.timeline({ onComplete });

  // prettier-ignore
  tl.to(".header__divider", 0.3, { autoAlpha: 0 }, 0)
    .to(".post__backBtn", 0.3, { autoAlpha: 0, scale: 2 }, 0)
    .to(".header__summary", 0.3, { autoAlpha: 0, y: "4em" }, 0.3)
    .to(".header__title", 0.3, { autoAlpha: 0, y: "-0.5em" }, 0.5)
    .fromTo(".pageTransitionWrapper", durationTransitionForWrapper, { autoAlpha: 1 }, { autoAlpha: 0 }, 0.4)
    .fromTo(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.7)

  return pageEnter ? tl.reverse(0) : tl.play();
}
</script>

<style lang="scss" scoped>
.post {
  padding-top: $size-section-padding-top;
  padding-bottom: $size-section-padding-bottom;

  &__details {
    margin-top: 0;
  }

  &__content {
    margin-bottom: 4rem;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 85vh;
  padding: 0 $size-gutter-width;
  background-image: var(--background-image-url);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &__wrapper {
    max-width: 800px;
    text-align: center;
  }

  &__title,
  &__summary {
    color: var(--color-title);
  }

  &__divider {
    display: block;
    max-width: 150px;
    height: 3px;
    margin: 30px auto 40px;
    background-color: var(--color-title);
    border: none;
  }
}
</style>
