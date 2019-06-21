
Page({
  data: {

  },
  goIndex(){
    wx.switchTab({
      url: '../../../home/index/index',
    })
  },
  goComment(){
    wx.navigateTo({
      url: '',
    })
  }

  
})