<template>
  <div class="articlecontent">
    <div class="contentbg">
      <img src="../home/img/banner.jpg" alt="">
    </div>
    <div class="contentMask">
      <my-header :selectPath="nowPath" class="headerBg">
        <div class="mobilmenu"  @click="changeMenusActive"  :class="[showMenus ? 'mobilmenuActive' : 'mobilmenuHide']">
          <i class="iconfont icon-caidan"></i>
        </div>
        <div class="mobileheadContent" v-show="showMenus">
          <p>主页</p>
          <p>个人中心</p>
          <p class="select">文章中心</p>
          <typelist-mobile></typelist-mobile>
          <typelist-mobile></typelist-mobile>
          <typelist-mobile></typelist-mobile>
        </div>
      </my-header>
      <div class="contentArea">
         <div class="articleindex">
            <div class="waperContent">
             <articletype-list v-for="(item, index) in typeList" :key="index" :typeTitle="item.title"></articletype-list>
           </div>
         </div>
         <div class="articleee" v-show="!showMenus">
           <div class="articleeewrpeer">
            <div ref="atticleInfoList" class="atticleInfoList">
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
              <article-info class="articleeeList"></article-info>
            </div>
         </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader/myHeader.vue'
import articleTypeList from '@/components/articleTypeList/articleTypeList.vue'
import articleInfo from '@/components/articleInfo/articleInfo.vue'
import typeListMobile from '@/components/typeListMobile/typeListMobile.vue'
export default {
  data() {
    return {
      nowPath: 'Article',
      testImagUrl: 'http://seopic.699pic.com/photo/50007/0704.jpg_wh1200.jpg',
      typeList: [
        { title: 'HTML5' },
        { title: 'JAVASCRIT' },
        { title: 'CSS' },
        { title: 'VUE' }
      ],
      titleSViewAdd: false,
      showMenus: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.titleSViewAdd = true
    }, 2000)
  },
  methods: {
    getArticleInfo() {
      // var child = this.$refs.atticleInfoList.children
    },
    changeMenusActive() {
      this.showMenus = !this.showMenus
    }
  },
  components: {
    'my-header': myHeader,
    'articletype-list': articleTypeList,
    // eslint-disable-next-line vue/no-unused-components
    'article-info': articleInfo,
    // eslint-disable-next-line vue/no-unused-components
    'typelist-mobile': typeListMobile
  }
}
</script>

<style scoped>
@media screen and (max-width: 800px){
  .articleindex{
    display: none !important;
  }
  .contentbg img{
  width: auto !important;
  height: 100% !important;
}
.atticleInfoList{
  justify-content: center !important;
  margin-left: 0px !important;
}
.articleeeList{
  width:100% !important;
  margin-right: 0px !important;
}
.articleee{
  width: 100% !important;
}
}
.articlecontent{
  width: 100%;
  height: 100%;
  /* background-image: url('../home/img/banner.jpg') */
}
.contentbg{
   width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.contentbg img{
  width: 100%;
  height: auto;
}
.contentMask{
  position: relative;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display:flex;
  flex-direction: column;
}
.contentArea{
  flex-grow: 1;
  display: flex;
  position: relative;
  width: 90%;
  margin:  0 auto;
  overflow: hidden;
  /* flex-wrap: wrap; */
}
.articleindex{
  width: 20%;
  height: 95%;
  /* background-color: rgba(255, 255, 255, 0.2); */
  overflow: hidden;
}
.waperContent{
  width: 100%;
  height: 100%;
  overflow:auto;
}
.articleee{
 width:80%;
  height: 95%;
  /* margin-left: 20px; */
  overflow: hidden;
}
.articleeewrpeer{
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar{
  display: none;
}
.atticleInfoList{
  width:100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
  /* margin-left: 40px; */
}
.articleeeList{
  width:30%;
  margin-right: 20px;
}
.articleeeList :hover{
  cursor: pointer;
}
/* 移动端导航条 */
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
.icon-caidan{
  font-size: 26px;
}
.mobileheadContent{
  width:90%;
  /* height: 200px; */
  margin: 0  auto;
  position: absolute;
  right: 0px;
  left: 0px;
  /* top: 0px; */
  margin-left: auto;
  margin-right: auto;
  /* background-color: #F0F0F0; */
  border: 1px solid #ffffff;
  z-index: 999;
  transition: all 0.5s;
  /* max-height: 0; */
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
.mobileheadContent p:hover{
  color:lightgreen;
  transform: scale(1.1, 1.1);
}
</style>
