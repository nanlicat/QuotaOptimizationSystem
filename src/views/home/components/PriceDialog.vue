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
              <div class="price-main">
                <div class="price-inner" v-for="item in showList" :key="item.id">
                  <price-line-chart class="chart" :data="item.chartData"/>
                  <div v-if="item.blockList" class="all-block">
                    <city-image-block  v-for="block in item.blockList" :key="block.title" class="block" type="contracted"
                                       :title="block.title" :value="block.value" :unit="block.unit"/>
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

export default {
  name: "PriceDialog",
  components: {CityImageBlock, PriceLineChart, CrossSign},
  computed: {},
  props: {
    title: {
      type: String,
      default: '市场价格情况详情',
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
      showList:[
        {
          id:1,
          chartData:{
            title: '鸡肉与猪肉市场价格表',
            xData:['1', '2', '3', '4', '5'],
            yList1: [7.80, 6.78, 7.76, 5.80, 7.80, ],
            yList2:[6.76, 8.70,8.69, 7.61,8.60,],
          },
          blockList:[
            {title: '相关度量',value:'0.94'},
            {title: '波动方向',value:'一致'},
            {title: '波动顺序',value:'前'},
            {title: '预测价格',value:'7.6',unit:'元'},
          ]
        },
        {
          id:2,
          chartData:{
            title: '牛肉与猪肉市场价格表',
            xData:['1', '2', '3', '4', '5'],
            yList1: [7.80, 6.78, 7.76, 5.80, 7.80, ],
            yList2:[6.76, 8.70,8.69, 7.61,8.60,],
          },
          blockList:[
            {title: '相关度量',value:'0.94'},
            {title: '波动方向',value:'一致'},
            {title: '波动顺序',value:'前'},
            {title: '预测价格',value:'20',unit:'元'},
          ]
        },
        {
          id:3,
          chartData:{
            title: '羊肉与猪肉市场价格表',
            xData:['1', '2', '3', '4', '5'],
            yList1: [7.80, 6.78, 7.76, 5.80, 7.80, ],
            yList2:[6.76, 8.70,8.69, 7.61,8.60,],
          },
          blockList:[
            {title: '相关度量',value:'0.94'},
            {title: '波动方向',value:'一致'},
            {title: '波动顺序',value:'前'},
            {title: '预测价格',value:'20',unit:'元'},
          ]
        },
      ]
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
  //border: 1px #0080fe solid;
  z-index: 9999;
  border-radius: 16px;
  //padding-bottom: 66px;
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

.price-main {
  height: 800px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .price-inner {
    width: 100%;
    height: 33.33%;

    display: flex;

    .chart{
      width: 70%;
    }

    .all-block {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .block{
        width: 46%;
        overflow: hidden;
      }
    }
  }
}


</style>
