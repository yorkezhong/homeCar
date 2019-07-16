import { myCars, deleteCar} from "../../../pages/request.js"
Page({
  data: {
    userCarList:[],
    carIndex:0
  },
  onShow(){
    this.findAllCar();
  },
  addNewCar(){
    wx.navigateTo({
      url: '../addCar/addCar',
    })
  },
  deleteCar(carIds){
    deleteCar({ carIds}).then((res)=>{
        if(res.code==200){
          wx.showToast({
            title: '移除成功',
          })
          this.findAllCar();
        }else{
          wx.showToast({
            title: '移除失败',
            icon:"none"
          })
        }
    })
  },
  findAllCar(){
    myCars().then((res)=>{
     this.setData({
       userCarList:res.data
     })
    })
  },
  selectCar(e) {
    this.setData({
      carIndex: e.currentTarget.dataset.id
    })
  },
  delCar(e){
    let that=this;
    wx.showModal({
      title: '移除提示',
      content: '你确定要移除本辆爱车吗？',
      success(res){
        that.deleteCar(e.currentTarget.dataset.carid)
      },
      fail(err){
        console.log(err)
      }
    })

  }

})