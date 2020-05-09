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
            :typeName="item.type"
            :path="item.path">
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
              <article-info class="articleeeList"
              v-for="(item, index) in articleList"   :key="index"
              :title="item.title"
              :desc="item.fileDesc"
              :fileType="item.type"
              :path="item.path"></article-info>
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
      typeList: [],
      titleSViewAdd: false,
      articleList: []
    }
  },
  mounted() {
    this.getActicleType()
    this.setContentArticle()
    if (this.showMenus) {
      this.changeShowMenus()
    }
  },
  computed: {
    ...mapState({
      parentType: state => state.scheme.parentType,
      selectId: state => state.scheme.selectId,
      showMenus: state => state.menus.showMenus
    })
  },
  methods: {
    ...mapMutations(['changeSelectScheme', 'changeShowMenus']),
    async getActicleType() {
      const { data: res } = await this.axios.get('/classification/select')
      this.typeList = []
      if (res.status === 200) {
        for (var i = 0; i < res.data.length; i++) {
          const obj = {}
          obj.title = res.data[i].type
          obj.type = res.data[i].type
          this.getArticleFromService(obj, res.data[i].type, res.data.length)
        }
      }
    },
    async setContentArticle() {
      if (this.parentType.length === 0) {
        return
      }
      const { data: res } = await this.axios.get('/getArticleByType', {
        params: {
          page: 0,
          size: 10,
          selectType: this.parentType
        }
      })
      if (res.status === 200) {
        this.articleList = this.articleList.concat(res.data.detail)
        console.log('这是右侧文章区域')
      }
    },
    async getArticleFromService(obj, type, compareLen) {
      const { data: res } = await this.axios.get('/getArticleByType', {
        params: {
          page: 0,
          size: 5,
          selectType: type
        }
      })
      if (res.status === 200) {
        const detail = res.data.detail
        for (var i = 0; i < detail.length; i++) {
          detail[i].name = detail[i].title
        }
        detail.push({
          name: '查看全部',
          id: type
        })
        console.log(detail)
        obj.detailArr = detail
        this.typeList.push(obj)
        if (this.typeList.length === compareLen) {
          this.getArticleInfo()
        }
      }
    },
    getArticleInfo() {
      if (this.parentType === '') { // 说明没有类型
        this.changeSelectScheme({ parentType: this.typeList[0].type, selectId: this.typeList[0].type })
      }
    },
    getScheme() {
      // 这里需要去服务端请求，目前先是假数据
    }
  },
  watch: {
    parentType() {
      this.setContentArticle()
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
