<template>
  <div class="container">
    <div ref="chart"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as echarts from 'echarts'

export default {
  name: 'NormalPieChart',
  props: {
    data: {
      type: Object,
      default: () =>({name:'name',value:70})
    }
  },
  computed:{
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart)
    this.renderChart()
  },
  data() {
    return {
      chart: null,
      isDialogShow:false,
      entity:{}
    }
  },
  watch:{
  },
  methods: {
    renderChart() {

      const {name,value} =this.data

      const option = {
        title: [{
          text: name,
          x: 'center',
          top: '55%',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '400',
          }
        }, {
          text: value+'%',
          x: 'center',
          top: '38%',
          textStyle: {
            fontSize: '25',
            color: '#FFFFFF',
            fontFamily: 'DINAlternate-Bold, DINAlternate',
            foontWeight: '600',
          },
        }],
        polar: {
          radius: ['70%', '82%'],
          center: ['50%', '50%'],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [{
          name: '',
          type: 'bar',
          roundCap: true,
          barWidth: 90,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(66, 66, 66, .3)',
          },
          data: [value],
          coordinateSystem: 'polar',

          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#16CEB9',
              },
                {
                  offset: 1,
                  color: '#6648FF',
                },
              ]),
            },
          },
        },
          {
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['85%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
              color: 'rgba(66, 66, 66, .1)',
              borderWidth: 2,
              borderColor: '#008fb9',
            },
            data: [100],
          },
          {
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['64%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
              color: 'rgba(66, 66, 66, .1)',
              borderWidth: 2,
              borderColor: '#5269EE',
            },
            data: [100],
          }
        ],

      };


      this.chart.setOption(option)
    },

    destroy() {
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
