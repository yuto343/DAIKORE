<template>
  <Layout :show-logo="false">
    <!-- Author intro -->

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        slug
        id
        title
        date (format: "YYYY.MM.DD")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10,quality: 100)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: "HOME"
  }
};
</script>
