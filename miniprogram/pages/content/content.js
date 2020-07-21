// pages/content/content.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		content: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options);
		
		wx.cloud.callFunction({
			name: 'getReadInfo',
			data: {
				articleid: options.articleid,
				$url: 'getFullDetail'
			}
		}).then( (res) => {			
			let str = res.result.Data.Content
			str = str.replace(/↵/g,'')
			let rt = app.towxml(str,'html')

			let data = {}
			data.article = rt
			data.title = res.result.Data.Title

			this.setData({
				content: data
			})
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