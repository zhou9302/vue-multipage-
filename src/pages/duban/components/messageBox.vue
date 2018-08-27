<template>
  <div>
    <div class="backlogTitle">
      <div>已办任务<span class="counter">3</span></div>
      <div class="more">更多</div>
    </div>
    <div class="backlogContent">
        <div class="item">
            <div class="icon">
              <img src="../assets/email.png" alt="">
            </div>
            <div class="itemContent">优化项目资金保障。由市财政局，国资委分工负责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为1231312313123123123</div>
            <div class="date">2018.05.17</div>
        </div>
        <div class="item">
            <div class="icon">
              <img src="../assets/email.png" alt="">
            </div>
            <div class="itemContent">优化项目资金保障。由市财政局，国资委分工负责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为1231312313123123123</div>
            <div class="date">2018.05.17</div>
        </div>
        <div class="item">
            <div class="icon">
              <img src="../assets/email.png" alt="">
            </div>
            <div class="itemContent">优化项目资金保障。由市财政局，国资委分工负责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为1231312313123123123</div>
            <div class="date">2018.05.17</div>
        </div>
        <div class="item">
            <div class="icon">
              <img src="../assets/email.png" alt="">
            </div>
            <div class="itemContent">优化项目资金保障。由市财政局，国资委分工负责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为责，积极盘活我市存量国有资产和资源，，通过合理合规途径，注入市属国有企业，提高企业融资能力，为1231312313123123123</div>
            <div class="date">2018.05.17</div>
        </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {

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
      @include wh(15%,30px);
      margin-left:13px;
    }
    .itemContent{
      padding:0 10px;
      font-size:14px;
      color:#414c65;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap
    }
    .date{
      color:#8994af;
      font-size:14px;
      margin:0 10px 0 12px;
    }
  }
}
</style>
