<template>
  <div class="container">
    <div ref="chart"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as echarts from 'echarts'

export default {
  name: 'LeftLineChart',
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
      // const echarts = this.$echarts
      const myChart=this.chart
      var charts = {
        unit: 'Kbps',
        //线名
        names: ['鸡肉', '猪肉'],
        //x轴
        lineX: ['1', '2', '3', '4', '5'],
        //对应names位置
        value: [
        [7.80, 6.78, 7.76, 5.80, 7.80, ],
    [6.76, 8.70,8.69, 7.61,8.60, ]
        ]
      }
      var color = ['rgba(23, 255, 243', 'rgba(255,100,97']
      var lineY = []

      for (var i = 0; i < charts.names.length; i++) {
        var x = i
        if (x > color.length - 1) {
          x = color.length - 1
        }
        var data = {
          name: charts.names[i],
          type: 'line',
          color: color[x] + ')',
          smooth: true,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: color[x] + ', 0.3)'
              }, {
                offset: 0.8,
                color: color[x] + ', 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          symbol: 'circle',
          symbolSize: 5,
          data: charts.value[i]
        }
        lineY.push(data)
      }

      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: charts.names,
          textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
          },
          right: '4%'
        },
        grid: {
          top: '14%',
          left: '4%',
          right: '7%',
          bottom: '12%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: charts.lineX,
          axisLabel: {
            textStyle: {
              color: 'rgb(0,253,255,0.6)'
            },
          }
        },
        yAxis: {
          name: charts.unit,
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: 'rgb(0,253,255,0.6)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgb(23,255,243,0.3)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(0,253,255,0.6)'
            }
          }
        },
        series: lineY
      }
      setInterval(() => {
        myChart.setOption({
          legend: {
            selected: {
              '鸡肉': false,
              '猪肉': false
            }
          }
        })
        myChart.setOption({
          legend: {
            selected: {
              '鸡肉': true,
              '猪肉': true
            }
          }
        })
      },10000)

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
