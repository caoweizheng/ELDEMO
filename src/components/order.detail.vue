<template>
  <div>
    <el-button
      type="text"
      size="small"
      @click="checkDetail">
      <i class="el-icon-folder-opened"> </i> 查看详情
    </el-button>
    <div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
        :append-to-body="true"
        @close="close"
        @open="open">
        <h3 slot="title">
          商品详情 {{orderItem.inventory_allocation_order_no}}
        </h3>
        <div class="table-head">
          <el-row type="flex" justify="space-between" class="row-bg">
            <el-col :span="6"> 发货方： {{orderItem.store_from}}</el-col>
            <el-col :span="6">单据类型： {{orderItem.order_type}}</el-col>
            <el-col :span="6"> 发货方： {{orderItem.store_to}}</el-col>
          </el-row>
        </div>
        <el-table
        :data="currentItems"
        class="table"
        v-loading="isLoading"
        :header-cell-style="getRowClass"
        >
          <el-table-column prop="sku_code" align="center" label="sku编码"/>
          <el-table-column prop="plan_quantity" align="center" label="计划数">
            <template slot-scope="s">
              {{s.row.plan_quantity || '-' }}
            </template>
          </el-table-column>
          <el-table-column prop="send_quantity" align="center" label="发货数">
            <template slot-scope="scope">
              {{scope.row.send_quantity || '-'}}
            </template>
          </el-table-column>
          <el-table-column prop="received_quantity" align="center" label="收获数">
            <template slot-scope="scope">
              {{scope.row.received_quantity || '-' }}
            </template>
          </el-table-column>
          <el-table-column prop="retail_price" align="center" label="吊牌价">
            <template slot-scope="scope">
              ￥{{scope.row.retail_price}}
            </template>
          </el-table-column>
          <el-table-column prop="real_price" align="center" label="实际价格">
            <template slot-scope="scope">
              ￥{{scope.row.real_price}}
            </template>
          </el-table-column>
        </el-table>
      <app-pagination :pageNumber="pageOptions.pageNumber" :pageSize="pageOptions.pageSize" :total="pageOptions.total" :onChange="pseudoPaging"></app-pagination>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false" icon="el-icon-download">导出excel</el-button>
          <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetail',
  data() {
    return {
      dialogVisible: false,
      isLoading: true,
      currentItems: [],
      totalItems: [],
      copyItems: [],
      pageOptions: {
        pageNumber: 1,
        pageSize: 20,
        total: 0,
      },
    };
  },
  props: {
    orderItem: {
      type: Object,
    },
    btnText: {
      type: String,
      default: '查看详情',
    },
  },
  // created(){
  //   this.dialogVisible = true
  // },
  mounted() {
    if (this.dialogVisible) {
      this.pseudoPaging();
    }
  },
  methods: {
    checkDetail() {
      this.dialogVisible = true;
      console.log(this.orderItem);
      console.log('查看详情');
    },
    handleClose() {
      console.log('befor-close');
      this.dialogVisible = false;
    },
    async open() {
      let resp = await this.$http.queryProductDetail({
        inventory_allocation_order_no: this.orderItem
          .inventory_allocation_order_no,
      });
      this.totalItems = resp.data.items;
      this.copyItems = this.pageOptions.total = resp.data.total;
      this.isLoading = false;
      this.pseudoPaging();
      console.log('打开了');
    },
    close() {
      console.log('关闭了');
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#f5f7fa;font-weight:500;';
      } else {
        return '';
      }
    },
    pseudoPaging(pageNumber = 1) {
      console.log(pageNumber);
      let pageSize = (pageNumber - 1) * 20;
      this.currentItems = this.totalItems.slice(pageSize, pageSize + 20);
      console.log(this.totalItems);
      console.log(this.currentItems);
    },
  },
};
</script>
<style lang="scss" scoped>
.table-head {
  border: 1px solid #eee;
  padding: 10px 5px;
  margin-bottom: 10px;
}
</style>

<style>
.el-dialog__body {
  padding: 10px 20px;
}
</style>



