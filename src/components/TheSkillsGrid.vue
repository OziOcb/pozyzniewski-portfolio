<template>
  <div class="skillsGrid">
    <div v-for="(tile, index) in tiles" :key="index" class="skillsGrid__skillBox">
      <component :is="tile"></component>
    </div>
  </div>
</template>

<script>
import {
  SvgAdobeIllustrator,
  SvgAdobePhotoshop,
  SvgAdobeTypekit,
  SvgAdobeXd,
  SvgAtom,
  SvgBabel,
  SvgBasecamp,
  SvgBit,
  SvgBootstrap,
  SvgCodeoen,
  SvgCodeSandbox,
  SvgCodewars,
  SvgCss,
  SvgCssWizardy,
  SvgEsLint,
  SvgFigma,
  SvgFilleZilla,
  SvgFirebase,
  SvgGit,
  SvgGitHub,
  SvgGitLab,
  SvgGraphQl,
  SvgGulp,
  SvgHtml5,
  SvgJavascript,
  SvgJekyll,
  SvgJest,
  SvgJson,
  SvgMarkdown,
  SvgMaterialDesign,
  SvgNpm,
  SvgNuxtJs,
  SvgPostman,
  SvgPowerShell,
  SvgPrettier,
  SvgSass,
  SvgVSC,
  SvgVueJs,
  SvgVue,
  SvgWebpack,
  SvgYarn,
  SvgZapier
} from "~/assets/img/svg/skillsGrid/index.js"

export default {
  components: {
    SvgAdobeIllustrator,
    SvgAdobePhotoshop,
    SvgAdobeTypekit,
    SvgAdobeXd,
    SvgAtom,
    SvgBabel,
    SvgBasecamp,
    SvgBit,
    SvgBootstrap,
    SvgCodeoen,
    SvgCodeSandbox,
    SvgCodewars,
    SvgCss,
    SvgCssWizardy,
    SvgEsLint,
    SvgFigma,
    SvgFilleZilla,
    SvgFirebase,
    SvgGit,
    SvgGitHub,
    SvgGitLab,
    SvgGraphQl,
    SvgGulp,
    SvgHtml5,
    SvgJavascript,
    SvgJekyll,
    SvgJest,
    SvgJson,
    SvgMarkdown,
    SvgMaterialDesign,
    SvgNpm,
    SvgNuxtJs,
    SvgPostman,
    SvgPowerShell,
    SvgPrettier,
    SvgSass,
    SvgVSC,
    SvgVueJs,
    SvgVue,
    SvgWebpack,
    SvgYarn,
    SvgZapier
  },
  data() {
    return {
      tiles: [
        "SvgMarkdown",
        "SvgFilleZilla",
        "SvgPowerShell",
        "SvgMaterialDesign",
        "SvgCss",
        "SvgGit",
        "SvgBasecamp",
        "SvgGraphQl",
        "SvgCssWizardy",
        "SvgBit",
        "SvgNuxtJs",
        "SvgBootstrap",
        "SvgEsLint",
        "SvgVueJs",
        "SvgGitHub",
        "SvgAdobePhotoshop",
        "SvgGitLab",
        "SvgVSC",
        "SvgGulp",
        "SvgFigma",
        "SvgAdobeXd",
        "SvgSass",
        "SvgPrettier",
        "SvgHtml5",
        "SvgNpm",
        "SvgFirebase",
        "SvgWebpack",
        "SvgJavascript",
        "SvgCodewars",
        "SvgVue",
        "SvgCodeoen",
        "SvgCodeSandbox",
        "SvgAtom",
        "SvgAdobeTypekit",
        "SvgPostman",
        "SvgZapier",
        "SvgBabel",
        "SvgAdobeIllustrator",
        "SvgYarn",
        "SvgJest",
        "SvgJekyll",
        "SvgJson"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$hex-width: 100px;
$hex-between: $hex-width / 2;

/* Other hexagon dimentions */
$hex-height: $hex-width / 1.73 /* sqrt(3) */;
$hex-margin: $hex-width / 2;
$hex-border: $hex-margin / 1.73 /* sqrt(3) */;
$hex-transition: background-color $duration-animation-base ease, $duration-animation-base ease,
  border-bottom-color $duration-animation-base ease;

.skillsGrid {
  padding-bottom: $hex-border;
  display: grid;
  grid-template-columns: repeat(4, $hex-width);
  grid-auto-rows: $hex-width - $hex-between / 2;
  grid-column-gap: $hex-between;

  &__skillBox {
    position: relative;
    margin: $hex-border 0;
    display: flex;
    width: $hex-width / 1.4;
    height: $hex-height * 1.2;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    fill: white;

    &:before {
      position: absolute;
      width: $hex-width;
      height: $hex-width;
      content: "";
      background-color: $color-skills-grid-box-bg;
      transition: $hex-transition;
      transform: rotate(45deg);
    }
    &:nth-child(2n + 1):before {
      background-color: rgba($color-skills-grid-box-bg, 0.3);
    }
    &:nth-child(3n + 1):before {
      background-color: rgba($color-skills-grid-box-bg, 0.6);
    }
    &:nth-child(5n + 3):before {
      background-color: rgba($color-skills-grid-box-bg, 0.8);
    }
    &:nth-child(7n + 5):before {
      background-color: rgba($color-skills-grid-box-bg, 1);
    }
    &:hover:before {
      background-color: $color-skills-grid-box-bg-hover;
    }

    > svg {
      z-index: 0;
      height: 75%;
      transition: $hex-transition;
    }
  }

  &__skillBox:nth-child(8n + 5),
  &__skillBox:nth-child(8n + 6),
  &__skillBox:nth-child(8n + 7),
  &__skillBox:nth-child(8n + 8) {
    margin-left: $hex-width / 2 + $hex-between / 2;
  }
}
</style>
