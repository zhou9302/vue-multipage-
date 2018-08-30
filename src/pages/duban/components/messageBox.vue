<template>
  <div>
    <div class="backlogTitle">
      <div>{{label}}<span class="counter" v-if="totalNum">{{totalNum}}</span></div>
      <div class="more">更多</div>
    </div>
    <div class="backlogContent">
        <div class="item" v-for="items in messageList" :key="items.id" @click="link(items)" v-if="items.formid==='11e8-6eac-3369ebe6-a58e-6933a8e5e211'">
            <div class="icon">
              <img src="../assets/email.png" alt="" v-if="label=='已办任务'">
              <div v-else>
                <div v-if="items.formid==='11e8-6eac-3369ebe6-a58e-6933a8e5e211'" class="distribute">待派发</div>
                <div v-else class="audit">待审核</div>
              </div>
            </div>
            <div class="itemContent">{{items.content}}</div>
            <div class="date">{{dayFormat(items.date)}}</div>
        </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['messageList', 'label', 'totalNum'],
  data () {
    return {

    }
  },
  methods: {
    dayFormat (items) {
      return window.dayjs(items).format('YYYY-MM-DD')
    },
    link (items) {
      console.log(items)
      window.location.href = `http://172.17.0.179:8080/obpm/portal/dynaform/document/view.action?_formid=${items.formid}&_docid=${items.id}&application=${items.application}&_backURL=/obpm/portal/H5/closeTab.jsp`
      // window.location.href = `http://172.17.0.179:8080/obpm/portal/dynaform/document/view.action?_formid=11e8-7912-7090cd00-89e4-1578c741478f&_docid=11e8-aacd-64849bfb-a742-c9f683b90aac&application=11e8-6ac3-e24e01d7-a58e-6933a8e5e211&_backURL=/obpm/portal/H5/closeTab.jsp`
    }
  }
}
</script>
<style lang="scss" scoped>
.backlogTitle{
  width:100%;
  height:40px;
  line-height: 40px;
  font-size:16px;
  color:#414c65;
  padding:0 16px;
  div{
    float: left;
    &:nth-child(2){
      font-size:14px;
      color:#8994af;
      float: right;
    }
  }
  .counter{
    width:16px;
    height:16px;
    border-radius: 8px;
    background: red;
    color:white;
    text-align: center;
    line-height: 16px;
    display: inline-block;
    margin-left:10px;
    vertical-align: -1px;
  }
  .more{
    cursor: pointer;
  }
}
.backlogContent{
  width:100%;
  height:200px;
  padding:0 12px 0 18px;
  .item{
    @include wh(100%,48px);
    display: flex;
    justify-content: flex-start;
    margin-top:10px;
    line-height: 48px;
    &:hover{
      background: #f6f8fa;
      cursor: pointer;
    }
    .icon{
      @include wh(48px,48px);
      margin-left:13px;
      div{
         font-size:12px;
         height:24px;
         line-height: 24px;
         margin-top:12px;
      }
      .audit{
        background: #e6effc;
        color:#5592ee;
      }
      .distribute{
        background: #fdeded;
        color:#ee4d4d;
      }
    }
    .itemContent{
      @include wh(80%,48px);
      text-align: left;
      font-size:14px;
      color:#414c65;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      padding-left:2%;
    }
    .date{
      @include wh(150px,48px);
      color:#8994af;
      font-size:14px;
    }
  }
}
</style>
