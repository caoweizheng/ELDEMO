<template>
  <div class="app-main">
    <div>
      <div class="main-head">
        <base-breadcrumb />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appMain',
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.main-head{
  margin-bottom: 15px;
  padding: 15px 8px;
  background:#fff;
}
.app-main {
  min-height: 650px;
  padding: 8px;
  background-color: #eee;
  .content {
    padding: 10px 0;
  }
}
// "Patterndesigner"  Patterndesigner
// Emotion 或 Styled Components 来填补样式的空缺
// Classnmes 是一个很棒的库，可以方便地连接和动态构造应用于 HTML 元素的 CSS 类名
</style>



