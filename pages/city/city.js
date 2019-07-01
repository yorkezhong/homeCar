
let City = require('./allcity.js');
Page({
  data: {
    city: [],
    config: {
      horizontal: true,
      animation: true,
      search: true,
      searchHeight: 45,
      suctionTop: true,
      mycity: "深圳市",
      value:""
    }
  },
  onLoad: function () {
    let that = this;
    let latitude = wx.getStorageSync("latitude");
    let longitude = wx.getStorageSync("longitude");
    let gps = wx.getStorageSync("gps")
    that.getCity(gps.latitude, gps.longitude);
    that.setData({
      city: City
    })
  },
  getCity(longitude, latitude) {
    let that = this;
    var url = "https://api.map.baidu.com/telematics/v3/weather?location=" + latitude + "," + longitude + "&output=json&ak=EkvUn6X877ah3xNrtnKMu2Gxaiy8rPN7"; //接口请求和参数传递
    wx.request({
      url: url,
      success(res) {
        let city = res.data.results[0].currentCity;
        let weather = res.data.results[0].weather_data[0].weather;
        let temp = parseInt(res.data.results[0].weather_data[0].temperature);
        that.setData({
          mycity: city
        })
      }
    });
  },
  bindtap(e) {
    let latitude = e.detail.latitude;
    let longitude = e.detail.longitude;
    wx.setStorageSync("latitude", latitude)
    wx.setStorageSync("longitude", longitude)
    wx.navigateTo({
      url: '../home/switchShop/switchShop',
    })
  },

})