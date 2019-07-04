import { myCars, deleteCar} from "../../../pages/request.js"
Page({
  data: {
    
  },
  onLoad(){
    this.findAllCar();
    this.deleteCar("a8d5633f-a3bf-473f-9a04-8fe37f4f53c9")
  },
  addNewCar(){
    wx.navigateTo({
      url: '../addCar/addCar',
    })
  },
  deleteCar(carIds){
    deleteCar({ carIds}).then((res)=>{
   console.log(res)
    })
  },
  findAllCar(){
    myCars().then((res)=>{
      console.log(res)
    })
  },
  delCar(){
    wx.showModal({
      title: '移除提示',
      content: '你确定要移除本辆爱车吗？',
      success(res){
         console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })

  }

})