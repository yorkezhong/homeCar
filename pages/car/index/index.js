
Page({
  data: {
    
  },
  addNewCar(){
    wx.navigateTo({
      url: '../addCar/addCar',
    })
  },
  delCar(){
    wx.showModal({
      title: '移除提示',
      content: '你确定要移除本辆爱车吗？',
      success(res){
         console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })

  }

})