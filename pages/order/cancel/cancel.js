import {
  cancelOrder
} from "../../request.js"
Page({
  data: {
    select: 0,
    reason: "",
    orderinfo: {}
  },
  onLoad(option) {
    let orderinfo = JSON.parse(option.orderinfo);
    this.setData({
      orderinfo: orderinfo
    })
  },

  selectReason(e) {
    let index = e.target.dataset.id;
    this.setData({
      select: index
    })
  },
  textareaAInput(e) {
    this.setData({
      reason: e.detail.value
    })
  },
  callphone() {
    wx.makePhoneCall({
      phoneNumber: '1340000'
    })
  },
  cancelOrder(orderId, cancelTags, reason) {
    cancelOrder({
      orderId,
      cancelTags,
      reason
    }).then((res) => {
      if (res.code == 200) {
        wx.showToast({
          title: '取消订单成功！',
        })
        setTimeout(() => {
          wx.navigateTo({
            url: '../submitOrder/submitOrder',
          })
        }, 2000)
      } else {
        wx.showToast({
          title: '取消订单失败！',
          icon: "none"
        })
      }
    })
  },
  submitCancel() {
    let {
      orderinfo,
      select,
      reason
    } = this.data;
    let cancelTags = "下错订单";
    switch (select) {
      case 1:
        cancelTags: "拍多了";
        break;
      case 2:
        cancelTags: "不需要";
        break;
      case 3:
        cancelTags: "切换其他技师";
        break;
    }
    this.cancelOrder(orderinfo.id, cancelTags, reason);
  }


})