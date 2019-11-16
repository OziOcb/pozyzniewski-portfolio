<template>
  <Layout>
    <h1 class="elo">FAQ</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi,
      eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores
      inventore iste reprehenderit maxime! Iusto.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "FAQ"
  }
}
</script>

<style lang="scss" scoped>
.elo {
  position: relative;
  z-index: 999;
  margin: 5px;
  display: flex;
  color: $testFromGlobalsVarsScss; // Global Variable
}
</style>
