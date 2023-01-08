<!--
Taken from here - https://mokkapps.de/blog/how-to-create-a-custom-code-block-with-nuxt-content-v2/
-->
<template>
  <div class="proseCode">
    <span v-if="filename" class="proseCode__filenameText">
      {{ filename }}
    </span>

    <span
      v-if="languageText"
      :style="{ background: languageBackground, color: languageColor }"
      class="proseCode__languageText"
    >
      {{ languageText }}
    </span>

    <slot />

    <div class="proseCode__bottomContainer">
      <div class="copyContainer">
        <span v-if="copied" class="copyContainer__copiedText">
          Copied code!
        </span>

        <BaseButton class="copyContainer__button" @click="copy(code)">
          Copy Code
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const { copy, copied } = useClipboard();
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: "", language: null, filename: null, highlights: () => [] }
);
const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: "vue",
    background: "#42b883",
    color: "white",
  },
  "vue-html": {
    text: "vue",
    background: "#42b883",
    color: "white",
  },
  html: {
    text: "html",
    background: "#e44d27",
    color: "white",
  },
  css: {
    text: "css",
    background: "#379ad6",
    color: "white",
  },
  scss: {
    text: "scss",
    background: "#cc6799",
    color: "white",
  },
  js: {
    text: "js",
    background: "#f7df1e",
    color: "black",
  },
};
const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : "null"
);
const languageBackground = computed(() =>
  props.language ? languageMap[props.language]?.background : ""
);
const languageColor = computed(() =>
  props.language ? languageMap[props.language]?.color : ""
);
</script>

<style lang="scss" scoped>
.proseCode {
  position: relative;
  padding-top: 1em;
  padding-right: 0.125rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: $color-bg-dark;

  &__filenameText {
    position: absolute;
    top: 0;
    left: 1em;
    padding: 0.25em 0.5em;
    font-size: 0.875rem;
    color: $color-text-light;
  }

  &__languageText {
    position: absolute;
    top: 0;
    right: 1em;
    padding: 0.25em 0.5em;
    font-size: 0.875rem;
    text-transform: uppercase;
    border-bottom-right-radius: 0.25em;
    border-bottom-left-radius: 0.25em;
  }

  &__bottomContainer {
    display: flex;
    justify-content: flex-end;
  }
}

.copyContainer {
  display: flex;
  align-items: center;

  &__copiedText {
    margin-right: 1em;
  }

  &__button {
    padding: 0 0.6em;
    margin: 0 0.3em 0.3em 0;
    font-size: 1rem;
    line-height: 2;
  }
}

:slotted(pre) {
  display: flex;
  flex: 1 1 0%;
  padding: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  overflow-x: auto;
  line-height: 1.625;
  counter-reset: lines;
}
:slotted(pre code) {
  display: flex;
  flex-direction: column;
  width: 100%;
}
:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}
:slotted(pre code .line:before) {
  display: inline-block;
  width: 1rem;
  margin-right: 1.5rem;
  color: rgb(115 138 148 / 40%);
  text-align: left;
  content: counter(lines);
  counter-increment: lines;
}
:slotted(pre code .highlight) {
  display: block;
  padding-right: 1em;
  padding-left: 0.75em;
  margin-right: -1em;
  margin-left: -1em;
  background-color: rgba($color-body-bg, 0.1);
  border-left: 0.25em solid $color-red;
}
</style>
