<template>
  <div class="selBox">
    <div class="titleBox">
      <div @click="sel('处室')" :class="{sel:isOffice==true}"><i class="iconfont icon-bumen"></i>
处室</div>
      <div @click="sel('委领导')" :class="{sel:isOffice==false}">委领导</div>
    </div>
    <div class="itemsBox">
      <div v-if="isOffice==true" v-for="items in typeArr.offices" :key="items.name" @click="selItems(items.id)" :title="items.name"><span :class="{line:items.id==officeId}">{{items.name}}</span></div>
      <div v-if="isOffice==false" v-for="items in typeArr.leaders" :key="items.item_cantonalleadername" @click="selItems(items.item_cantonalleaderuuid
)" :title="items.item_cantonalleadername"><span :class="{line:items.item_cantonalleaderuuid==leaderId}">{{items.item_cantonalleadername}}</span></div>
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
      overflow: scroll;
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
