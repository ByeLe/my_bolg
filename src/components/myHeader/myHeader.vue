<template>
  <div class="myheadcontent">
    <div class="headerset">
        <span>BLOG OF Bye丶L</span>
        <ul class="desc">
           <router-link tag="li" :to="{path:'/Home'}" :class="[selectPath == 'Home' ? 'select' : '']">主页</router-link>
          <li>个人介绍</li>
          <router-link  tag="li" :to="{path:'/Article'}" :class="[selectPath == 'Article' ? 'select' : '']">文章中心</router-link>
      </ul>
      <div class="mobileDesc">
        <div class="mobilmenu" @click="changeMenusActive"  :class="[showMenus ? 'mobilmenuActive' : 'mobilmenuHide']">
          <i class="iconfont icon-caidan"></i>
        </div>
        <div class="mobileheadContent" v-show="showMenus">
          <router-link tag="p" :to="{path:'/Home'}" :class="[selectPath == 'Home' ? 'select' : '']">主页</router-link>
          <p>个人中心</p>
          <router-link tag="p" :to="{path:'/Article'}" :class="[selectPath == 'Article' ? 'select' : '']">文章中心</router-link>
          <slot></slot>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      showMenus: state => state.menus.showMenus
    })
  },
  methods: {
    ...mapMutations(['changeShowMenus']),
    changeMenusActive() {
      this.changeShowMenus()
    }
  },
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
.mobilmenu{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  /* color: #ffffff; */
}
/**菜单选中 */
.mobilmenuHide{
  background-color: none;
  border: 1px solid rgba(0, 0, 0, 0);
  color:#ffffff;
}
.mobilmenuActive{
  border: 1px solid #ffffff;
  color: #ffffff;
}
.mobileheadContent{
  width:90%;
  max-height: 500px;
  overflow: auto;
  margin: 0  auto;
  position: absolute;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;

  /* border: 1px solid #ffffff; */
  z-index: 999;
  transition: all 0.5s;
  margin-bottom: 20px;
}
.mobileheadContent p{
  width: 90%;
  height: 40px;
  line-height: 40px;
  margin:  0 auto;
  color: #ffffff;
  padding-left: 0px;
  cursor: pointer;
  transition: all 0.5s;
  box-sizing: border-box;
  padding-left: 10px;
}
.mobileheadContent p:first-of-type{
  margin-top: 20px;
}
.mobileheadContent p:last-of-type{
  margin-bottom: 20px;
}
.mobileheadContent p:hover{
  color:lightgreen;
  transform: scale(1.1, 1.1);
}
</style>
