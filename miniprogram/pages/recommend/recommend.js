// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isShowAlert: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this._loadData()
    this._loadAllPromiseRequest()
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
  onTap(event) {
    console.log(event);
    let detail = event.detail
    let url = ''
    if(detail.sectionType == "magazin") {
      let item = this.data.list[0].Data[detail.idx]
      url = `../detail/detail?magazineguid=${item.ID}&year=${item.Year}&issue=${item.Issue}`
      wx.navigateTo({
        url: url
      })
    }
  },
  onAdTap(e) {
    this.setData({
      isShowAlert: true
    })
  },

// promise 请求
  _loadMagazinePromise() {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'getReadInfo',
        data: {
          $url: 'recMagazine'
        }
      }).then((res) => {
        resolve(res.result)
      })
    })
  },
  _loadBookPromise() {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'getReadInfo',
        data: {
          $url: 'recBook'
        }
      }).then((res) => {
        resolve(res.result)
      })
    })
  },
  _loadAudioPromise() {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'getReadInfo',
        data: {
          $url: 'recAudio'
        }
      }).then((res) => {
        resolve(res.result)
      })
    })
  },
  _loadNewspaperPromise() {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'getReadInfo',
        data: {
          $url: 'recNewspaper'
        }
      }).then((res) => {
        resolve(res.result)
      })
    })
  },
  _loadAllPromiseRequest() {
    const list = [this._loadMagazinePromise(), this._loadBookPromise(), this._loadAudioPromise(), this._loadNewspaperPromise()]
    Promise.all(list).then( res => {
      console.log(res)
      this.setData({
        list: res
      })
    })
  }
})