<template>
  <div class="myheadcontent">
    <div class="headerset">
        <span>BLOG OF Bye丶L</span>
        <ul class="desc">
           <li :class="[selectPath == 'Home' ? 'select' : '']">主页</li>
          <li>个人介绍</li>
          <li :class="[selectPath == 'Article' ? 'select' : '']">文章中心</li>
      </ul>
      <div class="mobileDesc">
        <slot></slot>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    selectPath: {
      type: String,
      default: 'Home'
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 800px){
  .desc{
    display: none !important;
  }
  .mobileDesc{
    display: block !important;
  }
}

.myheadcontent{
  width: 100%;
}
.headerset{
  width: 90%;
  height: 100px;
  margin: 0 auto;
  /* margin-top: 20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.select{
  background-color: #5bc0de;
  border-radius: 10px;
}
.headerset span{
  display: block;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  color: #fff;
  font-weight: bold
}
.desc{
  height: 100%;
  display: flex;
  align-items: center;
  /* display: none; */
}
.desc li{
  width: 100px;
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  /* border-right: 1px solid #9d9d9d; */
  padding: 10px;
  text-align: center;
  font-weight: bold;
  transition: all 0.5s linear;
  cursor: pointer;
}
.mobileDesc{
  width: 100px;
  height: 100px;
  display: none;
}
.desc li:hover{
  background-color: #5bc0de;
  border-radius: 10px;
}
</style>
