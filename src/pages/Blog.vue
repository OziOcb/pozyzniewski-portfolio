<template>
  <layout>
    <h1>Blog (comming soon)</h1>
    <div v-for="edge in $page.post.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>

    <div style="height:500px"></div>
  </layout>
</template>

<page-query>
query Post {
  post: allPost {
    edges {
      node {
        title,
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog"
  }
}
</script>
