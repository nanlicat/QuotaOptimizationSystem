<template>
  <div>
    <div class="dialog-modal" v-if="isVisible"></div>
    <transition name="dialog">
      <div class="dialog-main" v-if="isVisible" :style="{ left: `calc(50% - ${width} / 2)`, width, top }">
        <dv-border-box-12>
          <div class="m-dialog-main-inner">
            <div class="dialog-head">
              <div class="dialog-head-title">{{ title }}</div>
              <cross-sign @click.native="closeThis"/>
            </div>
            <div class="dialog-body">
              <div class="abnormal-main">
                <div class="abnormal-inner">
                  <dv-decoration-7 class="title"> 情况总览 </dv-decoration-7>
                  <div class="inner-content">
                    <city-image-block  v-for="block in blockList" :key="block.title" type="tech"
                                       :title="block.title" :value="block.value" :unit="block.unit"/>
                    
                  </div>
                  <div class="inner-content">
                    <city-image-block  v-for="block in blockList2" :key="block.title" type="tech"
                                       :title="block.title" :value="block.value" :unit="block.unit"/>
                    
                  </div>
                </div>
                <div class="abnormal-inner">
                  <dv-decoration-7 class="title"> 产品异常次数排行 </dv-decoration-7>
                  <div class="inner-content">
                    <dv-scroll-ranking-board :config="leftList" class="list" />
                  </div>
                </div>
                <div class="abnormal-inner bottom-chart">
                  <dv-decoration-7 class="title"> 产品明细 </dv-decoration-7>
                  <div class="inner-content">
                    <abnormal-line-chart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dv-border-box-12>
      </div>
    </transition>
  </div>
</template>

<script>

import visible from "@/mixins/edit-dialog"
import CrossSign from "@/components/CrossSign";
import PriceLineChart from "@/views/home/components/PriceLineChart";
import CityImageBlock from "@/components/CityImageBlock";
import TitleFrame from "@/components/TitleFrame";
import AbnormalLineChart from "@/views/home/components/AbnormalLineChart";

export default {
  name: "AbnormalDialog",
  components: {AbnormalLineChart, TitleFrame, CityImageBlock, PriceLineChart, CrossSign},
  computed: {},
  props: {
    title: {
      type: String,
      default: '异常情况明细',
    },
    width: {
      type: String,
      default: '1200px',
    },
    top: {
      type: String,
      default: '7%'
    },
    entity: {
      type: Object,
      default: null
    }
  },
  mixins: [visible],
  data() {
    return {
      blockList:[
        {title: '异常总数',value:'101',unit:'条'},
        {title: '未解决',value:'45',unit:'条'},
        {title: '已解决',value:'1',unit:'条'},
      ],
      blockList2:[
        {title: '异常上涨',value:'10',unit:'条'},
        {title: '异常下跌',value:'5',unit:'条'},
        {title: '已解决',value:'1',unit:'条'},
      ],
      leftList:{
        data: [
        {name:"后段",value:'32%'},
    {name:"前段",value:'31%'},
    {name:"中段",value:'30%'},
    {name:"碎肉",value:'5%'},
    {name:"皮条",value:'0.36%'},
    {name:"白条",value:'1.9%'}
        ]
      },
    }
  },
  watch: {
    isVisible(val) {
    }
  },
  mounted() {
    this.appendToBody()
  },
  methods: {
    closeThis() {
      this.isVisible = false
    },
    /**
     * 添加组件到body
     */
    appendToBody() {
      this.$nextTick(() => {
        const body = document.querySelector("body");
        if (body.append) {
          body.append(this.$el);
        } else {
          body.appendChild(this.$el);
        }
      });
    }
  },
}
</script>

<style lang='scss' scoped>
/* 设置持续时间和动画函数 */
.dialog-enter-active,
.dialog-leave-active {
  transition: all .3s ease;
}

.dialog-enter,
.dialog-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}

.dialog-modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.dialog-main {
  position: fixed;
  top: 15%;
  width: 600px;
  left: calc(50% - 300px);
  min-height: 700px;
  box-sizing: border-box;
  background-color: rgb(0, 143, 185, .2);
  z-index: 9999;
  border-radius: 16px;
  backdrop-filter: blur(20px);

  .m-dialog-main-inner {
    left: calc(50% - 300px);
    padding: 16px;
    box-sizing: border-box;

    .dialog-head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;

      .dialog-head-title {
        font-size: 20px;
        font-family: YouSheBiaoTiHei;
        color: #ffffff;
      }
    }

    .dialog-body {
      width: 100%;
      height: auto;
      min-height: 700px;
      position: relative;
    }
  }
}

.abnormal-main {
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .title {
    height: 30px;
    color: rgb(234, 244, 247);
    font-weight: bold;
    white-space: break-spaces;
  }

  .abnormal-inner {
    width: 49.5%;
    height: 260px;
    display: flex;
    flex-direction: column;
    border: rgba(0, 143, 185, 0.2) 1px dashed;
    padding: 8px;

    .inner-content{
      flex: 1;
      display: flex;
      overflow: hidden;
      .list{
        height: 100%;
        width: 100%;
      }
    }
  }

  .bottom-chart{
    width: 100%;
    height: 400px;
    margin-top: 16px;
  }
}


</style>
