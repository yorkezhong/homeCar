const baseUrl = "http://120.78.53.79:8081/car-api/api/";
const token = "";
const ajax = {
  request: function(action, method, data, successCb, errorCb) {

    wx.request({
      url: baseUrl + action,
      method: method,
      data: data,
      // header: {
      //   'content-type': method == 'POST' ? 'application/json' : 'application/x-www-form-urlencoded',
      //   'Authorization': 'token'
      // },
      success(res) {
        successCb(res.data)
      },
      fail(err) {
        wx.showToast({
          title: '请求失败，请重试！',
          icon: "none",
          duration: 3000
        })
        errorCb(err)
      }
    })
  }
};
module.exports = ajax;