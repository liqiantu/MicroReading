// app/component/book-section/book-section.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      listArr: {
          type: Array,
          value: []
      },
      sectionName: {
          type: String,
          value: ""
      },
      showFooter: {
          type: Boolean,
          value: false
      },
      type: {
          type: String,
          value: ""
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
      _onTap(event) {
          const ds = event.currentTarget.dataset
          this.triggerEvent('onTap', {
              sectionType: this.properties.type,
              idx: ds.idx
          })
        
      }
  }
})
