<template>
  <div class="selBox">
    <div class="titleBox">
      <div>处室</div>
      <div>委领导</div>
    </div>
    <div class="itemsBox">
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
      <div>办公室</div>
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
<style scoped lang="scss">
  .selBox{
    @include wh(100%,131px);
    .titleBox{
      overflow: hidden;
      border-bottom:1px solid  #f1f1f3;
      div{
        float: left;
        @include wh(95px,31px);
      }
    }
    .itemsBox{
      @include wh(100%,75px);
      background: #f9fafd;
      margin-top:22px;
      div{
        float: left;
        min-width: 12.5%;
        font-size:14px;
        margin:10px auto;
      }
    }
  }
</style>
