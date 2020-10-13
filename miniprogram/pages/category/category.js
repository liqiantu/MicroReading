// pages/category/category.js

let CurrTagIndex = 0

Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollViewHeight: 0,
    active: 2,
    tabs: [{
        title: "Magazine",
        kind: 2,
        data: []
      },
      {
        title: "Book",
        kind: 3,
        data: []
      },
      {
        title: "Audio",
        kind: 5,
        data: []
      },
      {
        title: "Newspaper",
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

  onChange: function(e) {
    console.log(e)
    let detail = e.detail
    CurrTagIndex = detail.index
    if (this.data.tabs[detail.index].data.length == 0) {
      this._loadRequest(detail.name, detail.index)
    }
  },
  onTap: function(e) {
    console.log(e)
    let code = e.currentTarget.dataset.categorycode
    let categoryName = e.currentTarget.dataset.name
    
    wx.navigateTo({
      url: `../categoryDetail/categoryDetail?code=${code}&title=${categoryName}&tagIndex=${CurrTagIndex}`,
    })    
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