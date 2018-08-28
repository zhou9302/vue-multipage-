<template>
  <div class="chartBox">
    <div class="pie" ref="echartsPie"></div>
  </div>
</template>
<script>
import echarts from './echart/pie/init.js'
import Opt from './echart/pie/option.js'
export default{
  data () {
    return {

    }
  },
  mounted () {
    let myChartLine = echarts.init(this.$refs.echartsPie)
    let option = new Opt()
    myChartLine.setOption(option)
  }
}
</script>
<style lang="scss" scoped>
  .pie{
    width:300px;
    height:230px;
  }
</style>
