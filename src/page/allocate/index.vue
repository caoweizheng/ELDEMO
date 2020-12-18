<template>
  <div class="bg-w p-20">
    <el-form :inline="true">
      <el-form-item label="建单时间">
        <app-date-picker v-model="searchParams.startTime" type="date" align="right" placeholder="开始时间">
        </app-date-picker>
        <app-date-picker v-model="searchParams.endTime" align="right" type="date" placeholder="结束时间">
        </app-date-picker>
      </el-form-item>
      <el-form-item label="订单编号">
        <el-input v-model="searchParams.orderNo" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="订单类型">
        <el-select v-model="searchParams.orderType" placeholder="请选择">
          <el-option v-for="item in allocateConst.orderType" :key="item.key" :label="item.value" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="建单人">
        <el-input v-model="searchParams.handle" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select v-model="searchParams.status" placeholder="请选择">
          <el-option v-for="item in allocateConst.orderStatus" :key="item.key" :label="item.value" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="isLoading" type="primary" @click="search()">搜索</el-button>
        <el-button :disabled="isLoading" type="info" @click="reset()">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="m-b-20">
      <el-row type="flex" justify="space-between">
        <el-button type="primary" @click="createShipment()" icon="el-icon-plus">新建出货单</el-button>
        <el-button type="primary" @click="search()" :disabled="isDoanloading" icon="el-icon-download">导出单据明细</el-button>
      </el-row>
    </div>

    <div style="border: 1px solid #eee;">
      <el-table class="table" :data="tableData" :header-cell-style="getRowClass" v-loading="isLoading">
        <el-table-column prop="make_order_date" align="center" label="建单时间"></el-table-column>
        <el-table-column prop="inventory_allocation_order_no" align="center" label="订单号"></el-table-column>
        <el-table-column prop="order_type" align="center" label="订单类型">
          <template slot-scope="scope">
            <span>{{ORDER_BUSINESS_TYPE[scope.row.order_type]}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" align="center" label="订单状态">
          <template slot-scope="scope">
            <i v-if="scope.row.status === 11" class="type-badge primary">.</i>
            <i v-else-if="scope.row.status === 7" class="type-badge success">.</i>
            <i v-else-if="scope.row.status === -1" class="type-badge danger">.</i>
            <i v-else-if="scope.row.status === 4 || scope.row.status === 2" class="type-badge warn">.</i>
            <i v-else class="type-badge info">.</i>
            <span>{{ORDER_STATUS[scope.row.status]}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="last_update_time" align="center" label="审核时间"></el-table-column>
        <el-table-column prop="order_maker" align="center" label="制单人">
          <!-- <template slot-scope="scope">
          <span>{{scope.row.orderMaker ? scope.row.orderMaker : 'jack' + scope.$index}}</span>
        </template> -->
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120" align="center">
          <template slot-scope="scope">
            <order-detail :orderItem="scope.row">

            </order-detail>
            <template>
              <el-popconfirm title="确定删除吗？" icon="el-icon-warning" iconColor="#f93d3d" @onConfirm.native.prevent="deleteOrder(scope.row.inventory_allocation_order_no)">
                <el-button type="text" size="small" style="color:red;" slot="reference" v-if="scope.row.status === 0">
                  <i class="el-icon-delete"> </i> 删除
                </el-button>
              </el-popconfirm>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!-- <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="searchParams.pageNumber"
        :page-size="searchParams.pageSize"
        :total="searchParams.pageTotal"
        @current-change="handlePageChange"
      >
      </el-pagination> -->
      <app-pagination :pageNumber="pageOptions.pageNumber" :pageSize="pageOptions.pageSize" :total="pageOptions.total" :onChange="search"></app-pagination>

    </div>
  </div>
</template>

<script>
import { ORDER_STATUS, ORDER_BUSINESS_TYPE } from '@/common/const';
import allocateConst from './const.config';
export default {
  name: 'ProductIndex',
  components: {},
  data() {
    let params = {};
    return {
      ORDER_STATUS,
      ORDER_BUSINESS_TYPE,
      allocateConst,
      productList: [],
      tableData: [],
      isLoading: false,
      isDoanloading: false,
      searchParams: {
        startTime: '',
        endTime: '',
        orderNo: '',
        orderType: allocateConst[0],
        status: '',
        orderMaker: '',
        pageNumber: 1,
        pageSize: 10,
        total: 20,
      },
      dialogVisible: true,
      pageOptions: {
        pageNumber: 1,
        pageSize: 20,
        total: 20,
      },
    };
  },
  created() {
     this.search();
  },
  computed: {},
  methods: {
    async search(pageNum) {
      this.pageOptions.pageNumber = pageNum
        ? pageNum
        : this.pageOptions.pageNumber;
      this.isLoading = true;
      let resp = await this.$http.queryProductList({
        pageNum: this.pageOptions.pageNumber,
        pageSize: this.pageOptions.pageSize,
        inventory_allocation_order_no: this.searchParams.orderNo || null,
      });
      this.isLoading = false;
      if (!resp || !resp.data) return;
      this.tableData = resp.data.list;
      this.pageOptions.total = resp.data.total;
    },
    reset() {
      this.searchParams = {
        startTime: null,
        endTime: null,
        orderNo: '',
        status: '',
        handle: '',
      };
      this.pageOptions.pageNumber = 1;
      this.search();
    },
    handlePageChange() {},
    deleteOrder(orderNo) {
      console.log(orderNo);
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#f5f7fa;font-weight:500;';
      } else {
        return '';
      }
    },
    createShipment() {
      this.$router.push('/allocate/create-shipment')
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>


