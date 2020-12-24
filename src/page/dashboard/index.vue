<template>
  <div class="app-content">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts"
import {Chart} from 'highcharts-vue'
export default {
  name: 'DashboardHome',
  components: {
    highcharts: Chart
  },
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text:  '美元兑欧元汇率走势图'
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
          data: [2003,4133,3023,424,1323,7443,3678,5563,4601,1123,4535,5111,2232,5871,8872,2345,11234,2124,5783]
        }]
      }
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


