<template>
  <main role="main">
    <SectionHero
      :content="{
        backgroundText: 'Faq',
        lead: 'Here you\'ll find',
        heading: 'find answers',
        extraLead: 'to the <strong>questions I get asked the most.</strong>',
      }"
    />
    <SectionFaq />
    <SectionContact />
  </main>
</template>

<script setup>
import {
  useBasicPageTransitionEnter,
  useBasicPageTransitionLeave,
} from "@/composable/pageTransitions";

useHead({
  title: "FAQ",
});

useBasicPageTransitionEnter();
useBasicPageTransitionLeave();
</script>
