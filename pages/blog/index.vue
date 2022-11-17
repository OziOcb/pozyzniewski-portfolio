<template>
  <main role="main" class="blog container">
    <header>
      <h1 class="blog__title display-lg">Our Stories</h1>
      <hr class="blog__divider" />
    </header>

    <article v-for="post in paginatedPosts" :key="post.id" class="blogCard">
      <div class="blogCard__imageContainer">
        <figure class="blogCard__figure">
          <NuxtImg
            class="blogCard__image"
            :alt="post.image_caption"
            :src="post.image"
          />

          <NuxtLink class="blogCard__arrow" :to="`${post._path}`">
            <Icon name="fa-solid:arrow-right" />
          </NuxtLink>
        </figure>
      </div>

      <div class="blogCard__textContainer">
        <h2 class="blogCard__title">
          <NuxtLink :to="`${post._path}`">{{ post.title_visible }}</NuxtLink>
        </h2>

        <p class="blogCard__excerpt">{{ post.excerpt }}</p>

        <p class="blogCard__details">
          {{ post.category }} / {{ formatDateToDayMonthYear(post.created_at) }}
        </p>

        <BaseLinkLikeButton class="blogCard__btn" :to="`${post._path}`">
          Read the article
        </BaseLinkLikeButton>
      </div>
    </article>

    <footer>
      <Pagination
        v-model="pageNumber"
        :records="numberOfPosts"
        :per-page="postsPerPage"
        :options="{
          edgeNavigation: false,
          chunk: numberOfChunks,
          chunksNavigation: 'scroll',
        }"
        @paginate="paginationHandler()"
      />
    </footer>

    <!-- This is needed to pre generate all single posts for static hosting -->
    <span class="sr-only">
      <NuxtLink v-for="link in postsListOfUrls" :key="link" :to="link">
        {{ link }}
      </NuxtLink>
    </span>
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
import Pagination from "v-pagination-3";

useHead({
  title: "Blog",
});

const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/")
    .only([
      "_path",
      "category",
      "created_at",
      "excerpt",
      "image",
      "image_caption",
      "title_visible",
    ])
    .sort({ created_at: -1 })
    .find()
);

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
  tl
    .to(".blogCard__arrow", 0.3, { autoAlpha: 0, scale: 4 }, 0)
    .to(".blogCard__btn", 0.3, { autoAlpha: 0, scale: 0.8 }, 0)
    .to(".blogCard__title", 1, { x: "-120%" }, 0)
    .to(".blogCard__excerpt", 1, { x: "-120%" }, 0.15)
    .to(".blogCard__details", 1, { x: "-120%" }, 0.3)
    .to(".blogCard__figure", 0.6, { autoAlpha: 0, y: 50 }, 0.3)
    .to(".blogCard__imageContainer", 1.2, { autoAlpha: 0, y: 50 }, 0.3)
    .fromTo(".pageTransitionWrapper", durationTransitionForWrapper, { autoAlpha: 1 }, { autoAlpha: 0 }, 0.6)
    .fromTo(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.9)

  return pageEnter ? tl.reverse(0) : tl.play();
}

/////// PAGINATION - START
const pageNumber = ref(1);
const postsPerPage = ref(6);
const numberOfChunks = ref(3);
const numberOfPosts = ref(posts.value.length);

const paginatedPosts = computed(() => {
  const startIndex =
    (pageNumber.value !== 1 ? postsPerPage.value : 0) * (pageNumber.value - 1);
  const endIndex = startIndex + postsPerPage.value;

  return posts.value.slice(startIndex, endIndex);
});

function paginationHandler() {
  document.body.scrollIntoView({ behavior: "smooth", block: "start" });
}

// This is needed to pre generate all single posts for static hosting
const postsListOfUrls = posts.value.map((post) => post._path);
</script>

<style lang="scss" scoped>
.blog {
  padding-top: $size-section-padding-top;
  padding-bottom: $size-section-padding-bottom;
  text-align: center;

  @media (min-width: $breakpoint-lg) {
    padding-right: 0;
    padding-left: 0;
  }

  &__title {
    margin: 0;
  }

  &__divider {
    display: block;
    max-width: 150px;
    height: 3px;
    margin: 30px auto 40px;
    background-color: $color-text-primary;
    border: none;
  }
}

.blogCard {
  padding-bottom: $size-blogCard-paddingBottom;

  @media (min-width: $breakpoint-lg) {
    display: flex;
    &:nth-child(odd) {
      .blogCard__imageContainer {
        order: 1;
        &:before {
          right: -10%;
          left: inherit;
        }
      }
      .blogCard__arrow {
        left: -20px;
      }
    }
  }

  &__imageContainer {
    @media (min-width: $breakpoint-lg) {
      position: relative;
      display: flex;
      flex: 3;
      align-items: center;

      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -10%;
        width: 60%;
        content: "";
        background-color: $color-blog-image-beforeElement;
      }
    }
  }

  &__textContainer {
    padding-bottom: 50px;
    overflow: hidden;

    @media (min-width: $breakpoint-lg) {
      flex: 2;
      padding: 150px 80px 0 40px;
      margin: 20px;
      text-align: left;
    }
  }

  &__figure {
    position: relative;
    width: 100%; // required by firefox!
    margin: 0;
  }

  &__image {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;

    @media (min-width: $breakpoint-lg) {
      height: 320px;
    }
  }

  &__arrow {
    display: none;

    @media (min-width: $breakpoint-lg) {
      position: absolute;
      right: -20px;
      bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: $size-blogCard-arrow-size;
      height: $size-blogCard-arrow-size;
      color: $color-body-bg;
      background-color: $color-primary;
      border-radius: 50%;
      box-shadow: 0 0.6em 1.25em $color-button-shadow;
      transition: transform $duration-animation-base
          cubic-bezier(0.25, 0.1, 0.4, 2),
        box-shadow $duration-animation-base cubic-bezier(0.25, 0.1, 0.4, 2);
      &:hover,
      &:focus {
        box-shadow: 0 1.25em 2.5em $color-button-shadow;
        transform: scale(1.2);
      }
    }
  }

  &__title a {
    display: block;
    text-decoration: none;
  }

  &__details {
    font-family: $heading-font-family;
    font-weight: bold;
    color: $color-text-light;
  }

  &__btn {
    @media (min-width: $breakpoint-lg) {
      display: none;
    }
  }
}

:deep() .VuePagination {
  &__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    list-style: none;
  }

  .page-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $size-blogCard-paginationItem-size;
    height: $size-blogCard-paginationItem-size;
    margin-right: 0.625rem;
    color: $color-link-text;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid $color-text-lightest;
    border-radius: 3px;
    transition: box-shadow $duration-animation-base linear,
      color $duration-animation-base linear;
    &:focus {
      @extend %custom-outline;
    }
    &:visited {
      color: $color-link-text;
    }
    &:hover {
      color: $color-link-text-hover;
    }
    &.active {
      color: $color-text-lightest;
      background-color: $color-black;
      border-color: $color-black;
    }
    &:disabled {
      display: none;
    }
  }
}
</style>
