
Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    empty:false
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
 
})