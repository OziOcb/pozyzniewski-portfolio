<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.title}` : appConfig.title;
  },
  meta: [
    { name: "description", content: appConfig.description },
    {
      name: "author",
      content: appConfig.author,
    },
    {
      name: "keywords",
      content: appConfig.keywords,
    },
    { name: "robots", content: appConfig.robots },
  ],
});
</script>
