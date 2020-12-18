<template>
  <div class="app-nav">

    <el-menu
      class="el-menu-vertical-demo el-menu"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :default-active="defaultActive"
      :router="isRouter"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
    >
      <template v-for="item in routes">
        <el-menu-item
          v-if="!item.hidden && item.isSingle"
          :index="item.path"
          :key="item.path"
        >
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
        </el-menu-item>
        <el-submenu
          v-else-if="!item.hidden && !item.isSingle"
          :index="item.path"
          :key="item.path"
        >
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :route="childItem.path"
              v-if="!childItem.hidden"
              v-for="childItem in item.children"
              :index="childItem.path"
              :key="childItem.name"
            >
              {{childItem.meta.title}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  RadioGroup,
  RadioButton,
} from 'element-ui';
export default {
  name: 'app-nav',
  data() {
    return {
      routes: [],
      isRouter: true,
      defaultActive: ''
    };
  },
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItemGroup.name]: MenuItemGroup,
    [MenuItem.name]: MenuItem,
    [RadioGroup.name]: RadioGroup,
    [RadioButton.name]: RadioButton,
  },
  created() {
    this.routes = this.$router.options.routes
    this.defaultActive = this.$route.fullPath
  },
  computed:{
    isCollapse () {
      return this.$store.state.common.autoCollapse
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},

  },
};
</script>

<style lang="scss" scoped>
.app-nav {
  // width: 80px;
  // padding: 5px;
  min-height: 650px;
  background-color: #324157;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 650px;
}
.el-menu {
  border-right: 1px solid #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  .el-menu-item-group {
    .el-menu-item-group__title {
      padding: 0 !important;
    }
  }
}
.el-submenu .el-menu-item {
  padding: 0;
}
.el-menu--collapse {
  width: 64px;
}
</style>

<style lang="scss">
.el-menu-item-group__title {
  padding: 0;
}
.el-submenu .el-menu-item {
  min-width: 0;
}
</style>




