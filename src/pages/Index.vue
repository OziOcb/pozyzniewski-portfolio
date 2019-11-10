<template>
  <Layout>
    <h1 class="hello">{{ msg }}</h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  data() {
    return {
      msg: "Hello World!!"
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
