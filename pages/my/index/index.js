// const app= getApp()
Page({
  data: {
     userinfo:null
  },
  onLoad(){
   let userinfo=wx.getStorageSync("userinfo");
   this.setData({
     userinfo:userinfo
   })
  },
  myOrder(){
    wx.switchTab({
      url: '../../order/index/index',
    })
  },
  myCar(){
    wx.switchTab({
      url: '../../car/index/index',
    })
  },
  myAddress(){
    wx.navigateTo({
      url: '../emptyAddress/emptyAddress',
    })
  },
  myInvoice(){
    wx.navigateTo({
      url: '../applyMoney/applyMoney',
    })
  },
  onShareAppMessage(res){
      return {
        title: '回家养车',
        path: '/pages/home/index/index',
        imageUrl: 'http://15865552.s21i.faiusr.com/4/ABUIABAEGAAg58SZ3AUovLbm5gUwugI4Xw.png'
      
    }
   
  },
  goRecharge(){
    wx.navigateTo({
      url: '../rechargeCard/rechargeCard',
    })
  },
  goPackage(){
    wx.navigateTo({
      url: '../packageCard/packageCard',
    })
  },
  goCoupon(){
    wx.navigateTo({
      url: '../coupon/coupon',
    })
  }
})