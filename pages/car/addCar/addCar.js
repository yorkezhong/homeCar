
Page({
  data: {
    selectIndex:0,
    
  },
  selectType(e){
  let index=e.target.dataset.id;
  this.setData({
    selectIndex:index
  })
  },
  inputCarId1(e){
    console.log(e.detail.value)
  }

 
})