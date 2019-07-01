
Page({

  data: {
    tabCur:0,

  },
  selectedCard(e){
    let index = e.target.dataset.id;
    this.setData({
      tabCur:index
    })
    wx.navigateTo({
      url: '../onlineRecharge/onlineRecharge',
    })
  },
 
 
})