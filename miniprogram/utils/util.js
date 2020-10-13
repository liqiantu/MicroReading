
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

export const AppVersion = "1.0.0"

export function testGetInfo(callBack) {
  wx.getSystemInfo({
    success: (res) => {
      callBack(res)
    },
  })
}
