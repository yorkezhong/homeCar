
Component({
 
  properties: {

  },

  data: {
    tabCur: 0,
    starnum:4
  },

  methods: {
    tabselect(e) {
      this.setData({
        tabCur: e.target.dataset.id
      })
    },
    Gocomment(){
      wx.navigateTo({
        url: '../../order/comment/comment',
      })
    }
    
  }
})
