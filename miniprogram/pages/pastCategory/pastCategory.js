// pages/pastCategory/pastCategory.js
let magazineId = ""
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
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: "getReadInfo",
      data: {
        id: magazineId,
        year,
        $url: "getMagazineYearIssues"
      }
    }).then((res) => {
      wx.hideLoading({
        success: (r) => {
          let idx = this.data.yearList.indexOf(parseInt(year))
          this.data.issueList[idx] = res.result.Data
          this.setData({
            issueList: this.data.issueList
          })
        },
      })
    })
  },
  onChange(e) {
    let idx = e.detail.index
    let year = e.detail.title
    console.log(e)
    if(this.data.issueList[idx] == undefined) {
      this._getIssues(year)
    }
  },
  onTap(e) {
    console.log(e);
    
    let issue = e.currentTarget.dataset.issue
    let url = `../detail/detail?magazineguid=${issue.ID}&year=${issue.Year}&issue=${issue.Issue}&isShowFooter=0`

    wx.navigateTo({
      url: url
    })
  }

})