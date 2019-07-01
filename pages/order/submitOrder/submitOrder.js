
Page({

  data: {
    cancel:true
  },
  showOrder(){
    wx.redirectTo({
       url: '../detail/detail',
     })
  },
  againOrder(){
    wx.redirectTo({
      url: '../../car/washCar/washCar',
    })
  }

})