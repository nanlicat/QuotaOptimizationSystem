<template>
  <div class="page-view">
    <!--    left-->
    <div class="page-left-view">
      <div class="zhtx-view">
        <title-frame title="产销情况总览">
          <div class="flex-around">
            <city-image-block type="tray" title="产品总数量" value="45" unit="个"/>
            <city-image-block type="tray" title="今日销售数量" value="17" unit="个"/>
            <city-image-block type="tray" title="预测销售数量" value="17" unit="个"/>
          </div>
          <left-bar-chart  style="width:100%;height:100px" />
        </title-frame>
      </div>
      <div class="cstz-view">
        <title-frame title="区域销量排行">
          <left-bar-chart2/>
        </title-frame>
      </div>
      <div class="gcjg-view">
        <title-frame title="产品种类销量占比">
          <left-bar-chart3/>
        </title-frame>
      </div>
    </div>
    <!--    right-->
    <div class="page-right-view">
      <div class="djyl-view">
        <title-frame title="异常情况总览">
          <div class="flex-around">
            <city-image-block type="tech" title="红色预警" value="246" unit="条"/>
            <city-image-block type="tech" title="橙色预警" value="50" unit="条"/>
          </div>
        </title-frame>
      </div>
      <div class="stzl-view">
        <title-frame title="异常情况明细" style="padding-right: 8px;">
          <template #action>
            <custom-button type="info" @click.native="isAbnormalDialogShow=true">异常情况详情</custom-button>
          </template>

          <div class="flex-around">
            <city-image-block type="disc" title="异常级别" value="1" unit="级"/>
            <city-image-block type="disc" title="产品类别" value="" unit="中温"/>
            <city-image-block type="disc" title="产品名称" value="" unit="白条"/>
          </div>
          <div class="flex-around">
            <city-image-block type="tech" title="异常价格" value="12" unit="个"/>
            <city-image-block type="tech" title="异常上涨" value="28" unit="个"/>
            <city-image-block type="tech" title="异常下跌" value="10" unit="个"/>
          </div>
        </title-frame>
      </div>
      <div class="jjfz-view">
        <title-frame title="产品种类异常占比">
          <left-pie-chart />
        </title-frame>
      </div>
      <div class="jjfz-view">
        <title-frame title="市场价格">
          <left-line-chart  @click.native="isPriceDialogShow=true"/>
        </title-frame>
      </div>
    </div>

    <price-dialog v-model="isPriceDialogShow"/>
    <abnormal-dialog v-model="isAbnormalDialogShow"/>
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
import LeftPieChart from "@/views/home/components/LeftPieChart.vue";
import LeftBarChart from "@/views/home/components/LeftBarChart.vue";
import NotifySetting from "@/components/NotifySetting/index.vue";
import HotWordChart from "@/components/HotWordChart/index.vue";
import LeftBarChart2 from "@/views/home/components/LeftBarChart2.vue";
import LeftBarChart3 from "@/views/home/components/LeftBarChart3.vue";
import LeftLineChart from "@/views/home/components/LeftLineChart.vue";
import PriceDialog from "@/views/home/components/PriceDialog";
import MHorizontalTab from "@/components/MHorizontalTab";
import CustomButton from "@/components/custom-button";
import AbnormalDialog from "@/views/home/components/AbnormalDialog";

export default {
  components: {
    AbnormalDialog,
    CustomButton,
    MHorizontalTab,
    PriceDialog,
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
      hotWordData: [
        {name: '作答超时', value: 31},
        {name: '编译错误', value: 31},
        {name: '运行超时', value: 31},
        {name: '逻辑错误', value: 31},
        {name: '语法错误', value: 31},
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
      isPriceDialogShow:false,
      isAbnormalDialogShow:false,
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

  .djyl-view {
    height: 120px;
    width: 100%;
    position: relative;
  }

  .stzl-view {
    margin-top: 10px;
    height: 230px;
    width: 100%;
    position: relative;
  }

  .shzl-view {
    margin-top: 10px;
    height: 170px;
    width: 100%;
    position: relative;
  }

  .jjfz-view {
    margin-top: 10px;
    flex: 1;
    width: 100%;
    position: relative;
  }

  .zdjk-view {
    margin-top: 10px;
    height: 170px;
    width: 100%;
    position: relative;
  }

}

</style>
