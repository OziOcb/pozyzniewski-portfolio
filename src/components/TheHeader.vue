<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/faq/">FAQ</g-link>
      <g-link class="nav__link" to="/blog/">Blog</g-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.header {
  margin-bottom: 20px;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
}

.nav__link {
  margin-left: 20px;
}
</style>
