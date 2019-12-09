<template>
  <Layout>
    <h1>FAQ</h1>

    <ContactMeForm />
  </Layout>
</template>

<script>
import ContactMeForm from "@/components/ContactMeForm.vue"
export default {
  metaInfo: {
    title: "FAQ"
  },
  components: {
    ContactMeForm
  }
}
</script>
