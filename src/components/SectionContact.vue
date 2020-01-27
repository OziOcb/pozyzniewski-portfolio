<template>
  <section class="contact container">
    <div class="contact__column">
      <h2 class="contact__title fixedSize">how to contact me?</h2>
      <p class="contact__desc">
        Contact me if you are looking for talented and hard working Front End Developer!
      </p>
    </div>

    <div class="contact__column">
      <ContactMeForm class="contact__contactForm" />
    </div>
  </section>
</template>

<script>
import ContactMeForm from "@/components/ContactMeForm.vue"
export default {
  components: {
    ContactMeForm
  }
}
</script>
