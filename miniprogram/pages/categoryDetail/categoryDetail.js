// pages/categoryDetail/categoryDetail.js

let SIZE = 30
let PageIndex = 1

// 总共页数
let PageTotal = 0
// 总个数
let ItemCount = 0
let CODE = 0
// tag index 判断期刊 图书 音频 报纸 来源
let TagIndex = 0

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list: [],
		isShow: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {		
		CODE = options.code
		TagIndex = options.tagIndex

		wx.setNavigationBarTitle({
			title: options.title,
		})
		this._loadData(CODE, SIZE, PageIndex)
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
		PageIndex = 1
		PageTotal = 0
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		PageIndex = 1
		PageTotal = 0
		this.data.list = []
		this._loadData(CODE, SIZE, PageIndex)
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		if(PageIndex == PageTotal) {return}
		PageIndex += 1
		this._loadData(CODE, SIZE, PageIndex)
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	_loadData(code, size, pageIndex) {
		this.setData({
			isShow: true
		})

		let url = ""
		if (TagIndex == 3) {
			url = "ByCategoryNewspaper"
		}else {
			url = "ByCategory"
		}

		wx.cloud.callFunction({
			name: "getReadInfo",
			data: {
				code,
				size,
				pageIndex,
				$url: url
			}
		}).then((r) => {
			PageTotal = r.result.PageTotal
			this.setData({
				list: this.data.list.concat(r.result.Data),
				isShow: false
			})

		})
	},
	itemTap: function(e) {
		console.log(e);
		let idx = e.currentTarget.dataset.idx
		let info = this.data.list[idx]		
		let url = `../detail/detail?magazineguid=${info.ID}&year=${info.Year}&issue=${info.Issue}`

    wx.navigateTo({
      url: url
    })
	}
})