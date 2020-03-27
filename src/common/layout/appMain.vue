<template>
  <div class="app-main">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'appMain'
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 650px;
  padding: 8px;
  background-color: #eee;
  .content {
    background:#fff;
    padding: 25px;
  }
}
</style>



