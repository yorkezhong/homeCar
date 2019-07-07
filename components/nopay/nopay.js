Component({
  properties: {
    nopayList: {
      type: Array,
      value:[]
    },
  },
  data: {
  orderinfoList:[]
  },

  methods: {
    cancelOrder() {
      let orderinfo = e.currentTarget.dataset.orderid;
      orderinfo = JSON.stringify(orderinfo)
      wx.navigateTo({
        url: '../../order/cancel/cancel?orderinfo=' + orderinfo,
      })
    },
   
  },
  lifetimes: {
    attached() {
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})