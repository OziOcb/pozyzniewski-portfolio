<template>
  <div class="accordion">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Accordion"
    }
  }
}
</script>

<style lang="scss">
.accordion {
  background-color: #ada; // REMOVE_ME: remove when done!
}
</style>
