<template>
  <div id="app">
    <titleBox :title="'待办已办'" :titleEng="'BACKLOG STATISTICS'"></titleBox>
    <div class="backlogContent">
      <messageBox class="messageBox"></messageBox>
      <messageBox class="messageBox"></messageBox>
    </div>
    <titleBox :title="'任务信息'" :titleEng="'TASK INFORMATION'" class="infomation"></titleBox>
    <div class="informationBox">
      <div class="informationHeader">
        <chartBox class="chart"></chartBox>
      </div>
      <div class="informationFooter"></div>
    </div>
  </div>
</template>

<script>
import titleBox from './components/title'
import messageBox from './components/messageBox'
import chartBox from './components/chart'
import {getPendingLists} from './api/index.js'
export default {
  name: 'App',
  components: {
    titleBox, messageBox, chartBox
  },
  created () {
    getPendingLists().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f0f3f6;
}
.backlogContent{
  width: 100%;
  overflow: hidden;
  margin-top:15px;
  .messageBox{
    float: left;
    @include wh(49%,300px);
    background: white;
    &:nth-child(2){
      margin-left:2%;
    }
  }
}
.infomation{
  margin:40px 0 15px 0;
}
.informationBox{
  @include wh(100%,664px);
  margin-bottom:29px;
  background: white;
  padding:20px 22px 16px 16px;
  .informationHeader{
    @include wh(100%,40%);
    .chart{
      @include wh(34%,100%);
      border:1px solid #f1f4f6;
      margin-right:2%;
      float: left;
    }
  }
  .informationFooter{
    @include wh(100%,60%);
  }
}
</style>
