
Page({
  data: {
    selectIndex:0,
    showKeyboard: false, 
    plateNumber: '' ,
  },
  selectType(e){
  let index=e.target.dataset.id;
  this.setData({
    selectIndex:index,
    plateNumber:""
  })
  },
  setNumber(e) {
    this.setData({
      plateNumber: e.detail.value
    })
  },
  handleFocus(e) {
    this.setData({
      showKeyboard: true
    })
  },
  submitAdd(){
    wx.showToast({
      title: '新增车辆成功',
    })
    setTimeout(()=>{
    wx.navigateBack({
      delta: 1
    })
    },2000)
  }
 
})