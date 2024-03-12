<template>
  <div class="page-view">
    <!--    left-->
    <div class="page-left-view">
      <div class="zhtx-view">
        <title-frame title="生产情况总览">
          <left-bar-chart  :data="{name: '生产目标', value: 75 }"/>
          <div class="flex-around">
            <city-image-block type="leaves" title="累计销售数量" value="45" unit="元"/>
            <city-image-block type="leaves" title="目标销售数量" value="17" unit="元"/>
            <city-image-block type="leaves" title="次日预测销售数量" value="17" unit="元"/>
          </div>
        </title-frame>
      </div>
      <div class="cstz-view">
        <title-frame title="产品种类生产占比">
          <div class="chart-inner-4">
            <normal-pie-chart class="cell" v-for="item in pieList" :data="item"/>
          </div>
        </title-frame>
      </div>
      <div class="gcjg-view">
        <title-frame title="产品种类生产排行">
          <dv-scroll-ranking-board :config="leftList" class="left-list" />
        </title-frame>
      </div>
    </div>
    <!--    right-->
    <div class="page-right-view">
      <div class="zhtx-view">
        <title-frame title="销售情况总览">
          <left-bar-chart  :data="{name: '销售目标', value: 82 }"/>
          <div class="flex-around">
            <city-image-block type="leaves" title="活动累计销售" value="405.1" unit="万元"/>
            <city-image-block type="leaves" title="活动累计销售" value="170.1" unit="万元"/>
            <city-image-block type="leaves" title="活动累计销售" value="107.1" unit="万元"/>
          </div>
        </title-frame>
      </div>
      <div class="cstz-view">
        <title-frame title="产品种类销售占比">
          <div class="chart-inner-4">
            <normal-pie-chart class="cell" v-for="item in rightPieList" :data="item"/>
          </div>
        </title-frame>
      </div>
      <div class="gcjg-view">
        <title-frame title="产品种类销售排行">
          <dv-scroll-ranking-board :config="rightList" class="left-list" />
        </title-frame>
      </div>
    </div>
  </div>
</template>

<script>
import TitleFrame from '@/components/TitleFrame.vue'
import SpotLabel from '@/components/SpotLabel'
import UnitNumber from '@/components/UnitNumber'
import SolitaryElderlyDialog from '@/components/SolitaryElderlyDialog.vue'
import CaseInfoDialog from '@/components/CaseInfoDialog'
import ParkingDialog from '@/components/ParkingDialog'
import VideoMonitor from "@/components/VideoMonitor"
import {mapGetters} from 'vuex'
import AutoScrollList from '@/components/AutoScrollList'
import AutoHorizontalScroll from '@/components/AutoHorizontalScroll'
import AutoScrollTable from "@/components/auto-scroll-table.vue";
import IconDataBlock from "@/components/IconDataBlock.vue";
import HorizontalTab from "@/components/HorizontalTab.vue";
import PieChart from "@/components/Chart/PieChart/index.vue";
import BarChart from "@/components/Chart/BarChart/index.vue";
import CityImageBlock from "@/components/CityImageBlock/index.vue";
import LeftPieChart from "@/views/product/components/LeftPieChart.vue";
import LeftBarChart from "@/views/product/components/LeftBarChart.vue";
import NotifySetting from "@/components/NotifySetting/index.vue";
import HotWordChart from "@/components/HotWordChart/index.vue";
import LeftBarChart2 from "@/views/product/components/LeftBarChart2.vue";
import LeftBarChart3 from "@/views/product/components/LeftBarChart3.vue";
import LeftLineChart from "@/views/product/components/LeftLineChart.vue";
import NormalPieChart from "@/components/NormalPieChart";

export default {
  components: {
    NormalPieChart,
    LeftLineChart,
    LeftBarChart3,
    LeftBarChart2,
    HotWordChart,
    NotifySetting,
    LeftBarChart,
    LeftPieChart,
    CityImageBlock,
    BarChart,
    PieChart,
    HorizontalTab,
    IconDataBlock,
    AutoScrollTable,
    TitleFrame,
    AutoScrollList,
    SpotLabel,
    UnitNumber,
    VideoMonitor,
    SolitaryElderlyDialog,
    AutoHorizontalScroll,
    CaseInfoDialog,
    ParkingDialog
  },

  data() {
    return {
      pieList: [
        {name: '中温', value: 31},
        {name: '冻品', value: 31},
        {name: '分割品', value: 31},
        {name: '预冷', value: 31},
      ],
      targetConfig: {
        data: [
          {
            name: '销售目标',
            value: 80
          },
          {
            name: '生产目标',
            value: 67
          },
        ],
        colors: ['#ffb800', '#007d9d'],
        unit: '%'
      },
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
      rightPieList: [
        {name: '中温', value: 31},
        {name: '冻品', value: 31},
        {name: '分割品', value: 31},
        {name: '预冷', value: 31},
      ],
      rightList: {
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
  computed: {
  },
  watch: {},
  filters: {
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.page-left-view {
  position: absolute;
  top: 5px;
  //left: -530px;
  left: 0;
  width: 400px;
  height: calc(100% - 5px);

  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
}

.chart-inner-4{
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  .cell{
    height: 49%;
    width: 49%;
  }
}

.left-list{
  width:97%;
  height:100%;
  padding: 8px;
}

.page-right-view {
  position: absolute;
  top: 5px;
  right: 0;
  width: 400px;
  height: calc(100% - 5px);

  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
}
.zhtx-view {
  height: 220px;
  width: 100%;
  position: relative;
}

.cstz-view {
  margin: 10px 0;
  flex: 1;
  width: 100%;
  position: relative;
}

.gcjg-view {
  height: 275px;
  width: 100%;
  position: relative;
}
</style>
