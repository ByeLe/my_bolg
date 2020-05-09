<template>
  <div class="infocontent" @click="openNewWindow">
    <div class="infohead">
      <i class="iconfont icon-html5" v-if="fileType === 'HTML5'"></i>
      <i class="iconfont icon-socialcss3"  v-if="fileType === 'CSS'"></i>
      <i class="iconfont icon-JS"  v-if="fileType === 'JavaScript'"></i>
      <i class="iconfont icon-vuejs"  v-if="fileType === 'VUE'"></i>
    </div>
    <div class="infodesc">
      <p class="title">{{title}}</p>
      <span>{{desc}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fileType: {
      type: String,
      default: 'VUE'
    },
    desc: {
      type: String,
      default: '这篇文章值得您观看'
    },
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
  methods: {
    openNewWindow() {
      console.log(this.path)
      window.open(this.axios.defaults.baseURL + this.path)
    }
  }
}
</script>

<style scoped>
.infocontent{
  width: 100%;
  /* height: 300px; */
  border:1px solid #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
.infohead{
  width: 100%;
  height: 200px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  display: flex;
  align-items: center;
  justify-content: center;
   transition: all 0.5s;
}
.infohead:hover{
  transform: scale(1.2, 1.2);
}
.icon-html5{
  color: lightcoral;
  font-size: 100px;
}
.icon-JS{
  color: yellowgreen;
   font-size: 100px;
}
.icon-vuejs{
  font-size: 100px;
  color: lightgreen;
}
.icon-socialcss3{
  color: lightskyblue;
  font-size: 110px;
}
.infodesc{
  /* margin-top: 20px; */
  width: 100%;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  padding: 10px;
}
.infodesc:hover .title, .infodesc:hover span{
  color: lightcoral;
}
.title{
  /* text-align: center; */
  color: #ffffff;
  text-overflow: ellipsis;
  overflow: hidden;
  height:40px;
  line-height: 40px;
  white-space: nowrap;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #ffffff;
  transition: all 0.5s;
}
.infodesc span{
  transition: all 0.5s;
  display: block;
  width: 100%;
  height: 80px;
  line-height: 20px;
  overflow: hidden;
  margin-top: 20px;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
color: #DCDCDC;
font-size: 13px;
}
</style>
