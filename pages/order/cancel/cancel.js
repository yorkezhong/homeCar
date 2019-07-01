
Page({
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
  },
  submitCancel(){
    wx.navigateTo({
      url: '../submitOrder/submitOrder',
    })
  }

  
})