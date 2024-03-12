<template>
  <div class="container">
    <div ref="chart"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as echarts from 'echarts'

export default {
  name: 'LeftBarChart3',
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      }
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
      const max=100
      const dataList = [
        {name:'销售目标',value:'75'},
        {name:'生产目标',value:'87'},
      ]

      var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
      const  option = {
        grid: {
          left: '5%',
          top: '2%',
          right: '12%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          show: false,
        }],
        yAxis: [{
          axisTick: 'none',
          axisLine: 'none',
          offset: '8',
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,0.89)',
              fontSize: '14',
            }
          },
          data: ['南坪', '工贸', '石桥铺', '沙坪坝', '嘉州路', '红旗河沟', '两路口', '观音桥', '光电园', '小什字']
        }, {
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '0',
            }
          },
          data:[10,9,8,7,6,5,4,3,2,1]
        }, {
          nameGap: '1',
          nameTextStyle: {
            color: '#ffffff',
            fontSize: '14',
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [],
        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [6647, 7473, 8190, 8488, 9491, 11726, 12745, 13170, 21319, 24934],
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#ffffff',
                fontSize: '14',
              }
            }
          },
          barWidth: 4,
          itemStyle: {
            normal: {
              color: function(params) {
                var num = myColor.length;
                return myColor[params.dataIndex % num]
              },
            }
          },
          z: 2
        }, {
          name: '白框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '1%',
          data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
          barWidth: 1,
          itemStyle: {
            normal: {
              color: '#0e2147',
              barBorderRadius: 5,
            }
          },
          z: 1
        }, {
          name: '外框',
          type: 'bar',
          yAxisIndex: 2,
          barGap: '-1%',
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
          barWidth: 1,
          itemStyle: {
            normal: {
              color: function(params) {
                var num = myColor.length;
                return myColor[params.dataIndex % num]
              },
              barBorderRadius: 5,
            }
          },
          z: 0
        },
          {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                opacity: 1,
              }
            },
            z: 2
          }
        ]
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
