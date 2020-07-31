// app/component/book-section/book-section.js

let PageIndex = 0
const PageSize = 6

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
      list: []
  },
  observers: {
      'listArr, type': function(listArr, type) {
          console.log(listArr, type);
          if(type == "magazin" || type == 'book') {
            this.setData({
                list: listArr.slice(0,PageSize)
            })
          }else if(type == 'audio') {
            this.setData({
                list: listArr.slice(0,3)
            })
          }else {
              this.setData({
                  list: listArr.slice(0,2)
              })
          }
      }
  },
  /**
   * 组件的方法列表
   */
  methods: {
      _onTap(event) {
          const ds = event.currentTarget.dataset
          console.log(ds, this.properties.type);
          this.triggerEvent('onTap', {
              sectionType: this.properties.type,
              idx: ds.idx
          })
      },
      _onFooterTap(event) {
          if(PageIndex * PageSize >= this.properties.listArr.length) {
              PageIndex = 0
          }
          let s = PageIndex * PageSize
          let e = s + PageSize
          let l = this.properties.listArr.slice(s, e)
          PageIndex += 1
          this.setData({
              list: l
          })
      }
  }
})
