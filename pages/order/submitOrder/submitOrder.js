
Page({

  data: {
    cancel:true,
    orderinfo:{}
  },
  onLoad(option){
    let orderinfo = JSON.parse(option.orderinfo);
    this.setData({
      orderinfo:orderinfo
    })
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