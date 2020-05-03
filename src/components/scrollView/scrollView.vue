<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    InitializeBs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    createScrollView() {
      this.sview = new BScroll('.wrapper', {
        scrollY: true,
        tap: true,
        mouseWheel: true
      })
    }
  },
  watch: {
    InitializeBs() {
      if (this.InitializeBs) {
        console.log('创建滑动')
        this.createScrollView()
      }
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
  width: 100%;
}
</style>
