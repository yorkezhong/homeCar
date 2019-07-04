import { myCars} from "../../../pages/request.js"
Page({
  data: {
    
  },
  onLoad(){
    this.findAllCar();
  },
  addNewCar(){
    wx.navigateTo({
      url: '../addCar/addCar',
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