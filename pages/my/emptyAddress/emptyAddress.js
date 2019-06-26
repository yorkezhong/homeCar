
Page({
  data: {
    empty: false,
    defaultAddress: 0
  },
  selectAddress(e) {
    this.setData({
      defaultAddress: e.currentTarget.dataset.id
    })
  },
  
})