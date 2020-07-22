// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewHeight: 0,
    active: 2,
    tabs: [{
        title: "期刊",
        kind: 2,
        data: []
      },
      {
        title: "图书",
        kind: 3,
        data: []
      },
      {
        title: "音频",
        kind: 5,
        data: []
      },
      {
        title: "报纸",
        kind: 7,
        data: []
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          scrollViewHeight: res.windowHeight - 44
        })
      }
    })

    let firstTab = this.data.tabs[0]
    this._loadRequest(firstTab.kind, 0)
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

  onChange: function(e) {
    let detail = e.detail
    if (this.data.tabs[detail.index].data.length == 0) {
      this._loadRequest(detail.name, detail.index)
    }
  },

  _loadRequest(kind, index) {
    wx.cloud.callFunction({
      name: 'getReadInfo',
      data: {
        kind,
        $url: 'getAllByKind'
      }
    }).then( (res) => {
      var data = `tabs[${index}].data`
      this.setData({
        [data]: res.result.Data
      })
    })
  }

})