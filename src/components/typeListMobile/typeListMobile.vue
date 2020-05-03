<template>
  <div class="typelistMobile">
    <div class="mobiletypeTitle" @click="showMore">
       <i class="iconfont icon-shouqi" v-show="!isOpen"></i>
       <i class="iconfont icon-open"  v-show="isOpen"></i>
      <p>123123</p>
    </div>
    <transition name="bottom">
      <div class="detailcontent" v-show="isOpen">
        <ul>
          <li v-for="(item, index) in typeListDetail"  :key="index">{{item.name}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    typeListDetail: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => [
        { name: 'web前端', total: '2' },
        { name: 'Vue开发', total: '4' }
      ]
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    showMore() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.typelistMobile{
  width: 90%;
  position: relative;
  box-sizing: border-box;
  padding-left: 10px;
}
.mobiletypeTitle{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.mobiletypeTitle p{
   box-sizing: border-box;
  padding-left: 10px;
}
.icon-shouqi{
  display: block;
}
/**内容区域 */
.detailcontent{
  width: 100%;
  /* transition: all 0.5s; */
}
.detailcontent ul {
  width: 100%;
}
.detailcontent ul li{
  width: 90%;
  height: 40px;
  line-height: 40px;
  margin:  0 auto;
  color: #ffffff;
  padding-left: 50px;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
}
</style>
