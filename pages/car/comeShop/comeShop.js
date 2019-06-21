// pages/car/comeShop/comeShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Goscan(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })

  }
})