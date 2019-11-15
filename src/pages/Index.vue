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
  position: relative;
  z-index: 999;
  margin: 5px;
  display: flex;
  color: $testFromGlobalsVarsScss; // Global Variable
}
</style>
