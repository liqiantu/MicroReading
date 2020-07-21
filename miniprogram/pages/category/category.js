// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const tabs = [
     {
       title: "期刊"
     },
     {
      title: "音频"
    },
    {
      title: "图书"
    },
    {
      title: "报纸"
    }]
    
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          scrollViewHeight: res.windowHeight - 44
      })
    }
  });

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

})