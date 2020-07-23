// 云函数入口文件
const BASE_URL = 'https://ntdzwx.dps.qikan.com/api'

const cloud = require('wx-server-sdk')

const TcbRouter = require('tcb-router')
const rp = require('request-promise')

var options = {
  // uri: 'https://api.github.com/user/repos',
  headers: {
      'referer': 'https://ntdzwx.dps.qikan.com/Template/WeChatLibrary4/index.html',
      'apptoken': '5SF5by2/C/IuSpZFIxSi6ZtROrzhK6DvvOI9UpUeeJ4vizmtVo+UDZ6873Pbk4BEFPB9exs8QV0OSmzsoRBKlQ==',
      'ticket': 'lRkEO3GvpvjFd9hkdoLeemkBdGccnFT0yN-1iaIrsSAvqbwSgc2_ZGV7HBity732aBXfLltb5qaW6gTYbuV_cg=='
  },
  json: true // Automatically parses the JSON string in the response
}

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const app = new TcbRouter({
    event
  })

  app.router('settings', async(ctx, next) => {
    options.uri = BASE_URL + "/unit/service/settings"
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('recMagazine', async(ctx, next) => {
    options.uri = BASE_URL + "/magazine/whole/Recomm?kind=1&top=99"
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('recBook', async(ctx, next) => {
    options.uri = BASE_URL + "/book/whole/Recomm?kind=1&top=99"
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('recAudio', async(ctx, next) => {
    options.uri = BASE_URL + "/audio/whole/Recomm?kind=1&top=99"
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('recNewspaper', async(ctx, next) => {
    options.uri = BASE_URL + "/newspaper/whole/Recomm?kind=1&top=99"
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('getMagazineIssue', async(ctx, next) => {
    options.uri = BASE_URL + `/magazine/GetMagazineIssue?magazineguid=${event.magazineguid}&year=${event.year}&issue=${event.issue}`
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('getCatalog', async(ctx, next) => {
    options.uri = BASE_URL + `/magazine/article/catalog?&magazineguid=${event.magazineguid}&year=${event.year}&issue=${event.issue}`
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('getFullDetail', async(ctx, next) => {
    options.uri = BASE_URL + `/magazine/article/GetFullDetail?&articleid=${event.articleid}`
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('getAllByKind', async(ctx, next) => {
    options.uri = BASE_URL + `/category/GetAllByKind?kind=${event.kind}`
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  app.router('ByCategory', async(ctx, next) => {
    options.uri = BASE_URL + `/magazine/ByCategory?categorycode=${event.code}&pagesize=${event.size}&pageindex=${event.pageIndex}`
    ctx.body = await rp(options).then((res) => {      
      return res
    })
  })

  return app.serve()
}