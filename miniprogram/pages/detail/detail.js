// pages/detail/detail.js

let magazineguid = ""
let Options = {}
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		info: {},
		catalog: [],
		isShowFooter: 1
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options);
		Options = options
		magazineguid = options.magazineguid
		this._loadData(options)
		this.setData({
			isShowFooter: parseInt(options.isShowFooter == undefined ? 1 : options.isShowFooter)
		})
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

	_onTap: function(event) {
		let idx = event.currentTarget.dataset.idx
		console.log(idx);
		console.log(this.data.catalog[idx]);
		
		wx.navigateTo({
			url: `../content/content?articleid=${this.data.catalog[idx].ArticleID}&magazineguid=${Options.magazineguid}&year=${Options.year}&issue=${Options.issue}`,
		})
	},
	_loadData(options) {
		wx.cloud.callFunction({
			name: 'getReadInfo',
			data: {
				magazineguid: options.magazineguid,
				year: options.year,
				issue: options.issue,
				$url: 'getMagazineIssue'
			}
		}).then( (res) => {
			let rt = res.result.Data
			rt.magazineDate = `${rt.Year}年${rt.Issue}期`
			rt.CoverImages = rt.CoverImages
			this.setData({
				info: rt
			})
		})

		wx.cloud.callFunction({
			name: 'getReadInfo',
			data: {
				magazineguid: options.magazineguid,
				year: options.year,
				issue: options.issue,
				$url: 'getCatalog'
			}
		}).then( (res) => {
			let resArr = []

			let data = res.result.Data
			data.forEach(e => {
				e.Articles.forEach(e2 => {
					resArr.push(e2)
				});
			});
			
			this.setData({
				catalog: resArr
			})
		})
	},
	_bottomTap: function(e) {
		wx.navigateTo({
			url: `../pastCategory/pastCategory?id=${magazineguid}`,
		})
	}
	
})