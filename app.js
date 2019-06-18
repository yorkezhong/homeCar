//app.js
App({
  onLaunch: function () {
    let that = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              that.globalData.userInfo = res.userInfo
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.setStorageSync("latitude", latitude)
        wx.setStorageSync("longitude", longitude)
      }
    })
  },

  globalData: {
    userInfo: null
  }
})