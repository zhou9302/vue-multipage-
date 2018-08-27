<template>
  <div class="titleBox">
    <div class="title">
      {{title}}<span>{{titleEng}}</span>
    </div>
  </div>
</template>
<script>
export default{
  props: ['title', 'titleEng'],
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .title{
  @include wh(100%,38px);
  line-height: 38px;
  border-left:6px solid #5592ee;
  border-radius: 4px;
  background: #fff;
  font-size:16px;
  font-family: PingFang-SC-Bold;
  text-indent: 14px;
  color:#414c65;
  text-align: left;
  span{
    color:#5592ee;
    margin-left:10px;
  }
}
</style>
