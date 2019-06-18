
Page({
  data: {
    city: "深圳市",
    weather: "",
  },
  onLoad: function (options) {
    let that = this;
    let latitude = wx.getStorageSync("latitude");
    let longitude = wx.getStorageSync("longitude")
    that.getCity(latitude, longitude)
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
          city: city,
          weather: weather + " " + temp + "°"
        })
      }
    });
  },

 
 
})