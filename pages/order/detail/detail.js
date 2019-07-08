Page({
  data: {
    orderinfo: null
  },
  onLoad(options) {
    let orderinfo = JSON.parse(options.orderinfo);
    this.setData({
      orderinfo:orderinfo
    })
  },

})