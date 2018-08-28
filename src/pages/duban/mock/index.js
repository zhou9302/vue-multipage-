import Mock from 'mockjs'
const Random = Mock.Random
Mock.mock('api/duban/getInfo', 'get', {
  // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
  'list|1-3': [{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'sid|+1': 1,
    // 属性 userId 是一个5位的随机码
    'userId|5': '',
    // 属性 sex 是一个bool值
    'sex|1-2': true,
    // 属性 city对象 是对象值中2-4个的值
    'city|2-4': {
      '110000': '北京市',
      '120000': '天津市',
      '130000': '河北省',
      '140000': '山西省'
    },
    // 属性 grade 是数组当中的一个值
    'grade|1': [
      '1年级',
      '2年级',
      '3年级'
    ],
    // 属性 guid 是唯一机器码
    'guid': '@guid',
    // 属性 id 是随机id
    'id': '@id',
    // 属性 title 是一个随机长度的标题
    'title': '@title()',
    // 属性 paragraph 是一个随机长度的段落
    'paragraph': '@cparagraph',
    // 属性 image 是一个随机图片 参数分别为size, background, text
    'image': "@image('200x100', '#4A7BF7', 'Hello')",
    // 属性 address 是一个随机地址
    'address': '@county(true)',
    // 属性 date 是一个yyyy-MM-dd 的随机日期
    'date': '@date("yyyy-MM-dd")',
    // 属性 time 是一个 size, background, text 的随机时间
    'time': '@time("HH:mm:ss")',
    // 属性 url 是一个随机的url
    'url': '@url',
    // 属性 email 是一个随机email
    'email': '@email',
    // 属性 ip 是一个随机ip
    'ip': '@ip',
    // 属性 regexp 是一个正则表达式匹配到的值 如aA1
    'regexp': /[a-z][A-Z][0-9]/
  }]
})
Mock.mock('/api/obpm/runtime/getPendingLists?currpage=1&pagelines=200', 'get', {
  'code': '0',
  'totalNum': 4,
  'list|4': [{
    'id': '@guid',
    'formid': function () {
      let a = Math.random(10)
      if (a > 0.5) {
        return '11e8-6eac-3369ebe6-a58e-6933a8e5e211'
      } else {
        return '11e8-7912-7090cd00-89e4-1578c741478f'
      }
    },
    'application': '@guid',
    'date': '@date("yyyy-MM-dd")',
    'content': '@cparagraph()'
  }]
})
Mock.mock('/api/obpm/runtime/getProcessedLists?currpage=1&pagelines=200', 'get', {
  'code': '0',
  'totalNum': 4,
  'list|4': [{
    'id': '@guid',
    'formid': function () {
      let a = Math.random(10)
      if (a > 0.5) {
        return '11e8-6eac-3369ebe6-a58e-6933a8e5e211'
      } else {
        return '11e8-7912-7090cd00-89e4-1578c741478f'
      }
    },
    'application': '@guid',
    'date': '@date("yyyy-MM-dd")',
    'content': '@cparagraph()'
  }]
})
Mock.mock('/api/obpm/runtime/inShowPermission', 'get', {
  'status': 10000,
  'message': '@cparagraph()',
  'result|1-5': [{
    'description': '@title()',
    'ico': "@image('364x184', '#4A7BF7')",
    'url': '@url'
  }]
})
Mock.mock('/api/obpm/getOfficeAndLeaders', 'get', {
  'status': 10000,
  'message': '@cparagraph()',
  'result': {
    'offices|16': [{
      'name|5': Random.string('lower'),
      'id': '@guid'
    }],
    'leaders|16': [{
      'item_cantonalleadername|3': Random.string('lower'),
      'item_cantonalleaderuuid': '@guid'
    }]
  }
})
Mock.mock('/api/obpm/countPendingItems', 'get', {
  'status': 10000,
  'message': '@cparagraph()',
  'result': {
    normal: 231,
    transferred: 1,
    expiring: 23,
    acount: 300,
    noTransferred: 0,
    overdue: 11,
    work: 0,
    'taskList|4': [{
      ITEM_CANTONALLEADERNAME: '领导2',
      countNum: 1,
      ITEM_PARTAPPROACH: '我委会办',
      ID: '11e8-a4eb-12d8ae19-b611-755c7bcd6ae0',
      ITEM_TASKSUMMARY: '2018年重大事项督办管理办法修改后的',
      NAME: '综合调研处',
      OPERATOR: '小周周'
    }]
  }
})
