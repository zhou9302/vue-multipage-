export default function () {
  return {
    color: ['#3df7c5', '#ff4c79', '#2de0ff'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      x: '40',
      data: ['已逾期', '即将到期', '正在推进']
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            color: '#414c65',
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            },
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 335, name: '已逾期'},
          {value: 310, name: '即将到期'},
          {value: 234, name: '正在推进'}
        ]
      }
    ]
  }
}
