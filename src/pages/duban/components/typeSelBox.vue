<template>
  <div class="selBox">
    <div class="titleBox">
      <div @click="sel('处室')" :class="{sel:selType=='处室'}"><i class="iconfont icon-bumen"></i>
处室</div>
      <div @click="sel('委领导')" :class="{sel:selType=='委领导'}">委领导</div>
    </div>
    <div class="itemsBox">
      <div v-if="selType=='处室'" v-for="items in typeArr.offices" :key="items.name" @click="selItems(items.id)"><span :class="{line:items.id==id}">{{items.name}}</span></div>
      <div v-if="selType=='委领导'" v-for="items in typeArr.leaders" :key="items.item_cantonalleadername" @click="selItems(items.item_cantonalleaderuuid
)"><span :class="{line:items.id==id}">{{items.item_cantonalleadername}}</span></div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['typeArr'],
  data () {
    return {
      selType: '处室',
      id: ''
    }
  },
  methods: {
    sel (parm) {
      this.id = ''
      this.selType = parm
    },
    selItems (id) {
      this.id = id
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
        line-height: 31px;
      }
      .sel{
        background: #5592ee;
        color:white;
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
    .line{
      border-bottom:2px solid #5592ee;
    }
  }
</style>
