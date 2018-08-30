<template>
  <div id="app">
    <titleBox :title="'快速入口'" :titleEng="'SHORTCUT ENTRANCE'"></titleBox>
    <div class="imgBox">
      <img v-for="items in enterArr" :key="items.url" :src="items.ico" alt="" class="img" @click="link(items.url)">
    </div>
    <titleBox :title="'待办已办'" :titleEng="'BACKLOG STATISTICS'"></titleBox>
    <div class="backlogContent">
      <messageBox class="messageBox" :messageList="penddingMessageList" :label="'待办任务'" :totalNum="peddingNum"></messageBox>
      <messageBox class       ="messageBox" :messageList="processedMessageList" :label="'已办任务'"></messageBox>
    </div>
    <titleBox :title="'任务信息'" :titleEng="'TASK INFORMATION'" class="infomation"></titleBox>
    <div class="informationBox">
      <div class="informationHeader">
        <chartBox class="chart" :taskInfo="taskInfo"></chartBox>
        <div class="typeBox">
          <selBox :typeArr="typeArr" @changeCondition="changeCondition"></selBox>
          <table>
            <thead>
              <th>类型</th>
              <th>已逾期</th>
              <th>即将到期</th>
              <th>正常推进</th>
            </thead>
            <tbody>
              <td>数量</td>
              <td>{{taskInfo.overdue}}</td>
              <td>{{taskInfo.expiring}}</td>
              <td>{{taskInfo.normal}}</td>
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
        <el-table
          :data="taskList"
          align="center"
          border
          style="width:100%">
          <el-table-column
            label="序号"
            width="100">
            <template slot-scope="scope">
              <i :class="taskStateColor(scope.row.TASK_STATE)"></i>{{scope.row.num+1}}
            </template>
          </el-table-column>
          <el-table-column
            prop="ITEM_PARTAPPROACH"
            label="任务来源"
            width="150">
          </el-table-column>
          <el-table-column
            prop="ID"
            label="ID">
          </el-table-column>
          <el-table-column
            prop="ITEM_TASKSUMMARY"
            label="任务内容">
          </el-table-column>
          <el-table-column
            prop="ITEM_CANTONALLEADERNAME"
            label="分管领导"
            width="100">
          </el-table-column>
          <el-table-column
            prop="officeName"
            label="主办处室">
          </el-table-column>
          <el-table-column
            prop="OPERATOR"
            label="经办人" width="200">
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="taskListTotal"
            :page-size="pageSize"
            @current-change="changePage">
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
import {getPendingLists, inShowPermission, getProcessedLists, getOfficeAndLeaders, countPendingItems, getAllTasks} from './api/index.js'
export default {
  name: 'App',
  components: {
    titleBox, messageBox, chartBox, selBox
  },
  data () {
    return {
      penddingMessageList: null, // 待办列表
      peddingNum: 0, // 待办条数
      processedMessageList: null, // 已办列表
      // processedNum: 0,
      enterArr: null, // 快速入口接口返回数据
      taskInfo: {
        overdue: 0, // 已逾期
        normal: 0, // 正常推进
        expiring: 0, // 即将到期
        transferred: 0, // 已办结
        noTransferred: 0 // 未办结
      },
      taskList: [], // 任务信息列表
      taskListTotal: 0, // 任务信息总条数
      typeArr: {
        leaders: [],
        offices: []
      },
      leaderId: '',
      officeId: '',
      isOffice: '',
      currentPage: 1,
      pageSize: 5
    }
  },
  created () {
    this.getPendingLists() // 获取待办事件
    this.getProcessedLists() // 获取已办事件
    this.inShowPermission() // 获取快速入口模块
    this.getOfficeAndLeaders() // 获取处室委领导
    this.countPendingItems() // 获取任务信息列表
    this.getAllTasks() // 获取任务信息
  },
  methods: {
    link (url) {
      window.location.href = url
    },
    getPendingLists () {
      getPendingLists().then((res) => {
        let data = res.data
        console.log(res)
        if (data.code === '0') {
          this.penddingMessageList = data.pendingLists
          this.peddingNum = data.totalNum
        } else {
          alert(data.code)
        }
      }).catch((err) => {
        alert('执行出错', err)
      })
    },
    getProcessedLists () {
      getProcessedLists().then((res) => {
        let data = res.data
        console.log(res)
        if (data.code === '0') {
          this.processedMessageList = data.pendingLists
        // this.processedNum = data.totalNum
        } else {
          alert(data.code)
        }
      }).catch((err) => {
        alert('执行出错', err)
      })
    },
    inShowPermission () {
      inShowPermission().then((res) => {
        let data = res.data
        console.log(data)
        if (data.status === 10000) {
          let arr = data.result
          arr.forEach(element => {
            element.ico = window.location.protocol + '//' + window.location.host + element.ico
          })
          this.enterArr = arr
        } else {
          alert(data.message)
        }
      }).catch((err) => {
        alert('执行出错', err)
      })
    },
    getOfficeAndLeaders () {
      getOfficeAndLeaders().then((res) => {
        let data = res.data
        console.log(data)
        if (data.status === 10000) {
          this.typeArr = data.result
        } else {
          alert(data.message)
        }
      }).catch((err) => {
        alert('执行出错', err)
      })
    },
    countPendingItems () {
      let parm = {
        leaderId: this.leaderId || '',
        officeId: this.officeId || '',
        pageStart: this.currentPage
      }
      countPendingItems(parm).then((res) => {
        let data = res.data
        console.log('pendingItems', data)
        if (data.status === 10000) {
          let arr = data.result.taskList
          arr.forEach((element, index) => {
            element.num = index
          })
          this.taskList = arr
          this.taskListTotal = data.result.acount
        } else {
          alert(data.message)
        }
      }).catch((err) => {
        alert('执行出错', err)
      })
    },
    getAllTasks () {
      let parm = {
        leaderId: this.leaderId || '',
        officeId: this.officeId || '',
        pageStart: this.currentPage
      }
      getAllTasks(parm).then((res) => {
        let data = res.data
        console.log('getAllTasks', data)
        if (data.status === 10000) {
          let {overdue, normal, expiring, transferred, noTransferred} = data.result
          this.taskInfo = {overdue, normal, expiring, transferred, noTransferred}
        } else {
          alert(data.message)
        }
      }).catch((err) => {
        alert('执行出错', err)
      })
    },
    changeCondition (parm) {
      let {leaderId, officeId, isOffice} = parm
      if (leaderId || officeId) {
        isOffice = ''
      }
      this.leaderId = leaderId
      this.officeId = officeId
      this.isOffice = isOffice
      this.countPendingItems()
    },
    changePage (page) {
      this.currentPage = page
      this.countPendingItems()
    },
    taskStateColor (taskState) {
      let arr = []
      switch (taskState) {
        case 'overdue':
          arr = ['circle', 'green']
          break
        case 'normal':
          arr = ['circle', 'red']
          break
        case 'expiring':
          arr = ['circle', 'blue']
          break
        case 'transferred':
          arr = ['circle', 'purple']
          break
        case 'work':
          arr = ['circle', 'orange']
          break
      }
      return arr
    }
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
    }
    // table{
    //     width:100%;
    //     text-align: center;
    //     th{
    //       height:50px;
    //       line-height: 50px;
    //       border:1px solid #c0c8db;
    //     }
    //     td{
    //       height:50px;
    //       white-space: nowrap;
    //       line-height: 50px;
    //       border:1px solid #c0c8db;
    //     }
    //     tr:hover{
    //       background: #dae5fb;
    //     }
    // }
    .block{
      margin-top:40px;
    }
  }
}
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
.imgBox{
  overflow: hidden;
  .img{
    width:19%;;
    float: left;
    margin:15px 0 40px 0.8%;
    border-radius: 5px;
    background: #89afe4;
  }
  .img:hover{
    background: #6494d7;
  }
}
</style>
