import {
  storeList
} from "../../../pages/request.js"
Page({
  data: {
    city: "深圳市",
    selectedIndex: 0,
    storeList: null
  },
  selectCity() {
    wx.navigateTo({
      url: '../../city/city',
    })
  },
  onShow() {
    let that = this;
    let latitude = wx.getStorageSync("latitude");
    let longitude = wx.getStorageSync("longitude")
    //请求
    storeList({
      lng: longitude,
      lat: latitude,
      page: 1,
      limit: 10
    }).then((res) => {
      this.setData({
        storeList: res.data.list
      })
    })
  },

  selectShop(e) {
    this.setData({
      selectedIndex: e.currentTarget.dataset.id
    })
    wx.setStorageSync("currtshop", this.data.storeList[e.currentTarget.dataset.id])
    setTimeout(() => {
      wx.navigateBack({
        delta: 2
      })
    }, 2000)
  },

})