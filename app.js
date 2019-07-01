//app.js
App({
  onLaunch: function () {
    let that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // this.globalData.userInfo = res.userInfo
              wx.setStorageSync("userinfo", res.userInfo);
              wx.login({
                
                success(res) {
                  if (res.code) {
                    //发起网络请求
                    wx.request({
                      url: 'http://120.78.53.79:8081/car-api/login_by_weixin',
                      method:"POST",
                      data: {
                        code: res.code,
                        userInfo:wx.getStorageSync("userinfo")
                      }
                    })
                  } else {
                    console.log('登录失败！' + res.errMsg)
                  }
                }
              })
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
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
        wx.setStorageSync("gps", {latitude,longitude})
        wx.setStorageSync("latitude", latitude)
        wx.setStorageSync("longitude", longitude)
      }
    })
  },

  globalData: {
    userInfo: null
  }
})