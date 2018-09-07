<template>
  <div class="selBox">
    <div class="titleBox">
      <div @click="sel('处室')" :class="{sel:isOffice==true}"><i class="iconfont icon-bumen"></i>
处室</div>
      <div @click="sel('委领导')" :class="{sel:isOffice==false}">委领导</div>
    </div>
    <div class="itemsBox">
      <div v-if="isOffice==true" v-for="items in typeArr.offices" :key="items.NAME" @click="selItems(items.ID)" :title="items.NAME"><span :class="{line:items.ID==officeId}">{{items.label?items.label:items.NAME}}</span></div>
      <div v-if="isOffice==false" v-for="items in typeArr.leaders" :key="items.item_cantonalleadername" @click="selItems(items.ITEM_CANTONALLEADERUUID
)" :title="items.ITEM_CANTONALLEADERNAME"><span :class="{line:items.ITEM_CANTONALLEADERUUID==leaderId}">{{items.ITEM_CANTONALLEADERNAME}}</span></div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['typeArr'],
  data () {
    return {
      selType: '处室',
      leaderId: '',
      officeId: '',
      isOffice: true
    }
  },
  methods: {
    sel (parm) {
      this.officeId = ''
      this.leaderId = ''
      if (parm === '处室') {
        this.isOffice = true
      } else {
        this.isOffice = false
      }
      this.$emit('changeCondition', {leaderId: this.leaderId, officeId: this.officeId, isOffice: this.isOffice})
    },
    selItems (id) {
      console.log('这里是id', id)
      if (this.isOffice === true) {
        this.leaderId = ''
        this.officeId = id
      } else {
        this.leaderId = id
        this.officeId = ''
      }
      this.$emit('changeCondition', {leaderId: this.leaderId, officeId: this.officeId, isOffice: this.isOffice})
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
        @include wh(12.5%,37px);
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        line-height: 37px;
        font-size:14px;
      }
    }
    .line{
      border-bottom:2px solid #5592ee;
    }
  }
</style>
