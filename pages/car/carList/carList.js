let City = require('./allCar.js');
Page({
  data: {
    city: [],
    config: {
      horizontal: true,
      animation: true,
      search: true,
      searchHeight: 45,
      suctionTop: true,
    }
  },
  onLoad: function() {
    let that = this;
    that.setData({
      city: City
    })
  },
  bindtap(e) {
    let carinfo=e.detail;
    carinfo=JSON.stringify(carinfo);
    wx.navigateTo({
      url: '../typeList/typeList?carinfo='+carinfo,
    })
  },

})