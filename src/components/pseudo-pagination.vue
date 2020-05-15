<template>
    <el-pagination
    background
    layout="total, prev, pager, next"
    :current-page="pageNumber"
    :page-size="pageSize"
    :total="total"
    @current-change="onChange"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'appPagination',
  data () {
    return {
    }
  },
  computed: {
    pageNum () {
      return this.pageNumber
    }
  },
  props: {
    pageNumber: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number
    },
    onChange: {
      type: Function
    }
  },
  methods: {
    page () {
      console.log(this.pageNumber)
    }
  }
}
</script>


