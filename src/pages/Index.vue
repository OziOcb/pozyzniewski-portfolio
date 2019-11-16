<template>
  <layout>
    <h1>{{ msg }}</h1>
  </layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  data() {
    return {
      msg: "Hello World!!",
      elo: 1
    }
  },
  methods: {
    // eslint-disable-next-line
    eslintTest(one, two, three) {
      console.log(one)
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
