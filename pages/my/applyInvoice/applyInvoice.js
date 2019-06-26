// pages/my/applyInvoice/applyInvoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeIndex:0,
    invoiceName:"",
    invoiceId:"",
    email:""
  },
  selectdType(e){
    let index=e.target.dataset.id;
    this.setData({
      typeIndex:index
    })
  },
  inputOne(e){
   this.setData({
     invoiceName: e.detail.value,
   })
  },
  inputTwo(e) {
    this.setData({
      invoiceId: e.detail.value,
    })
  },
  inputThree(e) {
    this.setData({
      email: e.detail.value,
    })
  },
  submitApply(){
    wx.navigateTo({
      url: '../invoiceSucc/invoiceSucc',
    })
  }


  
})