<template>
  <div class="platformIcons">
    <a
      v-for="(website, index) in websites"
      :key="index"
      class="platformIcons__link"
      :href="website.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="sr-only">{{ website.svg }} in {{ parentComponent }}</span>
      <Icon :name="website.svg" size="25" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    parentComponent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      websites: [
        {
          link: "https://github.com/OziOcb",
          svg: "SvgGitHub",
        },
        {
          link: "https://www.linkedin.com/in/paul-ozyzniewski/",
          svg: "SvgLinkedIn",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.platformIcons {
  display: flex;
  justify-content: center;

  &__link {
    @extend %svg-color-change-hover;
    padding: 0.5rem;
    margin: 0.2rem;
    line-height: 0;
    border-radius: 5px;
  }
}
</style>
