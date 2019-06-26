Page({

  data: {

  },

  backIndex(){
    wx.switchTab({
      url: '../../home/index/index',
    })
  },
  goAgain(){
    wx.navigateTo({
      url: '../applyInvoice/applyInvoice',
    })
  }
})