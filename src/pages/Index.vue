<template>
  <layout>
    <h1 class="hello">{{ msg }}</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, esse quisquam iure, laudantium
      ipsum quas provident ducimus repudiandae inventore placeat velit qui. Recusandae debitis optio
      ipsam dolorum possimus tenetur corrupti?
    </p>
    <BaseButton disabled>Button (disabled)</BaseButton>
  </layout>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue"

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    BaseButton
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
// TODO: describe in README.md how to use typhography like below
.hello {
  @extend %typography-xxlarge;
}

p {
  @extend %typography-small;
}
</style>
