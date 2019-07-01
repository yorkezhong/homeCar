
Page({
  data: {
     mapAddress:""
  },
  selectMap(){
    let that=this;
    wx.chooseLocation({
      success(res){
        that.setData({
        mapAddress:res.address+""+res.name
      })
      },
     fail(){
       wx.showModal({
         title: '提示',
         content: '获取位置信息失败,请重试',
       })
     }

    })
  },
  saveAddress(){
    wx.showToast({
      title: '保存成功',
    })
    setTimeout(()=>{
   wx.navigateTo({
     url: '../emptyAddress/emptyAddress',
   })
    },2000)
  }
})