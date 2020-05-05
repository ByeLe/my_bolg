<template>
  <div class="articlecontent">
    <div class="contentbg">
      <img src="../home/img/banner.jpg" alt="">
    </div>
    <div class="contentMask">
      <my-header :selectPath="nowPath" class="headerBg">
        <articletype-list v-for="(item, index) in typeList" :key="index"
            :typeTitle="item.title"
            :typeListDetail="item.detailArr"
            :typeName="item.type">
          </articletype-list>
        <!-- </div> -->
      </my-header>
      <div class="contentArea">
         <div class="articleindex">
            <div class="waperContent">
             <articletype-list v-for="(item, index) in typeList" :key="index"
                :typeTitle="item.title"
                :typeListDetail="item.detailArr"
                :typeName="item.type">
            </articletype-list>
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
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      nowPath: 'Article',
      testImagUrl: 'http://seopic.699pic.com/photo/50007/0704.jpg_wh1200.jpg',
      typeList: [
        {
          title: 'JAVASCRIPT',
          type: 'JAVASCRIPT',
          detailArr: [
            {
              name: '什么是JS',
              id: 5
            },
            {
              name: 'JS的作用域',
              id: 6
            },
            {
              name: 'JS作用域之上下文',
              id: 7
            },
            {
              name: '查看全部',
              id: 'JAVASCRIPT'
            }
          ]
        },
        {
          title: 'HTML5',
          type: 'HTML5',
          detailArr: [
            {
              name: '什么是HTML5',
              id: 2
            },
            {
              name: 'HTML5常见标签',
              id: 3
            },
            {
              name: 'HTML浏览器解析原理',
              id: 4
            },
            {
              name: '查看全部',
              id: 'HTML'
            }
          ]
        }
      ],
      titleSViewAdd: false
    }
  },
  mounted() {
    this.getArticleInfo()
  },
  computed: {
    ...mapState({
      parentType: state => state.scheme.parentType,
      selectId: state => state.scheme.selectId,
      showMenus: state => state.menus.showMenus
    })
  },
  methods: {
    ...mapMutations(['changeSelectScheme']),
    getArticleInfo() {
      if (this.parentType === '') { // 说明没有类型
        this.changeSelectScheme({ parentType: this.typeList[0].type, selectId: this.typeList[0].type })
      }
    },
    getScheme() {
      // 这里需要去服务端请求，目前先是假数据
    }
  },
  components: {
    'my-header': myHeader,
    'articletype-list': articleTypeList,
    // eslint-disable-next-line vue/no-unused-components
    'article-info': articleInfo
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
.icon-caidan{
  font-size: 26px;
}

</style>
