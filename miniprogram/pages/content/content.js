// pages/content/content.js

const app = getApp()
let Options = {}
let ResData = {}

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		content: {},
		catalogList: [],
		isEnableUp: false,
		isEnableNext: false,
		showCatalog: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		Options = options
		this._loadContent(options.articleid)
	},
	_loadContent(articleid) {
		wx.showLoading({
			title: '加载中',
		})
		wx.cloud.callFunction({
			name: 'getReadInfo',
			data: {
				articleid: articleid,
				$url: 'getFullDetail'
			}
		}).then((res) => {
			wx.hideLoading({
				success: () => {
					ResData = res.result.Data
					let str = res.result.Data.Content
					str = str.replace(/↵/g, '')
					let rt = app.towxml(str, 'html')

					let data = {}
					data.article = rt
					data.title = res.result.Data.Title

					console.log(articleid);
					console.log(ResData);

					this.setData({
						// 清除上一页内容
						content: {}
					}, () => {
						this.setData({
							content: data,
							isEnableUp: ResData.PreviousArticle.ArticleID == "" ? false : true,
							isEnableNext: ResData.NextArticle.ArticleID == "" ? false : true
						})
					})

				}
			})

		})
	},
	_loadCatalogData() {
		if (this.data.catalogList.length > 0) {
			return
		}
		wx.cloud.callFunction({
			name: 'getReadInfo',
			data: {
				magazineguid: Options.magazineguid,
				year: Options.year,
				issue: Options.issue,
				$url: 'getCatalog'
			}
		}).then( (res) => {
			// let resArr = []

			// let data = res.result.Data
			// data.forEach(e => {
			// 	e.Articles.forEach(e2 => {
			// 		resArr.push(e2)
			// 	});
			// });
			
			this.setData({
				catalogList: res.result.Data
			})
		})
	},
	onUpTap(e) {
		let upArticleid = ResData.PreviousArticle.ArticleID
		this._loadContent(upArticleid)
	},
	onNextTap(e) {
		let nextArticleid = ResData.NextArticle.ArticleID
		this._loadContent(nextArticleid)
	},
	onCatalogTap() {
		this.setData({
			showCatalog: true
		}, () => {
			this._loadCatalogData()
		})
	},
	onPopClose() {
		this.setData({
			showCatalog: false
		})
	},
	// 添加move事件，防止页面滚动事件穿透
	onPopContentTouchMove() {
	},
	catalogItemTap(e) {
		let articleID = e.currentTarget.dataset.articleid
		this._loadContent(articleID)
		this.setData({
			showCatalog: false
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

	}
})