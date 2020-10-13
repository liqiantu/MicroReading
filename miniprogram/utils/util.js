
// const getArticleFontSize = res => {
//   wx.getSystemInfo({
//     success (res) {
//       return res
//     }
//   })
// }

// module.exports = {
//   getArticleFontSize
// }

export const AppVersion = "1.0.2"

export function testGetInfo(callBack) {
  wx.getSystemInfo({
    success: (res) => {
      callBack(res)
    },
  })
}

export function test1() {
  const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('succ')
    },1500)
  })
  return promise
}
