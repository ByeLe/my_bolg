<template>
<!-- 标题栏 -->
  <div class="articleTypeList">
    <h2 @click="changeViewActive">
      <i class="iconfont icon-shouqi" v-show="!isOpen"></i>
      <i class="iconfont icon-open"  v-show="isOpen"></i>
      {{typeTitle}}
    </h2>
    <!-- 内容区域 -->
    <transition name="bottom">
      <ul v-show="isOpen">
        <li class="typelist" v-for="(item, index) in typeListDetail" :key="index">
          <span>{{item.name}}</span>
          <!-- <span>{{item.total}}篇</span> -->
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    changeViewActive() {
      this.isOpen = !this.isOpen
    }
  },
  props: {
    typeTitle: {
      type: String,
      default: '默认标题'
    },
    typeListDetail: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => [
        { name: 'web前端', total: '2' },
        { name: 'Vue开发', total: '4' },
        { name: '显示全部', total: '4' }
      ]
    }
  }
}
</script>

<style>
h2{
  cursor: pointer;
}
.articleTypeList{
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.icon-shouqi{
  color: #ffffff;
}
.articleTypeList h2 {
  /* text-align: center; */
  color: #ffffff;
  height: 50px;
  line-height: 50px;
  width: 95%;
  margin:  0 auto;
  font-weight: bold;
}
.articleTypeList ul {
  width: 95%;
  margin:  0 auto;
}
.typelist{
  width: 90%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  /* box-sizing: border-box; */
  border: 1px solid transparent;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
  transition: all 1s;
}
.typelist:hover span{
  color: lightgreen;
  transform: scale(1.1, 1.1)
}
.typelist span{
  display: block;
  color: #ffffff;
  padding-left: 30px;
   transition: all 0.5s;
}
</style>
