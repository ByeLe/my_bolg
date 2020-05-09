<template>
  <div class="homecontent">
    <div class="banner" :style="bannerStyle" v-if="!showBannerShu">
      <img src="./img/banner.jpg" alt="">
      <img src="./img/cover.jpg" alt="">
      <img src="./img/bg_1.jpg" alt="">
    </div>
    <div class="bannershu" :style="bannerStyle"  v-if="showBannerShu">
      <img src="./img/shu1.jpg" alt="">
      <img src="./img/shu2.jpg" alt="">
      <img src="./img/shu3.jpg" alt="">
    </div>
    <div class="mask">
      <my-header :selectPath="nowPath">
      </my-header>
      <div class="middle" v-show="!showMenus">
        <p>Hello World</p>
         <p>Created By Bye丶L</p>
      </div>
      <div class="bottmset" v-show="!showMenus">
        <ul class="callWay">
          <li class="iconfont icon-github"></li>
          <li class="iconfont icon-weixin"></li>
          <li class="iconfont icon-qq-copy-copy"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader/myHeader.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      bannerStyle: '',
      bannerIndex: 0,
      bannerNum: 3,
      slideFlag: 'left',
      timer: '23:39:40',
      nowPath: 'Home',
      showBannerShu: true,
      canNext: true
    }
  },
  mounted() {
    window.onresize = () => {
      console.log('页面大小改变')
      if (this.canNext) {
        this.getClientSize()
        this.canNext = false
        setTimeout(() => {
          this.canNext = true
          this.getClientSize()
        }, 2000)
      }
    }
    this.getClientSize()
    this.moveBanner()
    if (this.showMenus) {
      this.changeShowMenus()
    }
  },
  computed: {
    ...mapState({
      showMenus: state => state.menus.showMenus
    })
  },
  components: {
    'my-header': myHeader
  },
  methods: {
    ...mapMutations(['changeShowMenus']),
    getClientSize() {
      this.showBannerShu = window.innerWidth < window.innerHeight
    },
    moveBanner() {
      setInterval(() => {
        if (this.slideFlag === 'left') {
          this.bannerIndex += 1
          if (this.bannerIndex < this.bannerNum) { // 小于  向左滑
            this.bannerStyle = `left:-${this.bannerIndex * 100}%;`
          }
          if (this.bannerIndex === this.bannerNum) {
            this.slideFlag = 'right'
            this.bannerIndex -= 1
          }
        }
        if (this.slideFlag === 'right') {
          this.bannerIndex -= 1
          if (this.bannerIndex >= 0) {
            this.bannerStyle = `left:-${this.bannerIndex * 100}%`
          }
          if (this.bannerIndex === 0) {
            this.slideFlag = 'left'
          }
        }
      }, 3000)
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 800px){
  .banner img{
  /* height: 100% !important;
  width: auto !important;
  float: left; */
}
}
.homecontent{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.banner,.bannershu{
  position: relative;
  width:300%;
  height: 100%;
  transition: all 1s;
  left:-0%;
}
.bannershu img{
  display: block;
  width: 33.3%;
  height: 100%;
  float: left;
}
.banner img{
  display: block;
  width: 33.3%;
  height: auto;
  float: left;
}
/* .select{
  background-color: #5bc0de;
  border-radius: 10px;
} */
/**蒙版属性 */
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7)
}

/**联系方式 */
.callWay, .desc{
  height: 100%;
  display: flex;
  align-items: center;
}
.callWay{
  justify-content: center;
}
.callWay :last-child{
  font-size: 46px;
}
.callWay li {
  width: 80px;
  font-size: 40px;
  color: #fff;
}
.middle{
  width: 90%;
  height: 400px;
  border: 1px solid #9d9d9d;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
   flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  border-radius: 20px;
}
.middle p {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fff;
  font-size: 70px;
  font-weight:900
}
.middle p:last-of-type{
  font-size: 20px;
}
.middle span{
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.bottmset{
  position: absolute;
  width: 90%;
  height: 50px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  bottom: 50px;

}
</style>
