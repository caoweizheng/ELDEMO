<template>
  <div class="app-main">
    <div>
      <div class="main-head">
        <h4>{{$route.name}}</h4>
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
  background:#fff;
    padding: 25px;
  }
}
</style>



