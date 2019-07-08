import {
  storeList,
  storeInfo,
  banner,
  lineNum,
  getCarBands,
  orderList
} from "../../../pages/request.js"
Page({
  data: {
    city: "深圳市",
    weather: "多云 28℃",
    mask: false,
    currtshop: {
      "id": 1000001,
      "name": "海岸城店",
      "number": 10001,
      "phone": "0755-12345678",
      "startTime": "00:00",
      "endTime": "24:00",
      "province": 110000,
      "city": 110200,
      "area": 110200,
      "address": "大厅",
      "lat": 113.93549,
      "lng": 22.51694,
      "status": 1,
      "createTime": 1555300462000,
      "updateTime": 1554818336000,
      "img": null,
    },
    banner: [],
    lineNum: 0,
    unlogin: false,
    orderingInfo: null

  },
  //当前门店信息
  storeInfo(storeId, token) {
    storeInfo({
      storeId
    }, token).then((res) => {
      console.log(res)
    })
  },
  //进行中的订单
  orderList(storeId, status, currentPage, pageSize) {
    orderList({
      storeId,
      status,
      currentPage,
      pageSize
    }).then((res) => {
      if (res.data.page.records.length == 0) {} else {
        this.setData({
          orderingInfo: res.data.page.records[0]
        })
      }

    })
  },
  lineNum(storeId, token) {
    lineNum({
      storeId
    }, token).then((res) => {
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
    let token = wx.getStorageSync("userAuth").token;
    if (Boolean(token) == true) {
      if (Boolean(currtshop) == true) {
        this.setData({
          currtshop: currtshop
        })
        this.storeInfo(currtshop.id, token)
        this.lineNum(currtshop.id, token);
        this.orderList(currtshop.id, 1, 1, 1);
      } else {
        this.shopList(longitude, latitude, token)
      }
    }
    that.getCity(latitude, longitude);
  },
  shopList(longitude, latitude, token) {
    storeList({
      lng: longitude,
      lat: latitude,
      page: 1,
      limit: 10
    }, token).then((res) => {
      this.setData({
        currtshop: res.data.list[0]
      })
      wx.setStorageSync("currtshop", res.data.list[0])
      this.storeInfo(this.data.currtshop.id, token);
      this.lineNum(this.data.currtshop.id, token)
    })
  },
  onLoad() {
    let that = this;
    wx.checkSession({
      success(res) {
        //登录状态有效
      },
      fail(err) {
        that.submitLogin()
      }
    })
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
  },
  submitLogin() {
    let that = this;
    wx.getUserInfo({
      success: res => {
        wx.setStorageSync("userinfo", res.userInfo);
        wx.showTabBar();
        that.setData({
          unlogin: false
        })
        wx.login({
          success(res) {
            if (res.code) {
              wx.request({
                url: 'https://www.carwo.com.cn/car-api/api/weixin/login',
                method: "POST",
                data: {
                  code: res.code,
                  userInfo: wx.getStorageInfoSync("userinfo")
                },
                success(res) {
                  new Promise((resolve, reject) => {
                    wx.setStorageSync("userAuth", {
                      openid: res.data.data.openid,
                      session_key: res.data.data.session_key,
                      token: res.data.data.token
                    })
                    let token = res.data.data.token
                    resolve({
                      token
                    });
                  }).then(({
                    token
                  }) => {
                    wx.getLocation({
                      type: 'wgs84',
                      success(res) {
                        const latitude = res.latitude
                        const longitude = res.longitude
                        wx.setStorageSync("gps", {
                          latitude,
                          longitude
                        })
                        that.shopList(longitude, latitude, token)
                        wx.setStorageSync("latitude", latitude);
                        wx.setStorageSync("longitude", longitude);
                        that.getCity(latitude, longitude);
                      }
                    })
                  })


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
        if (res.data.error) {
          return
        } else {
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
  },
  scanCode() {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  goOderDetail() {
    let {
      orderingInfo
    } = this.data;
    if (orderingInfo == null) {
    } else {
      orderingInfo = JSON.stringify(orderingInfo)
    }
    wx.navigateTo({
      url: '../../order/detail/detail?orderinfo=' + orderingInfo,
    })
  }


})