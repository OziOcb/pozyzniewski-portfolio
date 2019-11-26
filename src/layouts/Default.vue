<template>
  <div class="layout">
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
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
// ===
// Base styles
// ===
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  @extend %typography-small;
  background-color: $color-body-bg;
}

// ===
// Base element styles
// ===
a,
a:visited {
  color: $color-link-text;
}
h1 {
  @extend %typography-xxlarge;
}
h2 {
  @extend %typography-xlarge;
}
h3 {
  @extend %typography-large;
}
h4 {
  @extend %typography-medium;
}
h5,
h6 {
  @extend %typography-small;
}

// ===
// Layout
// ===
.layout {
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 760px;
}

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
