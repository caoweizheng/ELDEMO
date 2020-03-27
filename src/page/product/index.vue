<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="建单时间" class="block">
        <el-date-picker
        v-model="searchParams.startTime"
        align="right"
        type="date"
        placeholder="开始时间"
        :picker-options="pickerOptions">
      </el-date-picker>
        <el-date-picker
        v-model="searchParams.endTime"
        align="right"
        type="date"
        placeholder="结束时间"
        :picker-options="pickerOptions">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="订单编号">
        <el-input v-model="searchParams.orderNo" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-input v-model="searchParams.status" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="建单人">
        <el-input v-model="searchParams.handle" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="审核时间">
        <el-input v-model="searchParams.auditTime" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="info" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table
      class="table"
      :data="tableData"
      border
      header-cell-class-name="table-header"
    >
      <el-table-column align="center" label="建单时间" ></el-table-column>
      <el-table-column align="center" label="订单号" ></el-table-column>
      <el-table-column align="center" label="类型" ></el-table-column>
      <el-table-column align="center" label="状态" ></el-table-column>
      <el-table-column align="center" label="审核时间" ></el-table-column>
      <el-table-column align="center" label="制单人" ></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="searchParams.pageNumber"
        :page-size="searchParams.pageSize"
        :total="searchParams.pageTotal"
        @current-change="handlePageChange"
      >
      </el-pagination>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductIndex',
  components: {},
  data() {
    let params = {};
    return {
      productList: [],
      tableData: [],
      searchParams: {
        startTime: '',
        endTime: '',
        orderNo: '',
        auditTime: '',
        status: '',
        handle: '',
        pageNumber: 1,
        pageSize: 10,
        pageTotal: 20
      },
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    }
  },
  async created () {

  },
  methods: {
    search (queryParams) {
      // to do
    },
    reset () {
      this.searchParams = {
        startTime: '',
        endTime: '',
        orderNo: '',
        auditTime: '',
        status: '',
        handle: ''
      }
      this.search(this.searchParams)
    },
    handlePageChange () {

    }
  }
};
</script>

