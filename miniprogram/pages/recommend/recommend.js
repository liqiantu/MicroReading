// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    magazineList: [],
    bookList: [],
    audioList: [],
    newspaperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData()
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

  },

  _loadData() {
    wx.cloud.callFunction({
      name: 'getReadInfo',
      data: {
        $url: 'recMagazine'
      }
    }).then((res) => {
      this.setData({
        magazineList: res.result.Data.slice(0,6)
      })
    })

    wx.cloud.callFunction({
      name: 'getReadInfo',
      data: {
        $url: 'recBook'
      }
    }).then((res) => {
      this.setData({
        bookList: res.result.Data.slice(0,6)
      })
    })

    wx.cloud.callFunction({
      name: 'getReadInfo',
      data: {
        $url: 'recAudio'
      }
    }).then((res) => {
      this.setData({
        audioList: res.result.Data.slice(0,3)
      })
    })

    wx.cloud.callFunction({
      name: 'getReadInfo',
      data: {
        $url: 'recNewspaper'
      }
    }).then((res) => {
      newspaperList: res.result.Data.slice(0,2)
    })
  }
})