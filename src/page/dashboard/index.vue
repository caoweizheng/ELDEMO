<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-03-24 17:16:16
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 20:19:21
-->
<template>
  <div class="app-content">
    <highcharts :options="chartOptions"></highcharts>
    <base-string
      label="款号"
      v-model="divvv"
      placeholder="请输入款号"
      textAlign="right"
      labelWidth="120"
      :disabled="true"
      :readOnly="false"
      :isRequire="true"
    ></base-string>
    <base-string
      label="订单编号"
      v-model="divvv"
      placeholder="请输入订单编号"
      textAlign="right"
      labelWidth="120"
    ></base-string>
    <base-date-picker v-model="date" label="开始时间" type="daterange">
    </base-date-picker>
    <p>{{formatDate}}</p>
  </div>
</template>

<script>
import Highcharts from "highcharts"
import { Chart } from 'highcharts-vue'
export default {
  name: 'DashboardHome',
  components: {
    highcharts: Chart
  },
  data () {
    return {
      divvv: 'divvvv',
      date: '',
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: '美元兑欧元汇率走势图'
        },
        yAxis: {
          title: {
            text: '汇率'
          }
        },
        legend: {
          enabled: false
        },
        series: [{
          data: [2003, 4133, 3023, 424, 1323, 7443, 3678, 5563, 4601, 1123, 4535, 5111, 2232, 5871, 8872, 2345, 11234, 2124, 5783]
        }]
      }
    }
  },
  computed:{
    formatDate(val) {
      return this.date
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content {
  background-color: #fff;
  min-height: 450px;
}
</style>


