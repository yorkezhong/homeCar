import {
  storeList,
  storeInfo,
  banner,
  lineNum,
  getCarBands
} from "../../../pages/request.js"
Page({
  data: {
    city: "深圳市",
    weather: "多云 28℃",
    mask: false,
    currtshop: null,
    banner: [],
    lineNum: 0,
    unlogin: false
  },
  storeInfo(uid) {
    storeInfo({
      uid
    }).then((res) => {
      console.log(res)
    })
  },
  lineNum(storeId) {
    lineNum({
      storeId
    }).then((res) => {
      this.setData({
        lineNum: res.data.sort
      })
    })
  },
  onShow() {
    let that = this;
    let latitude = wx.getStorageSync("latitude");
    let longitude = wx.getStorageSync("longitude");
    let currtshop = wx.getStorageSync("currtshop");
    if (Boolean(currtshop) == true) {
      this.setData({
        currtshop: currtshop
      })
      this.storeInfo(currtshop.id)
      this.lineNum(currtshop.id)
    } else {
      storeList({
        lng: longitude,
        lat: latitude,
        page: 1,
        limit: 10
      }).then((res) => {
        this.setData({
          currtshop: res.data.list[0]
        })
        this.storeInfo(this.data.currtshop.id);
        this.lineNum(this.data.currtshop.id)
      })
    }
    that.getCity(latitude, longitude);
  },
  onLoad() {
    let that = this;
    //轮播图
    let userinfo = wx.getStorageSync("userinfo");
    if (Boolean(userinfo) == false) {
      that.setData({
        unlogin: true
      })
      wx.hideTabBar();
    }
    banner().then((res) => {
      that.setData({
        banner: res.data
      })
    })
    getCarBands().then((res) => {
      console.log(res)
    })
  },
  submitLogin() {
    let that = this;
    wx.getUserInfo({
        success: res => {
          wx.setStorageSync("userinfo", res.userInfo);
          wx.showTabBar();
          this.setData({
            unlogin: false
          })
          wx.login({
            success(res) {
              if (res.code) {
                wx.request({
                  url: 'http://120.78.53.79:8081/car-api/api/weixin/login',
                  method: "POST",
                  data: {
                    code: res.code,
                    userInfo: wx.getStorageInfoSync("userinfo")
                  }
                })
              }
            },
            fail(err) {
              wx.showToast({
                title: '网络请求失败,请重试！',
              })
            }
          })
        }
      }),
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          wx.setStorageSync("gps", {
            latitude,
            longitude
          })
          wx.setStorageSync("latitude", latitude);
          wx.setStorageSync("longitude", longitude);
          that.getCity(latitude, longitude);
        }
      })

  },
  cancelLogin() {
    let that = this;
    that.setData({
      unlogin: false
    })
    setTimeout(() => {
      that.setData({
        unlogin: true
      })
    }, 2000)
  },
  showMask() {
    this.setData({
      mask: true
    })
    wx.hideTabBar();
  },
  closeMask() {
    this.setData({
      mask: false
    })
    wx.showTabBar();
  },
  getCity(longitude, latitude) {
    let that = this;
    var url = "https://api.map.baidu.com/telematics/v3/weather?location=" + latitude + "," + longitude + "&output=json&ak=EkvUn6X877ah3xNrtnKMu2Gxaiy8rPN7"; //接口请求和参数传递
    wx.request({
      url: url,
      success(res) {
        if (res.data.error){
          return 
        }else{
          let city = res.data.results[0].currentCity;
          let weather = res.data.results[0].weather_data[0].weather;
          let temp = parseInt(res.data.results[0].weather_data[0].temperature);
          that.setData({
            city: city,
            weather: weather + " " + temp + "°"
          })
        }
      
      }
    });
  },

  selectCity() {
    wx.navigateTo({
      url: '../../city/city',
    })
  },
  goKey() {
    wx.navigateTo({
      url: '../localkey/localkey',
    })
  },
  goWashCar() {
    wx.navigateTo({
      url: '../../car/washCar/washCar',
    })
  },
  goRecharge() {
    wx.navigateTo({
      url: '../../my/recharge/recharge',
    })
  },
  goPackage() {
    wx.navigateTo({
      url: '../../my/buyPackage/buyPackage',
    })
  },
  switchShop() {
    wx.navigateTo({
      url: '../switchShop/switchShop',
    })
  }


})