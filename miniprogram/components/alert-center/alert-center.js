// components/alert-center/alert-center.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    contentData: {
      type: Object,
      value: {}
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  },
  // 引用外部样式类
  externalClasses: ["content-class"],
  /**
   * 组件的方法列表
   */
  methods: {
    bgTouchMove(e) {
      console.log(e);
      return
    },
    onBgTap() {
      this.setData({
        isShow: false
      })
    }
  }
})
