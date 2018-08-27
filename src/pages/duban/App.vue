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
        <div class="typeBox">
          <selBox></selBox>
          <table>
            <thead>
              <th>类型</th>
              <th>已逾期</th>
              <th>即将到期</th>
              <th>正常推进</th>
            </thead>
            <tbody>
              <td>数量</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tbody>
          </table>
        </div>
      </div>
      <div class="informationFooter">
        <div class="statusLabel">
          <span>状态</span>
          <span><i class="circle green"></i>已逾期</span>
          <span><i class="circle blue"></i>快到期</span>
          <span><i class="circle orange"></i>立项中</span>
          <span><i class="circle red"></i>推进中</span>
          <span><i class="circle purple"></i>已完成</span>
        </div>
        <table>
          <thead>
            <th>序号</th>
            <th>任务来源</th>
            <th>ID</th>
            <th>任务内容</th>
            <th>分管领导</th>
            <th>主办处室</th>
            <th>经办人</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>市政府</td>
              <td>31231231231</td>
              <td>任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容</td>
              <td>周颖</td>
              <td>财经处</td>
              <td>崔永元</td>
            </tr>
            <tr>
              <td>1</td>
              <td>市政府</td>
              <td>31231231231</td>
              <td>任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容</td>
              <td>周颖</td>
              <td>财经处</td>
              <td>崔永元</td>
            </tr>
            <tr>
              <td>1</td>
              <td>市政府</td>
              <td>31231231231</td>
              <td>任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容</td>
              <td>周颖</td>
              <td>财经处</td>
              <td>崔永元</td>
            </tr>
            <tr>
              <td>1</td>
              <td>市政府</td>
              <td>31231231231</td>
              <td>任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容</td>
              <td>周颖</td>
              <td>财经处</td>
              <td>崔永元</td>
            </tr>
          </tbody>
        </table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleBox from './components/title'
import messageBox from './components/messageBox'
import chartBox from './components/chart'
import selBox from './components/typeSelBox'
import {getPendingLists} from './api/index.js'
export default {
  name: 'App',
  components: {
    titleBox, messageBox, chartBox, selBox
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
    .typeBox{
      @include wh(64%,100%);
      float: right;
      table{
        margin-top:26px;
        @include wh(100%,100px);
        text-align: center;
        th{
          @include wh(25%,50px);
          line-height: 50px;
          background: #edf1f8;
          border:1px solid #c0c8db;
        }
        td{
          @include wh(25%,50px);
          line-height: 50px;
          border:1px solid #c0c8db;
        }
      }
    }
  }
  .informationFooter{
    @include wh(100%,60%);
    margin-top:41px;
    .statusLabel{
      float: left;
      margin-bottom:14px;
      span:nth-child(1){
        margin-right:40px;
      }
      span{
        .circle{
          @include wh(10px,10px);
          margin-right:10px;
          margin-left:15px;
          border-radius: 5px;
          display: inline-block;
        }
        .green{
          background: #44efc1;
        }
        .blue{
          background: #2de0ff;
        }
        .orange{
          background: #f8a04a;
        }
        .red{
          background: #ff4c79;
        }
        .purple{
          background: #d172d8;
        }
      }
    }
    table{
        @include wh(100%,250px);
        text-align: center;
        th{
          height:50px;
          line-height: 50px;
          background: #edf1f8;
          border:1px solid #c0c8db;
        }
        td{
          height:50px;
          white-space: nowrap;
          line-height: 50px;
          border:1px solid #c0c8db;
        }
    }
    .block{
      margin-top:40px;
    }
  }
}
</style>
