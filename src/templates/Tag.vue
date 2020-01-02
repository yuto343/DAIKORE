<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.tag.title }}</h1>

    <div class="posts">
      <PostCard
        v-for="edge in publishedPost"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo{
      edges {
        node  {
          ...on Post {
            title
            path
            date (format: "YYYY.MM.DD")
            timeToRead
            description
            published
            content
          }
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
    title: "TAGS"
  },
  computed: {
    publishedPost() {
      const Posts = this.$page.tag.belongsTo.edges;
      console.log(Posts);
      const publishedPost = Posts.filter(edge => {
        return edge.node.published;
      });
      return publishedPost;
    }
  }
};
</script>

<style lang="scss"></style>
