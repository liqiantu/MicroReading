// pages/example/Demo1/Demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currIdx: 0,
    isShowLoadMore: false,
    listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  onChange(e) {
    console.log(e)
    this.setData({
      currIdx: e.detail.current
    })
  },
  oneTap1(e) {
    this.setData({
      currIdx: 0
    })
  },
  oneTap2(e) {
    this.setData({
      currIdx: 1
    })
  },
  onBottom(e) {
    console.log(e)

    if (e.type == "scrolltolower") {
      this.setData({
        isShowLoadMore: true
      })

      setTimeout(() => {
        console.log("timeOut")
        this.data.listData = this.data.listData.concat([1, 2, 3])
        this.setData({
          listData: this.data.listData,
          isShowLoadMore: false
        })
      }, 1500)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})