<template>
  <div class="chartBox">
    <div class="pie" ref="echartsPie"></div>
    <div class="info">已办结{{taskInfo.transferred}}件，未办结{{taskInfo.noTransferred}}件</div>
  </div>
</template>
<script>
import echarts from './echart/pie/init.js'
import Opt from './echart/pie/option.js'
export default{
  props: ['taskInfo'],
  data () {
    return {
      myChartLine: null,
      option: null
    }
  },
  mounted () {
    this.myChartLine = echarts.init(this.$refs.echartsPie)
    this.option = new Opt()
  },
  watch: {
    taskInfo: {
      handler () {
        this.render()
      },
      deep: true
    }
  },
  methods: {
    render () {
      this.option.series[0].data[0].value = this.taskInfo.overdue
      this.option.series[0].data[1].value = this.taskInfo.expiring
      this.option.series[0].data[2].value = this.taskInfo.normal
      this.option.series[0].label.normal.formatter = () => {
        return this.taskInfo.noTransferred + '\n' + '集团（件）'
      }
      this.myChartLine.setOption(this.option)
    }
  }
}
</script>
<style lang="scss" scoped>
  .chartBox{
    @include wh(100%,100%);
    position: relative;
    .pie{
      width:300px;
      height:230px;
      margin:8px auto 0 auto;
      position: relative;
      overflow: hidden;
    }
    .info{
      width:100%;
      position: absolute;
      bottom:15px;
    }
  }

</style>
