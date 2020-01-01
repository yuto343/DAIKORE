<template>
  <div class="post-meta">
    <template v-if="post.timeToRead">
      <strong>目安時間：{{ post.timeToRead }}分</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>