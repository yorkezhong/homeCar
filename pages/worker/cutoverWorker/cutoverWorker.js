Page({
  data: {

  },

  showComment(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  switchWorker(){
    wx.showToast({
      title: '更换成功',
    })
    setTimeout(()=>{
      wx.navigateBack({
        delta: 1
      })
    },2000)
  }
})