<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('页面创建')
    window.onresize = () => { // 监听浏览器窗口大小改变  将选项隐藏  防止出现bug
      if (this.showMenus) {
        this.changeShowMenus()
      }
    }
  },
  computed: {
    ...mapState({
      showMenus: state => state.menus.showMenus
    })
  },
  methods: {
    ...mapMutations(['changeShowMenus'])
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
