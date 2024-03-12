<!--
*@custom-form
*@author yuge
*@date 2023/6/28 10:07
-->
<template>
  <div class="tab-main">
    <dv-border-box-6 :color="['#007d9d90', '#007d9d']" @click.native="goPath(item,i)"
                     v-for="(item,i) in formData" :key="item.title" class="tab-view-unit">
      <div class="tab-view-unit" :class="{'tab-selected':current===item.path}">{{ item.title }}</div>
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: "TabView",
  props: {
    formData: {
      type: Array,
      default: () => [
        {title: '首页', path: '/home'},
        {title: '产销监测', path: '/product'},
      ]
    },
  },
  components: {},
  data() {
    return {
      current:'home'
    }
  },
  mounted() {
    this.current=this.$route.path
  },
  methods: {
    goPath(item){
      if (this.current===item.path){
        return
      }
      this.current=item.path
      this.$router.replace(item.path)
    }
  },
  destroyed() {
  }
}
</script>

<style scoped lang="scss">

.tab-main {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;

  display: flex;
  height: max-content;
  width: max-content;
  color: white;

  .tab-view-unit {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover{
      font-size: 17px;
    }
  }

  .tab-view-unit+.tab-view-unit{
    margin-left: 8px;
  }

  .tab-selected{
    color: #14e1cd;
  }
}
</style>
