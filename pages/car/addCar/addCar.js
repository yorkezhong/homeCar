import { addCars, getDisplacement, getCarBands, getCarById} from "../../../pages/request.js"
Page({
  data: {
    selectIndex:0,
    showKeyboard: false, 
    plateNumber: '' ,
  },
  onLoad(){
    this.addCars("粤BK85464", 1, 197, "宝马","116i");
    this.getDisplacement(1,10);
    this.getCarBands();
    this.getCarById(197);
  },
  getCarById(brandId){
    getCarById({ brandId}).then((res)=>{
       console.log(res)
    })
  },
  addCars(carNumber, status, brandId, brandName, carModel){
    addCars({ carNumber , status, brandId, brandName, carModel}).then((res)=>{
      console.log(res)
    })
  },
  getDisplacement(page, limit){
    getDisplacement({ page, limit}).then((res)=>{
          console.log(res)
    })
  },
  getCarBands(){
    getCarBands().then((res)=>{
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