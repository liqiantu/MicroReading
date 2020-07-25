// pages/pastCategory/pastCategory.js
let magazineId = ""
let issueMap = new Map()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewHeight: 0,
    yearList: [],
    issueList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    magazineId = options.id
    console.log(options);
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          scrollViewHeight: res.windowHeight - 44
        })
      }
    })
  },
  	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
    this._getIssueYears((res) => {
      let year = res.result.Data[0]
      this._getIssues(year)

    })
	},
  _getIssueYears(callBack) {
    wx.cloud.callFunction({
      name: "getReadInfo",
      data: {
        id: magazineId,
        $url: "getMagazineYear"
      }
    }).then((res) => {
      this.setData({
        yearList: res.result.Data
      }, ()=> {
        callBack(res)
      })
      
    })
  },
  _getIssues(year) {
    wx.cloud.callFunction({
      name: "getReadInfo",
      data: {
        id: magazineId,
        year,
        $url: "getMagazineYearIssues"
      }
    }).then((res) => {
      issueMap.set(year, res.result.Data)
      this.setData({
        issueList: issueMap.get(year)
      })
    })
  },
  onChange(e) {
    let year = e.detail.title
    let issueList = issueMap.get(year)
    
    if(issueList == undefined) {
      this._getIssues(year)
    }
  }

})