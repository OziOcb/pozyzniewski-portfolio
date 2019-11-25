<template>
  <layout>
    <h1 class="hello">{{ msg }}</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, esse quisquam iure, laudantium
      ipsum quas provident ducimus repudiandae inventore placeat velit qui. Recusandae debitis optio
      ipsam dolorum possimus tenetur corrupti?
    </p>
    <BaseButton disabled>Button (disabled)</BaseButton>
    <BaseInput type="password" placeholder="BaseInput" required @update="inputUpdate" />
    <br />

    <!-- SVG -->
    <SvgUndraw />
    <!-- Normal Image -->
    <g-image src="~/assets/img/curtain2.jpg" alt="jpg" height="300" width="300" />
    <!-- Backgroud image -->
    <div class="imageBox"></div>
  </layout>
</template>

<script>
import SvgUndraw from "~/assets/img/undraw.svg"

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    SvgUndraw
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
    },
    inputUpdate() {
      console.log("BaseInput")
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

.imageBox {
  width: 100px;
  height: 100px;
  // background: #f00 url("/src/assets/img/curtain2.jpg");
}
</style>
