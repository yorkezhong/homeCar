
Component({
  properties: {

  },

  data: {

  },
  methods: {
    cancelOrder(){
      wx.navigateTo({
        url: '../../order/cancel/cancel',
      })
    }
  }
})
