<template>
  <main role="main" class="post">
    <ContentDoc v-slot="{ doc: post }">
      <header
        v-if="isMounted"
        class="post__header header"
        :style="cssProps(post)"
      >
        <div class="header__wrapper">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h1 class="header__title display-xl" v-html="post.title_visible" />
          <hr class="header__divider" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="header__summary" v-html="post.excerpt" />
        </div>
      </header>

      <article class="post__article container container--sm">
        <p class="post__details">
          {{ post.category }} / {{ post.author }} /
          {{ formatDateToDayMonthYear(post.created_at) }}
        </p>

        <ContentDoc class="post__content" />

        <BaseLinkLikeButton class="post__backBtn" to="/blog/">
          Back to Blog
        </BaseLinkLikeButton>
      </article>
    </ContentDoc>
  </main>
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
import { useMq } from "vue3-mq";
import correctImageSizeObj from "@/utils/correctImageSizeObj.ts";

const isMounted = ref(false);
/////// CORRECT COVER_IMAGE - START
// TODO: I should put this logic inside a composable. However, doing `import { useMq } from "vue3-mq";` inside composable throws an error (maybe this issue will be fixed in the future)
const mq = useMq();
const correctImageSize = computed(() => {
  return correctImageSizeObj[mq.current] || "xs";
});
/////// CORRECT COVER_IMAGE - END

function cssProps(post) {
  const correctCoverImgSize = [`coverImg--${correctImageSize.value}`];

  return {
    "--background-image-url": `url('${post[correctCoverImgSize]}')`,
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

  isMounted.value = true;
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
  position: relative;
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
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: rgba($color-black, 80%);
  }

  &__wrapper {
    z-index: $layer-page-z-index;
    max-width: $size-container-sm-max-width;
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
