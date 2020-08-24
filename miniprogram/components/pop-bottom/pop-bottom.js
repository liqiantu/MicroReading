// components/pop-bottom/pop-bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBgTap() {
      this.setData({
        isShow: !this.properties.isShow
      })
    }
  }
})
