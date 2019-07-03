import { staffList} from "../../../pages/request.js"
Page({
  data: {
    staffList:[]
  },
  onLoad(){
    let storeId = wx.getStorageSync("currtshop").id;
    staffList({storeId}).then((res)=>{
      this.setData({
        staffList:res.data
      })
    })
  },

  showComment(e){
    let index = e.currentTarget.dataset.commentid;
    let currtStaff=this.data.staffList[index];
    currtStaff=JSON.stringify(currtStaff);
    wx.navigateTo({
      url: '../detail/detail?detailstaff='+currtStaff,
    })
  },
  switchWorker(e){
    let index = e.currentTarget.dataset.commentid;
    wx.setStorageSync("currtindex", index)
    wx.showToast({
      title: '更换成功',
    })
    setTimeout(()=>{
      wx.navigateBack({
        delta: 1
      })
    },2000)
  }
})