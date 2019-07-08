
Page({
  data: {
    selectItem:0
  },
  switchTab(e){
 this.setData({
   selectItem:e.currentTarget.dataset.id
 })
  }
  
})