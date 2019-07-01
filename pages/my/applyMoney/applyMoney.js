
Page({
  data: {
    searchKey: "",
    selectIndex: null,
    allselect: false,
    applyList: [{
      selected: false
    },
    {
      selected: false
    },
    {
      selected: false
    },
    {
      selected: false
    },


    ]

  },
  searchKey(e) {
    this.setData({
      searchKey: e.detail.value
    })
  },
  searchBtn() {
    console.log("搜索")
  },
  selectItem(e) {
    let string = "applyList[" + e.currentTarget.dataset.id + "].selected";
    console.log(string)
    this.setData({
      [string]: !this.data.applyList[e.currentTarget.dataset.id].selected
    })
  },

  allSelected() {
    this.setData({
      allselect: !this.data.allselect
    })
  },
  submitApply(){
    wx.navigateTo({
      url: '../invoiceSucc/invoiceSucc',
    })
  }

})