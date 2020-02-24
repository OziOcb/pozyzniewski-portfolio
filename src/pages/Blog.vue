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
query Post($page:Int) {
  post: allPost(perPage: 9, page: $page) @paginate  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title,
        excerpt,
        path,
        image(width:400),
        image_caption,
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog",
    meta: [{ name: "robots", content: "noindex,nofollow,disallow" }]
  }
}
</script>
