// components/evaluate/evaluate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabCur: 0,
    starnum:4
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabselect(e) {
      this.setData({
        tabCur: e.target.dataset.id
      })
    },
    
  }
})
