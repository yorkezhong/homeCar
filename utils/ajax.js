const baseUrl = "https://www.carwo.com.cn/car-api/api/";
const token = "";
const ajax = {
  request: function(action, method, data,token, successCb, errorCb) {
    token=token||""
    wx.request({
      url: baseUrl + action,
      method: method,
      data: data,
      header: {
        'token': token
      },
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