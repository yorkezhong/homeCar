import { addCars, getDisplacement} from "../../../pages/request.js"
Page({
  data: {
    selectIndex:0,
    showKeyboard: false, 
    plateNumber: '' ,
  },
  onLoad(){
    this.addCars("粤BK85464","奥迪","黑色","常规");
    this.getDisplacement(1,10)
  },
  addCars(number, brand, color, carType){
    addCars({ number, brand, color, carType}).then((res)=>{
      console.log(res)
    })
  },
  getDisplacement(page, limit){
    getDisplacement({ page, limit}).then((res)=>{
          console.log(res)
    })
  },
  selectType(e){
  let index=e.target.dataset.id;
  this.setData({
    selectIndex:index,
    plateNumber:""
  })
  },
  setNumber(e) {
    this.setData({
      plateNumber: e.detail.value
    })
  },
  handleFocus(e) {
    this.setData({
      showKeyboard: true
    })
  },
  submitAdd(){
    wx.showToast({
      title: '新增车辆成功',
    })
    setTimeout(()=>{
    wx.navigateBack({
      delta: 1
    })
    },2000)
  }
 
})