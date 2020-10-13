// pages/mine/mine.js

import { AppVersion, testGetInfo, test1 } from '../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    AppVersion
  },
  on1Tap: function (e) {
    // wx.navigateTo({
    //   url: '../example/pageEx1/pageEx1',
    // })
    this.setData({
      isShow: true
    })
  },
  onSegmentTap(e) {
    wx.navigateTo({
      url: '../example/Demo1/Demo1',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const p1 = test1()
    // p1.then(res => {
    //   console.log(res);
    // })

    // p1.then(res => {
    //   console.log(res);
    // })
    
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