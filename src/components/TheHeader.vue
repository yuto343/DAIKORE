<template lang="pug">
  header
    .leftSide
      p(v-if="!isTop") < 戻る
    .logo
      g-link(to="/")
        img(src="../assets/images/daikore.svg")
    .categories
      ToggleTheme

</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
export default {
  components: {
    ToggleTheme
  },
  data() {
    return {
      isTop: true
    };
  }
};
</script>

<style lang="scss">
header {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  text-align: center;
  background-color: #171e42;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
.logo {
  margin: auto;
  max-width: 200px;
  color: white;
  width: 50%;
}
.categories,
.leftSide {
  width: 20%;
}
.categories {
  text-align: right;
  button {
    margin-right: 10px;
    position: relative;
    top: 3px;
  }
}
</style>
