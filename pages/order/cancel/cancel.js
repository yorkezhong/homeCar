// pages/order/cancel/cancel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  select:0,
  reason:""
  },
  selectReason(e){
    let index=e.target.dataset.id;
    this.setData({
      select:index
    })
  },
  textareaAInput(e){
   this.setData({
     reason: e.detail.value
   })
  },
  callphone(){
    wx.makePhoneCall({
      phoneNumber: '1340000' 
    })
  }

  
})