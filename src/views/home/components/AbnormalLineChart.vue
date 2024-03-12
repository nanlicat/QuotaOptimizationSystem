<template>
  <div class="container">
    <div ref="chart"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as echarts from 'echarts'

export default {
  name: 'AbnormalLineChart',
  props: {
    data: {
      type: Object,
      default: () =>({})
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
      var fontColor = '#30eee9';
      const option ={
        grid: {
          left: '5%',
          right: '5%',
          top:'10%',
          bottom: '5%',
          containLabel: true
        },
        tooltip : {
          show: true,
          trigger: 'item'
        },
        legend: {
          show:true,
          x:'center',
          y:'35',
          icon: 'stack',
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:'#1bb4f6'
          },
          data:['历史单价','今日单价','今日销量']
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            axisLabel:{
              color: fontColor
            },
            axisLine:{
              show:true,
              lineStyle:{
                color:'#397cbc'
              }
            },
            axisTick:{
              show:false,
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'#195384'
              }
            },
            data: ['前段', '一级膘二', '碎肉', '皮条', '中段', '精肋排', '后段', '一号肉', '白条', '二号肉']
          }
        ],
        yAxis : [
          {
            type : 'value',
            name : '单价',
            min:0,
            max:1000,
            axisLabel : {
              formatter: '{value}',
              textStyle:{
                color:'#2ad1d2'
              }
            },
            axisLine:{
              lineStyle:{
                color:'#27b4c2'
              }
            },
            axisTick:{
              show:false,
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'#11366e'
              }
            }
          },
          {
            type : 'value',
            name : '销量',
            min:0,
            max:1000,
            axisLabel : {
              formatter: '{value}',
              textStyle:{
                color:'#186afe'
              }
            },
            axisLine:{
              lineStyle:{
                color:'#186afe'
              }
            },
            axisTick:{
              show:false,
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'#11366e'
              }
            }
          }
        ],
        series : [
          {
            name:'历史单价',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color:'#0092f6',
                lineStyle: {
                  color: "#0092f6",
                  width:1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,146,246,0.9)'
                  }]),
                }
              }
            },
            markPoint:{
              itemStyle:{
                normal:{
                  color:'red'
                }
              }
            },
            data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
          },
          {
            name:'今日单价',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,

            itemStyle: {
              normal: {
                color:'#00d4c7',
                lineStyle: {
                  color: "#00d4c7",
                  width:1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,212,199,0.9)'
                  }]),
                }
              }
            },
            data:[220, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410]
          },
          {
            name:'今日销量',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize: 8,
            yAxisIndex: 1, //在单个图表实例中存在多个y轴的时候有
            itemStyle: {
              normal: {
                color: '#aecb56',
                lineStyle: {
                  color: "#aecb56",
                  width:1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(114,144,89,0.9)'
                  }]),
                }
              }
            },
            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
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
