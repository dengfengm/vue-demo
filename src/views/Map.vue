<template>
  <div class="home">
    <h1>This is an map page</h1>
    <div id="echart" style="width: 800px;height:600px;margin:0 auto"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
export default {
  name: 'Map',
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      echarts.init(document.getElementById('echart')).setOption({
        title: {
          text: '中国人口密度 （2011）',
          subtext: '人口密度数据来自Wikipedia',
          sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
          trigger: 'item',
          formatter: '城市名：{b}<br/>人数：{c}'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        itemStyle: {
          color: '#ddb926'
        },
        emphasis: {
          label: {
            color: '#ddd',
            fontSize: 12
          },
          itemStyle: {
            borderColor: 'bule',
            areaColor: '#eee'
          }
        },
        visualMap: {
          min: 800,
          max: 5000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [{
          type: 'map',
          mapType: 'china',
          smooth: true,
          data: [
            { name: '北京', value: '1000' },
            { name: '上海', value: '2000' }
          ],
          label: {
            show: true,
            fontSize: 10
          }
        }]
      })
    }
  }
}
</script>
